var alc = angular.module('ALC');

alc.controller('StudentsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log('StudentsController Loaded....');

    $scope.getStudents = function() {
        $http.get('/api/students').then(function(response) {
            $scope.students = response.data;
        });
    }

    $scope.getStudent = function() {
        var id = $routeParams.id;
        $http.get('/api/students/' + id).then(function(response) {
            $scope.student = response.data;
        });
    }

    $scope.addStudent = function() {
        $http.get('/api/students/', $scope.student).then(function(response) {
            window.location.href = "/students";
        });
    }
}])