var Node = require('basis.ui').Node;
var Value = require('basis.data').Value;

module.exports = new Node({
  template: resource('./template/view.tmpl'),
  binding: {
    name: 'data:',
    noChanges: Value
      .factory('targetChanged', 'target')
      .pipe('rollbackUpdate', function(target){
        return target ? !target.modified : true;
      }),
    hasTarget: Value
      .factory('targetChanged', function(node){
        return Boolean(node.target);
      })
  },
  action: {
    change: function(event){
      if (this.target)
        this.target.update({ name: event.target.value }, true);
    },
    rollback: function(){
      if (this.target)
        this.target.rollback();
    }
  }
});
