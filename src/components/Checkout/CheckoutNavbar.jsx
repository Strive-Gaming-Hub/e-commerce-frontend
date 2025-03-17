import React from "react";
import { FiShoppingBag } from "react-icons/fi";

const CheckoutNavbar = () => {
  return (
    <div className="checkoutNav w-full h-[10vh]" style={{borderBottom:"1px solid #9d9d9d"}}>
      <div className="mainNav w-full h-full flex justify-around items-center">
        <span className="heading font-semibold">Ascension Main</span>
        <span className="bag">
          <FiShoppingBag />
        </span>
      </div>
    </div>
  );
};

export default CheckoutNavbar;
