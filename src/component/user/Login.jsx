import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {LoginUser} from "../../redux/action/user/user"
import {Link, useNavigate} from "react-router-dom"
import Loading from '../config/Loading';
import Error from '../config/Error';
import  *  as faIcions  from "react-icons/fa";
import  *  as fcIcions  from "react-icons/fc";
import "./auth.scss"


function Login() {

    const [input, setInput] = useState({
        email:"",
        password:"",
        
    });
 
const dispatch = useDispatch()
    const handleInput =(e) =>{
        setInput({...input, [e.target.id]:e.target.value})
    }
   
    const navigate = useNavigate()
    
    let {email, password} = input
    const loggin = useSelector(state => state.loggin)
    let {loading, error, userInfo} = loggin
    const handleSubmit =(e) =>{
        e.preventDefault()
        dispatch(LoginUser(email, password))

    }
    
        useEffect(() => {
            userInfo?.isAuthenticated && navigate("/")
        }, [userInfo, navigate]);
    
        
    return (
        <div>
            {loading && <Loading />}
              <div className='auth-container'>
                  <div className="left_container">
                  <div className="notMember">
                 <span> Not yet member</span>  <Link to="/user/register">Register Here</Link>
                  </div>
                  </div>
                  <div className="right_container">
                  
              <div className='form'>
               <form onSubmit={handleSubmit} >
            {error &&  <Error msg={error} />   }       
             <h2 className='header-title'>Signin to Emmax</h2>
                   <div className="loginAuternative">
                       <button title='google'><fcIcions.FcGoogle/></button>
                       <button title='facebook'>< faIcions.FaFacebookF/></button>
                   </div>
                    <div className="message_header">
                    <span>or do it via E-mail</span>
                    <div className="divider"></div>
                    </div>
                    
                <div className="form-input">
                    <div className="email">
                        <label htmlFor="email">Email</label>
                <input type="email" placeholder="email"  id='email'  value={email} onChange={handleInput}/>

                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="password"  id='password' value={password} onChange={handleInput}/>
                    </div>
                    <div className="moreInfo">

                <div className="checked">
                    <input type="checkbox"  id="checkedBtn" />
                    <span>Remember me</span>
                    
                    </div>
                    <div className="forgetPassword">
                        <Link to="/">forget Password</Link>
                    </div>
             </div>
                   <div className="submit">
                  <input type="submit" value="Login" />
                   </div>
                </div>
            </form>
            </div>
              
             </div>
            </div>
           
        </div>
    )
    
}

export default Login
