import { LOGIN_FAIL, LOGIN_RESPONSE, LOGIN_SUCCESS, LOGOUT_USER, REGISTER_FAIL, REGISTER_RESPONSE, REGISTER_SUCCESS } from "../../constant/User";

const initial ={
    userInfo:{}
}
export const LoginUser = (state=initial, {type,payload}) =>{
switch (type) {
    case LOGIN_RESPONSE:
        return{...state, loading:true}
    case LOGIN_SUCCESS:
        return{...state, loading:false, userInfo:payload}
    case LOGIN_FAIL:
        return{...state, loading:false, error:payload}
    case LOGOUT_USER:
        return {...state, userInfo:{}}

    default:
        return state;
}


}

const newState ={
    newUser:{}
}
export const Register = (state=newState, {type,payload}) =>{
switch (type) {
    case REGISTER_RESPONSE:
        return{...state, loading:true}
        case REGISTER_SUCCESS:
            return{...state, loading:false, newUser:payload}
            case REGISTER_FAIL:
                console.log(payload);
                return{...state, loading:false, error:payload}
    
    default:
        return state;
}

}