const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://nikshrma2006_db_user:alr03R7hKW2OtaAm@cluster0.hqwru9z.mongodb.net/todos");

const todoSchema =  mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model("todos" , todoSchema);
module.exports = {
    todo
};