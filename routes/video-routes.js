// Initialize express router

let router = require('express').Router();

// Set i default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API is working',
        message: 'Welcome to Smart Audit'
    })
});

// Import video controller
var videoController = require('../controller/video-controller');

// routes
router.route('/videos')
    .get(videoController.index)
    .post(videoController.new);
router.route('/videos/:video_id')
    .get(videoController.view)
    .delete(videoController.delete);


// Import Playlist controller
let playlistController = require('../controller/playlist-controller');

//routes
router.route('/playlists')
    .get(playlistController.index)
    .post(playlistController.new);
router.route('/playlists/:playlist_id')
    .get(playlistController.view)
    .delete(playlistController.delete);
//export API routes

module.exports = router;