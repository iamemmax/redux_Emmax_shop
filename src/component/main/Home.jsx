import React from 'react'
import Banner from '../banner/Banner'
import HomeCategory from '../categories/HomeCategory'
import Product from '../product/product'
import { Advert } from './Advert'
import HotDeal from './HotDeal'
import Shipping from './Shipping'

function Home() {
    return (
        <div>
            <Banner />
            <HomeCategory />
            <HotDeal />
            <Advert/>
            <Product />
            <Shipping/>
        </div>
    )
}

export default Home
