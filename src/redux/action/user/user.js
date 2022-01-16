import { LOGIN_FAIL, LOGIN_RESPONSE, LOGIN_SUCCESS, LOGOUT_USER, REGISTER_FAIL, REGISTER_RESPONSE, REGISTER_SUCCESS} from "../../constant/User"
import axios from "axios"

export const LoginUser = (email, password) => async (dispatch) =>{
    dispatch({type:LOGIN_RESPONSE})

    try {
        const response = await axios.post("https://kingproduct.herokuapp.com/user/login", {email, password})
        dispatch({type:LOGIN_SUCCESS, payload:response.data})
    } catch (error) {
        dispatch({type:LOGIN_FAIL, payload:error.response.data.msg})
    }
}
export const RegisterUser = (username, email, password, password2, userImg) => async (dispatch) =>{
    const formdata = new FormData()
    formdata.append("username", username)
    formdata.append("email", email)
    formdata.append("password", password)
    formdata.append("password2", password2)
    formdata.append("userImg", userImg)
    // let data = {
    //     username, email, password, password2, formdata
    // }
    dispatch({type:REGISTER_RESPONSE}) 

    
    const  headers= {
        "Content-Type": "application/json"
            
        }
    
    let url = "https://kingproduct.herokuapp.com/user/new"
    try {
        const response = await axios.post(url, formdata, headers)
    dispatch({type:REGISTER_SUCCESS, payload:response.data})
        
    } catch (error) {
    dispatch({type:REGISTER_FAIL, payload:error.message})
        

   
}
}
export const LogoutUser = () => async (dispatch) =>{
    dispatch({type:LOGOUT_USER})
}
   
