var alc = angular.module('ALC');

alc.controller('StudentsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    // console.log('StudentsController Loaded....');

    $scope.getStudents = function() {
        $http.get('/api/students').success(function(response) {
            $scope.students = response;
        })
    }

    $scope.getStudent = function() {
        var id = $routeParams.id;
        $http.get('/api/students/' + id).success(function(response) {
            $scope.student = response;
        })
    }

    $scope.addStudent = function() {
        $http.get('/api/students/', $scope.student).success(function(response) {
            window.location.href = "#/students";
        })
    }
}])