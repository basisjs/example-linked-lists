var Node = require('basis.ui').Node;

module.exports = new Node({
  template: resource('./template/view.tmpl'),
  binding: {
    name: 'data:',
    modified: {
      events: 'targetChanged',
      getter: function(node){
        return node.target ? !!node.target.modified : false;
      }
    },
    nonModified: {
      events: 'targetChanged',
      getter: function(node){
        return node.target ? !node.target.modified : true;
      }
    },
    hasHotel: {
      events: 'targetChanged',
      getter: function(node){
        return !!node.target;
      }
    }
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
  },
  listen: {
    target: {
      rollbackUpdate: function(){
        this.updateBind('modified');
        this.updateBind('nonModified');
      }
    }
  }
});
