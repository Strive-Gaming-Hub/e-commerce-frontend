import mongoose from "mongoose";
import {hash,genSalt} from "bcrypt"

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  }, { timestamps: true });

  UserSchema.pre('save',async function(next) {
    if(!this.isModified('password')) return next();
    const salt=await genSalt(10);
    this.password=await hash(this.password,salt);
    next();
})

const User= mongoose.models.user || mongoose.model("user",UserSchema)
export default User;
