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
  url: '/data/regions/all.json',
  success: function(data){
    this.setAndDestroyRemoved(Region.readList(data));
  }
}));


//
// export names
//

module.exports = Region;
