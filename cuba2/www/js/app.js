// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    //if(window.cordova && window.cordova.plugins.Keyboard) {
      //cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      //cordova.plugins.Keyboard.disableScroll(true);
    //}
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

  // setup an abstract state for the tabs directive

   .state('head', {
        url: '/head',
        abstract: true,
        templateUrl: 'views/head.html',
        controller: 'HeadController'
      })
   .state('enter', {
         url: '/enter',
         templateUrl: 'views/enter.html',
          controller: 'EnterController'
      })
    .state('reg', {                             // страничка регистрации
         url: '/reg',
         templateUrl: 'views/reg.html',
          controller: 'EnterController'
      })
    .state('profile', {                             // страничка профайл 
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'ProfileController'
    })
   .state('menu', {
       url: '/menu',
         abstract: true,
         templateUrl: 'views/menu.html',
          controller: 'MenuController'
      })
    .state('repair', {
        url: '/repair',
        templateUrl: 'views/repair.html',
        controller: 'EnterController'
    })
    .state('confirm', {
        url: '/confirm',
        templateUrl: 'views/confirm.html',
        controller: 'EnterController'
    })
    .state('menu.page1', {
      url: '/page1',
      views: {
          'menuContent': {
          templateUrl: 'views/page1.html',
          controller: 'PageController'
        }
      }
    })
    .state('menu.recipes', {
        url: '/recipes',
        views: {
            'menuContent': {
                templateUrl: 'views/recipes.html',
                controller: 'PageController'
            }
        }
    })
    .state('menu.page2', {
       url: '/page2',
       views: {
          'menuContent': {
                 templateUrl: 'views/page2.html',
                  controller: 'PageController'
                }
            }
    })
    .state('menu.news', {
        url: '/news',
        views: {
            'menuContent': {
                templateUrl: 'views/news.html',
                controller: 'PageController'
            }
        }
    })

  // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/enter'); // /menu/page1

});


