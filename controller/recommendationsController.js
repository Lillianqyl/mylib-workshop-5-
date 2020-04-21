// provide the controller a link to the author model
var recommendations = require('../model/recommendations');
// Function to handle a request to get all recommendations

const getAllRecommendations = (req, res) => {
    res.send((recommendations)); // return the list of recommendations
};


// Remember to export the callbacks
module.exports = {
    getAllRecommendations,
};
