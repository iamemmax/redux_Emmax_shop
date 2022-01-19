import React from 'react'
import "./App.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from './component/header/Navbar'
import Home from './component/main/Home'
import SingleProduct from './component/product/SingleProduct'
import Register from './component/user/Register'
import NewProduct from './component/product/NewProduct'
import Carts from './component/cart/Carts'
import Login from './component/user/Login'
import Search from './component/header/Search'
import NotFound from './component/main/NotFound'
import { Footer } from './component/footer/Footer'


function App() {
  return (
    <div>
      <Router>
       <header> <Navbar /></header>
      
        <main>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/product/:slug" element={<SingleProduct />}/>
              <Route path="/product/new" element={<NewProduct />}/>
              <Route path="/user/register" element={<Register />}/>
              <Route path="/user/login" element={<Login />}/>
              <Route path="/cart" element={<Carts />}/>
              <Route path="/search/" element={<Search />}/>
              <Route path="*" element={<NotFound/>}/>

          </Routes>
          </main>
          <footer>
          <Footer />
          </footer>
      </Router>
    </div>
  )
}

export default App
