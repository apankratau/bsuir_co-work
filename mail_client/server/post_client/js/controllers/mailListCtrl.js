var module = angular.module('userApp',['restangular','ui.router'])
	

var guestCtrl = module.
	controller('mailListCtrl', function($scope, $log, Restangular) {	 
	});

	module.config(function($stateProvider, $urlRouterProvider) {
		  
		  // For any unmatched url, redirect to /state1
		  $urlRouterProvider.otherwise("/mail");
		   
		  //Set up the states
		  var mailList = {
		      name: 'mailList',
		      url: '/#/maillist',
		      templateUrl: 'views/mailList.html',
		      data: {}
		  }
		  $stateProvider
		    .state(compose)
	});