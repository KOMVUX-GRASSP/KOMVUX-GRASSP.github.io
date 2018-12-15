var cafeHelsingborg = angular.module("cafeApp",['ngRoute']);
cafeHelsingborg.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'templatesCafe/cafe.html',
        controller: 'cafeSearchCtrl'
    })
    .when('/cafes',{
        templateUrl:'templatesCafe/cafes.html',
        controller:'cafeServiceCtrl'
    })
    .when('/cafe-map/:coordinate_noBracket', {
        templateUrl: 'templatesCafe/cafeSearch-map.html',
        controller: 'cafeSearchMapCtrl'
    }) 
    .when('/restaurants_select', {
        templateUrl: 'templatesCafe/restaurants_select.html',
        controller: 'restaurantServiceCtrl'
    }) 
    .when('/restaurant-map/:coordinate_noBracket', {
        templateUrl:'templatesCafe/restaurant_search_map.html',
        controller: 'restaurantMapCtrl'
    });
});