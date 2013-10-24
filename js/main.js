require.config({
    paths: {
        'angular'       : 'libs/angular',
        'jquery'        : 'libs/jquery-1.8.3.min',
        'ngInfinite'    : 'libs/ng-infinite-scroll'
    },
    baseUrl: '/js',
    shim: {
        'angular'       : {'exports' : 'angular'},
        'jquery'        : {'exports' : '$'},
        'ngInfinite'    : {'deps' : ['jquery', 'angular']}
    },
    priority: [
        'jquery',
        'angular'
    ]
});

require( [
    'angular',
    'app'
], function(angular, app) {
    'use strict';
    angular.bootstrap(document, [app.name]);
});