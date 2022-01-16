import {combineReducers} from "redux"
import {GetProductReducer, getSingleProduct, newProduct, searchProduct, GetHotdeal} from "./Product/ProductReducer"
import {AddToCartReducer} from "./cart/CartReducer"
import {LoginUser, Register} from "./user/UserReducer"
// import { persistReducer } from "redux-persist"
// import storage from "redux-persist/lib/storage"


const allReducer = combineReducers({
    products:GetProductReducer,
    single:getSingleProduct,
    newProduct,
    carts: AddToCartReducer,
    loggin:LoginUser,
    newUser:Register,
    Search:searchProduct,
    HotDeal:GetHotdeal

})

export default allReducer