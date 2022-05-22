
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var postSchema = new Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    username: { type: String, required: true, unique: true },
    createdTime: { type: Date},
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true, unique: true },
}, {timestamps: true} );

// the schema is useless so far
// we need to create a model using it
var Post = mongoose.model('Posts', postSchema);

// make this available to our users in our Node applications
module.exports = Post;