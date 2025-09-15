const mongoose = require("mongoose");
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const todoSchema =  mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const Todo = mongoose.model("todos" , todoSchema);
module.exports = {
    todo
};