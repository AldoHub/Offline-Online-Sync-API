const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    title: {type: String, required: true}, 
    content: {type: String, required: true},  
    done: {type: Boolean, required: true}
});


//create and export the model
module.exports = mongoose.model("Todo", todoSchema);

//this is a simple Mongoose Model