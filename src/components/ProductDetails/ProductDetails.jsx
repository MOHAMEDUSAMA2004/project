import React, { useEffect, useState,useRef } from 'react'
import "./ProductDetails.css"
import { Link, useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { GoHeart } from "react-icons/go";
import delivery from '../../assets/downs/icon-delivery2.png'
import Return from '../../assets/downs/Icon-return.png'
import jbl from '../../assets/downs/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
import { MdOutlineArrowForward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import {IoIosHeartEmpty} from 'react-icons/io'
import {FaEye} from 'react-icons/fa'
function ProductDetails({url,addToCart,addToWishlist,ProductDetails1}) {
  const sliderRef = useRef(null)
  var settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const a =Math.round(Math.random() * 254)
  const b =Math.round(Math.random() * 254)
  const c =Math.round(Math.random() * 254)
  let itemID = useParams().productId
  let ProductAmount = 1
  console.log(itemID);
  if(useParams().amount){
    ProductAmount = useParams().amount
   console.log(ProductAmount);
  } 
 let category;
  let productUrl = `${url}/${itemID}`
  let [ProductDetails , setProductDetails] = useState({})
  let [productDetails2 , setProductDetails2] = useState([])
  async function getProducts(){
    let pro
    let {data} = await axios.get(productUrl)
    if(data.product){
      pro = 'data.products'
      setProductDetails(data.product)
      category = data.product.category
      if(ProductAmount){
        setProductDetails(lastData=>({...lastData , Color1:`rgb(${a},${b},${c})` , Color2:`rgb(${c},${a},${b})`,amount:ProductAmount}))
       }else{
        setProductDetails(lastData=>({...lastData , Color1:`rgb(${a},${b},${c})` , Color2:`rgb(${c},${a},${b})`}))
      }
      console.log(ProductDetails);
    }
    else
    {
      pro = 'data'
      setProductDetails(data)
      category = data.category
      if(ProductAmount){
        setProductDetails(lastData=>({...lastData , Color1:`rgb(${a},${b},${c})` , Color2:`rgb(${c},${a},${b})`,amount:ProductAmount}))
       }else{
        setProductDetails(lastData=>({...lastData , Color1:`rgb(${a},${b},${c})` , Color2:`rgb(${c},${a},${b})`}))
      }
      console.log(ProductDetails);
    }
    async function getProducts2(){
      if(pro=='data.products'){
        let src = await axios.get(`${url}/category?type=${category}`)
      setProductDetails2(src.data.products)
      }else{
        let src = await axios.get(`${url}/category/${category}`)
        setProductDetails2(src.data.products)
      }
    }
    getProducts2()
  }

 let [isClicked ,setIsClicked]= useState(null)
 let [isClicked2 ,setIsClicked2]= useState(null)
const handleClicked =(btn)=>{
  setIsClicked(btn)
}
const handleClicked2= (btn)=>{
  setIsClicked2(btn)
}
function inCrement (x){
  ++x.amount;
  setProductDetails({...ProductDetails})
}
function deCrement (x){
  if(x.amount>1){
    --x.amount
  }
  else{
  
  }
  setProductDetails({...ProductDetails})

}
// console.log(ProductDetails1);
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div className=''>
      <div className="productPath m-5">
        <span className='text-secondary'>
            <Link className='text-decoration-none text-secondary' to={'/'} >Home</Link> / {ProductDetails.category} /<b className='text-black fw-normal'>{ProductDetails.title} </b>
        </span>
      </div>
      <div className="px-5 d-flex gap-5 justify-content-between m-5 " style={{}}>
      {
        ProductDetails?
        <>
            <div className="img p-5  d-flex justify-content-center align-items-center " style={{backgroundColor:'#F5F5F5'}}>
              <img src={ProductDetails.image ||ProductDetails.thumbnail}  height={'300px'} width={'450px'} alt="" />
            </div>
            <div className="details px-5  px-5 d-flex flex-column gap-3" style={{width:'40%'}}>
                <h4>{ProductDetails.title}</h4>
                <span className='fs-5'>${ProductDetails.price}</span>
                <p>{ProductDetails.description}</p>
                <hr />
                <span className='d-flex gap-2 align-items-center'>Colors:
                  <div className='d-flex gap-2 align-items-center'>
                    <div onClick={()=>{handleClicked(1)}} className={isClicked===1 ?"selectedColor":"" } style={{width:'20px', height:'20px', borderRadius:'50%' , backgroundColor:`${ProductDetails.Color2}`,transition:'.2s',cursor:'pointer'}}></div>
                    <div  onClick={()=>{handleClicked(2)}} className={isClicked===2?"selectedColor":""} style={{width:'20px', height:'20px', borderRadius:'50%' , backgroundColor:`${ProductDetails.Color1}`,transition:'.2s',cursor:'pointer'}}></div>
                  </div>
                </span>
                <span className='d-flex align-items-center gap-3'>
                  Size:
                  <div className='d-flex gap-2'>
                    <div onClick={()=>{handleClicked2(1)}} className={isClicked2===1 ?"selectedSize":"" } style={{textAlign:'center',width:'30px',border:'1px solid #000',padding:'4px 5px',borderRadius:'4px',transition:'.01s',cursor:'pointer' }}>XS</div>
                    <div onClick={()=>{handleClicked2(2)}} className={isClicked2===2 ?"selectedSize":"" } style={{textAlign:'center',width:'30px',border:'1px solid #000',padding:'4px 5px',borderRadius:'4px',transition:'.01s',cursor:'pointer' }}>S</div>
                    <div onClick={()=>{handleClicked2(3)}} className={isClicked2===3 ?"selectedSize":"" } style={{textAlign:'center',width:'30px',border:'1px solid #000',padding:'4px 5px',borderRadius:'4px',transition:'.01s',cursor:'pointer' }}>M</div>
                    <div onClick={()=>{handleClicked2(4)}} className={isClicked2===4 ?"selectedSize":"" } style={{textAlign:'center',width:'30px',border:'1px solid #000',padding:'4px 5px',borderRadius:'4px',transition:'.01s',cursor:'pointer' }}>L</div>
                    <div onClick={()=>{handleClicked2(5)}} className={isClicked2===5 ?"selectedSize":"" } style={{textAlign:'center',width:'30px',border:'1px solid #000',padding:'4px 5px',borderRadius:'4px',transition:'.01s',cursor:'pointer' }}>XL</div>
                  </div>
                </span>
                <div className='d-flex justify-content-between align-items-center py-3'>
                  <div className=' d-flex justify-content-between align-items-center rounded'>
                    <button onClick={()=>{deCrement(ProductDetails)}}  className='plm px-3 fs-4 w-25 py-1 d-flex justify-content-center align-content-center'style={{cursor:'pointer'}}>-</button>
                    <span className='fs-4 py-1 px-5 w-75  d-flex justify-content-center align-content-center' style={{borderTop:'1px solid #00000080',borderBottom:'1px solid #00000080'}}>{ProductDetails.amount}</span> 
                    <button onClick={()=>{inCrement(ProductDetails)}} className='plm px-3 fs-4 w-25 py-1 d-flex justify-content-center align-content-center'style={{cursor:'pointer'}}>+</button>
                  </div>
                  <button  onClick={()=>{addToCart(ProductDetails)}} className='btn btn-danger px-5 py-2'>Buy Now</button>
                  <GoHeart onClick={()=>addToWishlist(ProductDetails)} className='fs-1  p-1 rounded-2 like' style={{border:'1px solid #00000080',transition:'.5s'}}/>
                </div>
                <div className='' style={{border:'1px solid #00000080',borderRadius:'4px'}}>
                  <div className='d-flex gap-3 p-2 delServices' style={{borderBottom:'1px solid #00000080'}}>
                    <img src={delivery} width={'50px'} height={'50px'}  alt="" />
                    <div>
                      <h6>Free Delivery</h6>
                      <p className='' style={{fontSize:'12px'}}>Enter your postal code for Delivery Availability</p>
                    </div>
                  </div>
                  <div className='d-flex gap-3 p-2 delServices'>
                    <img src={Return} width={'50px'} height={'50px'}  alt="" />
                    <div>
                      <h6>Return Delivery</h6>
                      <p className='' style={{fontSize:'12px'}}>Free 30 Days Delivery Returns. Details</p>
                    </div>
                  </div>
                </div>
            </div>
        </>
        :
        <div><h1 className='text-danger'>Product Not Found</h1></div>
        }
      </div>
      <div className="sales m-5">
          <div className='d-flex align-items-center gap-3 '>
            <div style={{height:'30px',width:'20px',backgroundColor:'#DB4444',borderRadius:'4px'}}></div> 
            <span style={{color:'#DB4444',fontWeight:'600',fontSize:'16px'}}>Related Item</span>
          </div>
          <div className='my-4 d-flex justify-content-end'>
              <MdOutlineArrowBack className=' arrow1 'style={{cursor:'pointer'}} onClick={()=>sliderRef.current.slickPrev()} />
              <MdOutlineArrowForward  className='arrow2' style={{cursor:'pointer'}} onClick={()=>sliderRef.current.slickNext()}/>
          </div>
      </div>
      <Slider ref={sliderRef} {...settings} className="container flashSales ">
        {productDetails2.map((val,i)=>{
          return(
            <div key={i} className="card product_card border-0" >
              <div className='d-flex flex-column align-items-center top bg-light'>
                <div className='icons d-flex flex-column gap-2' >
                  <IoIosHeartEmpty onClick={()=>{addToWishlist(val)}} className='border rounded-circle w-75 fs-4 h-100 p-1 icon' />
                  <FaEye  className='border rounded-circle w-75 fs-4 h-100 p-1 icon'/>
                </div>
               <Link  to={`product2/${val.id}`}><img src={val.image||val.thumbnail} width={'200px'} height={'200px'} className="card-img-top" alt="..." /></Link>
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
    </div>
  )
}

export default ProductDetails
