(function()
{
  'use strict';
  angular.module("FoodCounterApp",[])
  .controller("FoodCounterAppController",['$scope','$filter',FoodCounterAppController]);
  function FoodCounterAppController($scope,$filter)
  {
    $scope.items="prateek";
    $scope.checkNumberOfItems=function()
    {

    };

  }
})();
