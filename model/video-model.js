
let mongoose = require('mongoose');
var Schema = mongoose.Schema;
//setup schema

let VideoSchema = new Schema({
    _id:{
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    videoURL: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }

});


//Export Video schema
let Video = module.exports = mongoose.model('video', VideoSchema);

module.exports.get = function(callback, limit){
    Video.find(callback).limit(limit);
}

module.exports.VideoSchema = VideoSchema;