var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    var yourCities =  ["stockholm", "moscow", "barcelona", "bordeaux", "helsinki", "london"];
    var cityList = yourCities.reduce(function(cityList, city) {
      	cityList.push(require('../public/cityData/' + city))
      	return cityList;
    }, [])

    //TODO::need to update this to send an array
    res.render('map', {
        cityList : JSON.stringify(cityList),
    });
});

module.exports = router;
