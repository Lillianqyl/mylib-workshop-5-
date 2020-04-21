const express = require('express');

// add our router
const authorRouter = express.Router();

// require the author controller
const authorController = require('../controller/authorController.js');

// handle the GET request on root of author-management path,
// i.e. get all authors
authorRouter.get('/', (req, res) => authorController.getAllAuthors(req, res));

// export the router
module.exports = authorRouter;