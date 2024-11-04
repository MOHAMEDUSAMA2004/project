import React,{useRef} from 'react'
import "./FlashSales.css"
import { MdOutlineArrowForward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import {IoIosHeartEmpty} from 'react-icons/io'
import {FaEye} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function FlashSales({products2 , addToWishlist,addToCart,ProductDetails1,getItemFromDetails}) {
  const sliderRef = useRef(null)
  var settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className='mt-5'>
      <div className="sales m-5">
          <div className='d-flex align-items-center gap-3 '>
            <div style={{height:'30px',width:'20px',backgroundColor:'#DB4444',borderRadius:'4px'}}></div> 
            <span style={{color:'#DB4444',fontWeight:'600',fontSize:'16px'}}>Today’s</span>
          </div>
          <div className='my-4 d-flex justify-content-between'>
            <h1 >Flash Sales</h1>
            <div className='d-flex gap-2'>
              <MdOutlineArrowBack className=' arrow1 'style={{cursor:'pointer'}} onClick={()=>sliderRef.current.slickPrev()} />
              <MdOutlineArrowForward  className='arrow2' style={{cursor:'pointer'}} onClick={()=>sliderRef.current.slickNext()}/>
            </div>
          </div>
      </div>
      <Slider ref={sliderRef} {...settings} className="container flashSales ">
        {products2.map((val,i)=>{
          return(
            <div key={i} className="card product_card border-0" >
              <div className='d-flex flex-column align-items-center top bg-light'>
                <div className='icons d-flex flex-column gap-2' >
                  <IoIosHeartEmpty onClick={()=>{addToWishlist(val)}} className='border rounded-circle w-75 fs-4 h-100 p-1 icon' />
                  <FaEye  className='border rounded-circle w-75 fs-4 h-100 p-1 icon'/>
                </div>
               <Link  to={`product2/${val.id}`}><img src={val.image} width={'200px'} height={'200px'} className="card-img-top" alt="..." /></Link>
                <div className="add">
                  <button onClick={()=>addToCart(val)} className='btn btn-dark rounded-0 w-100'>Add To Cart</button>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{val.title.slice(0,20)}</h5>
                <div className='d-flex gap-3'>
                <span className='text-danger'>${val.price}</span>
                <span className='text-black-50 text-decoration-line-through'>${val.price + val.discount}</span>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
      <div className='d-flex justify-content-center align-items-center'>
        <button className='btn btn-danger px-4 border rounded-1'>View All Products</button>
      </div>
    </div>
  )
}

export default FlashSales
