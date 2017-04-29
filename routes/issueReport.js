var express = require('express');
var router = express.Router();
var c

/* GET home page. */
router.get('/', function(req, res) {

	res.render('issueReport', {
	});
});

module.exports = router;
