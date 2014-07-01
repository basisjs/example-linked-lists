var Node = require('basis.ui').Node;
var Value = require('basis.data').Value;
var STATE = require('basis.data').STATE;
var Hotel = require('app.type').Hotel;

module.exports = new Node({
  active: true,
  dataSource: Value.factory('update', function(node){
    return Hotel.byRegion(node.data.id);
  }),

  template: resource('./template/list.tmpl'),
  binding: {
    hasRegion: {
      events: 'targetChanged',
      getter: function(node){
        return !!node.target;
      }
    },
    errorMsg: {
      events: 'childNodesStateChanged',
      getter: function(node){
        if (node.childNodesState == STATE.ERROR)
          var msg = node.childNodesState.data;
          return typeof msg == 'object' ? msg.msg : String(msg);
      }
    }
  },
  
  sorting: 'data.name',
  selection: true,
  childClass: {
    template: resource('./template/item.tmpl'),
    binding: {
      id: 'data:',
      title: 'data:name',
      modified: {
        events: 'targetChanged',
        getter: function(node){
          return node.target ? !!node.target.modified : false;
        }
      }
    },
    listen: {
      target: {
        rollbackUpdate: function(){
          this.updateBind('modified');
        }
      }
    }
  }
});
