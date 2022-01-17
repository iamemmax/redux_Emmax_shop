import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast , Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate, useParams } from "react-router-dom";
import { getProductById, deleteProducts } from "../../redux/action/product/productAction";
import Navigation from "../header/Navigation";
import "../banner/banner.scss";
import Loading from "../config/Loading";
import "./css/single.scss";

function SingleProduct() {
  let { slug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(slug));
  }, [dispatch, slug]);
  const products = useSelector((state) => state.single);
  const loggin = useSelector(state => state.loggin.userInfo)
let {isAuthenticated, user} = loggin
  let { loading, product } = products;

  
  
  
  
  const [show, setShow] = useState("");

  const handleShowImg = (e) => {

    const imgbanner = document.getElementById("showImg");
    setShow(imgbanner)

    if (show.src !== undefined) {
      show.src = e.target.src.replace(/"(.+)"/g, "$1");
    }
  };


  // remove post by the post uploader
 const navigate = useNavigate()
  const handlePostDelete = () =>{
    if(window.confirm("Area u sure you want to delete this product"))
        dispatch(deleteProducts(product._id))
           toast.success("Product Deleted Successfully")
           setTimeout(() => {
             navigate("/")
             
           }, 2000);
  }
  return (
    <div className="single-product">
      <Navigation />
      <ToastContainer  draggable={true} transition={Bounce} autoClose={2000}/>
      {loading && <Loading />}
      
        {product && (
          <div className="single"  key={product._id}>
            <div className="left">
              <div className="display_img">
                {
                  <img src={product.productImg[0].filename} alt={product.title} id="showImg" />
                }
              </div>
              <div className="selectImg">
                {product.productImg.map((img) => (
                  <img src={img.filename} alt={product.title}  onClick={handleShowImg}/>
                ))}
              </div>
            </div>
            <div className="right">
              <h2>{product.title}</h2>
              <p> &#8358; {product.price}</p>
              <span>{product.description}</span>
            {isAuthenticated && user._id === product.postedBy._id
            && <div>

        <button>Edit</button>
      <button onClick={handlePostDelete}>Delete</button>
            </div>
            }
            </div>


      
          </div>
      
        )}
      
    </div>
  );
}

export default SingleProduct;
