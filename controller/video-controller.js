//import video model

let Video = require('../model/video-model');


// Handle index actions
exports.index = function (req, res) {
    Video.get(function (err, videos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Videos retrieved successfully",
            data: videos
        });
    });
};


// Handle create videos actions
exports.new = function (req, res) {
    let video = new Video();
    video._id = req.body._id;
    video.title = req.body.title ? req.body.title : video.title;
    video.thumbnail = req.body.thumbnail ? req.body.thumbnail : video.thumbnail;
    video.videoURL = req.body.videoURL;
    video.duration = req.body.duration;

    // save the video and check for errors
    video.save(function (err) {
        if (err) {
            res.json(err);
        } else {
            res.json({
                message: 'New video created!',
                data: video
            });
        }

    });
};

// Handle view video info
exports.view = function (req, res) {
    Video.findById(req.params.video_id, function (err, video) {
        if (err)
            res.send(err);
        res.json({
            message: 'Video details loading..',
            data: video
        });
    });
};

// Handle delete video
exports.delete = function (req, res) {
    Video.remove({
        _id: req.params.video_id
    }, function (err, video) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Video deleted'
        });
    });
};