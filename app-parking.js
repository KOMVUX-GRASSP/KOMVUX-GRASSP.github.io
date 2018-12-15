var app = angular.module('GRASSPApp',['ngRoute']);

app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'parkTemplates/home.html',
        controller: 'ParkingHomeCtrl'
    })
    .when('/find-geo',{
        templateUrl: 'parkTemplates/homegeo.html',
        controller: 'ParkingGeoMapCtrl'
    })
    .when('/find-locality', {
        templateUrl: 'parkTemplates/homelocality.html',
        controller: 'ParkingHomeLocalityCtrl'
    })
    .when('/find-locality-parking/:locality', {
        templateUrl: 'parkTemplates/showparking.html',
        controller: 'ParkingLocalityCtrl'
    })
    .when('/find-parking', {
        templateUrl: 'parkTemplates/findparking.html',
        controller: 'ParkingSearchCtrl'
    })
    .when('/show-parking-All', {
        templateUrl: 'parkTemplates/showparkingall.html',
        controller: 'ParkingAllMapCtrl'
    })
});





