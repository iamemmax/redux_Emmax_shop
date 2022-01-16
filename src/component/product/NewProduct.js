import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {newProduct} from "../../redux/action/product/productAction"
import Loading from '../config/Loading';
import Modal from '../config/Modal';
import "./css/productAuth.scss"
import  *  as aiIcions  from "react-icons/ai";
import  *  as faIcions  from "react-icons/fa";
import  *  as ioIcions  from "react-icons/io5";


function NewProduct() {
// getting login user's id
    const loggin = useSelector(state => state.loggin.userInfo)
    const {user} = loggin
  
 
    const [input, setInput] = useState({ title:"", price:"", category:"None", postedBy: user._id, description:""});
    const [imgPreview, setImgPreview] = useState(null);
    const [imgPreviewError, setImgPreviewError] = useState(null);
    const [img, setImg] = useState([]);
    const dispatch = useDispatch()
    const handleInput =(e) =>{
        setInput({...input, [e.target.id]:e.target.value})
    }
    const handleFile =(e) =>{
        setImg(e.target.files)
        
    
    }       
        

    // preview image before uploading
       useEffect(() => {
        let images = []
        for (let i = 0; i < img.length; i++) {
          const file = img[i];
        images.push({
            url:URL.createObjectURL(file)
        })
          setImgPreview(images)
          
        };
        
        return () => URL.revokeObjectURL(images)
       }, [img])

 // delete seleted image
 const deleteFile = (event)  =>{
    const s = imgPreview.filter((item, index) => index !== event);
    setImgPreview(s);
    
}
       




    
    let {title, price, postedBy, category, description} = input
  
    const handleSubmit =(e) =>{
        e.preventDefault()
        
        
        dispatch(newProduct(title, price, postedBy, category, img, description ))

    }
    // get data from state
    const newProductFromState = useSelector(state => state.newProduct)
    const {loading, error, newproduct} = newProductFromState
   

   
    return (
        <div>
            {loading && <Loading />}
            {newproduct !== undefined && <Modal msg={newproduct?.msg} pathname={"/"} />}
            {error && error}
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <input type="text" placeholder="title"  id='title'  value={title} onChange={handleInput}/>
                <input type="text" placeholder="price"  id='price' value={price} onChange={handleInput}/>
                <select id='category'onChange={handleInput}>
                    <option value="none">None</option>
                    <option value="wares">wares</option>
                    <option value="shoe">shoe</option>
                    <option value="electronics">electronics</option>
                    <option value="bag">bag</option>
                </select>
                <input type="hidden" placeholder="postedBy" value={postedBy}  id='postedBy' onChange={handleInput}/>
                <input type="file"   id='productImg' multiple  onChange={handleFile}/>
                <textarea type="text" id='description'  value={description} onChange={handleInput}></textarea>
                <button>Add Product</button>
            </form>

            <div className='imgPreview'>
                {imgPreview && imgPreview.map((data, index) =>
                    <div>
                        <img src={data.url} />
                        <button onClick={() => deleteFile(index)}>del</button>
                        {console.log( index)}
                    </div>
                )}

            </div>





        </div>
    )
    
}

export default NewProduct
