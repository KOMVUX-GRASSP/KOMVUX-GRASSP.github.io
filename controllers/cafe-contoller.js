var cafeHelsingborg = angular.module("cafeApp");

cafeHelsingborg.controller('cafeSearchCtrl',['$scope','cafeSearch', function ($scope,cafeSearch){
    cafeSearch.cafeSearchResult()
    .then(function (result){
        console.log(result);
    })
}]);
//displaying data after calling api of cafe if selected from drop down menu 
cafeHelsingborg.controller('cafeServiceCtrl',['$scope','cafeService','$location','$sce',function ($scope,cafeService,$location,$sce) {
   
    cafeService.cafeResult()
    .then(function (output){
        var  array=output.data.records;
        $scope.outputArray = array;
       $scope.cafeMaps = function(selectedNamn) {
        var coordinates=selectedNamn;
        console.log(coordinates)
        var coordinate_noBracket= coordinates[0]
        var coordinates_second= coordinates[1];
        console.log(coordinate_noBracket,coordinates_second)
      
        var url=$sce.trustAsResourceUrl("https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=smileygodkanda-platser-i-helsingborg&rows=25&facet=kategori_text&refine.kategori_text=Caf%C3%A9&geofilter.distance="+coordinate_noBracket+","+coordinates_second);
        $location.path('/cafe-map/'+coordinate_noBracket+ ',' +coordinates_second);
    };
    });
}]);
//map diaplay of cafe after passing coordinates and location value along with location zoom level no services made directly from one controller to another controller value is passed
cafeHelsingborg .controller('cafeSearchMapCtrl',['$scope','$routeParams','$sce',function ($scope,$routeParams,$sce) {
        var coordinate =$routeParams.coordinate_noBracket;
    console.log(coordinate)
    $scope.url=$sce.trustAsResourceUrl("https://helsingborg.opendatasoft.com/explore/embed/dataset/smileygodkanda-platser-i-helsingborg/map/?geofilter.distance=" + coordinate + "&location=17," + coordinate + "&basemap=jawg.light&static=false&datasetcard=false&scrollWheelZoom=true");
    //$scope.url=$sce.trustAsResourceUrl("https://helsingborg.opendatasoft.com/explore/embed/dataset/leder/map/?rows=65&location=10,56.09118,12.73625&basemap=jawg.streets&static=false&datasetcard=false&scrollWheelZoom=true");
}]);

//displaying data after calling api of restaurant if selected from drop down menu 
cafeHelsingborg.controller('restaurantServiceCtrl',['$scope','restaurantService','$location','$sce',function ($scope,restaurantService,$location,$sce) {
   
        restaurantService.restaurantResult()
        .then(function (output){
            var  array=output.data.records;
            $scope.outputArray = array;
           $scope.cafeMaps = function(selectedNamn) {
            var coordinates=selectedNamn;
            console.log(coordinates)
            var coordinate_noBracket= coordinates[0]
            var coordinates_second= coordinates[1];
            console.log(coordinate_noBracket,coordinates_second)
            var url=$sce.trustAsResourceUrl(" https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=smileygodkanda-platser-i-helsingborg&rows=14&facet=kategori_text&refine.kategori_text=Restaurang&geofilter.distance="+coordinate_noBracket+","+coordinates_second);
            $location.path('/restaurant-map/'+coordinate_noBracket+ ',' +coordinates_second);
        };
        });
}]);

//displaying restaurant location on map 
cafeHelsingborg.controller('restaurantMapCtrl',['$scope','$routeParams','$sce',function ($scope,$routeParams,$sce) {
        var coordinate=$routeParams.coordinate_noBracket; 
        console.log(coordinate)
        $scope.url=$sce.trustAsResourceUrl("https://helsingborg.opendatasoft.com/explore/embed/dataset/smileygodkanda-platser-i-helsingborg/map/?rows=14&geofilter.distance=" + coordinate + "&refine.kategori_text=Restaurang&location=17," + coordinate + "&basemap=jawg.light&static=false&datasetcard=false&scrollWheelZoom=true")

}]);