import React from "react";
import { useDispatch } from "react-redux";
import { toggleBar } from "@/Redux/itemsCartSlice";
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { useRouter } from "next/navigation";
import categoryData from "../Categories/categoryData";

const ItemsBar = () => {
  const dispatch = useDispatch();
  const router=useRouter()
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
        className={`fixed top-0 right-0 lg:w-[25vw] md:w-[40vw] sm:w-60vw h-full bg-white z-50 transform transition-transform duration-300 
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
            style={{ fontSize: "1.3rem", paddingLeft: "1rem",fontFamily:"futura" }}
          >
            Cart
          </h3>
          <span className=" bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center p-3 ml-3">
            0
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
        <div className="mark w-full flex items-center justify-center mb-8  overflow-hidden">
          <marquee
            className="w-full bg-white py-8 text-gray-800 text-lg whitespace-nowrap"
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

        <div className="mainSection h-[65%] flex justify-center items-center">
          <div className="rows w-[90%] flex content-center items-center flex-col">
            <div className="bag h-[4rem] w-[3.5rem]">
              <FiShoppingCart className=" h-full w-full" />
            </div>
            <div className="description flex items-center content-center flex-col mt-3">
              <p className="p-3 font-sans" style={{fontSize:"2rem",fontFamily:"futura round regular"}}>Your cart is currently empty.</p>
              <p className=" text-center" style={{fontFamily:"futura"}}>
                Browse our carefully curated categories to discover the perfect
                pieces for your wardrobe.
              </p>
            </div>
            <div className="shop flex items-center content-center flex-col mt-5 gap-3">
              <button
                className="p-2 hover:bg-black hover:text-white"
                style={{ border: "2px solid black", fontSize: "0.9rem" }}
                onClick={()=> categoryData.map((ele)=>ele.name==="Dresses"? router.push(ele.link):undefined)}
              >
                Dresses
              </button>
              <button
                className="p-2 hover:bg-black hover:text-white"
                style={{ border: "2px solid black", fontSize: "0.9rem" }}
                onClick={()=> categoryData.map((ele)=>ele.name==="Tops"? router.push(ele.link):undefined)}
              >
                Tops
              </button>
              <button
                className="p-2 hover:bg-black hover:text-white"
                style={{ border: "2px solid black", fontSize: "0.9rem" }}
                onClick={()=> categoryData.map((ele)=>ele.name==="Outerwear"? router.push(ele.link):undefined)}
              >
                Outer Wears
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsBar;
