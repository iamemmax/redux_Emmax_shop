import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {AddToCart, CloseAlert} from "../../redux/action/cart/CartAction"
import {getHotdeal} from "../../redux/action/product/productAction"
 

import "./css/Deal.scss"
import { Link } from 'react-router-dom';
import  *  as ioIcions  from "react-icons/io5"
import FetchLoader from '../config/FetchLoader';
import { useEffect } from 'react';


function HotDeal() {
const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getHotdeal())
  }, [dispatch]); 


    const settings_3 = {
        dots: false,
        infinite: true,
        speed: 500,
        arrow:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        className:"deal-box-container",

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

        

        
      };

const HotDeal = useSelector(state => state.HotDeal)

let {loading, hotProduct} = HotDeal
     
        const handleCart = (data) =>{
            
            let {title, price, id, slug} = data
            let dataItem ={
                img:data.productImg[0].filename, title, price, id:data._id, slug
            }
            dispatch(AddToCart(dataItem))
            
        }
    return (
        <div className='deal-container'>
            <h2 className="heading">Hot Deals</h2>
            {loading ? <FetchLoader/> :
            <Slider {...settings_3}> 
            {hotProduct?.map((data, index) =>{
                return(
                    <div className="deal-box-container" key={index}>
                        <div className="product">
                        <ioIcions.IoCartOutline onClick={()=>handleCart(data) } id='cartIcon'/>
                            <Link to={`/product/${data.slug}`}>
                        <img src={data.productImg[0].filename} alt={data.title} />
                        <h2>{data.title.slice(0, 13)}</h2>
                        <p>&#8358;{data.price.toLocaleString("en-US")}</p>
                        </Link>
                        </div>

                        
                    </div>
                )
            })}
            </Slider>
          }
        </div>
    )
          }

export default HotDeal
