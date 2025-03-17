import CheckoutNavbar from '@/components/Checkout/CheckoutNavbar'
import PaySection from '@/components/Checkout/PaySection'
import React from 'react'

const Checkouts = () => {
  return (
    <div className="checkout w-full">
        <CheckoutNavbar/>
        <div className="checkoutSections w-full flex items-center">
            <div className="leftSection w-1/2 flex justify-end items-center" style={{borderRight:"1px solid #9d9d9d"}}>
<PaySection/>
            </div>
            <div className="rightSection">

            </div>
        </div>
    </div>
  )
}

export default Checkouts