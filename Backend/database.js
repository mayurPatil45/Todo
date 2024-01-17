const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

module.exports = mongoose.model("Todo", todoSchema);