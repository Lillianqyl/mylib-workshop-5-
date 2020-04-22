const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
    id: String,
    first_name: {type: String, required: true},
    last_name: {type: String, required: true}
});

const Author = mongoose.model("author", authorSchema, "author");
module.exports = Author;
