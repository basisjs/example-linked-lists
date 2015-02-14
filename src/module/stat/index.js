var Node = require('basis.ui').Node;
var count = require('basis.data.index').count;
var Hotel = require('app.type').Hotel;

module.exports = new Node({
  template: resource('./template/view.tmpl'),
  binding: {
    count: count(Hotel.all, 'rollbackUpdate', 'modified')
  }
});
