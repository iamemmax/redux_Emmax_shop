import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DisplayCart from '../cart/DisplayCart';
import "./cart.scss"

function Carts() {
    const cartItem = useSelector(state => state.carts)
    let {loading, cart} = cartItem


   
    return (
        <div className="cart-listing">
            <table>
            {cart.length === 0 && <h2>Shopping Empty</h2>}
            
                <thead>
                    <tr>
                        <td>S/n</td>
                        <td>Img</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Qty</td>
                        <td>Total</td>
                        <td>Remove</td>
                    </tr>
                </thead>
                
            
                

            {cart && cart.map((data, index) =>  <DisplayCart title={data.title} qty={data.qty} key={data.id} price={data.price} img={data.img}  id={data.id} no={index}/> )}
                        
        
            <tfoo>
                <tr>
                    <td>footer</td>
                    {/* <td colSpan={9} style={{border:'2px solid red', width:"100%"}}>grandTotal</td> */}
                </tr>
            </tfoo>
        </table>
        </div>
    )
}

export default Carts