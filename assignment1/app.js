(function()
{
  'use strict';
  angular.module("FoodCounterApp",[])
  .controller("FoodCounterAppController",['$scope','$filter',FoodCounterAppController]);
  function FoodCounterAppController($scope,$filter)
  {
    console.log(FoodCounterAppController.toString());
    $scope.items="";
    $scope.foodItemsCount='0';
    $scope.message='';
    $scope.finalPrice=2.37;
    $scope.checkNumberOfItems=function()
    {
      var foodItems=$scope.items;
      var comma=',';
      var arrayOfFoodItems=foodItems.split(comma);
      console.log(arrayOfFoodItems);
      console.log('number of food items'+arrayOfFoodItems.length);
      $scope.foodItemsCount=arrayOfFoodItems.length;
      if($scope.foodItemsCount===1)
      {
        $scope.message='Please enter data first';
        console.log('Please enter data first');
      }
      else if($scope.foodItemsCount<=3 && $scope.foodItemsCount >0)
      {

        $scope.message='enjoy'
        var val=$scope.message;
        var finalMessage=$filter('uppercase')(val);
        console.log('enjoy');
        $scope.message=finalMessage;
      }
      else
      {
        $scope.message='too much!'
        console.log('too much!');

      }



    };

  }
})();
//!function(){"use strict";angular.module("FoodCounterApp",[]).controller("FoodCounterAppController",["$scope","$filter",function o(e,t){console.log(o.toString());e.items="prateek";e.foodItemsCount="0";e.message="";e.checkNumberOfItems=function(){var o=e.items,t=o.split(",");console.log(t),console.log("number of food items"+t.length),e.foodItemsCount=t.length,e.foodItemsCount<=3?(e.message="enjoy",console.log("enjoy")):(e.message="too much!",console.log("too much!"))}}])}();
