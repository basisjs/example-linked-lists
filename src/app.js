require('basis.app');
require('basis.ui');
;;;require('basis.devpanel');

module.exports = basis.app.create({
  title: 'Test solution',

  init: function(){
  	var regions = require('./module/regions/index.js');
    var hotels = require('./module/hotels/index.js');
    var editor = require('./module/editor/index.js');
    var stat = require('./module/stat/index.js');

    hotels.setDelegate(basis.data.Value.from(regions.selection, 'itemsChanged', 'pick()'));
    editor.setDelegate(basis.data.Value.from(hotels.selection, 'itemsChanged', 'pick()'));

    return new basis.ui.Node({
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
