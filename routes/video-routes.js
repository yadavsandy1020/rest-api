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

// Contact routes
router.route('/videos')
    .get(videoController.index)
    .post(videoController.new);
router.route('/video/:video_id')
    .get(videoController.view)
    .patch(videoController.update)
    .put(videoController.update)
    .delete(videoController.delete);
//export API routes

module.exports = router;