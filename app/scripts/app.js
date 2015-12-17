'use strict';

/**
 * @ngdoc overview
 * @name cateringUiApp
 * @description
 * # cateringUiApp
 *
 * Main module of the application.
 */
angular
  .module('cateringUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl : 'views/home.html',
        controller : 'HomeController'
    })

    // route for the Second page
    .when('/dashboard', {
        templateUrl : 'views/dashboard.html',
        controller : 'DashboardController'
    })
    
    // route for the Second page
    .when('/shoppingCartItems', {
        templateUrl : 'views/shoppingCartItems.html',
        controller : 'ShoppingCartItemsController'
    })

    .when('/authentication', {
        templateUrl : 'views/authentication.html',
        controller : 'AuthenticationController'
    })

    .when('/order', {
        templateUrl : 'views/order.html',
        controller : 'OrderController'
    })

    .otherwise({redirectTo : 'home'})
  });
