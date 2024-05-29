// Import Mongoose directly (more concise)
import mongoose from "mongoose";


import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  fullName: { // Corrected typo: fullName
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  avatar: {
    type: String, // Cloudinary URL assumed
    required: true,
  },

  coverImage: {
    type: String,
  },

  watchHistory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video", // Reference to Video model
  },

  password: {
    type: String,
    required: true,
    // Consider using a dedicated library for secure password hashing
  },

  refreshToken: {
    type: String,
  },

}, { timestamps: true });


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Skip hashing if password is unchanged

  const salt = await bcrypt.genSalt(10); // Generate a salt for password hashing
  this.password = await bcrypt.hash(this.password, salt); // Hash the password with salt
  next();
});

// Instance method for password comparison
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};


export const User = mongoose.model("User", userSchema);
