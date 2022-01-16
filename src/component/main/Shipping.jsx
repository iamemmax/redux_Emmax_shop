import React from 'react'
import "./css/shipping.scss"
import  *  as faIcions  from "react-icons/fa"
import  *  as bsIcions  from "react-icons/bs"


function Shipping() {
    return (
        <div className='shipping-container'>
           <div className="ship1">

               <div className="icon">
               <faIcions.FaMapMarkerAlt/>
               </div>
               <h2>Worldwide Delivery</h2>
               <p>With sites in 5 languages, we ship to over 5 countries & regions.</p>
           </div>
           <div className="ship2">
           <div className="icon">
               <faIcions.FaShippingFast/>
               </div>
               <h2>Best Quality</h2>
               <p>We are known for shipping quality foods.</p>
           </div>
           <div className="ship3">
               <div className="icon">
                   <bsIcions.BsShieldFillCheck  className=''/>
               </div>
               <h2>Shop with Confidence</h2>
               <p>Our Buyer Protection covers your purchase from click to delivery.</p>
           </div>
           <div className="ship4">
               <div className="icon">
                   <faIcions.FaCcMastercard/>
               </div>
               <h2>Pecure Payment</h2>
               <p>Pay with the world’s most popular and secure payment methods.</p>
           </div>
        </div>
    )
}

export default Shipping
