import React, { useState } from 'react'
// import  *  as ioIcions  from "react-icons/io5"
import  *  as aiIcions  from "react-icons/ai";
import  *  as faIcions  from "react-icons/fa";
import { Link } from 'react-router-dom';
// import  *  as HiIcions  from "react-icons/hi";
import "../banner/banner.scss"
// import { useLocation } from 'react-router-dom';


function Navigation() {

    const [toggle, setToggle] = useState(null);
    const [removeToggle, setRemoveToggle] = useState(false);
//   const location = useLocation()


const handleToggle = (e) =>{

    if( e.target.id === "menuIcon"){
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
                <li><Link to="#"> <faIcions.FaBaby  id='faIcon'/> Babies</Link></li>
                <li><Link to="#">< faIcions.FaTv id='faIcon'/>ComputerLine Electronics</Link></li>
                <li><Link to="#"><faIcions.FaChair id='faIcon'/> Home & Office</Link></li>
                <li><Link to="#"><faIcions.FaShoppingBag id='faIcon'/> Fashion</Link></li>
                <li><Link to="#"><faIcions.FaTruckMonster id='faIcon'/> Automobile</Link></li>
                <li><Link to="#"><faIcions.FaUtensilSpoon id='faIcon'/>Kitchen</Link></li>
                <li><Link to="#"><faIcions.FaTshirt id='faIcon'/> Supermarket</Link></li>
                <li><Link to="#"><faIcions.FaMobileAlt id='faIcon'/> Phone & Accessories</Link></li>
                <li><Link to="#"><faIcions.FaThermometerThreeQuarters id='faIcon'/> Health and Beauty</Link></li>
                <li><Link to="#"><faIcions.FaDesktop id='faIcon'/> Computer & Accessories</Link></li>
            
                

                    </ul>
                </nav>

             
            </div>
}

           
                <div className={window.location.pathname === "/" ? ' menu hideBar' : " menu toggleGenNav"}  onClick={handleToggle}><aiIcions.AiOutlineMenu id='menuIcon'/></div>
        <div className={removeToggle ? "removeOnlick showRemove" : "removeOnlick"} onClick={handleRemove}></div>
        

        


       
            {window.location.pathname !== "/" && 
                <nav className={ toggle ?  'generalNav showGeneralNav' : ' generalNav'}>
                    

                    <ul className='ul'>
                    <li><Link to="#"> <faIcions.FaBaby  id='faIcon'/> Babies</Link></li>
                <li><Link to="#">< faIcions.FaTv id='faIcon'/>ComputerLine Electronics</Link></li>
                <li><Link to="#"><faIcions.FaChair id='faIcon'/> Home & Office</Link></li>
                <li><Link to="#"><faIcions.FaShoppingBag id='faIcon'/> Fashion</Link></li>
                <li><Link to="#"><faIcions.FaTruckMonster id='faIcon'/> Automobile</Link></li>
                <li><Link to="#"><faIcions.FaUtensilSpoon id='faIcon'/>Kitchen</Link></li>
                <li><Link to="#"><faIcions.FaTshirt id='faIcon'/> Supermarket</Link></li>
                <li><Link to="#"><faIcions.FaMobileAlt id='faIcon'/> Phone & Accessories</Link></li>
                <li><Link to="#"><faIcions.FaThermometerThreeQuarters id='faIcon'/> Health and Beauty</Link></li>
                <li><Link to="#"><faIcions.FaDesktop id='faIcon'/> Computer & Accessories</Link></li>
            

                    </ul>
                </nav>
                }
            
        </>
    )
}

export default Navigation
