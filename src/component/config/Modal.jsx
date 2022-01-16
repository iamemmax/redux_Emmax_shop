import React, { useState } from 'react'
import  *  as aiIcions  from "react-icons/ai";
// import  *  as faIcions  from "react-icons/fa";
import  *  as ioIcions  from "react-icons/io5";
import { Link } from 'react-router-dom';
import "./model.scss"


function Modal({msg, pathname}) {
    // popup model
    const [removeModel, setRemoveModel] = useState(null);
    const [animateCheck, setAnimateCheck] = useState(null);
    
    
    
    setInterval(() => {
        setAnimateCheck(true)
        
    }, 1000);

    return (
        <div>
            
            <div className={removeModel ?'model removeModel': 'model'}>
                <div className='model-inner'>
                <aiIcions.AiOutlineClose id='modelIcons' onClick={() => setRemoveModel(true)}  />

                <h2>{msg}</h2>
                <div className='markIcon'>
                    <ioIcions.IoCheckmark  id={animateCheck && 'mark'}/>
                    </div>   
                    <div className='model-btn'>
                   <Link to={pathname}> <button>Ok</button></Link>
                    {/* <button>Ok</button> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal
