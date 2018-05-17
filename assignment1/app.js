(function()
{
  'use strict';
  angular.module("FoodCounterApp",[])
  .controller("FoodCounterAppController",['$scope','$filter',FoodCounterAppController]);
  function FoodCounterAppController($scope,$filter)
  {
    console.log(FoodCounterAppController.toString());
    $scope.items="prateek";
    $scope.foodItemsCount='0';
    $scope.message='';
    $scope.checkNumberOfItems=function()
    {
      var foodItems=$scope.items;
      var comma=',';
      var arrayOfFoodItems=foodItems.split(comma);
      console.log(arrayOfFoodItems);
      console.log('number of food items'+arrayOfFoodItems.length);
      $scope.foodItemsCount=arrayOfFoodItems.length;
      if($scope.foodItemsCount<=3)
      {

        $scope.message='enjoy'
        console.log('enjoy');
      }
      else
      {
        $scope.message='too much!'
        console.log('too much!');

      }



    };

  }
})();
