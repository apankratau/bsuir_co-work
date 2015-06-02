'use strict';

var module = angular.module('postclientControllers', ['restangular', 'ui.router']);

var composeCtrl = module.
	controller('composeCtrl', ['$scope', function($scope) {
		$scope.sendMessage =function(){
			console.log($scope.message);
		}

}]);

var mailListCtrl = module.
	controller('mailListCtrl', ['$scope', '$log', 'restangular', function($scope, $log, Restangular) {
}]);

var mailFullCtrl = module.
	controller('mailFullCtrl', ['$scope', '$log', 'restangular', function($scope, $log, Restangular) {
}]);

module.config(function($stateProvider, $urlRouterProvider) {
		  
		  $urlRouterProvider.otherwise("/mail");

		  var mail = {
		  	  name: 'mail',
		      url: '/mail',
		      templateUrl: 'templates/mail.html',
		      data: {}
		  }

		  var compose = {
		      name: 'newletter',
		      url: '/newletter',
		      templateUrl: 'templates/compose.html',
		      //controller: composeCtrl,
		      data: {}
		  }

		  var mailList = {
		      name: 'inbox',
		      url: '/inbox',
		      templateUrl: 'templates/inbox.html',
		      //controller: mailListCtrl,
		      data: {}
		  }

		  var mailFull = {
		      name: 'mailFull',
		      url: '/inbox/:message',
		      templateUrl: 'templates/mail.html',
		      controller: mailFullCtrl,
		      data: {}
		  }

		  $stateProvider
		    .state(compose)
		    .state(mailList)
		    .state(mailFull)
		    .state(mail)
});