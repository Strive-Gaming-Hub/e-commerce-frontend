"use client";

import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const ItemsSection = () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const [tokenTotalPrice,setTokenTotalPrice]=useState(0)
  const items = useSelector((state) => state.itemsCart.items);
  const [userData, setUserData] = useState([]);

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

  useEffect(()=>{
      if (token) {
        const tokenPrice = userData.reduce((acc, ele) => {
          const price=ele.price
                    const quantity = ele?.quantity || 1;
          return acc + price * quantity;
        }, 0);
  
        // const formattedTotalPrice = parseFloat(newTotalPrice.toFixed(2));
    
        console.log("🔐 Authenticated: Calculated Total Price:", tokenPrice);
        setTokenTotalPrice(tokenPrice);
      } 
    },[userData,token])

  return (
    <div className="w-[70%] p-6 rounded-lg lg:min-h-screen md:h-[40vh]">
      {/* <!-- Product List --> */}
      <div className="space-y-4">
        {/* <!-- Item 1 --> */}
        {!token && items.length > 0 ? (
          items.map((ele, index) => (
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src="/collections/2.webp"
                      alt="Black Cigarette Pants"
                      className="w-12 h-16 rounded"
                    />
                    <span className="absolute -top-2 -left-2 bg-gray-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {ele.quantity}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium" style={{fontFamily:"Noyh Slim SemiLight"}}>{ele.name}</p>
                    <p className="text-gray-500 text-sm">{ele.size}</p>
                  </div>
                </div>
                <p className="font-medium">{ele.price}</p>
              </div>
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between text-sm my-3">
                  <p>Subtotal · {ele.quantity} items</p>
                  <p className="font-medium">${(parseFloat(ele.price.replace("$", ""))*ele.quantity).toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p>Shipping</p>
                  <p className="font-medium">FREE</p>
                </div>
              </div>

              {/* <!-- Total --> */}
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">Total</p>
                  <p className="text-lg font-semibold">
                    USD <span className="text-2xl">${(parseFloat(ele.price.replace("$", ""))*ele.quantity).toFixed(2)}</span>
                  </p>
                </div>
                <p className="text-gray-500 text-sm mt-1">
                  Including $44.88 in taxes
                </p>
              </div>
            </div>
          ))
        ) :(
          userData.map((ele, index) => (
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src="/collections/2.webp"
                      alt="Black Cigarette Pants"
                      className="w-12 h-16 rounded"
                    />
                    <span className="absolute -top-2 -left-2 bg-gray-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {ele.quantity}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium" style={{fontFamily:"Noyh Slim SemiLight"}}>{ele.name}</p>
                    <p className="text-gray-500 text-sm">{ele.size}</p>
                  </div>
                </div>
                <p className="font-medium">${ele.price}</p>
              </div>
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between text-sm my-3">
                  <p>Subtotal · {ele.quantity} items</p>
                  <p className="font-medium">${tokenTotalPrice.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p>Shipping</p>
                  <p className="font-medium">FREE</p>
                </div>
              </div>

              {/* <!-- Total --> */}
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">Total</p>
                  <p className="text-lg font-semibold">
                    USD <span className="text-2xl">${tokenTotalPrice.toFixed(2)}</span>
                  </p>
                </div>
                <p className="text-gray-500 text-sm mt-1">
                  Including $44.88 in taxes
                </p>
              </div>
            </div>
          ))
        )}

        {/* <!-- Item 2 --> */}
        {/* <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
                <div class="relative">
                    <img src="https://via.placeholder.com/50" alt="Black Glitter Evening Pants" class="w-12 h-16 rounded"/>
                    <span class="absolute -top-2 -left-2 bg-gray-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">1</span>
                </div>
                <div>
                    <p class="font-medium">Black Glitter Evening Pants</p>
                    <p class="text-gray-500 text-sm">Black / XS</p>
                </div>
            </div>
            <p class="font-medium">$112.60</p>
        </div> */}
      </div>

      {/* <!-- Summary Section --> */}
    </div>
  );
};

export default ItemsSection;
