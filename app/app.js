'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'myApp.map',
    'myApp.category_places',
    'myApp.heat_map',
    'myApp.top_five',
    'leaflet-directive'
])
    .constant('myAppConstants',{v:'20170211',client_id:'G1BTSNPFVAK5WNQBJMGEP5JDG3KBQHSJWW1BVBZNJJFIMCKV', client_secret:'2OPTE24H3DQXEMTVIOQVFTBN1XXB4GEUBOVTBOIWNPE2LUES'})
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/map');

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('map', {
                url: '/map',
                templateUrl: '/map/map.html',
                controller: 'mapCtrl'
            })

            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('map.category_places', {
                url: '/category_places',
                templateUrl:'/category_places/category_places.html',
                controller: 'categoryPlacesCtrl'
            })

            .state('map.heat_map', {
                url: '/heat_map',
                templateUrl:'/heat_map/heat_map.html',
                controller: 'heatMapCtrl'
            })
            .state('map.top_five', {
                url: '/top_five',
                templateUrl:'/top_five/top_five.html',
                controller: 'topFiveCtrl'
            })
    })



