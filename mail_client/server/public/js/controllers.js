'use strict';

var module = angular.module('postclientControllers', ['restangular', 'ui.router']);

var composeCtrl = module.
	controller('composeCtrl', ['$scope', '$log', 'restangular', function($scope, $log, Restangular) {
}]);

var mailListCtrl = module.
	controller('mailListCtrl', ['$scope', '$log', 'restangular', function($scope, $log, Restangular) {
}]);

var mailFullCtrl = module.
	controller('mailFullCtrl', ['$scope', '$log', 'restangular', function($scope, $log, Restangular) {
}]);

module.config(function($stateProvider, $urlRouterProvider) {
		  
		  $urlRouterProvider.otherwise("/mail");
		   
		  var compose = {
		      name: 'compose',
		      url: '/#/newletter',
		      templateUrl: 'templates/compose.html',
		      controller: composeCtrl,
		      data: {}
		  }

		  var mailList = {
		      name: 'mailList',
		      url: '/#/inbox',
		      templateUrl: 'templates/inbox.html',
		      controller: mailListCtrl,
		      data: {}
		  }

		  var mailFull = {
		      name: 'mailFull',
		      url: '/#/inbox/:message',
		      templateUrl: 'templates/mail.html',
		      controller: mailFullCtrl,
		      data: {}
		  }

		  $stateProvider
		    .state(compose)
		    .state(mailList)
		    .state(mailFull);
});