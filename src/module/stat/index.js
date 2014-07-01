var Node = require('basis.ui').Node;
var Value = require('basis.data').Value;
var Filter = require('basis.data.dataset').Filter;
var Hotel = require('app.type').Hotel;

var changedHotels = new Filter({
	source: Hotel.all,
	ruleEvents: 'rollbackUpdate',
	rule: 'modified'
});

module.exports = new Node({
  template: resource('./template/view.tmpl'),
  binding: {
  	count: Value.from(changedHotels, 'itemsChanged', 'itemCount')
  }
});
