const express = require('express');

// add our router
const listRouter = express.Router();

// require the list controller
const listController = require('../controller/listController.js');

// handle the GET request on root of list path,
// i.e. get sorted dish
listRouter.get('/', (req, res) => listController.getSortDishes(req, res));

// export the router
module.exports = listRouter;