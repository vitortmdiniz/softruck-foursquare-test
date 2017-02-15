'use strict';
angular.module('myApp.map', [])


    .controller('mapCtrl', ['$scope', '$rootScope', function($scope,$rootScope) {
        $scope.markers = [];
        $scope.userPosition =
            {
                lat:51.221723,
                lng: 17.25832,
                zoom: 15
            }
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(function(position){
                $scope.userPosition.lat = position.coords.latitude,
                    $scope.userPosition.lng = position.coords.longitude
                $scope.userPosition.zoom = 15;
            });
        }

        $scope.dataPoins = null;


        angular.extend($scope, {
            events: {
                map: {
                    enable: ['moveend', 'popupopen'],
                    logic: 'emit'
                },
                marker: {
                    enable: [],
                    logic: 'emit'
                }
            },
            layers: {
                baselayers: {
                    osm: {
                        name: 'OpenStreetMap',
                        type: 'xyz',
                        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    }
                },

            }
        });

        $rootScope.userPosition = $scope.userPosition;

        $scope.$on('initializingMap', function (event, venues) {
           $scope.dataPoints = [];
           $scope.markers = [];

        });


        $scope.$on('sendVenuesToMap', function (event, venues) {
            $scope.markers = addressPointsToMarkers(venues);
            $scope.layers.overlays =
                {
                    realworld: {
                        name: "Markers",
                        type: "group",
                        visible: true
                    },
                }
        });

        $scope.$on('sendHeatMapCoords', function (event, venues) {
            $scope.dataPoints = venues;
            console.log(venues);
            $scope.layers.overlays =
                {
                    heat:{
                        name: 'Heat Map',
                        type: 'heat',
                        visible: true,
                        layerOptions: {
                            radius: 20,
                            blur: 10
                        },
                        data: $scope.dataPoints,
                    }
                }

        });




    }]);