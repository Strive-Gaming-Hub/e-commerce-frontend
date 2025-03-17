import dbConnect from "@/lib/mongodb";
import User from "@/models/user";

export default async function deleteCart(req, res) {
  await dbConnect();

  if (req.method === "DELETE") {
    try {
      const { userId, name } = req.body;
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: "Cart not found" });
      }

      user.cart = user.cart.filter((item) => item.name !== name);
      await user.save();

      res.status(200).json({ message: "Item removed successfully", cart:user.cart });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });

    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
