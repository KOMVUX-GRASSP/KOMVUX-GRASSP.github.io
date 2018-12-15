var app = angular.module("GRASSPApp",['ngRoute']);

app.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'Activitytemplates/Activityhome.html',
        controller: 'activityhomeCtrl'
    })
    .when('/map/:place1/:cors', {
        templateUrl: 'Activitytemplates/Activitymap.html',
        controller: 'activitymapCtrl'
    })
});









