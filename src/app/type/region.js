var entity = require('basis.entity');
var service = require('app.service');

//
// main part
//

var Region = entity.createType('Region', {
  id: entity.IntId,
  name: String
});

Region.all.setSyncAction(service.createAction({
  url: '/data/regions/all',
  success: function(data){
    data = JSON.parse(data);
    this.sync(basis.array(data).map(Region.reader));
  }
}));


//
// export names
//

module.exports = Region;
