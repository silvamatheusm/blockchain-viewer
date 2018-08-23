var rp = require('request-promise');
var sort = require('../modules/sort');
module.exports = function(app){

	var HomeController = {

		index: function(req,res){
			res.render("home/index");
		},
		search: function(req,res){
			var data = req.body;
			const requestOptions = {
				uri: 'http://35.230.10.57:3002/blockchain',
				method: 'GET',
				json: true
			};
			rp(requestOptions).then(result => {
				let chain = result.chain;
				let distance =0 ;
				let points = [];
				let point = [];
				let date;
				console.log(points);
				points.push(["Date", "Meter"]);
		
				chain.sort(sort.compararNumeros)
				chain.forEach(bloco=>{
					if(bloco.carPlate === data.licensePlate){
						distance += bloco.carData.data;
						date = new Date(bloco.timestamp);
						point.push(date.getDate())
						point.push(distance);
						points.push(point);
						point = [];
					}
				});
				console.log(points)
				res.render("home/search",{"value":points})
			});
		}
	}
	return HomeController;
}
