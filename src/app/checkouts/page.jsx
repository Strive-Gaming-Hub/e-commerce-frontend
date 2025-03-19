"use client";
import CheckoutNavbar from "@/components/Checkout/CheckoutNavbar";
import ItemsSection from "@/components/Checkout/ItemsSection";
import PaySection from "@/components/Checkout/PaySection";
import React, { useState, useEffect } from "react";
// import { jwtDecode } from 'jwt-decode'

const Checkouts = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="checkout w-full min-h-screen">
      <CheckoutNavbar />
      <div className="checkoutSections h-full w-full lg:flex md:block">
        <div className="leftSection lg:w-[55%] md:w-full sm:w-full flex lg:justify-end md:justify-center sm:justify-center items-center h-full">
          <PaySection />
        </div>
        <p
          className=" lg:hidden flex justify-center items-center"
          style={{ fontSize: "2rem", fontFamily: "LCT Picon Medium" }}
        >
          Order Summary
        </p>
        <div className="rightSection lg:ml-5 lg:w-[45%] md:w-full flex lg:justify-start justify-center  lg:bg-gray-100 md:bg-white lg:relative">
          <div
            className={`w-full lg:${
              isFixed ? "fixed top-0" : "relative"
            } flex lg:justify-start justify-center lg:items-start items-center`}
          >
            <ItemsSection />
          </div>
        </div>
        <div className="payBtn w-[50%] flex justify-center items-center mx-auto lg:hidden mb-5">
          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 lg:hidden flex justify-center items-center">
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkouts;
