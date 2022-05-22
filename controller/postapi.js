
var mongoose = require('mongoose');


var Post = require('../models/post')


exports.create_a_post = function (req, res) {
    var new_post = new Post(req.body);
    new_post.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.list_all_post = function (req, res) {
    Post.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

