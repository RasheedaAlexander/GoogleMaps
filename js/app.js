//Angular App Module and Controller
          var sampleApp = angular.module('mapsApp', []);
          sampleApp.controller('MapCtrl', function ($scope) {

              var mapOptions = {
                  zoom: 12,
                  center: new google.maps.LatLng(38.9072,-77.0369),

                  mapTypeId: google.maps.MapTypeId.ROADMAP

              }

              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

              $scope.markers = [];

              // marker.options: {
              //   icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
              //   }

              var infoWindow = new google.maps.InfoWindow();

              var createMarker = function (info){

                  var image = 'icon/map icon small.png'

                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.lat, info.lng),
                      title: info.name,
                      picture: info.img_url,
                      icon: image
                  });
                  marker.content = '<div class="infoWindowContent">' + info.description + '</div>';
                  marker.img_url = '<img class="maps_img" src="' + info.img_url + '">';



                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.img_url + marker.content);
                      infoWindow.open($scope.map, marker);
                  });

                  $scope.markers.push(marker);

              }

              for (i = 0; i < data.length; i++){
                  createMarker(data[i]);
              }

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }

          });
