import {
  DELETE_PRODUCT_SUCCESS,
  // FILTER_WARES,
  GET_HOT_DEAL_FAIL,
  GET_HOT_DEAL_RESPONSE,
  GET_HOT_DEAL_SUCCESS,
  GET_PRODUCT_BY_ID_FAIL,GET_PRODUCT_BY_ID_RESPONSE,GET_PRODUCT_BY_ID_SUCCESS, GET_PRODUCT_FAIL,
  GET_PRODUCT_RESPONSE,GET_PRODUCT_SUCCESS,NEW_PRODUCT_FAIL,
  NEW_PRODUCT_RESPONSE,
  NEW_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  SEARCH_FAIL,
  SEARCH_RESPONSE,
  SEARCH_SUCCESS,
} from "../../constant/Product";




const iniState ={
  hotProduct:[]
}
export const GetHotdeal = (state = iniState, { type, payload }) => {
  switch (type) {
    case GET_HOT_DEAL_RESPONSE:
      return { ...state, loading: true };
    case GET_HOT_DEAL_SUCCESS:
      
      return {
        ...state,
        loading: false,
        hotProduct: payload,
      
        
        
      };
      

    case GET_HOT_DEAL_FAIL:
      return { loading: false, ...state, error: payload };

    default:
      return state;
  }
};


const initial = {
  products: [],
  // currentPage: 0,
  Pages: [],
  totalPage: {},
  search:[]
};
export const GetProductReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_RESPONSE:
      return { ...state, loading: true };
    case GET_PRODUCT_SUCCESS:
      
    
        
      return {
        ...state,
        loading: false,
        products: payload.results,
        // currentPage: payload.page,
        Pages: [...state.Pages,  ...payload],
        currentPage: state.currentPage + 1,
      };
      // case SEARCH_SUCCESS:
      // return {
      //   ...state,
      //   loading:false,
      //   search:payload
      // }

    case GET_PRODUCT_FAIL:
      return { loading: false, ...state, error: payload };

      // delete product

      case DELETE_PRODUCT_SUCCESS:
       
         return {
           ...state
         }
      // case FILTER_WARES :
        
      //  let filterWares =  state.Pages(filter =>{
       
      //  })
        
      //   // return {...state, Pages:filterWares}
       
    default:
      return state;
  }
};

// get singleBy id

const seachinitialState={
search:[]
}

export const searchProduct = (state=seachinitialState, {type, payload}) =>{
  switch (type) {
    case SEARCH_RESPONSE:
      return{...state, loading:true}
      
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading:false,
        search:payload
      }
    case SEARCH_FAIL:
      return {...state, loading:false, error:payload.results}
  
    default:
      return state;
  }
}

export const getSingleProduct = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_BY_ID_RESPONSE:
      return { ...state, loading: true };


    case GET_PRODUCT_BY_ID_SUCCESS:
      return {
          ...state,
           loading: false,
            product: payload.data,
          
        
        };
    case GET_PRODUCT_BY_ID_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state ;
  }
};

export const newProduct = (state = {}, { type, payload }) => {
  switch (type) {
    case NEW_PRODUCT_RESPONSE:
      return { ...state, loading: true };
    case NEW_PRODUCT_SUCCESS:
      return { ...state, loading: false, newproduct: payload };

    case NEW_PRODUCT_FAIL:
      return { ...state, loading: false, error: payload };
    case REMOVE_PRODUCT:
      return { ...state };

    default:
      return state;
  }
};



// delete product