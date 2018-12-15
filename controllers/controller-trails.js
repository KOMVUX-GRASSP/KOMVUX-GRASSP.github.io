var appTrails = angular.module("GRASSPAppT");

appTrails.controller('homeCtrl', ['$scope', function ($scope) {


}]);
appTrails.controller('hikingCtrl', function ($scope, $http, $location) {
    var url = "https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=leder&rows=65&facet=lednamn"
    $http.get(url)
        .then(function (data) {
            $scope.places = data.data.records;
        })
    $scope.map = function (name, coordinates) {
        $location.path('/hiking-result/' + name + '/' + coordinates)
    }
    $scope.hikingMap = function (x) {
        $location.path('/hikingMap/' + x)
    }
});
appTrails.controller('hikingResultCtrl', function ($scope, $sce, $http, $location, $routeParams) {
    console.log($routeParams.city)
    console.log($routeParams.coordinates)
    var coordinates = $routeParams.coordinates;
    console.log(typeof coordinates);
    var coord = coordinates.split(',');
    var coord = coord[1] + ',' + coord[0];
    console.log(coord);
    $scope.url = $sce.trustAsResourceUrl('https://helsingborg.opendatasoft.com/explore/embed/dataset/leder/map/?refine.lednamn=' + $routeParams.city + '&location=15,' + coord + '&basemap=jawg.streets&static=false&datasetcard=false&scrollWheelZoom=true"')
});
appTrails.controller('hikingMapCtrl', function ($scope, $sce, $http, $location, $routeParams) {
    $scope.url = $sce.trustAsResourceUrl('https://helsingborg.opendatasoft.com/explore/embed/dataset/leder/map/?rows=65&location=10,56.09118,12.73625&basemap=jawg.streets&static=false&datasetcard=false&scrollWheelZoom=true')
});
appTrails.controller('cyclePumpCtrl', function ($scope, $http) {
    var url = "https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=cykelpumpar"
    $http.get(url)
        .then(function (data) {
            $scope.places = data.data.records;
        })
});
appTrails.controller('wiFiCtrl', function ($scope, $http) {
    var url = "https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=wifi-punkter&rows=203"
    $http.get(url)
        .then(function (data) {
            $scope.places = data.data.records;
        })
});
