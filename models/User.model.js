const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  imageUrl: String,
  role: {
    type: String,
    enum: ["admin", "user", "doctor"],
    default: "user",
  },
  age: Number,
  sex: {
    type: String,
    enum: ["male", "female"],
  },
});

const User = model("User", userSchema);

module.exports = User;
