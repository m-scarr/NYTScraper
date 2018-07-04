const db = require("../models");
const ObjectId = require('mongodb').ObjectId
request = require("request")

module.exports = {
    addArticle: function (req, res) { // /api/article/add/:id
        //console.log("!")
        db.Article.update({ _id: ObjectId(req.params.id) }, {
            saved: true
        }, function (err, affected, resp) {
            res.json(resp)
        })
    },
    removeArticle: function (req, res) { // /api/article/remove/:id
        //delete article"
        //console.log("__________________________")
        db.Article.find({ _id: ObjectId(req.params.id) }).remove().exec(function (err, resp) { res.send(resp) })
    },
    addComment: function (req, res) { //api/comment/add/:id/:comment
        //get the array, then append it, then
        var comments = []
        db.Article.find({ _id: ObjectId(req.params.id) }, function (err, data) {
            comments = data[0].comments
            //console.log(data)
            comments.push(req.params.comment)
            db.Article.update({ _id: ObjectId(req.params.id) }, {
                comments: comments
            }, function (err, affected, resp) {
                //console.log(resp);
                res.json(resp)
            })
        })
    },
    removeComment: function (req, res) { // /api/commment/remove/:id
        var comments = []
        db.Article.find({ _id: ObjectId(req.params.id) }, function (err, data) {
            comments = data[0].comments
            var deleted = false
            for (var i = 0; i < comments.length; i++) {
                if (comments[i] == req.params.comment && deleted == false) {
                    comments.splice(i, 1)
                    deleted = true
                }
            }
            db.Article.update({ _id: ObjectId(req.params.id) }, {
                comments: comments
            }, function (err, affected, resp) {
                //console.log(resp);
                res.json(resp)
            })
        })
    }
}

//body.response.docs[i].web_url
//body.response.docs[i].headline.main
//body.response.docs[i].snippet
