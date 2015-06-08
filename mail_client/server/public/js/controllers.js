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

var mailListCtrl = module.controller('mailListCtrl', ['Restangular', '$scope', function(Restangular, $scope) { 
	var baseAPI = Restangular.all('api');

	baseAPI.one('inbox').get().then(function(res) {
		$scope.messages = res.inbox;
	});
}]);

var mailFullCtrl = module.controller('mailFullCtrl', ['Restangular', '$scope', '$stateParams', function(Restangular, $scope, $stateParams) { 
	var baseAPI = Restangular.all('api/inbox');

	var topic = $stateParams.topic;

	baseAPI.one(topic).get().then(function(res) {
		$scope.message = res;
	});
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
		      data: {}
		  }

		  $stateProvider
		  	.state(mail)
		    .state(compose)
		    .state(mailList)
		    .state(mailFull);
});