var db = require('../db')

exports.all = function(cb) {
  var collection = db.get().collection('cityData')

  collection.find().toArray(function(err, docs) {
    cb(err, docs)
  })
}

exports.specific = function(cb) {
  var collection = db.get().collection('cityData')

  collection.find({ cityName: "Rome" })(function(err, docs) {
    cb(err, docs)
  })
}