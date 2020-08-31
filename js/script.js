var app = angular.module('todo',['ngStorage']);

app.controller('myctrl',function($scope,$localStorage){
  $scope.tasks = [];
  
  if($localStorage.tasks!==undefined){
    $scope.tasks = $localStorage.tasks;
  }
 

  $scope.addTodo = function(task){
    
    if(task!==''){
      if($localStorage.tasks===undefined){
        $localStorage.tasks = [];
        $scope.tasks = $localStorage.tasks;
      }
      $localStorage.tasks.push(task);
      $scope.task = "";
    }
  }



  $scope.deleteTodo = function(x){
    var ele = $localStorage.tasks.indexOf(x);
    $localStorage.tasks.splice(ele,1);
    console.log($scope.tasks);
  }

});
