"use client";

import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Cart = ({ userData, items, token, increment, decrement, router, deleteCartItems }) => {
  const [tokenTotalPrice, setTokenTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (token) {
      const tokenPrice = userData.reduce((acc, ele) => {
        const price = ele.price;
        const quantity = ele?.quantity || 1;
        return acc + price * quantity;
      }, 0);

      // const formattedTotalPrice = parseFloat(newTotalPrice.toFixed(2));

      console.log("🔐 Authenticated: Calculated Total Price:", tokenPrice);
      setTokenTotalPrice(tokenPrice);
    } else {
      console.log("🛒 Cart Items:", items); // Debugging log

      const newTotalPrice = items.reduce((acc, ele) => {
        const price =
          ele?.price && typeof ele.price === "string"
            ? parseFloat(ele.price.replace("$", ""))
            : 0;
        const quantity = ele?.quantity || 1;
        return acc + price * quantity;
      }, 0);

      const formattedTotalPrice = parseFloat(newTotalPrice.toFixed(2));

      console.log("🛍️ Guest: Calculated Total Price:", formattedTotalPrice);
      setTotalPrice(formattedTotalPrice);
    }
  }, [userData, token, items]);
  //   console.log("items ki array ",items)
  return (
    <div className="w-full flex justify-center items-center flex-col mt-10">
      {/* Title */}
      <div className="rows lg:w-[50%] md:w-[70%] sm:w-[90%]">
        {userData.length>0 || items.length>0 ? <h2
          className="text-3xl mb-6"
          style={{ fontFamily: "Blacker Pro Display Light" }}
        >
          Your cart
        </h2>:undefined}

        {/* Cart Table */}
        {!token && items.length > 0 ? (
          items.map((ele, index) => (
            <div className="border-b pb-4">
              <div className="grid grid-cols-3 text-gray-600 text-sm font-semibold border-b pb-2">
                <p className="col-span-2">PRODUCT</p>
                <p className="text-right">TOTAL</p>
              </div>

              {/* Cart Item */}
              <div className="grid grid-cols-3 items-center py-4 border-b">
                {/* Product Details */}
                <div className="col-span-2 flex space-x-4">
                  <img
                    src="/collections/2.webp"
                    alt="Dark Beige Midi Dress"
                    className="w-20 h-28 object-cover"
                  />
                  <div>
                    <p className="">{ele.name}</p>
                    <p className="text-gray-500" style={{ fontSize: "0.8rem" }}>
                      COLOR: {ele.color}
                    </p>
                    <p className="text-gray-500" style={{ fontSize: "0.8rem" }}>
                      SIZE: {ele.size}
                    </p>
                  </div>
                </div>

                {/* Quantity & Remove */}
                <div className="flex items-center justify-end space-x-4">
                  <div className="border flex items-center px-2">
                    <button
                      className="px-2"
                      onClick={() =>
                        decrement(ele.name, ele.quantity)
                      }
                    >
                      -
                    </button>
                    <span className="px-3">{ele.quantity}</span>
                    <button
                      className="px-2"
                      onClick={() =>
                        increment(ele.name, ele.quantity)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button className="text-red-500" onClick={()=>deleteCartItems(ele.name)}>
                    <FaTrash  />
                  </button>
                </div>

                {/* Total Price */}
                <p className="col-span-3 text-right">
                  $
                  {(
                    parseFloat(ele.price.replace("$", "")) * ele.quantity
                  ).toFixed(2)}
                </p>
              </div>
            </div>
          ))
        ) : token && userData.length > 0 ? (
          userData.map((ele, index) => (
            <div className="border-b pb-4">
              <div className="grid grid-cols-3 text-gray-600 text-sm font-semibold border-b pb-2">
                <p className="col-span-2">PRODUCT</p>
                <p className="text-right">TOTAL</p>
              </div>

              {/* Cart Item */}
              <div className="grid grid-cols-3 items-center py-4 border-b">
                {/* Product Details */}
                <div className="col-span-2 flex space-x-4">
                  <img
                    src="/collections/2.webp"
                    alt="Dark Beige Midi Dress"
                    className="w-20 h-28 object-cover"
                  />
                  <div>
                    <p className="">Dark Beige Midi Dress</p>
                    <p className="text-gray-500" style={{ fontSize: "0.8rem" }}>
                      COLOR: BEIGE
                    </p>
                    <p className="text-gray-500" style={{ fontSize: "0.8rem" }}>
                      SIZE: XS
                    </p>
                  </div>
                </div>

                {/* Quantity & Remove */}
                <div className="flex items-center justify-end space-x-4">
                  <div className="border flex items-center px-2">
                    <button
                      className="px-2"
                      onClick={() =>
                        decrement(ele.name, ele.quantity)
                      }
                    >
                      -
                    </button>
                    <span className="px-3">{ele.quantity}</span>
                    <button
                      className="px-2"
                      onClick={() =>
                        increment(ele.name, ele.quantity)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button className="text-red-500" onClick={()=>deleteCartItems(ele.name)}>
                    <FaTrash />
                  </button>
                </div>

                {/* Total Price */}
                <p className="col-span-3 text-right">
                  ${tokenTotalPrice.toFixed(2)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="mainSection h-[65%] flex justify-center items-center">
            <div className="rows w-[90%] flex content-center items-center flex-col">
              <div className="bag h-[4rem] w-[3.5rem]">
                <FiShoppingCart className=" h-full w-full" />
              </div>
              <div className="description flex items-center content-center flex-col mt-3">
                <p
                  className="p-3 font-sans"
                  style={{
                    fontSize: "2rem",
                    fontFamily: "futura round regular",
                  }}
                >
                  Your cart is currently empty.
                </p>
                <p
                  className=" text-center"
                  style={{ fontSize: "1.1rem", fontFamily: "futura" }}
                >
                  Browse our carefully curated categories to discover the
                  perfect pieces for your wardrobe.
                </p>
              </div>
              <div className="shop flex items-center content-center flex-col mt-5 gap-3">
                <button
                  className="p-2 hover:bg-black hover:text-white"
                  style={{ border: "2px solid black", fontSize: "0.9rem" }}
                  onClick={() =>
                    categoryData.map((ele) =>
                      ele.name === "Dresses" ? router.push(ele.link) : undefined
                    )
                  }
                >
                  Dresses
                </button>
                <button
                  className="p-2 hover:bg-black hover:text-white"
                  style={{ border: "2px solid black", fontSize: "0.9rem" }}
                  onClick={() =>
                    categoryData.map((ele) =>
                      ele.name === "Tops" ? router.push(ele.link) : undefined
                    )
                  }
                >
                  Tops
                </button>
                <button
                  className="p-2 hover:bg-black hover:text-white"
                  style={{ border: "2px solid black", fontSize: "0.9rem" }}
                  onClick={() =>
                    categoryData.map((ele) =>
                      ele.name === "Outerwear"
                        ? router.push(ele.link)
                        : undefined
                    )
                  }
                >
                  Outer Wears
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Notes Section */}
        { userData.length>0 || items.length>0 ? <div className=" flex justify-center items-center ">
          {/* <div className="mt-6 ">
            <textarea
              className="w-full border p-3 rounded-md bg-gray-100"
              rows="3"
              placeholder="Add notes"
            ></textarea>
          </div> */}

          {/* Subtotal & Checkout */}
          <div className="mt-6 text-right">
            <span className="text-lg flex justify-between items-center">
              <p>Subtotal</p>
              <p>${token ? tokenTotalPrice.toFixed(2) : totalPrice}</p>
            </span>
            <button
              className="bg-black text-white py-5  px-6 mt-4 w-full"
              style={{ fontSize: "0.8rem", fontFamily: "poppins" }}
              onClick={()=> router.push("/checkouts")}
            >
              CHECKOUT
            </button>
            <p className="text-sm text-gray-500 mt-2">
              Tax included and shipping calculated at checkout
            </p>
          </div>
        </div>:undefined}
      </div>
    </div>
  );
};

export default Cart;
