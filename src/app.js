// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-route';
//import 'angular-aria';
//import 'angular-material';

import $ from 'jquery';
import 'jquery-sticky';

$(document).ready(()=> {
    $(".navbar").sticky({topSpacing:0});
})


export default angular.module( 'pichounWYoApp', [] );

//import AppController from 'src/AppController';
import AboutCtrl from 'src/controllers/about';
import HeadCtrl from 'src/controllers/head';
import MainCtrl from 'src/controllers/main';

angular.module( 'pichounWYoApp',['ngRoute'])
    .controller('MainCtrl', MainCtrl)
    .controller('AboutCtrl', AboutCtrl)
    .controller('HeadCtrl', HeadCtrl)

    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .directive('animateInView', function($window) {
        return {
            restrict: 'A',
            link: function(scope, element, attr) {
              console.log(element[0].y);
                if (element[0].getBoundingClientRect().top < $window.innerHeight) {
                    angular.element(element).addClass(attr.animateInView)
                    angular.element(element).addClass("animated");

                    var delay = element[0].getBoundingClientRect().left/6 + element[0].getBoundingClientRect().top/6;

                    jQuery(element[0]).css("animation-delay", delay+"ms");

                }
                angular.element($window).on('scroll',
                    function() {
                        //console.log(element[0].y);
                        if (element[0].getBoundingClientRect().top < $window.innerHeight) {

                            angular.element(element).addClass(attr.animateInView)
                            angular.element(element).addClass("animated");

                            var delay = element[0].getBoundingClientRect().left/6+250;
                            jQuery(element[0]).css("animation-delay", delay+"ms");                            


                        }
                    }
                );

            }
        };
    });


let body = document.getElementsByTagName("body")[0];
angular.bootstrap( body, [ 'pichounWYoApp' ]);
