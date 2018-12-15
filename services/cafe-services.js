var cafeHelsingborg = angular.module("cafeApp");
cafeHelsingborg.factory('cafeSearch',['$http', function ($http){
    var cafeSearchData = {
        cafeSearchResult: function () {
            var url =" https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=smileygodkanda-platser-i-helsingborg&rows=25&facet=kategori_text";
            return $http.get(url)
            .then(function (data){
                console.log(data)
                return data;
            })
        }
    };
    return cafeSearchData;
}]);
 
cafeHelsingborg.service('cafeService',['$http', function ($http) {
    var cafeData = {
        cafeResult: function () {
            var url= "https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=smileygodkanda-platser-i-helsingborg&rows=25&facet=kategori_text&refine.kategori_text=Caf%C3%A9";
            return $http.get(url)
            .then(function (data) {
            console.log(data)
            return data;
            })
        }
    };
    return cafeData;
}]);

cafeHelsingborg.service('restaurantService',['$http', function ($http) {
    var cafeData = {
        restaurantResult: function () {
            var url= "https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=smileygodkanda-platser-i-helsingborg&rows=14&facet=kategori_text&refine.kategori_text=Restaurang";
            return $http.get(url)
            .then(function (data) {
            console.log(data)
            return data;
            })
        }
    };
    return cafeData;
}]);