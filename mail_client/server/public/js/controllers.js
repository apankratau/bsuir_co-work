"use strict";

var module = angular.module('postclientControllers', ['restangular', 'ui.router']);

var composeCtrl = module.controller('composeCtrl', ['$scope', 'Restangular', '$log', function($scope, Restangular, $log) {
	
	var baseAPI = Restangular.all('api');

	$scope.sendMessage = function() {
		var message = {};
		message[$scope.topic] = $scope.message;

		baseAPI.all('newletter').post(message).then(function(resolve) {
			$log(resolve);
		}, function() {
			$log('An error occured.');
		});
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

var indexCtrl = module.controller('indexCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.isActive = function (viewLocation) {
		return viewLocation === $location.path();
	};
}]);

module.config(function($stateProvider, $urlRouterProvider) {
		  
		  $urlRouterProvider.otherwise("/inbox");

		  var compose = {
		      name: 'newletter',
		      url: '/newletter',
		      templateUrl: 'templates/compose.html',
		      controller: "composeCtrl",
		      data: {}
		  };

		  var mailList = {
		      name: 'inbox',
		      url: '/inbox',
		      templateUrl: 'templates/inbox.html',
		      controller: "mailListCtrl",
		      data: {}
		  };

		  var mailFull = {
		      name: 'mailFull',
		      url: '/inbox/:topic',
		      templateUrl: 'templates/message.html',
		      controller: "mailFullCtrl",
		      data: {}
		  };

		  $stateProvider
		    .state(compose)
		    .state(mailList)
		    .state(mailFull);
});