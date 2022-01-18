import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Link } from 'react-router-dom';
import { ToastContainer, toast , Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import {Link, NavLink} from "react-router-dom"
import {AddToCart, CloseAlert} from "../../redux/action/cart/CartAction"

function DisplayProduct({img, title, price, id, slug, alertMsg}) {
    const dispatch = useDispatch()
    // const cartItems = useSelector(state => state.carts)
    const Cart = useSelector(state => state.carts.cart)
    
    
    const handleCart = () =>{
    let data ={
        img, title, price, id, slug
    }
    dispatch(AddToCart(data))
    
    setTimeout(() => {
        dispatch(CloseAlert())
    }, 200);
    
    let showAlert = Cart.map(alert => alert.alertMsg)

        toast.success( `${showAlert}`, {
            
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
        })
        
    
}

 
    return (

        <div className='product-container'>
            
           
         <>   <ToastContainer draggable={true} autoClose={2000}
         autoClose={1000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         
         position={toast.POSITION.TOP_RIGHT} bodyClassName='toast-success' closeOnClick={true} transition={Slide}   /></>
           <div className='product-box'>
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

export default DisplayProduct
