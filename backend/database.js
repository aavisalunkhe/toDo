const mongoose= require("mongoose");
mongoose.connect("enter-your-database-url-here");

const todo= mongoose.Schema({
    title: String,
    description: String,
    id: Boolean 
})

const todoObject= mongoose.model("Todos", todo);

module.exports={
    todoObject
}