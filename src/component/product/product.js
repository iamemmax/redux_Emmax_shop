import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProductAction} from "../../redux/action/product/productAction"
import DisplayProduct from './DisplayProduct'
import "./css/home.scss"
// import Loading from "../config/Loading"
import InfiniteScroll from 'react-infinite-scroll-component';
import FetchLoader from '../config/FetchLoader'
// import Search from '../header/Search'
import {filterPages, filterProduct} from '../select/Select'






const  Product = () => {
    const dispatch = useDispatch()
    
    
    const allProduct = useSelector(filterProduct)
    const Pages = useSelector(filterPages)
   
    
    let {loading} = allProduct
    console.log(Pages);
    
    
    const [page, setPage] = useState(2);
    
     
           
            
        useEffect(() => {
            // dispatch(getProductAction(page)) 
            dispatch(getProductAction(page)) 
            },[dispatch, page])
            
         

    return (
        <>
             {/* {loading && <Loading />} */}
            

        <div className='product-listing-box'>
            <h2 className='heading'>New Arrival</h2>
            


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
