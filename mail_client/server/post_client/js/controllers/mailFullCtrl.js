var module = angular.module('userApp',['restangular','ui.router'])
	

var guestCtrl = module.
	controller('mailFullCtrl', function($scope, $log, Restangular) {	 
	});

	module.config(function($stateProvider, $urlRouterProvider) {
		  
		  // For any unmatched url, redirect to /state1
		  $urlRouterProvider.otherwise("/mail");
		   
		  //Set up the states
		  var mailFull = {
		      name: 'mailFull',
		      url: '/#/mailfull',
		      templateUrl: 'views/mailFull.html',
		      data: {}
		  }
		  $stateProvider
		    .state(compose)
	});