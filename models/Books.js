const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  yearPublished: {
    type: String,
  },
  textSnippet: {
    type: String,
  },
  pageCount: {
    type: Number,
  },
  link: {
    type: String,
  },
  image: {
    type: String
  },
  dateAdded: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Books = mongoose.model("Books", BookSchema);

module.exports = Books;
