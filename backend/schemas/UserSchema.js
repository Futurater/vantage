const { Schema } = require("mongoose");

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  username: { type: String },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = { UserSchema };
