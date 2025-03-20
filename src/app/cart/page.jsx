"use client";

import Cart from "@/components/Cart/Cart";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { updateCart,deleteCart } from "@/Redux/authslice";
import { updateQuantity } from "@/Redux/itemsCartSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import ProductsContainer from "@/components/ProductsContainer";
import CardContainer from "@/components/ProductsSection/CardContainer";
import BestsellerCard from "@/components/Bestseller/BestsellerCard";
import { removeFromCart } from "@/Redux/itemsCartSlice";
// BestsellerCard

const page = () => {
  const token = useSelector((state) => state.auth.token);
  const [userData, setUserData] = useState([]);
  const items = useSelector((state) => state.itemsCart.items);
  const router = useRouter();
  const dispatch = useDispatch();
  const getDataFromCart = async () => {
    try {
      if (token) {
        const decode = jwtDecode(token);

        const userId = decode?.id;

        const response = await axios.get(`http://localhost:3000/api/cart`, {
          params: { userId },
        });
        setUserData(response.data.cart);
        console.log("response from GET API", response);
      }
    } catch (error) {
      console.log("error occured in getting the data", error);
    }
  };

  useEffect(() => {
    getDataFromCart();
  }, []);

  const increment = async (name, quantity) => {
    const newQuantity = quantity + 1;

    // console.log("productId and quantity",productId,newQuantity)
    try {
      if (token) {
        const decode = jwtDecode(token);

        const userId = decode?.id;
        const response = await axios.patch(
          `http://localhost:3000/api/cart/updateCart`,
          { userId, name, quantity: newQuantity }
        );

        // const data = await response.json();
        if (response.status === 200) {
          dispatch(updateCart(response.cart));
          setUserData((prevUserData) =>
            prevUserData.map((item) =>
              item.name === name ? { ...item, quantity: newQuantity } : item
            )
          );
        } else {
          console.error("Error updating cart:", data.message);
        }
      } else {
        dispatch(updateQuantity({ name, quantity: newQuantity }));
      }
    } catch (error) {
      console.error("Failed to update quantity:", error);
    }
  };
  const decrement = async (name, quantity) => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;

      try {
        if (token) {
          const decode = jwtDecode(token);

          const userId = decode?.id;
          const response = await axios.patch(
            `http://localhost:3000/api/cart/updateCart`,
            { userId, name, quantity: newQuantity }
          );

          // const data = await response.json();
          console.log(response, "cart ka response");
          if (response.status === 200) {
            dispatch(updateCart(response.cart));
            setUserData((prevUserData) =>
              prevUserData.map((item) =>
                item.name === name ? { ...item, quantity: newQuantity } : item
              )
            );
          } else {
            console.error("Error updating cart:", data.message);
          }
        } else {
          dispatch(updateQuantity({ name, quantity: newQuantity }));
        }
      } catch (error) {
        console.error("Failed to update quantity:", error);
      }
    }
  };

  const deleteCartItems = async (name) => {
      dispatch(removeFromCart(name));
      try {
        if (token) {
          const decode = jwtDecode(token);
  
          const userId = decode?.id;
          const response = await axios.delete(
            "http://localhost:3000/api/cart/deleteCart",
            {
              data: { userId, name },
            }
          );
          if (response.status === 200) {
            dispatch(deleteCart(name));
            setUserData((prevUserData) =>
              prevUserData.filter((item) => item.name !== name)
            );
            // await getDataFromCart();
            console.log("delete items data is getting invoked")
          } else {
            console.error("Error updating cart:", data.message);
          }
        }
      } catch (error) {
        console.log("error occured", error);
      }
    };

  return (
    <>
    <div className="mainCart h-[80vh] w-full flex justify-center items-center">
      <Cart
        userData={userData}
        items={items}
        token={token}
        increment={increment}
        decrement={decrement}
        router={router}
        deleteCartItems={deleteCartItems}
      />
    </div>
    <div className="curatedSuggesstions">
    <ProductsContainer
              className="h-full"
                title="Curated Suggestions For You"
                subtitle="Designed to pair effortlessly with your favorites."
              >
                <CardContainer
                  renderCard={(product) => (
                    <BestsellerCard key={product.id} product={product}  />
                  )}
                />
              </ProductsContainer>
    </div>
    </>
  );
};

export default page;
