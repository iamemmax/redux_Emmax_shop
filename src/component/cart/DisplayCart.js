import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {increase, decrease, deleteItemFromCart} from "../../redux/action/cart/CartAction"
// import {useNavigate} from "react-router-dom"

// import  *  as ioIcons  from "react-icons/io5"
import  *  as aiIcons  from "react-icons/ai";
import  *  as FaIcons  from "react-icons/fa";


function DisplayCart({img, title, price, qty, id, no}) {
const [count, setCount] = useState(qty);
const dispatch = useDispatch()
    const handleIncrease = () =>{
        setCount(count+1)
        dispatch(increase(id))
     
    }
    

    const handleDecrease = () =>{
        setCount(count-1)
        if(count <= 1){
            dispatch(deleteItemFromCart(id))
           
        }
        
        dispatch(decrease(id))
    }

    // delete item from cart
    const handleDelete = () =>{
        dispatch(deleteItemFromCart(id))
    }
    
    return (
         <>
        
    
        


                <tbody>
                    <tr>
                    <td>{no+1}</td>
                    <td><img src={img} alt={title} /></td>
                    <td>{title?.length > 27 ? title.substr(0, 27) + "..." : title}</td>
                    <td>{price}</td>
                    <td>
                        <button onClick={handleIncrease}><aiIcons.AiOutlinePlus /></button>
                         <input type='text' id='qty' value={count} />
                         <button onClick={handleDecrease}><aiIcons.AiOutlineMinus /></button>
                    </td>
                <td>{`${qty} * ${price} =  `} &#8358;{count * price}</td>
                <td><button onClick={handleDelete}> <FaIcons.FaTrash /></button></td>
                </tr>
                </tbody>

            
            
            
        </> 
            
    )
}

export default DisplayCart
