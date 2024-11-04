import React, { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter , Routes , Route, Outlet } from "react-router-dom"
import axios from 'axios'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import NotFound from './components/NotFound/NotFound'
import About from './components/About/About'
import Wishlist from './components/Wishlist/Wishlist'
import Cart from './components/Cart/Cart'
import CheckOut from './components/CheckOut/CheckOut'
import Swal from 'sweetalert2'
import ProductDetails from './components/ProductDetails/ProductDetails'
function App() {

  let url1 = 'https://dummyjson.com/products?sortBy=title&order=desc'
  let url2 = 'https://fakestoreapi.in/api/products'
  let url3 = 'https://dummyjson.com/products'
  let [products , setProducts] = useState([])
  let [products2 , setProducts2] = useState([])
  async function pro2() {
    let {data} = await axios.get(url2)
    setProducts2(data.products)
  }
  async function mostSelling(){
    let {data} = await axios.get(url1)
    setProducts(data.products)
  }
  let [ wishlistItems  , setWishlistItems ] = useState([])
  useEffect(()=>{
    if(localStorage.getItem('WishlistItems')==null){
      setWishlistItems([])
    }else{
      setWishlistItems(JSON.parse(localStorage.getItem('WishlistItems')))
    } 
  },[])
  function addToWishlist(product){
  const findItems = wishlistItems.find(item=>item.title==product.title)
    console.log(findItems);
    if(findItems){
      Swal.fire({
        title: `<div><span Class="text-danger">${product.title.slice(0 , 15)}</span> Is ALREADY In Your Wishlist</div></div>`,
        icon: "info",
        showConfirmButton: false,
        timer: 800
      })
    }else{
      Swal.fire({
        position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 800
        }
      );
      setWishlistItems([...wishlistItems , product])
    }
  }
  function deleteFromWishlist(product , index){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        wishlistItems.splice(index , 1)
        setWishlistItems([...wishlistItems])
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 700
        });
      }
    });
  }
  let [cartItems , setCartItems] = useState([])
useEffect(()=>{
  if(localStorage.getItem('cartItems')==null){
    setCartItems([])
  }else{
    setCartItems(JSON.parse(localStorage.getItem('cartItems')))
  }
},[])
  function addToCart(product){
  const findItems = cartItems.find(item=>item.title==product.title)
    console.log(findItems);
    if(findItems){
      Swal.fire({
        title: `<div><span Class="text-danger">${product.title.slice(0 , 15)}</span> Is ALREADY In Your Cart</div></div>`,
        icon: "info",
        showConfirmButton: false,
        timer: 800
      })
    }else{
      Swal.fire({
        position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 800
        }
      );
      if(product.amount>1){
        setCartItems([...cartItems , product])
      }else{
        setCartItems([...cartItems , {...product , amount : 1}])
      }
     console.log(cartItems);
    }
  }
  function delateFromCart(product , index){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        cartItems.splice(index , 1)
        setCartItems([...cartItems])
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 700
        });
      }
    });
  }
  function inCrement(product){
    ++product.amount
    setCartItems([...cartItems])
  }
  function deCrement(product){
    if(product.amount>1){
     --product.amount
     setCartItems([...cartItems])
    }
    else{
      delateFromCart(product)
    }
  }




  useEffect(()=>{
    mostSelling()
    pro2()
  },[])
  useEffect(()=>{
      localStorage.setItem('cartItems',JSON.stringify(cartItems))
      localStorage.setItem('WishlistItems',JSON.stringify(wishlistItems))
  },[cartItems,wishlistItems])
  return (
    <div>
      <BrowserRouter>
       <Navbar wishlistItems={wishlistItems} cartItems={cartItems} />
       <Routes>
            <Route path='/'  element={<Home products={products} products2={products2} addToWishlist={addToWishlist} addToCart={addToCart}/>}  />
            <Route path='Contact'  element={<Contact />}  />
            <Route path='About' element={<About />} />
            <Route path='Sign up'  element={<SignUp  />}  />
            <Route path='/Sign in'  element={<SignIn />}  />
            <Route path='Wishlist' element={<Wishlist wishlistItems={wishlistItems} products2={products2} deleteFromWishlist={deleteFromWishlist} addToCart={addToCart} />} />
            <Route path='Cart'  element={<Outlet />}  >
              <Route path='' element={<Cart cartItems={cartItems} products2={products2} delateFromCart={delateFromCart} inCrement={inCrement} deCrement={deCrement} /> } />
              <Route path='CheckOut' element={<CheckOut  cartItems={cartItems}/>} />
            </Route>
            <Route path='' element={<Outlet />} >
              <Route path={`product/:productId`} element={<ProductDetails url={url3} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
              <Route path={`product2/:productId`} element={<ProductDetails url={url2} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
              <Route path='/product/:productId/:amount' element={<ProductDetails  products={products} products2={products2} addToWishlist={addToWishlist} addToCart={addToCart} url={url3} />} />
              <Route path='/product2/:productId/:amount' element={<ProductDetails  products={products} products2={products2} addToWishlist={addToWishlist} addToCart={addToCart} url={url2}/>} />
            </Route>
            <Route path='*' element={<NotFound />} />
       </Routes>
       <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App

