import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  toggleBar,
  updateQuantity,
} from "@/Redux/itemsCartSlice";
import { FiShoppingBag, FiShoppingCart, FiDelete } from "react-icons/fi";
import { useRouter } from "next/navigation";
import categoryData from "../Categories/categoryData";
import { updateCart,deleteCart } from "@/Redux/authslice";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import ProductsContainer from "../ProductsContainer";
import CardContainer from "../ProductsSection/CardContainer";
import BestsellerCard from "../Bestseller/BestsellerCard";

const ItemsBar = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const items = useSelector((state) => state.itemsCart.items);
  const token = useSelector((state) => state.auth.token);
  const router = useRouter();
  const [totalPrice,setTotalPrice]=useState(0)
  const [tokenTotalPrice,setTokenTotalPrice]=useState(0)

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
      }
      else{
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
        }
        else{
          dispatch(updateQuantity({ name, quantity: newQuantity }));

        }
      } catch (error) {
        console.error("Failed to update quantity:", error);
      }
    }
  };
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
  },[userData,token,items])
  
  return (
    <div className="itemsBar">
      <div className="text-center">
        <button
          className="text-black bg-white hover:bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >
          Cart
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 lg:w-[25vw] md:w-[40vw] sm:w-60vw h-full bg-white z-50 transform transition-transform duration-300 ease-in-out 
  `}
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
        }}
      >
        <div className="cartHeader h-[3rem] flex items-center content-center">
          <h3
            id="drawer-right-label"
            className="inline-flex text-base text-black font-serif"
            style={{
              fontSize: "1.3rem",
              paddingLeft: "1rem",
              fontFamily: "futura",
            }}
          >
            Cart
          </h3>
          <span className=" bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center p-3 ml-3">
            {items.length}
          </span>
          <button
            type="button"
            data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => dispatch(toggleBar())}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div className="mark w-full flex items-center justify-center mb-4  overflow-hidden">
          <marquee
            className="w-full bg-white py-4 text-gray-800 text-lg whitespace-nowrap"
            behavior="scroll"
            direction="left"
            scrollamount="5"
            loop="infinite"
          >
            Black Friday Sale: Up to 50% Off. Code: FUEL2025 &nbsp;&nbsp;&nbsp;{" "}
            <span className="text-[#A55353]">✦</span> &nbsp;&nbsp;&nbsp; Black
            Friday Sale: Up to 50% Off. Code: FUEL2025 &nbsp;&nbsp;&nbsp;{" "}
            <span className="text-[#A55353]">✦</span> &nbsp;&nbsp;&nbsp; Black
            Friday Sale: Up to 50% Off. Code: FUEL2025 &nbsp;&nbsp;&nbsp;{" "}
            <span className="text-[#A55353]">✦</span> &nbsp;&nbsp;&nbsp;
          </marquee>
        </div>

        {!token && items.length > 0 ? (
          <div className="itemsSection w-full flex justify-around items-center flex-col h-[60vh] overflow-y-scroll scrollbar-hide">
            <div className="itemRows w-full">
              {items.map((ele, index) => (
                <div>
                  <div className="dataField h-[1.5rem] w-full flex content-around items-center px-3">
                    <div className="dataImage w-1/3">
                      <img src="/collections/2.webp" width="60%" height="80%" />
                    </div>
                    <div className="dataDesc w-1/3 flex content-start items-start flex-col">
                      <div className="dataDescName">{ele?.name}</div>
                      <div
                        className="dataDiscSize font-light mt-2"
                        style={{ fontSize: "0.8rem" }}
                      >
                        {ele?.color},{ele?.size}
                      </div>
                      <div className="counterBin flex content-between items-center gap-4 mt-2">
                        <div
                          className="counterBtn px-2 w-[4rem] rounded-xl flex content-between items-center"
                          style={{ border: "1px solid gray" }}
                        >
                          <button
                            onClick={() => decrement(ele.name, ele.quantity)}
                          >
                            -
                          </button>
                          <span
                            className="mx-auto"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {ele.quantity}
                          </span>
                          <button
                            onClick={() => increment(ele.name, ele.quantity)}
                          >
                            +
                          </button>
                        </div>
                        <FiDelete
                          style={{ color: "#f16262", cursor: "pointer" }}
                          onClick={() => deleteCartItems(ele.name)}
                        />
                      </div>
                    </div>
                    <div className="dataprice w-1/3 flex content-end items-end">
                      <p className="mx-auto">${(parseFloat(ele.price.replace("$", ""))*ele.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="like w-full mt-10 h-[30vh]">
              <ProductsContainer
              className="h-full"
                highlightText="You may also like"
                subtitle="Combine Your Styles With These Products"
              >
                <CardContainer
                  renderCard={(product) => (
                    <BestsellerCard key={product.id} product={product} />
                  )}
                />
              </ProductsContainer>
            </div>
          </div>
        ) : token && userData.length > 0 ? (
          <div className="itemsSection w-full flex justify-around items-center flex-col h-[60vh] overflow-y-scroll scrollbar-hide">
            <div className="itemRows w-full">
              {userData.map((ele, index) => (
                <div className="dataField h-[1.5rem] w-full flex content-around items-center px-3">
                  <div className="dataImage w-1/3">
                    <img src="/collections/2.webp" width="60%" height="80%" />
                  </div>
                  <div className="dataDesc w-1/3 flex content-start items-start flex-col">
                    <div className="dataDescName">{ele?.name}</div>
                    <div
                      className="dataDiscSize font-light mt-2"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {ele?.color},{ele?.size}
                    </div>
                    <div className="counterBin flex content-between items-center gap-4 mt-2">
                      <div
                        className="counterBtn px-2 w-[4rem] rounded-xl flex content-between items-center"
                        style={{ border: "1px solid gray" }}
                      >
                        <button
                          onClick={() => decrement(ele.name, ele.quantity)}
                        >
                          -
                        </button>
                        <span
                          className="mx-auto"
                          style={{ fontSize: "0.8rem" }}
                        >
                          {ele.quantity}
                        </span>
                        <button
                          onClick={() => increment(ele.name, ele.quantity)}
                        >
                          +
                        </button>
                      </div>
                      <FiDelete
                        style={{ color: "#f16262", cursor: "pointer" }}
                        onClick={() => deleteCartItems(ele?.name)}
                      />
                    </div>
                  </div>
                  <div className="dataprice w-1/3 flex content-end items-end">
                    <p className="mx-auto">${tokenTotalPrice.toFixed(2)}</p>
                  </div>
                </div>
              ))}
              <div className="like w-full mt-10 h-[30vh]">
              <ProductsContainer
              className="h-full"
                highlightText="You may also like"
                subtitle="Combine Your Styles With These Products"
              >
                <CardContainer
                  renderCard={(product) => (
                    <BestsellerCard key={product.id} product={product} />
                  )}
                />
              </ProductsContainer>
            </div>
            </div>
          </div>
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
        
        { userData.length>0 || items.length>0 ? <div className="checkout p-5 w-full fixed bottom-0 h-[20vh] bg-white flex content-center items-center flex-col gap-3" style={{borderTop:"0.1rem solid #9d9d9d"}}>
          <div className="subtotal flex justify-between items-center w-full p-1">
            <p style={{ fontSize: "0.85rem", fontFamily: "poppins" }}>
              SUBTOTAL
            </p>
            <p style={{ fontSize: "0.85rem", fontFamily: "poppins" }}>${token?tokenTotalPrice.toFixed(2): totalPrice}</p>
          </div>
          <p
            className="mt-5"
            style={{
              fontSize: "0.8rem",
              color: "#9d9d9d",
              fontFamily: "poppins",
            }}
          >
            Tax included and shipping calculated at checkout
          </p>
          <button
            className=" p-3 w-full bottom-3"
            style={{
              backgroundColor: "#a55353",
              color: "white",
              fontFamily: "roberto",
              fontSize: "0.8rem",
            }}
            onClick={()=> router.push("/checkouts")}
          >
            CHECKOUT
          </button>
        </div> : undefined }
      </div>
    </div>
  );
};

export default ItemsBar;
