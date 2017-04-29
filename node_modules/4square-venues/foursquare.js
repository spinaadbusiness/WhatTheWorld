// request, underscore, url and querystring libraries
var request = require('request'), 
_ = require('underscore'), 
qs = require('querystring'), 
url = require('url');

module.exports = function(_id, _secret, _token, _date) {

  // set a default value for date
  if (_.isUndefined(_date) || !_date) {
    _date = "20131016";
  }

  // api auth
  var auth = {
    v: _date,
    client_id: _id,
    client_secret: _secret
  }

  // if we have a token
  if (_.isString(_token) && _token) {
    auth.oauth_token = _token;
  }

  var apiRoot = "https://api.foursquare.com/v2/venues";

  // combine two objects
  var combine = function(obj1, obj2) {

    if (_.isUndefined(obj1) || !_.isObject(obj1)) {
      obj1 = {};
    }

    if (_.isUndefined(obj2) || !_.isObject(obj2)) {
      obj2 = {};
    }

    for (var i in obj2) {
      obj1[i] = obj2[i];
    }

    return obj1;

  }

  // parse a response
  var parseResponse = function(response, body, callback) {
    if (response.statusCode >= 300 && response.statusCode != 409) {
      return callback(body, null);
    }
    return callback(null, JSON.parse(body));
  }

  return {

    getCategories: function(opts, callback) {
      
      var urlString = apiRoot+"/categories";

      var requestOpts = {
        url: url.parse(urlString).href,
        method: "GET",
        qs: combine(opts, auth)
      }

      request(requestOpts, function(e, r, b) {
        return parseResponse(r, b, callback);
      });

    },


    getVenue: function(opts, callback) {
      
      var urlString = apiRoot+"/"+opts.venue_id;

      var requestOpts = {
        url: url.parse(urlString).href,
        method: "GET",
        qs: combine(opts, auth)
      }

      request(requestOpts, function(e, r, b) {
        return parseResponse(r, b, callback);
      });

    },


    addVenue: function(opts, callback) {

      var urlString = apiRoot+"/add";

      var requestOpts = {
        url: url.parse(urlString).href,
        method: "POST",
        qs: combine(opts, auth)
      }

      request(requestOpts, function(e, r, b) {
        return parseResponse(r, b, callback);
      });

    },


    editVenue: function(opts, callback) {

      var urlString = apiRoot+"/"+opts.venue_id+"/edit";

      var requestOpts = {
        url: url.parse(urlString).href,
        method: "POST",
        qs: combine(opts, auth)
      }

      request(requestOpts, function(e, r, b) {
        return parseResponse(r, b, callback);
      });

    },


    searchVenues: function(opts, callback) {

      var urlString = apiRoot+"/search";

      var requestOpts = {
        url: url.parse(urlString).href,
        method: "GET",
        qs: combine(opts, auth)
      }

      request(requestOpts, function(e, r, b) {
        return parseResponse(r, b, callback);
      });

    }

  }

}

  

