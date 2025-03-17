import dbConnect from "@/lib/mongodb";
import User from "@/models/user";

export default async function updateCart(req,res){
      await dbConnect();

      if(req.method==="PATCH"){
        try {
            // await dbConnect();
        
            const { userId, name, quantity } = req.body;
        
            if (!userId || !name) {
              return res.status(400).json({ message: "Missing required fields" });
            }
        
            const user = await User.findById(userId);
            if (!user) {
              return res.status(404).json({ message: "User not found" });
            }
        
            // Find the cart item
            const cartItem = user.cart.find(
              (item) => item.name === name
            );
        
            if (!cartItem) {
              return res.status(404).json({ message: "Cart item not found" });
            }
        
            // Update quantity
            cartItem.quantity = quantity;
        
            await user.save();
        
            return res.status(200).json({ message: "Cart updated successfully", cart: user.cart });
          } catch (error) {
            console.error("Error updating cart:", error);
            return res.status(500).json({ message: "Server error" });
          }
      }
}