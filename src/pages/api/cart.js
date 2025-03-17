import dbConnect from "@/lib/mongodb";
// await dbConnect()
import User from "@/models/user";

export default async function cartHandler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const { userId } = req.query;
      const userData = await User.findById(userId);
      if (!userData) return res.status(404).json({ message: "User not found" });

      res.status(200).json({ cart: userData.cart });

    } catch (error) {
      console.log("error occured", error);
    }
  }
  if (req.method === "POST") {
    try {
      const { userId, cartData } = req.body;
      console.log(cartData, "cartData in the backend");

      if (!userId || !cartData || !cartData.name) {
        return res
          .status(400)
          .json({ message: "Invalid request. Missing userId or cartData" });
      }

      const user = await User.findById(userId);
      if (!user) return res.status(404).json({ message: "User not found" });

      if(typeof cartData.price === "string") {
        cartData.price = Number(cartData.price.replace(/[^0-9.]/g, ""));
      }

      // Check if item already exists in cart
      if (user.cart.length > 0) {
        let existingItem = user.cart.find((item) => {
          
           item.name === cartData.name;
        });
        // console.log(existingItem,"existing item")
        if (existingItem) {
          existingItem.quantity += cartData.quantity;
        }
      } else {
        user.cart.push(cartData);
      }
      user.markModified("cart");

      await user.save();
      console.log("cart in the user", user.cart);
      res.json({ cart: user.cart });
    } catch (error) {
      console.log("error occured", error);
    }
  }
  //   if (req.method === "DELETE") {
  //     // Remove item from cart
  //     const { userId, productId } = req.body;
  //     const user = await User.findById(userId);
  //     if (!user) return res.status(404).json({ message: "User not found" });

  //     user.cart = user.cart.filter((item) => !item.productId.equals(productId));
  //     await User.save();
  //     res.json({ cart: user.cart });
  //   }
}

// export const fetchCartOnLogin=async(userId,dispatch)=>{
//     try {
//         const response=await axios.get(`/api/cart/${userId}`)
//         dispatch(setCart(response.data.cart))
//         dispatch(updateCart(response.data.cart))
//     } catch (error) {
//         console.log("error occured",error)
//     }
// }
