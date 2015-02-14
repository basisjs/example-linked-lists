var Node = require('basis.ui').Node;
var Value = require('basis.data').Value;
/** @cut */ require('basis.devpanel');

module.exports = require('basis.app').create({
  title: 'Linked list app example',

  init: function(){
    var regions = require('./module/regions/index.js');
    var hotels = require('./module/hotels/index.js');
    var editor = require('./module/editor/index.js');
    var stat = require('./module/stat/index.js');

    hotels.setDelegate(Value.from(regions.selection, 'itemsChanged', 'pick()'));
    editor.setDelegate(Value.from(hotels.selection, 'itemsChanged', 'pick()'));

    return new Node({
      template: resource('./app/template/layout.tmpl'),
      binding: {
        regions: regions,
        hotels: hotels,
        editor: editor,
        stat: stat
      }
    });
  }
});
