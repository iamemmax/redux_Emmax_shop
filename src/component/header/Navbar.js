import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {NavLink, Link,  Navigate} from "react-router-dom"
import {searchProduct} from "../../redux/action/product/productAction"
import {LogoutUser} from "../../redux/action/user/user"
import OutsideClickHandler from 'react-outside-click-handler';
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
let cartNo = cartN.reduce((a, b) => a + b, 0)


// console.log(cartB);



const [header, setHeader] = useState(false);

    
const handleLogout = () =>{
    if (window.confirm("Are you sure you want to logout?")) {
        dispatch(LogoutUser())
       
      }
}



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



// fixed header on scroll
const fixedHeaderBar = (e) =>{
    if(window.pageYOffset > 80){
      
        setHeader(true)
    }else{
        setHeader(false)
    }
}
window.addEventListener("scroll", fixedHeaderBar)




    return (
        <div className={header ? 'header fixed' : 'header'}>
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
                       <OutsideClickHandler onOutsideClick={() =>{setToggleRightBar(false)}}>

            
            <div className={toggleRightBar ? 'rightBar showRightBar' : 'rightBar'} id='rightBarBox' >
                <li><Link to="/">My Account</Link></li>
                <li><Link to="/product/new">Add Product</Link></li>
                <li><Link to="/">My Order</Link></li>
                <li><Link to="/">My Wishlist</Link></li>
                <li onClick={handleLogout} id='logoutBtn' >Logout </li>
                
             </div>  
                            
             <p className=' toggle-right text-light' id='toggle_right_icon' onClick={()=>setToggleRightBar(!toggleRightBar)}>{user && user.username.toUpperCase().slice(0, 1)}</p>
            </OutsideClickHandler>
                       </>
                    :
                    <>
                    <li><NavLink to="/user/login">Login</NavLink></li>

                    </>
                }
                
               
                <li><NavLink to="/cart"><ioIcions.IoCartOutline  id='icon'/><span id='cartNo'>{cartNo && cartNo}</span></NavLink></li>

                   </ul>
            </nav>

          

            

        </div>
    )
}

export default Navbar
