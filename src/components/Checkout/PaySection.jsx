"use client";

import React, { useEffect, useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

const PaySection = ({userData}) => {
  const [arrow, setArrow] = useState(false);
  const [userEmail,setUserEmail]=useState("")



  const token=useSelector(state=>state.auth.token)
  useEffect(()=>{
    if(token) {const decoded=jwtDecode(token)
  
      setUserEmail(decoded.email)
    }
  },[token])
    
  // console.log("is user there?", user);
  return (
    <div className="paySectionLeft lg:w-[60%] m-5 gap-5">
      {userData.length>0 ? (
        <div>
        <div
          className="account w-full flex justify-between items-center"
          style={{ borderBottom: "1px solid #9d9d9d" }}
        >
          <span className=" my-3" style={{fontFamily:"LCT Picon Medium",fontSize:"1.7rem",marginTop:"1rem"}}>Account</span>
          <button onClick={() => setArrow(!arrow)}>
            <span className=" w-[1rem] h-[1rem] rounded-lg bg-[#f3f8fb]">
              {" "}
              {arrow ? <FiArrowDown /> : <FiArrowUp />}{" "}
            </span>
          </button>
        </div>
        <p style={{fontFamily:"LCT Picon Medium"}}>{userEmail}</p> 
        {userData && arrow ? <button style={{ color: "#1773b7",margin:"1.2rem 0" }}>Log Out</button> : undefined}

        </div>
      ) : (
        <div>
        <div
          className="loginDetails w-full flex justify-between items-center"
        >
          <span className="" style={{fontFamily:"LCT Picon Medium",fontSize:"1.7rem"}}>Contact</span>
          <button onClick={() => setArrow(!arrow)}>
            <span className=" w-[1rem] h-[1rem] rounded-lg bg-white" style={{color:"#1773b7"}}>
              {" "}
              Log in
            </span>
          </button>
        </div>
        <input type="text" placeholder="Email or Mobile Phone No." style={{border:"1px solid #9d9d9d",borderRadius:"0.8rem",width:"100%",padding:"0.8rem",marginTop:"1rem"}}  />
        </div>
      )}
      {/* <span style={{fontFamily:"LCT Picon Medium",fontSize:"1.7rem"}}>Delivery</span> */}
      <h3 style={{fontFamily:"LCT Picon Medium",fontSize:"1.7rem",marginTop:"1rem"}}>Delivery</h3>
      <div className="mb-4 mt-5">
            <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer">
                <input type="radio" name="delivery" defaultChecked className="hidden"/>
                <span className="w-5 h-5 border-2 border-blue-500 rounded-full flex items-center justify-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                </span>
                Ship
            </label>

            <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer mt-2">
                <input type="radio" name="delivery" className="hidden"/>
                <span className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center"></span>
                Pickup in store
            </label>
        </div>

        {/* <!-- Country Dropdown --> */}
        <label className="block text-gray-700 text-sm mb-1">Country/Region</label>
        <select className="w-full p-2 border rounded-lg mb-4">
            <option>Türkiye</option>
            <option>United States</option>
            <option>United Kingdom</option>
        </select>

        {/* <!-- Name Fields --> */}
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-gray-700 text-sm mb-1">First name (optional)</label>
                <input type="text" placeholder="First Name" className="w-full p-2 border rounded-lg"/>
            </div>
            <div>
                <label className="block text-gray-700 text-sm mb-1">Last name</label>
                <input type="text" placeholder="Last Name" className="w-full p-2 border rounded-lg"/>
            </div>
        </div>

        {/* <!-- Address Fields --> */}
        <label className="block text-gray-700 text-sm mt-4 mb-1">Address</label>
        <input type="text" className="w-full p-2 border rounded-lg mb-4" placeholder="Street, Building, etc."/>

        <label className="block text-gray-700 text-sm mb-1">Apartment, suite, etc. (optional)</label>
        <input type="text" className="w-full p-2 border rounded-lg mb-4" placeholder="Apartment, Suite"/>

        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-gray-700 text-sm mb-1">Postal code (optional)</label>
                <input type="text" className="w-full p-2 border rounded-lg"/>
            </div>
            <div>
                <label className="block text-gray-700 text-sm mb-1">City</label>
                <input type="text" className="w-full p-2 border rounded-lg"/>
            </div>
        </div>

        {/* <!-- Shipping Method --> */}
        <h3 className="text-lg font-semibold mt-6 mb-2">Shipping method</h3>
        <div className="flex justify-between p-3 border rounded-lg bg-blue-50">
            <span>Standard</span>
            <span className="font-semibold">FREE</span>
        </div>
        <h2 className="text-lg font-semibold">Payment</h2>
        <p className="text-sm text-gray-500 mb-4">All transactions are secure and encrypted.</p>

        {/* <!-- Payment Option --> */}
        <div className="flex items-center justify-between p-3 border rounded-lg bg-blue-50">
            <span className="font-medium">Credit card</span>
            <button className="bg-orange-300 p-2 rounded-md">B</button>
        </div>

        {/* <!-- Card Input Fields --> */}
        <div className="mt-4 space-y-3  bg-gray-100 p-3 rounded-lg">
            <div className="relative">
                <input type="text" className="w-full p-3 border rounded-lg" placeholder="Card number"/>
                <span className="absolute right-3 top-3 text-gray-500">🔒</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <input type="text" className="w-full p-3 border rounded-lg" placeholder="Expiration date (MM / YY)"/>
                <div className="relative">
                    <input type="text" className="w-full p-3 border rounded-lg" placeholder="Security code"/>
                    <span className="absolute right-3 top-3 text-gray-500">❓</span>
                </div>
            </div>

            <div className="relative">
                <input type="text" className="w-full p-3 border rounded-lg" value="Kunal bhardwaj" readOnly/>
                <button className="absolute right-3 top-3 text-gray-500">❌</button>
            </div>

            {/* <!-- Checkbox for Billing Address --> */}
            <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-gray-300 text-blue-600"/>
                Use shipping address as billing address
            </label>
        </div>

        {/* <!-- Pay Now Button --> */}
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg mt-6 hover:bg-blue-700 lg:block hidden">Pay now</button>
    </div>
  );
};

export default PaySection;
