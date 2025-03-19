"use client"
import React,{useEffect,useState} from "react";
import { FiShoppingBag } from "react-icons/fi";

const CheckoutNavbar = () => {



  return (
    <div className="checkoutNav w-full h-[10vh]" style={{borderBottom:"1px solid #9d9d9d"}}>
      <div className="mainNav w-full h-full flex justify-around items-center">
        <span className="heading" style={{fontSize:"1.5rem",fontFamily:"LCT Picon Medium"}}>Ascension Main</span>
        <span className="bag" style={{fontSize:"1.3rem",color:"#1773b7"}}>
          <FiShoppingBag />
        </span>
      </div>
    </div>
  );
};

export default CheckoutNavbar;
