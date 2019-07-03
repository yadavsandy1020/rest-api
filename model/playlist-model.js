
let mongoose = require('mongoose');
let video = require('./video-model');
var Schema = mongoose.Schema;
//setup schema

let PlayListSchema = new Schema({
    _id:{
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    videos: [video.VideoSchema]

});


//Export Video schema
let PlayList = module.exports = mongoose.model('playlist', PlayListSchema);

module.exports.get = function(callback, limit){
    PlayList.find(callback).limit(limit);
}
