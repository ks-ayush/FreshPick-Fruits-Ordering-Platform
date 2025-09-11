import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    authRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AuthUser',
    required: true
  },
    

});

export const User = mongoose.model("User", userSchema);