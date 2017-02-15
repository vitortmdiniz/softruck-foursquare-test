'use strict';

angular.module('myApp.category_places_services',[])
    .service('categoryPlacesServices', ['$http','myAppConstants',function($http,myAppConstants) {
        return {
            getCategories: function() {
                //return the promise directly.
                return $http.get('https://api.foursquare.com/v2/venues/categories',{
                    params: {v:myAppConstants.v,client_id:myAppConstants.client_id,client_secret:myAppConstants.client_secret}
                })
                    .then(function(result) {
                        return result.data.response;
                    });
            },

            getPlacesByDistance: function(categoryId,userPosition) {
                //return the promise directly.
                return $http.get('https://api.foursquare.com/v2/venues/search',{
                    params: {v:myAppConstants.v,client_id:myAppConstants.client_id,client_secret:myAppConstants.client_secret,ll:userPosition,categoryId:categoryId}
                })
                    .then(function(result) {
                        return result.data.response;
                    });
            }
        }
    }]);