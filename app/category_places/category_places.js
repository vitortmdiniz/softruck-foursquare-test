'use strict';

angular.module('myApp.category_places', ['myApp.category_places_services'])



    .controller('categoryPlacesCtrl', ['$rootScope','$scope',  '$filter','categoryPlacesServices',function($rootScope,$scope, $filter,categoryPlacesServices) {

        $rootScope.$broadcast('initializingMap',null);

        $scope.venues = [];
        $scope.filtered_venues = []
        $scope.categories = [];

        categoryPlacesServices.getCategories().then(
            function(data) {
                $scope.categories = data.categories;
            }
        );

        $scope.isNaN = isNaN;

        $scope.data=
            {
                chosen_category: null,
                distance: null,
            }

        $scope.getPlacesByDistance = function()
        {
            categoryPlacesServices.getPlacesByDistance($scope.data.chosen_category.id,$rootScope.userPosition.lat + ','+ $rootScope.userPosition.lng).then(
                function(data)
                {
                    $scope.venues = data.venues;
                    $rootScope.$broadcast('sendVenuesToMap',$scope.venues);

                })
        }

        $scope.filterByDistance = function()
        {
            if(isNaN($scope.data.distance) || $scope.data.distance == '' )
                $rootScope.$broadcast('sendVenuesToMap', $scope.venues)
            else {
                $scope.filtered_venues = ($scope.venues.filter(function (venue) {
                    return venue.location.distance <= $scope.data.distance
                }))
                $rootScope.$broadcast('sendVenuesToMap',$scope.filtered_venues)
            }
        }






    }]);