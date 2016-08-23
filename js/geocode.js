geocoder = new google.maps.Geocoder();

window.getCoordinates = function(address, callback){
  var coodinates;
  geocoder.geocode({ address: address }, function (results, status) {
    coords_obj = results[0].geometry.location;
    coordinates = [coords_obj.lat(), coords_obj.lng()]
    callback(coordinates);
  })
}
//call function using window.getCoordinates('***ADDRESS***', function(coordinates){console.log(coordinates) })
//done by nelley :)
