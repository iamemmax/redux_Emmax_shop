import React  from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./banner.scss";

import Navigation from '../header/Navigation';
import { useLocation } from 'react-router-dom';



function Banner() {
  const location = useLocation()
  
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
        <div className={ location.pathname !== "/" ? 'removeBanner': 'banner'}>
           <Navigation />
        <div className='banner-container '>
        <Slider {...settings}>
          <div>
           <img src='https://images.unsplash.com/photo-1567750722916-c0096e1ebc67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjgxfHxzaG9wcGluZyUyMGN1c3RvbWVyfGVufDB8MXwyfHw%3D&auto=format&fit=crop&w=500&q=60' alt="" />
          </div>
          
          <div>
           <img src="https://images.unsplash.com/photo-1641695329829-300a1df58849?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNob3BwaW5nJTIwY3VzdG9tZXJ8ZW58MHwxfDJ8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          
          <div>
           <img src="https://images.unsplash.com/photo-1639727833014-fe8b438e4c27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNob3BwaW5nJTIwY3VzdG9tZXJ8ZW58MHwxfDJ8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          
          <div>
           <img src='https://images.unsplash.com/photo-1636499410733-c1244037bfa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHNob3BwaW5nJTIwY3VzdG9tZXJ8ZW58MHwxfDJ8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="" />
          </div>
          
          <div>
           <img src='https://images.unsplash.com/photo-1562070416-acfd0b43db97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk3fHxzaG9wcGluZyUyMGN1c3RvbWVyfGVufDB8MXwyfHw%3D&auto=format&fit=crop&w=500&q=60' alt="" />
          </div>
          

        </Slider>
        </div>
       
        </div>
    )
}

export default Banner
