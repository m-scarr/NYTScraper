const db = require("../models");
const ObjectId = require('mongodb').ObjectId
request = require("request")

module.exports = {
    search: function (req, res) {
        //console.log("!!!!!!!!!!!!!!!!!!!!!")
        //console.log(req)
        db.Article.find({ "saved": false }).remove().exec()
        request.get({
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
            qs: {
                'api-key': "aa95ba55c7da4c2ebcaaee63d47e6c9e",
                'q': req.query.search,
                'begin_date': req.query.begin,
                'end_date': req.query.end
            },
        }, function (err, response, body) {
            let data = JSON.parse(body).response
            if (!err) {
                for (var i = 0; i < data.docs.length; i++) {
                    db.Article.find({ article_id: data.docs[i]._id }).remove().exec()
                    db.Article.create({ title: data.docs[i].headline.main, 
                        link: data.docs[i].web_url, 
                        description: data.docs[i].snippet, 
                        saved: false, 
                        comments: [], 
                        article_id: data.docs[i]._id })
                }
            }
            //let d = JSON.parse(body).response
            res.json(data)
            //console.log(d);
        })//.then(({ data: { results } }) => res.json(results))
    },
    save: function (req, res) {
        db.Article.update({ _id: ObjectId(req.params.id) }, {
            saved: true
        }, function (err, affected, resp) {
            //console.log(resp);
        })
    },
    getResults: function (req, res) {
        db.Article.find({ "saved": false }, function (err, data) {
            //console.log(data)
            res.json(data)
        })
    }
}

//body.response.docs[i].web_url
//body.response.docs[i].headline.main
//body.response.docs[i].snippet
