 
var app = angular.module("GRASSPApp",['ngRoute','firebase']);
// HOME 
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
// CAFE



// PARKING

