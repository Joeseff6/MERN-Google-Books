const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, `Please enter a valid username.`],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, `Please enter a valid password`],
    trim: true,
  },
  books: {
    type: Schema.Types.ObjectId,
    ref: "Books"
  },
})

const User = mongoose.model("User", UserSchema);

module.exports = User;