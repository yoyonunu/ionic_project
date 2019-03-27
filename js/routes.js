angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('mitrarenov.splash', {
    url: '/splash',
    views: {
      'side-menu21': {
        templateUrl: 'templates/splash.html',
        controller: 'splashCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
  })

  .state('register2', {
    url: '/page9',
    templateUrl: 'templates/register2.html',
    controller: 'register2Ctrl'
  })

  .state('mitrarenov', {
    url: '/side-menu',
    templateUrl: 'templates/mitrarenov.html',
    controller: 'mitrarenovCtrl'
  })

  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'templates/dashboard.html',
    controller: 'dashboardCtrl'
  })

  .state('proyekSaya', {
    url: '/page11',
    templateUrl: 'templates/proyekSaya.html',
    controller: 'proyekSayaCtrl'
  })

  .state('ajukanKPR', {
    url: '/page12',
    templateUrl: 'templates/ajukanKPR.html',
    controller: 'ajukanKPRCtrl'
  })

  .state('pengaturan', {
    url: '/page13',
    templateUrl: 'templates/pengaturan.html',
    controller: 'pengaturanCtrl'
  })

  .state('servicesDetail', {
    url: '/page14',
    templateUrl: 'templates/servicesDetail.html',
    controller: 'servicesDetailCtrl'
  })

  .state('pesanJasa', {
    url: '/page15',
    templateUrl: 'templates/pesanJasa.html',
    controller: 'pesanJasaCtrl'
  })

  .state('progresProyek', {
    url: '/page17',
    templateUrl: 'templates/progresProyek.html',
    controller: 'progresProyekCtrl'
  })

  .state('detailProyek', {
    url: '/page16',
    templateUrl: 'templates/detailProyek.html',
    controller: 'detailProyekCtrl'
  })

$urlRouterProvider.otherwise('/side-menu/splash')


});