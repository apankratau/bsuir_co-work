"use strict";

var module = angular.module('postclientControllers', ['restangular', 'ui.router']);

var composeCtrl = module.controller('composeCtrl', ['$scope', 'Restangular', function($scope, Restangular) {
	
	var baseAPI = Restangular.all('api');

	$scope.sendMessage = function() {
		var message = {};
		message[$scope.topic] = $scope.message;

		baseAPI.all('newletter').post(message).then(function(resolve) {
			console.log(resolve);
		}, function() {
			console.log('An error occured.');
		})
	};
}]);

var mailCtrl = module.controller('mailCtrl', ['$rootScope', '$http', function($rootScope, $http) { 
	$http.get('messages.json').success(function(data) {
		$rootScope.messages = data;
	});
}]);

var mailListCtrl = module.controller('mailListCtrl', ['$rootScope', '$scope', function($rootScope, $scope) { 
	$scope.messages = $rootScope.messages;
}]);

var mailFullCtrl = module.controller('mailFullCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
	$scope.topic = $stateParams.topic;
	$scope.message = $stateParams.message;
}]);

module.config(function($stateProvider, $urlRouterProvider) {
		  
		  $urlRouterProvider.otherwise("/mail");

		  var mail = {
		  	  name: 'mail',
		      url: '/mail',
		      templateUrl: 'templates/mail.html',
		      controller: "mailCtrl",
		      data: {}
		  }

		  var compose = {
		      name: 'newletter',
		      url: '/newletter',
		      templateUrl: 'templates/compose.html',
		      controller: "composeCtrl",
		      data: {}
		  }

		  var mailList = {
		      name: 'inbox',
		      url: '/inbox',
		      templateUrl: 'templates/inbox.html',
		      controller: "mailListCtrl",
		      data: {}
		  }

		  var mailFull = {
		      name: 'mailFull',
		      url: '/inbox/:topic',
		      templateUrl: 'templates/message.html',
		      controller: "mailFullCtrl",
		      data: {},
		      params: {
		      	message: null
		      }
		  }

		  $stateProvider
		  	.state(mail)
		    .state(compose)
		    .state(mailList)
		    .state(mailFull);
});