import dbConnect from "@/lib/mongodb";
// await dbConnect()
import User from "@/models/user";
import jwt from "jsonwebtoken"
import {compare} from "bcryptjs"
import {serialize} from "cookie"


export default async function login(req,res) {
  await dbConnect();

    if (req.method === "POST") {
      try {
        const { email, password ,cart} = req.body;
        console.log("do cart exits",cart)
  
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
          return res.status(400).json({ message: "User not found" });
        }
  
        const isMatch=await compare(password,existingUser.password)
        if(!isMatch){
            res.status(400).json({message:"Invalid Email or Password"})
        }
        console.log("checking if the user is logged in or not",isMatch)

        const updatedCart = Array.isArray(cart) ? [...cart] : [];

        if (updatedCart && Array.isArray(updatedCart)){ updatedCart.forEach((item) => {
          if (typeof item.price === "string") {
            item.price = Number(item.price.replace(/[^0-9.]/g, "")); // Remove non-numeric characters
          }
                  const existingItem = updatedCart.find((cartItem) =>
            cartItem.productId===item.productId
          );
  
          if (existingItem) {
            existingItem.quantity += item.quantity; 
          } else {
            updatedCart.push(item); 
          }
          
        });
        existingUser.cart=updatedCart
        await existingUser.save()
      }

        const token=  jwt.sign({id:existingUser._id,email:existingUser.email},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        )

        res.setHeader("Set-Cookie", serialize("token", token, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production", 
            sameSite: "strict",
            path: "/",
            maxAge:60*60*24
          }));

        return res.status(200).json({
            message: "Login successful",
            token, 
            user: {
              id: existingUser._id,
              email: existingUser.email,
              firstName: existingUser.firstName,
              lastName: existingUser.lastName,
              cart:existingUser.cart || [],
            },
          });

        

      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    } else {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    if(req.method==="PATCH"){

    }
  }