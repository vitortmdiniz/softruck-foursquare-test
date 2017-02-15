'use strict';

angular.module('myApp.top_five_services',[])
    .service('topFiveServices', ['$http','myAppConstants',function($http,myAppConstants) {
        return {
            getPlaces: function(userPosition) {
                //return the promise directly.
                return $http.get('https://api.foursquare.com/v2/venues/search',{
                    params: {v:myAppConstants.v,client_id:myAppConstants.client_id,client_secret:myAppConstants.client_secret,ll:userPosition}
                })
                    .then(function(result) {
                        return result.data.response;
                    });
            },

        }
    }]);