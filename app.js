// (function()
// {
//   'use strict';
//   angular.module("DIApp",[])
//   .controller("DIAppController",['$scope','$filter',DIAppController]);
// function DIAppController($scope,$filter,$injector)
// {
//   console.log(DIAppController.toString());
// $scope.name="prateek";
// $scope.upper=function()
// {
//   var upCase=$filter('uppercase');
//   $scope.name=upCase($scope.name);
// };
//
// }
//
// })();
!function(){"use strict";angular.module("DIApp",[]).controller("DIAppController",["$scope","$filter",function e(n,o,r){console.log(e.toString());n.name="prateek";n.upper=function(){var e=o("uppercase");n.name=e(n.name)}}])}();
