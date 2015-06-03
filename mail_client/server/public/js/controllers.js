"use strict";

var module = angular.module('postclientControllers', ['restangular', 'ui.router']);

var composeCtrl = module.controller('composeCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
	$scope.sendMessage = function() {
		var objToAdd = {
			"topic": $scope.topic,
			"message": $scope.message
		};

		$rootScope.messages.push(objToAdd);

		/*$http.put('/messages.json', $rootScope.messages)
			.success(function() {
				alert('yeah!');
			})
			.error(function() {
				alert('nope :(');
			});*/

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