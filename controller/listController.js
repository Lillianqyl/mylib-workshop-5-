// provide the controller a link to the dish model
var listdishes = require('../model/dishes');

// Function to compare rating
function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const ratingA = a.rating;
    const ratingB = b.rating;

    let comparison = 0;
    if (ratingA < ratingB) {
        comparison = 1;
    } else if (ratingA > ratingB) {
        comparison = -1;
    }
    return comparison;
}

const getSortDishes = (req, res) => {
    res.send(listdishes.sort(compare)); // return the list of sorted dishes
};


// Remember to export the callbacks
module.exports = {
    getSortDishes,
};