'use strict';

angular.module('myApp.heat_map', ['myApp.heat_map_services'])


    .controller('heatMapCtrl', ['$rootScope','$scope', 'heatMapServices', function($rootScope,$scope,heatMapServices) {
        $scope.data =
            {
                city: ''
            }

        $rootScope.$broadcast('initializingMap',null);


        $scope.createHeatMap = function()
        {
            $scope.venues.map((venue) =>{
                $scope.heatMapCoords.push([venue.location.lat,venue.location.lng])
                });
            $rootScope.$broadcast('sendHeatMapCoords',$scope.heatMapCoords);
        }

        $scope.search = function()
        {
             heatMapServices.getPlacesByName($scope.data.city).then(
                function(data){
                    $scope.venues = data.venues;
                    $scope.heatMapCoords = [];
                    $scope.createHeatMap();
                }
            );
        }

    }]);