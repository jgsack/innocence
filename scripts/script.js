
"use strict";
    angular.module('app', ['ngRoute', 'ui.bootstrap'])
    .controller('HomeController', ['$scope', function ($scope) {
      $scope.header = "Life as a Realizer";
    }])
    .controller('SchoolController', ['$scope', function ($scope) {      
    }]) 
    .controller('VideoController', ['$scope', function ($scope) {      
    }])  
    .controller('StoriesController', ['$scope', function ($scope) {      
    }])  
    .controller('WithController', ['$scope', function ($scope) {      
    }])    
    .controller('NavController', ['$scope', '$location', function ($scope, $location) { 
       $scope.isActive = function (viewLocation) { 
        $scope.artselected = $location.path() === '/art' ? true : false
        return viewLocation === $location.path()
       }
       $scope.galleries = [{name: "latest gallery",
                             id: 12,
                             count: 41
                            },   
                            {name: "gallery 11",
                             id: 11,
                             count: 8
                            },
                            {name: "gallery 10",
                             id: 10,
                             count: 7
                            },
                            {name: "gallery 9",
                             id: 9,
                             count: 8
                            },
                            {name: "gallery 8",
                             id: 8,
                             count: 8
                            },
                            {name: "gallery 7",
                             id: 7,
                             count: 8
                            },
                            {name: "gallery 6",
                             id: 6,
                             count: 7
                            },
                            {name: "gallery 5",
                             id: 5,
                             count: 15
                            }]
       $scope.selected_gallery = $scope.galleries[0]
       $scope.slides = buildGallery($scope.selected_gallery.id, $scope.selected_gallery.count) 
       $scope.change_gallery = function() {
         $scope.slides = buildGallery($scope.selected_gallery.id, $scope.selected_gallery.count)
       }  
    }])
    .controller('AdiDaController', ['$scope', function ($scope) {      
    }])
    .controller('ArtController', ['$scope', function ($scope) {                             
    }])    
    .controller('Bio_PicsController', ['$scope', function ($scope) {
      $scope.slides = buildGallery("bio_pics/", 20) 
    }])    
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
              when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'HomeController'
              }).
              when('/school', {
                templateUrl: 'partials/school.html',
                controller: 'SchoolController'
              }).
              when('/book', {
                templateUrl: 'partials/freebook.html',
                controller: 'BookController'
              }).
              when('/video', {
                templateUrl: 'partials/video.html',
                controller: 'VideoController'
              }).
              when('/art', {
                templateUrl: 'partials/art.html',
                controller: 'ArtController'
              }).
              when('/bio_pics', {
                templateUrl: 'partials/bio_pics.html',
                controller: 'Bio_PicsController'
              }).
              when('/stories', {
                templateUrl: 'partials/stories.html',
                controller: 'StoriesController'
              }).
              when('/adi_da', {
                templateUrl: 'partials/adida.html',
                controller: 'AdiDaController'
              }).
              when('/contact', {
                templateUrl: 'partials/contact.html',
                controller: 'ContactController'
              }).              
              when('/with', {
                templateUrl: 'partials/with.html',
                controller: 'WithController'
              }).
              when('/links', {
                templateUrl: 'partials/links.html',
                controller: 'LinksController'
              }).
              otherwise({ redirectTo: '/home' });
    }]);

    function buildGallery(id, count) {
        var path = "art/Art" + id + "/art"
        if (id === "bio_pics/") { path = id }  //the one exception
        var slides = []
        for (var x = 1; x <= count; x++){
        var img = {}
        if (id === "bio_pics/") { 
          var adj = 11 + x
          img.image = path + adj + ".jpg"
        }
        else{
          img.image = path + x + ".jpg"
        }        
        slides.push(img)        
       }
       return slides
    }    




















