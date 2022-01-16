import React from 'react'
import "./css/advert.scss"

export const Advert = () => {
    return (
        <div className='Advert_box'>
            <div className="img1">
                <img src="https://davin-soft.herokuapp.com/img/product/1-removebg-preview%20(15).png" alt="" />
            </div>
            <div className="advertText">
                <h2>Shop from Davinsoft with Confidence</h2>
                <p>Our Buyer Protection covers your purchase from click to delivery and We offer competitive prices on our 100 million plus product range, Round-the-clock assistance for a smooth shopping experience.</p>
                <button>Shop Now</button>
            </div>
            <div className="img2">
                <img src="https://davin-soft.herokuapp.com/img/product/1-removebg-preview%20(17).png" alt="" />
            </div>
        </div>
    )
}
