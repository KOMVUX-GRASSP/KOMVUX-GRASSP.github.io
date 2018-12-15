var app = angular.module("GRASSPApp");


app.service('weatherService', ['$http', function ($http) {
    var weatherData = {
        weatherResult: function () {
            var city = "helsingborg"
            var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=a6c98c5f1512ef700db17185202188c4&units=metric";
            return $http.get(url)
                .then(function (data) {
                    console.log(data)
                    return data;
                })
        }
    };
    return weatherData;
}]);

app.factory('facebookService', function($q) {
    return {
        getMyLastName: function() {
            var deferred = $q.defer();
            FB.api('/me', {
                fields: 'last_name'
            }, function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            });
            return deferred.promise;
        }
    }
});
