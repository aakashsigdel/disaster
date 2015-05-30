angular('AssesmentApp').
	service('AssesmentService',['$http', function($http){

		getAssesmentData: function(){

			var data = {
				error: 'false',
				success: 'true',
				msg: 'Test message',
				data: [
				{
					name: 'Bimal Magar',
					address: 'Butwal',
					fathername: 'Yam magar',
					phone: '9865326598',
					relief: 'medium'

				},
				{
					name: 'Bimal Magar123',
					address: 'Butwal123',
					fathername: 'Yam magar123',
					phone: '9865326598123',
					relief: 'medium1232'

				},

				]
			};
			return data;
		}
	}]);