'use strict';

angular.module('clients').controller('ClientsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Clients',
	function($scope, $stateParams, $location, Authentication, Clients) {
		$scope.authentication = Authentication;

		$scope.add = function() {
			var client = new Clients({
				title: this.title,
				content: this.content
			});
			client.$save(function(response) {
				$location.path('clients/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

			this.title = '';
			this.content = '';
		};

		$scope.remove = function(client) {
			if (client) {
				client.$remove();

				for (var i in $scope.client) {
					if ($scope.client[i] === client) {
						$scope.client.splice(i, 1);
					}
				}
			} else {
				$scope.client.$remove(function() {
					$location.path('clients');
				});
			}
		};

		$scope.update = function() {
			var client = $scope.client;

			client.$update(function() {
				$location.path('clients/' + client._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.clients = Clients.query();
		};

		$scope.findOne = function() {
			$scope.client = Clients.get({
				clientId: $stateParams.clientId
			});
		};
	}
]);