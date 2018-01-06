;(function () {
    'use strict';

    var processSt = window.location.hostname === 'localhost',
        url = 'https://upload.wistia.com/?access_token=8d6fde0bb795b6c52738869000fd3c3414cd8ac130057c4e6cdd8a7d4e49c277';
        // : 'server/php/

    angular.module('nsaApp', [
        'blueimp.fileupload'
    ])
        .config([
            '$httpProvider', 'fileUploadProvider',
            function ($httpProvider, fileUploadProvider) {
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
                fileUploadProvider.defaults.redirect = window.location.href.replace(
                    /\/[^\/]*$/,
                    '/cors/result.html?%s'
                );
                //console.log('is on github');
                if (processSt) {
                    //settings:
                    angular.extend(fileUploadProvider.defaults, {
                        //maxFileSize: 999000,//max size 99 kb
                        //acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i // images select only
                    });
                }
            }
        ])

        .controller('DemoFileUploadController', [
            '$scope', '$http', '$filter', '$window',
            function ($scope, $http) {
                $scope.options = {
                    url: url
                };
            }
        ]);

}());