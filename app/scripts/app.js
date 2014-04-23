'use strict';

angular.module('angularDemoApp', [
    'ngRoute',
    'angularDemoApp.services',
    'angularDemoApp.controllers'
]).config(function ($routeProvider /*,$httpProvider*/) {
    $routeProvider.when('/dummy', {templateUrl: 'views/dummy.html', controller: 'DummyCtrl'});
    $routeProvider.when('/user-list', {templateUrl: 'views/user-list.html', controller: 'UserListCtrl'});
    $routeProvider.when('/user-detail/:id', {templateUrl: 'views/user-detail.html', controller: 'UserDetailCtrl'});
    $routeProvider.when('/user-creation', {templateUrl: 'views/user-creation.html', controller: 'UserCreationCtrl'});
    $routeProvider.otherwise({redirectTo: '/dummy'});

    /* CORS... */
    //$httpProvider.defaults.useXDomain = true;
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
});


    //.config(function ($routeProvider /*,$httpProvider*/) {
        //$routeProvider.when('/dummy', {templateUrl: 'views/dummy.html', controller: 'DummyCtrl'});
        //$routeProvider.when('/user-list', {templateUrl: 'views/user-list.html', controller: 'UserListCtrl'});
        //$routeProvider.when('/user-detail/:id', {templateUrl: 'views/user-detail.html', controller: 'UserDetailCtrl'});
        //$routeProvider.when('/user-creation', {templateUrl: 'views/user-creation.html', controller: 'UserCreationCtrl'});
        //$routeProvider.otherwise({redirectTo: '/dummy'});

        /* CORS... */
        //$httpProvider.defaults.useXDomain = true;
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    //});