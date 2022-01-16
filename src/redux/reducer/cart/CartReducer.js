import { ADD_TO_CART_FAIL, ADD_TO_CART_RESPONSE, ADD_TO_CART_SUCCESS, CLOSE_CART_ALERT, DECREASE_COUNT, DELETE_ITEM_FROM_CART, INCREASE_COUNT } from "../../constant/Product";

const initial = {
    cart:[],
    cartNo:[],
    // msg:{}
  
    
}
export const AddToCartReducer = (state = initial, {type, payload}) =>{
    switch (type) {
        case ADD_TO_CART_RESPONSE:
            
            return {...state, loading:true}

        case ADD_TO_CART_SUCCESS:
            let cartExist = state.cart.find(data => data.id === payload.id)
            if(!cartExist){
              let newData = {
                  ...payload,
                  qty:1,
                  total:payload.price,
                  alertMsg:"added successfully"
                 
              }
          state.cart.push(newData)
                
          
          return {...state, loading:false}
        }else{
           state.cart.map((data, key) =>{
                if(data.id === payload.id){
                   return {qty:state.cart[key].qty++, alertMsg:data.alertMsg = "item already added"}
                }
            })
      
              
              

            return{...state, loading:false}
        }

        case ADD_TO_CART_FAIL:
            return {...state, loading:false, error:payload}

        // close cart alert msg
        case CLOSE_CART_ALERT:
            state.cart.map(data => data.alertMsg = "");

        case INCREASE_COUNT :
            let increaseCount = state.cart.map((data, key) => {
                if(data.id === payload){
                    return {...data, qty:data.qty+1, }
                }else{
                    return {...data}
                }

            })
            
            return {...state, cart:increaseCount}
            
          


            // decrease cart qty
            case DECREASE_COUNT :
                let decrease = state.cart.map((data, key) =>{
                    if(data.id === payload){
                        if(data.qty <= 1){
                             return {qty:data.qty = 1}
                        }
                        return{...data, qty:data.qty-1}
                    }else{
                        return {...data}
                    }
                })
                return{...state, cart:decrease}

                   
                // deleteCart
            case DELETE_ITEM_FROM_CART:
                let deleteItem = state.cart.filter(data => data.id !== payload )
                
                    return {...state, cart:deleteItem}
               
            
                    
             
                
                
        default:
            return state;
    }

}