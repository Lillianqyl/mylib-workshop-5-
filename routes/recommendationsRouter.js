const express = require('express');

// add our router
const recommendationsRouter = express.Router();

// require the author controller
const recommendationsController = require('../controller/recommendationsController.js');

// handle the GET request on root of list path,
// i.e. get all dishes
recommendationsRouter.get('/', (req, res) => recommendationsController.getAllRecommendations(req, res));

// export the router
module.exports = recommendationsRouter;