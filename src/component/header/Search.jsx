import React, { useState } from 'react'
import  *  as aiIcions  from "react-icons/ai";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux';
import FetchLoader from '../config/FetchLoader';
import ShowSearch from './ShowSearch';
import "../product/css/home.scss"


const Search = () => {

const Search = useSelector(state => state.Search)
let {loading, search} = Search
const [page, setPage] = useState(1);
// console.log(Search);

    return (
        <>
        {/* <ShowSearch /> */}

        <InfiniteScroll
                dataLength={search.length}
                next={()=> setPage(page+1)}
                hasMore={true}
                loader={loading && <FetchLoader />}
                >
        
                <div className='home-container'>
                 
                           
                 {search?.map((data, index)=> (
                  
                     <ShowSearch  img={data.productImg[0].filename} price={data.price} id={data._id} title={data.title} key={index} slug={data.slug}/>
                 ))} 
                      
                                
                        
                        
                </div>
            </InfiniteScroll>
        </>
    )
}

export default Search
