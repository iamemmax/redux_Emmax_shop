import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {NavLink, Link, useNavigate, Navigate} from "react-router-dom"
import {searchProduct} from "../../redux/action/product/productAction"
import {LogoutUser} from "../../redux/action/user/user"
import "../header/header.scss"
import  *  as ioIcions  from "react-icons/io5"
import  *  as aiIcions  from "react-icons/ai";



function Navbar() {
    const dispatch = useDispatch()
    const Cart = useSelector(state => state.carts)
    const auth = useSelector(state => state.loggin.userInfo)
    let {isAuthenticated, user} = auth
    // const location = useLocation()

    // total cart no
let { cart} = Cart
let cartN = cart && cart.map(data => data.qty)
let cartNo = cartN.reduce((a, b) => a + b)


// console.log(cartB);



const [header, setHeader] = useState(false);

    
const handleLogout = () =>{
    if (window.confirm("Are you sure you want to logout?")) {
        dispatch(LogoutUser())
        // window.location = "/"
       
      }
}

// fixed header on scroll
const fixedHeaderBar = (e) =>{
    if(window.pageYOffset > 100){
        setHeader(true)
    }else{
        setHeader(false)
    }
}
window.addEventListener("scroll", fixedHeaderBar)


const [search, setSearch] = useState('');
const [query, setQuery] = useState('');
const [toggleRightBar, setToggleRightBar] = useState(null);
const handleSearch = (e) =>{
    setSearch(e.target.value)
}
// const navigate = useNavigate()
const handleForm = (e)=>{
    e.preventDefault()
    setQuery(search)
    setSearch("")
if(query){
    Navigate(`/search/?q=${query}`)
    console.log(query);
    dispatch(searchProduct(query))
    
}
}



// show dashboard bar
const handleToggleRightBar = (e) =>{
    setToggleRightBar(!toggleRightBar)
   
}


    return (
        <div className={header ? 'header fixedHeader' : 'header'}>
            <nav>
                <div className="logo">
                    <h1><Link to="/">Emmax</Link></h1>
                </div>
                {/* search bar */}
                <div className='search-box'>
                    <form >
                    <input type='text' name='search' onChange={handleSearch}   placeholder='search anything here ....'/>
                    <button  onClick={ handleForm}><aiIcions.AiOutlineSearch  id='icon-search'/></button>
                    </form>
                </div>
               
                   
                   <ul className='last-nav'>
                       {auth && isAuthenticated  ?
                       <>
                       
                            {/* <img src={user.userImg[0]} alt='profile Img' /> */}
                            <p className=' toggle-right text-light' onClick={handleToggleRightBar}>{user && user.username}</p>
                       </>
                    :
                    <>
                    <li><NavLink to="/user/login">Login</NavLink></li>

                    </>
                }
                
               
                <li><NavLink to="/cart"><ioIcions.IoCartOutline  id='icon'/><span id='cartNo'>{cartNo && cartNo}</span></NavLink></li>

                   </ul>
            </nav>


            <div className={toggleRightBar ? 'rightBar showRightBar' : 'rightBar'} >
                <li><Link to="/">My Account</Link></li>
                <li><Link to="/product/new">Add Product</Link></li>
                <li><Link to="/">My Order</Link></li>
                <li><Link to="/">My Wishlist</Link></li>
                <li onClick={handleLogout} id='logoutBtn' >Logout </li>
                
             </div>  
        </div>
    )
}

export default Navbar
