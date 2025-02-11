import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { Schema, ObjectId } from "mongoose";

const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600, // this is the expiry time in seconds
  },
});

const Token = mongoose.model("Token", tokenSchema);
export default Token;
