
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'homeController',
      templateUrl: '/views/partials/home.html',
      access:{restricted: false},
    })
    .when('/bio', {
      controller: 'bioController',
      templateUrl: '/views/partials/bio.html',
      access:{restricted: false},
    })
    .when('/contact', {
      controller: 'contactController',
      templateUrl: '/views/partials/contact.html',
      access:{restricted: false},
    })
    .when('/resume', {
      controller: 'resumeController',
      templateUrl: '/views/partials/resume.html',
      access:{restricted: false},
    })
    .when('/portfolio', {
      controller: 'portfolioController',
      templateUrl: '/views/partials/portfolio.html',
      access:{restricted: false},
    })
    .when('/dot', {
      templateUrl: '/views/partials/dotGame.html',
      access:{restricted: false}
    })
    .when('/meal', {
      templateUrl: '/views/partials/meal.html',
      access:{restricted: false}
    })
    .when('/translator', {
      templateUrl: '/views/partials/translator.html',
      access:{restricted: false}
    })
    .otherwise({
      redirectTo: '/'
    });
});