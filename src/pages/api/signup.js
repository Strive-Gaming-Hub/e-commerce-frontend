import dbConnect from "@/lib/mongodb";
// await dbConnect()
import User from "@/models/user";

export default async function signup(req,res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { firstName, lastName, email, password } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password,
      });

      return res.status(201).json({
        message: "User created successfully",
        user: newUser,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
