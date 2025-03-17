"use client"

import React, { useState } from 'react'
import {FiArrowDown,FiArrowUp} from "react-icons/fi";
import { useSelector,useDispatch } from 'react-redux';
import {jwtDecode} from "jwt-decode"

const PaySection = () => {
    const [arrow,setArrow]= useState(false)

  return (
    <div className="paySectionLeft w-[50%]">
        <div className="account w-full flex justify-between items-center">
            <span className="">Account</span>
            <button onClick={()=>setArrow(!arrow)}><span className=' w-[1rem] h-[1rem] rounded-lg bg-[#f3f8fb]'> { arrow ? <FiArrowDown/>: <FiArrowUp/>} </span></button>
        </div>
        <div className="email">

        </div>
    </div>
  )
}

export default PaySection