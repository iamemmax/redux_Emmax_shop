import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProductAction, filterProduct} from "../../redux/action/product/productAction"
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
    // const Pages = useSelector(filterPages)
    console.log(Pages);
    
    
    const [page, setPage] = useState(2);
    
     
           
            
        useEffect(() => {
            // dispatch(getProductAction(page)) 
            dispatch(getProductAction(page)) 
            },[dispatch, page])
            
         

            const handleCategory = (e) =>{
               dispatch(filterProduct(e.target.value))
               
            }

    return (
        <>
             {/* {loading && <Loading />} */}
            

        <div className='product-listing-box'>
            <h2 className='heading'>New Arrival</h2>
            
            <div className='sortBtn'>    


            <li><button value="all" onClick={handleCategory}>All</button></li>
               <li><button value="wares" onClick={handleCategory}>Wares</button></li>
               <li><button value='electronics' onClick={handleCategory}>Electronics</button></li>
               <li><button value='shoe' onClick={handleCategory}>Shoe</button></li>
               <li><button value='phone' onClick={handleCategory}>Phone</button></li>
</div>
             <InfiniteScroll
                dataLength={Pages.length}
                next={()=> setPage(page+1)}
                hasMore={true}
                loader={loading && <FetchLoader />}
                >
        
                <div className='home-container'>
                 
                    
                       {Pages?.map((data, index) => (
                  
                           
                           <DisplayProduct title={data.title} img={data.productImg[0].filename} id={data._id} key={index} price={data.price}  slug={data.slug}/>
                           
                      
                                
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
