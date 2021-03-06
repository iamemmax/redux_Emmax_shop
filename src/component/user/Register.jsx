import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {RegisterUser} from "../../redux/action/user/user"
import {Link} from "react-router-dom"
import Loading from '../config/Loading';
import Modal from '../config/Modal';

import  *  as faIcions  from "react-icons/fa";
import  *  as fcIcions  from "react-icons/fc";
import  *  as aiIcions  from "react-icons/ai";
import Error from '../config/Error';



function Register() {
  const [input, setInput] = useState({username:"", email:"", password:"", password2:""}) 
  const [userImg, setUserImg] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const [imgPreviewError, setImgPreviewError] = useState(null);
  
  const handleInput = (e) =>{
    setInput({...input, [e.target.id]:e.target.value}) 
  }

  const handleImg =(e) =>{
    setUserImg(e.target.files[0])
    
    
  }
  useEffect(() => {
    let AllowedImg = ["image/png", "image/jpg", "image/jpeg"];
    
    if(userImg &&  AllowedImg.includes(userImg.type)){
      let reader = new FileReader()
      reader.onloadend = () =>{
        setImgPreview(reader.result)
      }
      reader.readAsDataURL(userImg)
    }else{
      setImgPreviewError(true)
    }
  }, [userImg, imgPreview]);
  let {username, email, password, password2} = input

  
  const dispatch = useDispatch()
  
  const handleSubmit =(e) =>{
     e.preventDefault()
     
     
     dispatch(RegisterUser(username, email, password, password2, userImg))
     
     
    }
    const newRegisterUser = useSelector(state => state.newUser)
    let {loading, newUser, error} = newRegisterUser
    let {msg, data} = newUser
    // const navigate = useNavigate()
    
    // setTimeout(() => {
    //   if(data !== undefined){
    //     navigate("/user/login")
    //   }

    // }, 4000);
    // <p>{`${data.username} your ${msg}`}</p>
      return (
        <>
        {imgPreviewError && imgPreviewError}
          {newUser&&  data !== undefined  &&  <Modal  msg={msg} pathname={"/"}/> }
        {error &&  <Error msg={error} />   }
        <div className='auth-container'>
             <div className='left_container'></div>


            <div className='right_container'>
            <div className='form'>
              
                <div className="header-title"><h2>Create an Account</h2></div>
                      <div className="loginAuternative">
                          <button title='google'><fcIcions.FcGoogle/></button>
                          <button title='facebook'>< faIcions.FaFacebookF/></button>
                      </div>
              {loading && <Loading />}
        

              <div className="message_header">
                    <span>or do it via E-mail</span>
                    <div className="divider"></div>
                    </div>
            <form  onSubmit={handleSubmit}>
          
              
              <div className="myInput" id='myInput'>
              <div className="imgBox">
                  {/* <faIcions.FaUserCircle/> */}
                <label htmlFor="userImg"  className='UserImg'>
                  <aiIcions.AiOutlineCamera id='camera'/>
                  
                            <div className='imgPreview' style={{background: imgPreview ? `url("${imgPreview}") no-repeat center/cover` : "",}}>
                            </div>

                  </label>
                <input type="file" id='userImg'  onChange={handleImg} />

           </div>

            <div className="input">
          
                  {/* <label htmlFor="username">Username</label> */}
                <input type="text"  id='username' value={username} placeholder='Username' onChange={handleInput}/>
              </div> 
                <div className="input">
            {/* <label htmlFor="email">Email</label> */}
                <input type="email" id='email' value={email} placeholder='Email' onChange={handleInput}/>
                </div>
                <div className="input">
            {/* <label htmlFor="password">Password</label> */}
                <input type="password"  id='password'value={password} placeholder='Password' onChange={handleInput} />
                </div>
                <div className="input">
              {/* <label htmlFor="password2">Confirm Password</label> */}
                <input type="password"  id='password2' value={password2} placeholder='Confirm Password' onChange={handleInput} />
                </div>
            
                  <div className="submit">
                      <input type="submit" value="Register" />
                      </div>

                      <div className="lastInfo">
                  <span>Already a member ? <Link to="/user/login">Login</Link></span>
                </div>

              </div>
              </form>
    </div>
            </div>
        </div>

        </>              
    )
}

export default Register
