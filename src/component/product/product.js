import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProductAction} from "../../redux/action/product/productAction"
import DisplayProduct from './DisplayProduct'
import "./css/home.scss"
// import Loading from "../config/Loading"
import InfiniteScroll from 'react-infinite-scroll-component';
import FetchLoader from '../config/FetchLoader'
// import Search from '../header/Search'
// import {filterPages, filterProduct} from '../select/Select'
// import { NavLink } from 'react-router-dom'






const  Product = () => {
    const dispatch = useDispatch()
    
    
    const allProduct = useSelector(state => state.products)
    
    
    let {loading, Pages} = allProduct
    
    
    
    const [page, setPage] = useState(2);
    const [getProducts, setGetProducts] = useState([]);
    
    
        useEffect(() => {
            // dispatch(getProductAction(page)) 
            dispatch(getProductAction(page)) 
            },[dispatch, page])
            
         

            const handleCategory = (e) =>{
                if(e.target.value === "all"){
                    let filter =  Pages.filter(data =>
                        data.category !== e.target.value)
                        setGetProducts(filter)
                    }else{
                        
                            
                        let filter =  Pages.filter(data =>
                            data.category === e.target.value)
                            
                            setGetProducts(filter)
                        
                    }
                }
                console.log(getProducts);

        useEffect(() => {
          setTimeout(() => {
             document.getElementById("allBtn").click()
          }, 3000);
        }, [])
        

        // add active class to filter category button
        const btnBox = document.querySelector(".sortBtn")
        const allBtn = document.querySelectorAll(".categorybtn")
        allBtn.forEach(data =>{
           data.addEventListener("click", function(){
               btnBox.querySelector('.active').classList.remove('active')
               data.classList.add("active")
           })
        })
        
    return (
        <>
             {/* {loading && <Loading />} */}
            

        <div className='product-listing-box'>
            <h2 className='heading'>New Arrival</h2>
            
            <div className='sortBtn'>    
               <li><button id='allBtn' className='categorybtn active' value="all" onClick={handleCategory}>All</button></li>
               <li><button value="wares"  className='categorybtn'  onClick={handleCategory}>Wares</button></li>
               <li><button value='electronics'  className='categorybtn'  onClick={handleCategory}>Electronics</button></li>
               <li><button value='shoe'   className='categorybtn' onClick={handleCategory}>Shoe</button></li>
               <li><button value='phone'   className='categorybtn' onClick={handleCategory}>Phone</button></li>
</div>
             <InfiniteScroll
                dataLength={getProducts.length}
                next={()=> setPage(page+1)}
                hasMore={true}
                loader={loading && <FetchLoader />}
                >
        
                <div className='home-container'>
                 
                    
                       {Pages&& getProducts.map((data, index) => (
                  
                           
                           <DisplayProduct title={data.title} img={data.productImg[0].filename} id={data._id} key={index} price={data.price.toLocaleString("en-US")}  slug={data.slug}/>
                           
                      
                                
                        ))}
                        
                </div>
            </InfiniteScroll> 
            
        </div>
            {/* <button onClick={handleLoadMore}>LoadMore</button>
            {prev && <button onClick={()=>setPage(page-1)}>previous</button>} */}

            
        </>
    )
}

export default Product
