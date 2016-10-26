angular.module('routingApp', ['ngRoute'])
.config($routeProvider => {
  $routeProvider
    .when('/', {
      templateUrl: '../views/home.html',
      controller: 'HomeController',
    })
    .when('/dog', {
      templateUrl: '../views/dog.html',
      controller: 'DogController',
    })
    .when('/cat', {
      templateUrl: '../views/cat.html',
      controller: 'CatController',
    })
})
.controller('HomeController', ['$scope', HomeController])
.controller('DogController', ['$scope', DogController])
.controller('CatController', ['$scope', CatController])
