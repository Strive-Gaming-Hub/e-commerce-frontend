import { serialize } from "cookie";

export default function logoutAuth(req, res) {
  res.setHeader("Set-Cookie", serialize("token", "", {
    httpOnly: true,
    // secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0, // ✅ Expire cookie
  }));
  res.status(200).json({ message: "Logged out" });
}