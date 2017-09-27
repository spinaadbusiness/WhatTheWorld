var ids = {
  facebook: {
    clientID: '117406538827502',
    clientSecret: 'dbe9aa0aff3594fd58d1b90e63c6bf29',
    callbackURL: 'http://127.0.0.1:3000/auth/facebook/callback'
	},
  twitter: {
    consumerKey: '6pSCk0LiGyRABQeiBkz6QQWsM',
    consumerSecret: 'c6X5tLc6F5FZRZnp08esdC1oYCtDIkX6IXKwY67vaWenrLGQL5',
    callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
  },
  google: {
    clientID: '303458968862-d2aa9cn7c424njtv826bjo8kg43dnljr.apps.googleusercontent.com',
    clientSecret: 'VyYlcVk4nkP2Cueu2z2EjnCM',
    callbackURL: 'http://127.0.0.1:3000/auth/google/callback'
  },
  instagram: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: 'http://127.0.0.1:3000/auth/instagram/callback'
  },
  foursquare: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: 'http://127.0.0.1:3000/auth/foursquare/callback'
  }

};

module.exports = ids;
