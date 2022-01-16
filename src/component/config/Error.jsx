import React, {  useState } from 'react'
import  *  as aiIcions  from "react-icons/ai";
import './error.scss'


function Error({msg}) {
    // error alert
    const [errorMsg, setErrorMsg] = useState(true)

    const handleError = (e) =>{
      if(e.target.id === "close"){
          console.log(e.target.id);
       setErrorMsg(true)
       setTimeout(() => {
           e.target.id = "error"
           console.log(e.target.id);
           setErrorMsg(false)
       }, 1000);
      }
    }

    return (
        <div>
            <div className={errorMsg ? 'error' : 'closeAlert'}>
        <div className="msg">
            <p>{msg}</p>
        </div>
            <div className="icon">
              <aiIcions.AiOutlineClose  id='close'onClick={handleError} />
                
                </div>              
              </div>
              

        </div>
    )
}

export default Error
