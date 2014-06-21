'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {
    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('aboutCtrl', function ($scope) {
    $scope.profiles = [
      {
        name: "Jeremy Meyer",
        avatar_url: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/t1.0-1/c49.30.378.378/s320x320/74194_10150286981329945_142847397_n.jpg",
        bio: "Jeremy is a full-stack developer, and has experience with Rails and Angular.js in addition to front-end design."
      },
      {
        name: "Conlin Durbin",
        avatar_url: "https://pbs.twimg.com/profile_images/472141821754093568/j4XHk71U_400x400.jpeg",
        bio: "Conlin is a full-stack developer, but his true calling is designing beautiful front-end experiences."
      },
      {
        name: "Mike Asem",
        avatar_url: "https://lh6.googleusercontent.com/-wduflD-Ar8Q/AAAAAAAAAAI/AAAAAAAAAAA/DxwByahqhFA/s128-c-k/photo.jpg",
        bio: "Mike has experience with front end development, but he truly excels at marketing and business development."
      },
      {
        name: "Chris MacPherson",
        avatar_url: "https://lh6.googleusercontent.com/-A3LwTrXjvR4/AAAAAAAAAAI/AAAAAAAAAAA/XabOnJGn12w/s128-c-k/photo.jpg",
        bio: "Chris is an outstanding front-end developer and graphic designer, but also has a wealth of experience with business development."
      }
    ];
  });
