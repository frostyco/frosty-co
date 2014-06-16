var frosty = angular.module("frosty", ["ngRoute"])
.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "partials/home.html",
    controller: "homeCtrl"
  });
})
.controller("homeCtrl", function($scope, $timeout, $route) {
  
});
