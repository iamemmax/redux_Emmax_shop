import React, { useEffect, useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./banner.scss";
import  *  as aiIcions  from "react-icons/ai";

import Navigation from '../header/Navigation';
import { useLocation } from 'react-router-dom';



function Banner() {
  const location = useLocation()
  // const [removeBanner, setRemoveBanner] = useState(null);

//  useEffect(() => {
//   if(location.pathname = "/"){
//     // setRemoveBanner(true)
//     console.warn(location);
//   }else{
//     setRemoveBanner(false)
//     console.warn(location.pathname)
//   }
//  }, [location]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrow:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        className:"banner-container",

        responsive: [
          {
           
          
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2,
              dots:false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:false,

            }
          }
        ]
      };

    
    return (
        <div className={ location.pathname !="/" ? 'removeBanner': 'banner'}>
           <Navigation />
        <div className='banner-container '>
        <Slider {...settings}>
          <div>
           <img src="https://images.unsplash.com/photo-1496136998968-81293d01179b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU4fHxzaG9wcGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div>
          <img src="https://images.unsplash.com/photo-1541998916-822fe8274a99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHNob3BwaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />

          </div>
          <div>
          <img src="https://images.unsplash.com/photo-1612776561584-394d456a751d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxzaG9wcGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />

          </div>
          <div>
          <img src="https://images.unsplash.com/photo-1603466474065-e91b8dfff202?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxzaG9wcGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />

          </div>
          <div>
         <img src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQwfHxzaG9wcGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div>
          <img src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxzaG9wcGluZyUyMGN1c3RvbWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />

          </div>

        </Slider>
        </div>
       
        </div>
    )
}

export default Banner
