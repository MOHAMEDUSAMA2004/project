import React from 'react'
import "./Home.css"
import Header from '../Header/Header'
import Category from '../Category/Category'
import JblMusic from '../JBLMusic/JBLMusic'
import NewArrival from '../NewArrival/NewArrival'
import Services from '../Services/Services'
import FlashSales from '../FlashSales/FlashSales'
import BestSelling from '../BestSelling/BestSelling'
import OurProducts from '../OurProducts/OurProducts'
function Home({products,products2,addToWishlist,addToCart,ProductDetails1,getItemFromDetails}) {
  return (
    <div className='p-5'>
      <Header />
      <FlashSales products2={products2} getItemFromDetails={getItemFromDetails} addToWishlist={addToWishlist} addToCart={addToCart} ProductDetails1={ProductDetails1}/>
      <Category />
      <BestSelling  products={products} getItemFromDetails={getItemFromDetails} addToWishlist={addToWishlist} addToCart={addToCart}/>
      <JblMusic />
      <OurProducts products={products} getItemFromDetails={getItemFromDetails} products2={products2} addToWishlist={addToWishlist} addToCart={addToCart} />
      <NewArrival />
      <Services />
    </div>
  )
}

export default Home
