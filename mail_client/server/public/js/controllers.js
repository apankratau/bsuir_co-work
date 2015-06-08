"use strict";

var module = angular.module('postclientControllers', ['restangular', 'ui.router']);

var composeCtrl = module.controller('composeCtrl', ['$rootScope', '$scope', '$log', function($rootScope, $scope, $log) {
	$scope.sendMessage = function() {
		console.log("Message send. \n Topic: " + $scope.topic + ", message: " + $scope.message);
	};
}]);

var composeCtrl = module.controller('mailCtrl', ['$scope', 'Restangular', function($scope, Restangular) {
	var baseAPI = Restangular.all('api');
    baseAPI.one('inbox/:topic').get().then(function(res) {
  		$scope.inbox = res.inbox;
  		//-----------------------
  		console.log(res.inbox.name);
  		console.log(res.inbox.id);
  		console.log(res.inbox.message);
  		//-----------------------
  	});
}]);

var mailListCtrl = module.controller('mailListCtrl', ['$rootScope', '$scope', function($rootScope, $scope) { 
	$scope.messages = $rootScope.messages;
}]);

var mailFullCtrl = module.controller('mailFullCtrl', ['$scope', '$log', 'Restangular', function($scope, $log, Restangular) {
	var baseAPI = Restangular.all('api');
    baseAPI.one('inbox').get().then(function(res) {
    	console.log(res.inbox.params);
  		$scope.inbox = res.inbox;
  		    while(c in res.inbox){
    			console.log(c.name);
    			console.log(c.id);
    			console.log(c.messages);
    		}
  	});
  	//-----------------------

    //-----------------------
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