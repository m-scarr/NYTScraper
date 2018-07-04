const db = require("../models");
const ObjectId = require('mongodb').ObjectId
request = require("request")

module.exports = {
    get: function (req, res) { // /saved/get
        db.Article.find({ "saved": true }, function (err, data) {
            res.json(data)
        })
    }
}