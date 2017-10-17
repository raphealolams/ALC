var alc = angular.module('ALC', ['ngRoute']);

alc.config(function($routeProvider) {
    $routeProvider.when('/', {
            controller: 'students',
            templateUrl: 'views/student.html'
        })
        .when('/students', {
            controller: 'students',
            templateUrl: 'views/student.html'
        })
        .when('/students/details/:id', {
            controller: 'students',
            templateUrl: 'views/studentDetails.html'
        })
        .when('/students/add', {
            controller: 'students',
            templateUrl: 'views/addStudent.html'
        })
        .when('/students/edit/:id', {
            controller: 'students',
            templateUrl: 'views/editStudent.html'
        })
        .otherwise({
            redirectTo: '/'
        })
})