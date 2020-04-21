// Function to handle a request to a particular dish
const getDishByName = (req, res) => {

    // search for dish in the database via dish_name
    const dishes = dishes.find(dishes => dishes.dish_name === req.params.dish_name);


    if (dishes){
        res.send(dishes); // send back the dishes details
    }
    else{
        res.send('<H2>Sorry we cannot find your dish.</H2>');
    }
};



module.exports = {
    getDishByName
};
