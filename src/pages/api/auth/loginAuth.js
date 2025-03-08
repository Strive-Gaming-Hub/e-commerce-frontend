import dbConnect from "@/lib/mongodb";
import jwt from "jsonwebtoken"
import {parse} from "cookie"
import user from "@/models/user";

export default async function loginAuth(req, res) {
    await dbConnect();
  
    try {
      // ✅ Read the token from cookies
      const cookies = parse(req.headers.cookie || "");
      const token = cookies.token;
  
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      // ✅ Verify JWT Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const existingUser = await user.findById(decoded.id).select("-password"); // Exclude password
  
      if (!existingUser) {
        return res.status(401).json({ message: "User not found" });
      }
  
      return res.status(200).json({ user: existingUser });
    } catch (error) {
      return res.status(401).json({ message: "Invalid Token" });
    }
  }