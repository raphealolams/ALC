var alc = angular.module('ALC', ['ngRoute']);

alc.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
            controller: 'StudentsController',
            templateUrl: 'views/student.html'
        })
        .when('/students', {
            controller: 'StudentsController',
            templateUrl: 'views/student.html'
        })
        .when('/students/details/:id', {
            controller: 'StudentsController',
            templateUrl: 'studentDetails.html'
        })
        .when('/students/add', {
            controller: 'StudentsController',
            templateUrl: 'views/addStudent.html'
        })
        .when('/students/edit/:id', {
            controller: 'StudentsController',
            templateUrl: 'views/editStudent.html'
        })
        .otherwise({
            redirectTo: '/'
        })

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
})