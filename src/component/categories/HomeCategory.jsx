import React from 'react'
import "./category.scss";
import {Link} from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function HomeCategory() {


    const settings_3 = {
        dots: false,
        infinite: true,
        speed: 500,
        arrow:true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        className:"deal-box-container",

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
          ]

        

        
      };
    return (
        <div className='category-container'>
      
        <h2 className='heading'>Deals by Category</h2>
        

        <div className="feature-container">
        <Slider {...settings_3}>
           
            <div className="feature1">
                <Link to="/">
            <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/736857/1.jpg?3944" alt="" />
                    <p>Jewelry</p>
             </Link>
            </div>
            <div className="feature1">
                <Link to="/">
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/747454/1.jpg?2677" alt="" />
                    <p>men's clothing</p>
             </Link>
            </div>
            <div className="feature1">
                <Link to="/">
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/120213/1.jpg?2486" alt="" />
                    <p>Entertainment</p>
             </Link>
            </div>
            <div className="feature1">
                <Link to="/">
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/628507/1.jpg?6033" alt="" />
                    <p>Phones</p>
             </Link>
            </div>
            <div className="feature1">
                <Link to="/">
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/187497/1.jpg?2350" alt="" />
                    <p>Electronics</p>
             </Link>
            </div>
            <div className="feature1">
                <Link to="/">
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/246303/1.jpg?0473" alt="" />
                    <p>Sneakes</p>
             </Link>
            </div>
            
            <div className="feature1">
                <Link to="/">
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/639813/1.jpg?3967" alt="" />
                    <p>Bags</p>
             </Link>
            </div>
            
            <div className="feature1">
                <Link to="/">
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/351128/1.jpg?9319" alt="" />
                    <p>Laptops</p>
             </Link>
            </div>
            <div className="feature1">
                <Link to="/">
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/179986/1.jpg?9628" alt="" />
                    <p>supermarket</p>
             </Link>
            </div>
            <div className="feature1">
                <Link to="/">
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/957177/1.jpg?3505" alt="" />
                    <p>Beauty</p>
             </Link>
            </div>
            <div className="feature1">
                <Link to="/">
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/805287/1.jpg?3250" alt="" />
                    <p>Kitchen</p>
             </Link>
            </div>
            <div className="feature1">
                <Link to="/">
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/434828/1.jpg?0276" alt="" />
                    <p>Sport</p>
             </Link>
            </div>
            <div className="feature1">
                <Link to="/">
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/853066/1.jpg?6838" alt="" />
                    <p>Computing</p>
             </Link>
            </div>
            
            <div className="feature1">
                <Link to="/">
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/61/863503/1.jpg?0002" alt="" />
                    <p>Furniture</p>
             </Link>
            </div>
            

            </Slider>
            
        </div>
        
        </div>
    )
}

export default HomeCategory
