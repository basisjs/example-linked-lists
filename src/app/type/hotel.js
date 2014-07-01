var entity = require('basis.entity');
var service = require('app.service');

//
// main part
//

var Hotel = entity.createType('Hotel', {
  id: entity.IntId,
  name: String
});

Hotel.byRegion = (function(){
  var Hotels = basis.data.Dataset.subclass({
    syncAction: service.createAction({
      url: '/data/hotels/_region_id=:regionId',
      request: function(){
        return {
          routerParams: {
            regionId: this.regionId
          }
        }
      },
      success: function(data){
        data = JSON.parse(data);
        this.sync(basis.array(data).map(Hotel.reader).map(Hotel));
      }
    })
  });

  var hotelsMap = new basis.data.KeyObjectMap({
    create: function(regionId){
      return new Hotels({
        regionId: regionId
      });
    }
  });

  return function(regionId){
    if (typeof regionId == 'number')
      return hotelsMap.resolve(regionId);
  }
})();


//
// export names
//

module.exports = Hotel;
