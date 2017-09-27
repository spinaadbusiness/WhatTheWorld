var mongoose = require('mongoose');

// create a user model
var User = mongoose.model('User', {
    oauthID: Number,
    name: String,
    created: Date,
    likes: Array,
    dislikes: Array
});


module.exports = User;
