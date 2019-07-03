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
    video.title = req.body.title ? req.body.tile : video.title;
    video.thumbnail = req.body.thumbnail ? req.body.thumbnail : contact.thumbnail;
    video.videoURL = req.body.videoURL;
    video.duration = req.body.duration;

    // save the video and check for errors
    video.save(function (err) {
        if (err) {
            res.json(err);
        } else {
            res.json({
                message: 'New contact created!',
                data: contact
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


// Handle update video info
exports.update = function (req, res) {
    Video.findById(req.params.video_id, function (err, video) {
        if (err)
            res.send(err);
        video.title = req.body.title ? req.body.tile : video.title;
        video.thumbnail = req.body.thumbnail ? req.body.thumbnail : contact.thumbnail;
        video.videoURL = req.body.videoURL;
        video.duration = req.body.duration;

        // save the video and check for errors
        video.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Video Info updated',
                data: video
            });
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