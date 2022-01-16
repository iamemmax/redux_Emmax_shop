import { GET_PRODUCT_BY_ID_FAIL, LOAD_MORE_PRODUCT, GET_PRODUCT_BY_ID_RESPONSE, GET_PRODUCT_BY_ID_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_RESPONSE, GET_PRODUCT_SUCCESS, NEW_PRODUCT_FAIL, NEW_PRODUCT_RESPONSE, NEW_PRODUCT_SUCCESS, SEARCH_RESPONSE, SEARCH_SUCCESS, SEARCH_FAIL, GET_HOT_DEAL_RESPONSE, GET_HOT_DEAL_SUCCESS, GET_HOT_DEAL_FAIL } from "../../constant/Product"
import axios from 'axios'
import _ from "lodash"





export const getHotdeal = (page) => async (dispatch) =>{
    dispatch({type:GET_HOT_DEAL_RESPONSE})
    try {
       
     let  url = `https://kingproduct.herokuapp.com/product/?page=1&limit=7`
        const response = await axios.get(url) 
         dispatch({type:GET_HOT_DEAL_SUCCESS, payload:response.data.results.result})
         
       
      
    } catch (error) {
        dispatch({type:GET_HOT_DEAL_FAIL, payload:error.message})
    }




}
export const getProductAction = (page) => async (dispatch) =>{
    dispatch({type:GET_PRODUCT_RESPONSE})
    try {
       
     let  url = `https://kingproduct.herokuapp.com/product/?page=${page}&limit=5`
        const response = await axios.get(url) 
         dispatch({type:GET_PRODUCT_SUCCESS, payload:response.data.results.result})
         
       
      
    } catch (error) {
        dispatch({type:GET_PRODUCT_FAIL, payload:error.message})
    }
}


export const searchProduct = (query) => async (dispatch)=>{


    dispatch({type:SEARCH_RESPONSE})
    try {
        let  queryUrl = `https://kingproduct.herokuapp.com/product/search/?&page=1&q=${query}&limit=10`
      
    
       const response = await axios.get(queryUrl) 
       console.log(response);
   
       dispatch({type:SEARCH_SUCCESS, payload:response.data.results.result})
       
      
    } catch (error) {
        dispatch({type:SEARCH_FAIL, payload:error.message})
    }

}

export const getProductById = (slug) => async (dispatch) =>{
    dispatch({type:GET_PRODUCT_BY_ID_RESPONSE})

    try {
       const response = await axios.get(`https://kingproduct.herokuapp.com/product/${slug}`)
       console.log(response);
       dispatch({type:GET_PRODUCT_BY_ID_SUCCESS, payload:response.data})
      
    } catch (error) {
        dispatch({type:GET_PRODUCT_BY_ID_FAIL, payload:error.response.data.msg})
    }
}

export const newProduct = (title, price, postedBy, category, img, description ) => async (dispatch) =>{

    dispatch({type:NEW_PRODUCT_RESPONSE})
  
       const  headers= {
        "Content-Type": "application/json"
            
        }
    
        const formdata = new FormData()
        
        formdata.append("title", title)
        formdata.append("price", price)
        formdata.append("category", category)
        formdata.append("postedBy", postedBy)
        formdata.append("description", description)
        
        _.forEach(img, data => {
        formdata.append("productImg", data)
        
            
        });
        
        
       
        let url = "https://kingproduct.herokuapp.com/product/new"
       
        const response = await axios.post(url, formdata, headers).catch(error =>  dispatch({type:NEW_PRODUCT_FAIL, payload:error.response.data.msg}))

        dispatch({type:NEW_PRODUCT_SUCCESS, payload:response.data})
     
    
}