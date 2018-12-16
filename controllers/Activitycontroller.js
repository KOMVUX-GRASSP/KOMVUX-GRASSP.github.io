var app = angular.module("GRASSPApp");

app.controller('activityhomeCtrl', function ($scope, $http,$location) {
    $scope.show = function () {
        $scope.searchComplete = false;
        var name = $scope.categori;
        // console.log(name);
        var url = 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=anlaggningar0&rows=97';
        $http.get(url)
            .then(function (response) {

                // console.log(response.data.records);
                $scope.result = [];
                var string1 = " ";
                for (var i = 0; i < response.data.records.length; i++) {
                    if (response.data.records[i].fields.kategori === name) {
                        var string1 = " ";
                         string1=(response.data.records[i].fields.geo_point_2d).toString();
                        string1 = string1.replace(/[\(\)]/,'').split(',');

                        var long=string1[0];
                        long= long*100000;
                        long=Math.trunc(long);
                        long=long/100000;
                       // console.log(long);
                        //long= long.toFixed(5);
                        var lat=string1[1];
                       // lat= lat.toFixed(5);
                       lat= lat*100000;
                       lat=Math.trunc(lat);
                       lat=lat/100000;
                        var loc= long+','+lat;
                       //console.log(loc);

                        $scope.result.push({
                            
                               place: response.data.records[i].fields.objektnamn,
                               address: response.data.records[i].fields.adress,
                               coordinates:loc
                            //    coordinates2:lat
                             
                        });
                    }

                    $scope.length=$scope.result.length;
                    $scope.searchComplete = true;
                    // for(var j=0;j<=$scope.result.length;j++){
                    // console.log($scope.result[j].coordinates);}
                }
            })
            .catch(function (err) {
               // console.log(err);
            })
     
            $scope.display_map = function(place1,cors){
               
                $location.path('/map/' + place1 + '/' + cors );
                // window.open(`templates/map.html?place=${place1}&cors=${cors},"width=400,height=400`)
            }

    }
});

app.controller("activitymapCtrl", ["$scope",'$routeParams','$sce', function ($scope,$routeParams,$sce) {

    var place1 = $routeParams.place1;
    var cors =$routeParams.cors;
     $scope.url=$sce.trustAsResourceUrl('https://helsingborg.opendatasoft.com/explore/embed/dataset/anlaggningar0/map/?disjunctive.kategori&rows=97&refine.objektnamn='+place1+'%20IP&location=11,'+cors+'&basemap=jawg.streets&static=false&datasetcard=false&scrollWheelZoom=false"');
 }]);



























































































