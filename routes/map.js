var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	
	console.log("isAuthenticated?", req.isAuthenticated());

	if (req.isAuthenticated()) 
	{ 
		console.log("userData in map route: \n", req.user);
		var yourCities =  ["stockholm", "moscow", "barcelona", "bordeaux", "helsinki", "london"];
	    var cityList = yourCities.reduce(function(cityList, city) {
	      	cityList.push(require('../public/cityData/' + city))
	      	return cityList;
	    }, []);
	    //TODO::need to update this to send a user
	    res.render('map', {
	        cityList : JSON.stringify(cityList),
    	});	
	}
	else
	{
		//TODO:: redirect to login possibilities and inform of lack of login
	  	console.log("Not Authenticated, redirecting to homepage");
	  	res.redirect('/');
	 }
});

module.exports = router;

