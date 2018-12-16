var app = angular.module("GRASSPApp", ["ngRoute"]);
app.config(function($routeProvider){
$routeProvider
.when("/", {
    templateUrl: 'hikingTemplates/Hikinghome.html',
    controller: 'homeCtrl'
})
.when("/hiking", {
    templateUrl: 'hikingTemplates/hiking.html',
    controller: 'hikingCtrl'
})
.when("/hiking-result/:city/:coordinates", {
    templateUrl: 'hikingTemplates/hiking-result.html',
    controller: 'hikingResultCtrl'
})
.when("/hikingMap/:karta", {
    templateUrl: 'hikingTemplates/hikingMap.html',
    controller: 'hikingMapCtrl'
})
.when("/cyclePump", {
    templateUrl: 'hikingTemplates/cyclePump.html',
    controller: 'cyclePumpCtrl'
})
.when("/wiFi", {
    templateUrl: 'hikingTemplates/wiFi.html',
    controller: 'wiFiCtrl'
});
});