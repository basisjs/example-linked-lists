var entity = require('basis.entity');
var service = require('app.service');
var KeyObjectMap = require('basis.data').KeyObjectMap;
var Dataset = require('basis.data').Dataset;

//
// main part
//

var Hotel = entity.createType('Hotel', {
  id: entity.IntId,
  name: String
});

Hotel.byRegion = (function(){
  var Hotels = Dataset.subclass({
    syncAction: service.createAction({
      url: '/data/hotels/region_:regionId.json',
      request: function(){
        return {
          routerParams: {
            regionId: this.regionId
          }
        }
      },
      success: function(data){
        this.setAndDestroyRemoved(Hotel.readList(data));
      }
    })
  });

  var hotelsMap = new KeyObjectMap({
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
