var travelpayoutsAPI = require('travelpayouts');
var express = require('express');
var foursquare = (require('foursquarevenues'))('EPSWCYTGSW4NP2MNU3ENGBAXVA1YIBXKG5SH0CCS31EBCXLH', 'S2PKNBEISYBKZWABVFZ3DJTZEUEAFTV1IYHYP1XWVVFE3LDE');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var tapi = travelpayoutsAPI({ token: '1009c7f7ee025c41f32b2aa41474f8d7' });
	var cityList = ["rome", "paris", "groningen", "stockholm", "moscow", "barcelona", "bordeaux", "helsinki", "london"];
	var item = cityList[Math.floor(Math.random() * cityList.length)];
	var cityData = require("../public/cityData/" + item + ".json");
	/*
	tapi.prices.monthly({
	    currency: 'USD',
	    origin : 'MPB',
	    destination : 'IT',
	    page: 1,
	    limit: 1,
	    show_to_affiliates: true,
	    sorting: 'price',
	    trip_class: 0
	}, function (err, result) {
	    if (err) throw err;
	    console.log(result);
	});*/

	var params = {
		"venuePhotos" : '1',
		"categoryId" : "4bf58dd8d48988d12d941735", //this is monuments/landmarks id
    	"near" : cityData.cityName + ", " + cityData.country,
    	"intent" : "browse",
    	"limit" : '20',
    	"locale" : "en"
	};

	var venueData = [];
	foursquare.getVenues(params, function(error, venues) {
	    if (!error) 
	    {
		    res.render('index', {
				cityData : cityData,
				cityFoursquareData : venues.response.venues,
			});
	    }
	    else
	    {

	    	console.log("Failure: foursquare failed to get Venues.");
	    	res.render('index', {
				cityData : cityData,
			});
	    }
	});
});
module.exports = router;
