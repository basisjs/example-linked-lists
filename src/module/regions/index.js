var Node = require('basis.ui').Node;
var STATE = require('basis.data').STATE;
var Region = require('app.type').Region;

module.exports = new Node({
  dataSource: Region.all,
  active: true,

  template: resource('./template/list.tmpl'),
  binding: {
    errorMsg: {
      events: 'childNodesStateChanged',
      getter: function(node){
        if (node.childNodesState == STATE.ERROR)
        {
          var msg = node.childNodesState.data;
          return typeof msg == 'object' ? msg.msg : String(msg);
        }
      }
    }
  },
  
  sorting: 'data.name',
  selection: true,
  childClass: {
    template: resource('./template/item.tmpl'),
    binding: {
      name: 'data:'
    }
  }
});
