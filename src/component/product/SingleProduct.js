import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/action/product/productAction";
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
  let { loading, product } = products;

  
  
  
  
  const [show, setShow] = useState("");

  const handleShowImg = (e) => {

    const imgbanner = document.getElementById("showImg");
    setShow(imgbanner)

    if (show.src !== undefined) {
      show.src = e.target.src.replace(/"(.+)"/g, "$1");
    }
  };

  return (
    <div className="single-product">
      <Navigation />
      {loading && <Loading />}
      
        {product && (
          <div className="single"  key={product.slug}>
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
            </div>
          </div>
        )}
      
    </div>
  );
}

export default SingleProduct;
