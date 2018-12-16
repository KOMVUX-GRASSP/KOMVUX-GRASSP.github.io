var app = angular.module("GRASSPApp");

app.controller('FirstController', ['$scope', '$firebaseAuth', function ($scope, $firebaseAuth) {
    console.log($firebaseAuth());
    $firebaseAuth().$onAuthStateChanged(function (user) {
        console.log(user);
        if (user) {
            $scope.user = user;
        } else {
            $scope.user = null;
        }
    })
}]);
//
app.controller('SignUpController', ['$scope', '$firebaseAuth', '$location', function ($scope, $firebaseAuth, $location) {
    $scope.signUp = function (user) {
        $firebaseAuth().$createUserWithEmailAndPassword(user.email, user.password)
            .then(function (fireUser) {
                if (fireUser) {
                    var theUser = firebase.auth().currentUser;
                    // console.log(theUser)
                    theUser.updateProfile({
                        displayName: user.username
                    })
                        .then(function () {
                            // if successful
                        })
                        .catch(function () {
                            // if error
                        });
                    firebase.database().ref('users/' + fireUser.uid).set({
                        username: user.username
                    });

                    $location.path('/');
                }
            })
            .catch(function (err) {
                $scope.error = err.message;
            })

    };
}]);

app.controller('LogInController', ['$scope', '$firebaseAuth', '$location', function ($scope, $firebaseAuth, $location) {
    $scope.login = function (user) {
        $firebaseAuth().$signInWithEmailAndPassword(user.email, user.password)
            .then(function (user) {
                $location.path('/');
            })
            .catch(function (err) {
                $scope.error = err.message;
            })
    };
}]);
    
app.controller('AuthCtrl', ['$scope', '$location', '$firebaseAuth','facebookService', function ($scope, $location, $firebaseAuth) {
    $firebaseAuth().$onAuthStateChanged(function (user) {
        if (user) {
            $scope.user = user;
        } else {
            $scope.user = null;
        }
    });
    $scope.signOut = function () {
        $firebaseAuth().$signOut();
        $location.path('/');
    }

  //facebook sign in function
    $scope.signInWithFacebook = function () {
        var auth = $firebaseAuth();
        //console.log(firebase);
        var provider = new firebase.auth.FacebookAuthProvider();
        auth.$signInWithPopup(provider)
      
        .then(function (result) {
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            $scope.userNameHome =user.displayName;
            console.log(user);
            // locatino chanage or something to do wit your app....
        })
        .catch(function (err) {
            console.log(err);
        })
    };

    //google sign in function
    $scope.signInWithGoogle = function () {
        var auth = $firebaseAuth();
        var provider = new firebase.auth.GoogleAuthProvider();
        
        $firebaseAuth().$signInWithPopup(provider)
      
        .then(function (result) {
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user.displayName);
            $scope.userNameHome =user.displayName;
          
            // locatino chanage or something to do wit your app....
        })
        .catch(function (err) {
            console.log(err);
            
        })
    };
}]);
//calling current weather information for displaying in main page
app.controller('getWeatherCtrl', ['$scope', 'weatherService', function ($scope, weatherService) {

    weatherService.weatherResult()
        .then(function (result) {
            $scope.weatherResult = result.data.main.temp;
            $scope.weatherResult_description = result.data.weather[0].description;
            /*$scope.weatherResult_icon = result.data.weather[0].icon;*/
        });
}]);

