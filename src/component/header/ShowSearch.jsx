import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {AddToCart, CloseAlert} from "../../redux/action/cart/CartAction"


const ShowSearch = ({img, title, price, slug, id}) => {
    const dispatch = useDispatch()
    //const  =  => .carts)
    const [showMsg, setShowMsg] = useState(false);
    const handleCart = () =>{
    let data ={
        img, title, price, id, slug
    }
    dispatch(AddToCart(data))

    setTimeout(() => {
        dispatch(CloseAlert())
    }, 2000);

    setShowMsg(true)    
    setTimeout(() => {
        setShowMsg(false)
    }, 1000);
}
const Cart = useSelector(state => state.carts.cart)
    let showAlert = Cart.map(alert => alert.alertMsg)
    return (
        <div className='product-container'>
            <span className={ showMsg ?'cartMsg showMsg' : 'cartMsg'}> {showAlert}</span>
           
           <div className='product-box '>
               <Link to={`/product/${slug}`}>
                <div>

                <img src={img} alt={title}/>
                <div className='productinfo'>
                <h2>{title?.length > 23 ? title.substr(0, 23) + "..." : title  }</h2>
                
                <p>&#8358; {price}</p>
                </div>
               </div>
               </Link>
                <button onClick={handleCart}>Add to cart</button>
           </div>
         
         </div>
    )
}

export default ShowSearch
