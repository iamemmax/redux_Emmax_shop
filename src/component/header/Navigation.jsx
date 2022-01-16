import React, { useState } from 'react'
import  *  as ioIcions  from "react-icons/io5"
import  *  as aiIcions  from "react-icons/ai";
import  *  as faIcions  from "react-icons/fa";
import  *  as HiIcions  from "react-icons/hi";
import "../banner/banner.scss"
import { useLocation } from 'react-router-dom';


function Navigation() {

    const [toggle, setToggle] = useState(null);
    const [removeToggle, setRemoveToggle] = useState(false);
  const location = useLocation()


const handleToggle = (e) =>{

    if( e.target.id == "menuIcon"){
        setToggle(!toggle)
        setRemoveToggle(true)
    }else{
        setRemoveToggle(null)
    }
    
}



const handleRemove = () =>{
    setRemoveToggle(false)
    setToggle(false)
}

;

    return (
        <>
        {window.location.pathname === "/" &&
        <div className={ toggle  ? "leftNav showNav" : "leftNav"}>
           
                <nav>
                    
                    <ul className='ul'>
                <li><a href="#"> <faIcions.FaBaby  id='faIcon'/> Babies</a></li>
                <li><a href="#">< faIcions.FaTv id='faIcon'/>ComputerLine Electronics</a></li>
                <li><a href="#"><faIcions.FaChair id='faIcon'/> Home & Office</a></li>
                <li><a href="#"><faIcions.FaShoppingBag id='faIcon'/> Fashion</a></li>
                <li><a href="#"><faIcions.FaTruckMonster id='faIcon'/> Automobile</a></li>
                <li><a href="#"><faIcions.FaUtensilSpoon id='faIcon'/>Kitchen</a></li>
                <li><a href="#"><faIcions.FaTshirt id='faIcon'/> Supermarket</a></li>
                <li><a href="#"><faIcions.FaMobileAlt id='faIcon'/> Phone & Accessories</a></li>
                <li><a href="#"><faIcions.FaThermometerThreeQuarters id='faIcon'/> Health and Beauty</a></li>
                <li><a href="#"><faIcions.FaDesktop id='faIcon'/> Computer & Accessories</a></li>
            
                

                    </ul>
                </nav>

             
            </div>
}

           
                <div className={window.location.pathname === "/" ? ' menu hideBar' : " menu toggleGenNav"}  onClick={handleToggle}><aiIcions.AiOutlineMenu id='menuIcon'/></div>
        <div className={removeToggle ? "removeOnlick showRemove" : "removeOnlick"} onClick={handleRemove}></div>
        

        


       
            {window.location.pathname !== "/" && 
                <nav className={ toggle ?  'generalNav showGeneralNav' : ' generalNav'}>
                    

                    <ul className=''>
                <li><a href="#"> <faIcions.FaBaby  id='faIcon'/> Babies</a></li>
                <li><a href="#">< faIcions.FaTv id='faIcon'/>ComputerLine Electronics</a></li>
                <li><a href="#"><faIcions.FaChair id='faIcon'/> Home & Office</a></li>
                <li><a href="#"><faIcions.FaShoppingBag id='faIcon'/> Fashion</a></li>
                <li><a href="#"><faIcions.FaTruckMonster id='faIcon'/> Automobile</a></li>
                <li><a href="#"><faIcions.FaUtensilSpoon id='faIcon'/>Kitchen</a></li>
                <li><a href="#"><faIcions.FaTshirt id='faIcon'/> Supermarket</a></li>
                <li><a href="#"><faIcions.FaMobileAlt id='faIcon'/> Phone & Accessories</a></li>
                <li><a href="#"><faIcions.FaThermometerThreeQuarters id='faIcon'/> Health and Beauty</a></li>
                <li><a href="#"><faIcions.FaDesktop id='faIcon'/> Computer & Accessories</a></li>
            
                

                    </ul>
                </nav>
                }
            
        </>
    )
}

export default Navigation
