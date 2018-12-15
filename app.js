   
var app = angular.module("GRASSPApp",['ngRoute','firebase']);
var cafeHelsingborg = angular.module("cafeApp",['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templatesUrl:'templates/homess.html',
        controller:'FirstController',  
    })
    .when('/sign-up',{
        templatesUrl:'templates/sign-up.html',
        controller:'SignUpController'
    })
    .when('/login',{
        templatesUrl:'templates/login.html',
        controller:'LogInController'
    }) 
});

cafeHelsingborg.config(function($routeProvider){
    $routeProvider
    .when('/cafe',{
        templatesUrl:'/cafe.html',
        controller:'cafeSearchCtrl'
    }) 
    .when('/cafes',{
        templatesUrl:'templates/cafes.html',
        controller:'cafeServiceCtrl'
    })
    .when('/cafe-map/:coordinate_noBracket', {
        templatesUrl: 'templates/cafeSearch-map.html',
        controller: 'cafeSearchMapCtrl'
    }) 
    .when('/restaurants_select', {
        templatesUrl: 'templates/restaurants_select.html',
        controller: 'restaurantServiceCtrl'
    }) 
    .when('/restaurant-map/:coordinate_noBracket', {
        templatesUrl:'templates/restaurant_search_map.html',
        controller: 'restaurantMapCtrl'
    });
});








