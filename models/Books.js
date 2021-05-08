const mongoose = require("mongoose");
const {Schema} = mongoose;

const BookSchema = new Schema({
  name: {
    type: String,
  },
  author: {
    type: String
  },
  year: {
    type: Number
  },
  abstract: {
    type: String
  },
  pageCount: {
    type: Number
  },
  link: {
    type: String
  },
  dateAdded: {
    type: Date,
    default: Date.now()
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
})

const Books = mongoose.model("Books", BookSchema);

module.exports = Books;