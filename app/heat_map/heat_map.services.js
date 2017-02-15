'use strict';

angular.module('myApp.heat_map_services',[])
    .service('heatMapServices', ['$http','myAppConstants',function($http,myAppConstants) {
        return {
            getPlacesByName: function(city) {
                //return the promise directly.
                return $http.get('https://api.foursquare.com/v2/venues/search',{
                    params: {near:city,v:myAppConstants.v,client_id:myAppConstants.client_id,client_secret:myAppConstants.client_secret,limit:100}
                })
                    .then(function(result) {
                        return result.data.response;
                    });
            },

        }
    }]);