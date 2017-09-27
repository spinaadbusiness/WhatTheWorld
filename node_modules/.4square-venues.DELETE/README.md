4square
=======

Simple Module for 4Square Venues

  npm install 4square-venues

## Notes
This module will not (as yet) do the oAuth token exchange to get your oAuth access token, it is assumed this is known and stored in a DB or something.

The oAuth access token is only needed for destructive calls such as addVenue() or editVenue().

## Examples

```js
  var foursquare = new require('4square-venues')(CLIENT_ID, CLIENT_SECRET, [OAUTH_ACCESS_TOKEN], [API_DATE_VERSION]);

  var addParams = { ... }

  foursquare.addVenue(addParams, function(err, data) {
    
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }

  });
```

## Methods
foursquare.addVenue(opts, callback)

foursquare.getVenue(opts, callback)

foursquare.getCategories(opts, callback)

foursquare.editVenue(opts, callback)

foursquare.searchVenues(opts, callback)
