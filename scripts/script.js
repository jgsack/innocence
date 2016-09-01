
"use strict";
    angular.module('app', ['ngRoute', 'ui.bootstrap'])
    .controller('HomeController', ['$scope', function ($scope) {
      $scope.header = "Life as a Realizer";
    }])
    .controller('ReviewsController', ['$scope', function ($scope) {      
    }])    
    .controller('NavController', ['$scope', '$location', function ($scope, $location) { 
       $scope.isActive = function (viewLocation) { 
        $scope.artselected = $location.path() === '/art' ? true : false
        return viewLocation === $location.path()
       }
       $scope.galleries = [{name: "latest gallery",
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
      $scope.slides = buildGallery("bio_pics/", 31) 
    }])    
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
              when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'HomeController'
              }).
              when('/reviews', {
                templateUrl: 'partials/reviews.html',
                controller: 'ReviewsController'
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
                controller: 'ReviewsController'
              }).
              when('/links', {
                templateUrl: 'partials/links.html',
                controller: 'LinksController'
              }).
              otherwise({ redirectTo: '/home' });
    }]);

    function buildGallery(id, count) {
        var path = "art/art" + id + "/art"
        if (id === "bio_pics/") { path = id }  //the one exception
        var slides = []
       for (var x = 1; x <= count; x++){
        var img = {}
        img.image = path + x + ".jpg"
        slides.push(img)        
       }
       return slides
    }    
// var innocence = angular.module('innocence', ['ngRoute'])
// .config(['$routeProvider',
//     function($routeProvider) {
//         $routeProvider.
//           when('/home', {
//             templateUrl: 'partials/home.html',
//             controller: 'HomeCtrl'
//           }).
//           otherwise({ redirectTo: '/home' });
//     }]);
// innocence.controller('HomeCtrl', ['$scope', function ($scope) {
//   $scope.header = "Have you ever read such a story?";
// }]);



























/*



//**************************************************OLD

document.write('<style type="text/css">body{display:none}</style>');
(function ($) {
    // VERTICALLY ALIGN FUNCTION
    $.fn.vAlign = function () {
        return this.each(function (i) {
            var ah = $(this).height();
            var wh = $(window).height();
            if (wh > 620) {
                var mh = (wh - ah) / 2;
                $(this).css('margin-top', mh);
            }
        });
    };
})(jQuery);

$(document).ready(function () {
    $('#art').hide();
    $('body').css('display', 'block'); //avoiding flickering
    $(".accordion").accordion({
        //  active: false,
        fillSpace: true
    });

    $("a.preview").click(function () {
        $('div.myImage').dialog({ width: 810,
        height: 570 });
    });

    var tabContainers = $('div.tabs > div');
    $('div.tabs ul.tabNavigation a').click(function () {
        tabContainers.hide().filter(this.hash)
                .show();
        //.fadeIn(300);

        $('div.tabs ul.tabNavigation a').removeClass('selected');
        $(this).addClass('selected');

        return false;
    }).filter(':first').click();

    //vertically align page at start and when window is resized
    $("#page").vAlign();
    $(window).resize(function () {
        $("#page").vAlign();
    });

    var loaded = false;
    $('#galleryLink').click(function () {
        if (!loaded) {
            $('#galleryframe').attr('src', 'gallery.htm');
            loaded = true;
        }
    });
    $('#artLink').click(function () {
        //$('#art').html('<img id="gohome" src="Art/Home.png" /><iframe id="artframe" src=art.htm height="800px" width="100%" frameborder="0"></iframe>');
        //$('#artframe').attr('src', 'art.htm');
        $('#page').hide();
        $('#art').show();
        // $('#page').css('width', '100%');
        // $('.tabs > div ').css('background-image', 'none');
    });

    $('#gohome').click(function () {        //show page and get rid of art            
        $('#art').hide();
        $('#page').show();
        $('#homea').trigger('click');
    });

    $('#paperback').click(function () {
        $('#getbook').click();
    });

});   
    */