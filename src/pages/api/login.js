import dbConnect from "@/lib/mongodb";
import user from "@/models/user";
import jwt from "jsonwebtoken"
import {compare} from "bcrypt"
import {serialize} from "cookie"


export default async function login(req,res) {
    await dbConnect();
  
    if (req.method === "POST") {
      try {
        const { email, password } = req.body;
  
        const existingUser = await user.findOne({ email });
        if (!existingUser) {
          return res.status(400).json({ message: "User not found" });
        }
  
        const isMatch=await compare(password,existingUser.password)
        if(!isMatch){
            res.status(400).json({message:"Invalid Email or Password"})
        }
        console.log("checking if the user is logged in or not",isMatch)
  
        const token=jwt.sign({id:existingUser._id,email:existingUser.email},
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
            },
          });

        

      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    } else {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  }