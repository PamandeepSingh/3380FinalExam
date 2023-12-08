// import mongoose
const mongoose = require("mongoose");

// create Schema Class
const Schema = mongoose.Schema;

// create Schema Object (bookSchema)
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description:{type:String},
  pages: { type: Number }
 
});

// create a model based on bookSchema Object
const bookList = mongoose.model("BookList", bookSchema);

// export the model
module.exports = bookList;