
let mongoose = require('mongoose');

//setup schema

let VideoSchema = mongoose.Schema({
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
