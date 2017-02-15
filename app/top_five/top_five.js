'use strict';

angular.module('myApp.top_five', ['myApp.top_five_services'])


    .controller('topFiveCtrl', ['$rootScope','$scope','$filter','topFiveServices',function($rootScope,$scope,$filter,topFiveServices) {
       // $rootScope.$broadcast('removeVenuesFromMap');
        $scope.getPlaces = topFiveServices.getPlaces($rootScope.userPosition.lat + ','+ $rootScope.userPosition.lng).then(
            function(data)
            {
                $scope.filterVenues(data.venues);
            });

        $scope.filterVenues = function(venues)
        {
            $rootScope.$broadcast('sendVenuesToMap',(($filter('orderBy')(venues,'stats.checkinsCount',true)).slice(0,5)))

        }


    }]);