

var innocence = angular.module('innocence', ['ngMaterial']);
// .config(['$routeProvider',
//     function($routeProvider) {
//         $routeProvider.
//           when('/home', {
//             templateUrl: 'partials/home.html',
//             controller: 'HomeCtrl'
//           }).
//           otherwise({ redirectTo: '/home' });
//     }]);
innocence.controller('HomeCtrl', ['$scope', function ($scope) {
  $scope.header = "Have you ever read such a story?";
}]);







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