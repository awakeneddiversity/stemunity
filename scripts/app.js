(function() {
  'use strict';

  angular.module('StemApp', [])

    .controller('SearchController', SearchController);

  SearchController.$inject = ['$scope'];

  function SearchController($scope) {
    // the input
    $scope.searchItem = '';
    // style object
    $scope.styleProp = {};

    // Check the meal intake input
    $scope.searchDB = function() {
      console.log($scope.searchItem);
    }
  };

})();
