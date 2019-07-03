//import playlist model

let Playlist = require('../model/playlist-model');


// Handle index actions
exports.index = function (req, res) {
    Playlist.get(function (err, playlist) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "playlist retrieved successfully",
            data: playlist
        });
    });
};


// Handle create playlist actions
exports.new = function (req, res) {
   
    let playlist = new Playlist();
    playlist._id = req.body._id;
    playlist.name = req.body.name ? req.body.name : playlist.name;
    playlist.website = req.body.website ? req.body.website : playlist.website;
    playlist.videos = JSON.parse(req.body.videos);
   
    console.log(playlist);
    // save the playlist and check for errors
    playlist.save(function (err) {
        if (err) {
            res.json(err);
        } else {
            res.json({
                message: 'New playlist created!',
                data: playlist
            });
        }

    });
};

// Handle view playlist info
exports.view = function (req, res) {
    Playlist.findById(req.params.playlist_id, function (err, playlist) {
        if (err)
            res.send(err);
        res.json({
            message: 'Playlist details loading..',
            data: playlist
        });
    });
};

// Handle playlist delete
exports.delete = function (req, res) {
    Playlist.remove({
        _id: req.params.playlist_id
    }, function (err, playlist) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Playlist deleted'
        });
    });
};