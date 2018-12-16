   
var app = angular.module("GRASSPApp",['ngRoute','firebase']);
var cafeHelsingborg = angular.module("cafeApp",['ngRoute']);

app.run(function($rootScope) {
    $rootScope.userNameHome = '';
 });
 
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'templates/homess.html',
        controller:'FirstController',  
    })
    .when('/sign-up',{
        templateUrl:'templates/sign-up.html',
        controller:'SignUpController'
    })
    .when('/login',{
        templateUrl:'templates/login.html',
        controller:'LogInController'
    }) 
});

cafeHelsingborg.config(function($routeProvider){
    $routeProvider
    .when('/cafe',{
        templateUrl:'/cafe.html',
        controller:'cafeSearchCtrl'
    }) 
    .when('/cafes',{
        templateUrl:'templates/cafes.html',
        controller:'cafeServiceCtrl'
    })
    .when('/cafe-map/:coordinate_noBracket', {
        templateUrl: 'templates/cafeSearch-map.html',
        controller: 'cafeSearchMapCtrl'
    }) 
    .when('/restaurants_select', {
        templateUrl: 'templates/restaurants_select.html',
        controller: 'restaurantServiceCtrl'
    }) 
    .when('/restaurant-map/:coordinate_noBracket', {
        templateUrl:'templates/restaurant_search_map.html',
        controller: 'restaurantMapCtrl'
    });
});










