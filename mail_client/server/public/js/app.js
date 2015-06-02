var module = angular.module('userApp',['restangular','ui.router'])
	

var guestCtrl = module.
	controller('clinicCtrl', function($scope, $log, Restangular) {

        var baseAPI = Restangular.all('api');
        baseAPI.one('doctors').get().then(function(resp) {
  			$scope.doctors = resp.doctors;
  			$log.info('Loaded doctors ' + resp.doctors );
		});

		$scope.load = function(room) {
			$scope.persons = $scope.rooms[room.value].persons; 
		   	$log.info('Current value: ' +
			$scope.room.label );
		}
	    $scope.initRooms  = function() {
	    		$scope.rooms  = [
	    		 {room:'A', persons: [
					   { name:'Masha',
						 age: 19
					   },
					   { name:'Dasha',
						 age: 23
					   }
				   ]},
				 {room:'B', persons: [
					   { name:'Pasha',
						 age: 29
					   },
					   { name:'Tasha',
						 age: 33
					   }
				   ]
				 }
				];
				$scope.options = [
					{label:"A", value:0},
					{label:"B", value:1}
		   		];
		        $scope.room = $scope.options[0];
		        $scope.load($scope.room);	
	    }
		
		
		
		 
	});

 
module.config(function($stateProvider, $urlRouterProvider) {
		  
		  // For any unmatched url, redirect to /state1
		  $urlRouterProvider.otherwise("/home");
		   
		  //Set up the states
		  var aboutClinic = {
		      name: 'aboutClinic',
		      url: '/aboutClinic',
		      templateUrl: 'views/aboutClinic.html',
		      data: {}
		  }
		  var home = {
		      name: 'home',
		      url: '/home',
		      templateUrl: 'views/home.html',
		      data: {}
		  }
		  var clinic  = {
		      name: 'clinic',
		      url: '/clinic',
		      templateUrl: 'views/clinic.html',
		      controller: 'clinicCtrl',
		      data: {}
		  }
		  $stateProvider
		    .state(aboutClinic)
		    .state(clinic)
		    .state(home);
		    
    });

	