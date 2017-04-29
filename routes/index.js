var express = require('express');
var foursquare = (require('foursquarevenues'))('EPSWCYTGSW4NP2MNU3ENGBAXVA1YIBXKG5SH0CCS31EBCXLH', 'S2PKNBEISYBKZWABVFZ3DJTZEUEAFTV1IYHYP1XWVVFE3LDE');
var router = express.Router();
var c

/* GET home page. */
router.get('/', function(req, res) {

	var cityList = ["rome", "paris", "groningen", "stockholm", "moscow", "barcelona", "bordeaux", "helsinki", "london"];
	var item = cityList[Math.floor(Math.random() * cityList.length)];
	var cityData = require("../public/cityData/" + item + ".json");

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
