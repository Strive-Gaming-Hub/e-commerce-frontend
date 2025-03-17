import mongoose from "mongoose";
import {hash,genSalt} from "bcryptjs"

if (!mongoose || !mongoose.connection) {
  console.log("mongoose not initialized");
}

const UserSchema =  new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cart: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        name: String,
        price: Number,
        quantity: Number,
        image: String,
        size:String,
        color:String
      },
    ],
  }, { timestamps: true,collection:"users" });

  UserSchema.pre('save',async function(next) {
    if(!this.isModified('password')) return next();
    const salt=await genSalt(10);
    this.password=await hash(this.password,salt);
    next();
})

console.log("models before: ", mongoose.models)
const User = mongoose.models.User || mongoose.model("User", UserSchema);
console.log("mongoose models after: ",mongoose.models)
export default User;
