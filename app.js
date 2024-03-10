// app.js
(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = ''; 
        $scope.message = ''; 

        $scope.checkLunch = function () {
            var items = $scope.lunchItems.split(',');
            var itemCount = items.length;

            if (itemCount === 0) {
                $scope.message = 'Please enter data first.';
            } else if (itemCount <= 3) {
                $scope.message = 'Enjoy the meal!';
            } else {
                $scope.message = 'Too much food! Need sharing.';
            }
        };
    }
})();
