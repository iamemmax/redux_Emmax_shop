import { ADD_TO_CART_FAIL, ADD_TO_CART_RESPONSE, ADD_TO_CART_SUCCESS, CLOSE_CART_ALERT, DECREASE_COUNT, DELETE_ITEM_FROM_CART, INCREASE_COUNT } from "../../constant/Product"

export const AddToCart = (payload) => async (dispatch) =>{
    dispatch({type:ADD_TO_CART_RESPONSE})

    try {
        dispatch({type:ADD_TO_CART_SUCCESS, payload})
    } catch (error) {
        dispatch({type:ADD_TO_CART_FAIL, payload:error})
        
    }
}

export  const increase = (payload) => async (dispatch)=>{
    dispatch({type:INCREASE_COUNT, payload})

}

export  const decrease = (payload) => async (dispatch)=>{
    dispatch({type:DECREASE_COUNT, payload})

}
export const deleteItemFromCart = (payload) => async (dispatch)=>{
    dispatch({type:DELETE_ITEM_FROM_CART, payload})


}
export const CloseAlert = () => async (dispatch)=>{
    dispatch({type:CLOSE_CART_ALERT })


}
