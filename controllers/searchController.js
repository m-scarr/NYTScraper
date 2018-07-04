const db = require("../models");
const ObjectId = require('mongodb').ObjectId
request = require("request")

module.exports = {
    scrape: function (req, res) { // route: /search/scrape+query
        console.log("!")
        db.Article.find({ "saved": false }).remove().exec()
        request.get({
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
            qs: {
                'api-key': "aa95ba55c7da4c2ebcaaee63d47e6c9e",
                'q': req.params.search,
                'begin_date': req.params.begin,
                'end_date': req.params.end
            },
        }, function (err, response, body) {
            let data = JSON.parse(body).response
            if (!err) {
                for (var i = 0; i < data.docs.length; i++) {
                    //if (db.Article.find({ article_id: data.docs[i]._id }).count() == 0) {
                        console.log(db.Article.find({ article_id: data.docs[i]._id }).count())
                        db.Article.create({
                            title: data.docs[i].headline.main,
                            link: data.docs[i].web_url,
                            description: data.docs[i].snippet,
                            saved: false,
                            comments: [],
                            article_id: data.docs[i]._id
                        })
                    //}
                }
            }
            res.send(data)
        })
    },
    get: function (req, res) { //search/get
        db.Article.find({ "saved": false }, function (err, data) {
            res.json(data)
        })
    }
}