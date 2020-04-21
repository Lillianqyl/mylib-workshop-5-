// provide the controller a link to the dish model
var searchdishes = require('../model/dishes');


const getSearchDishes = (req, res) => {
    res.send(searchdishes); // return the list of dishes names
};


// Remember to export the callbacks
module.exports = {
    getSearchDishes,
};



