const express = require('express');

// add our router
const searchRouter = express.Router();

// require the author controller
const searchController = require('../controller/searchController.js');

// handle the GET request on root of list path,
// i.e. get all dishes
searchRouter.get('/', (req, res) => searchController.getSearchDishes(req, res));

// export the router
module.exports = searchRouter;