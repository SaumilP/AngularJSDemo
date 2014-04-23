/**
 * Created by saumil on 2014/04/23.
 */
'use strict';

var services = angular.module('angularDemoApp.services', ['ngResource']);

var baseUrl = 'http://localhost\\:8080';

services.factory('DummyFactory', function ($resource) {
    return $resource(baseUrl + '/angulardemo/web/dummy', {}, {
        query: { method: 'GET', params: {} }
    })
});

services.factory('UsersFactory', function ($resource) {
    return $resource(baseUrl + '/angulardemo/web/users', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
});

services.factory('UserFactory', function ($resource) {
    return $resource(baseUrl + '/angulardemo/web/users/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});