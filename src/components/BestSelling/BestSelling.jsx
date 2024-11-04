import React,{useRef} from 'react'
import "./BestSelling.css"
import {IoIosHeartEmpty} from 'react-icons/io'
import apple from '../../assets/downs/e5011a6f245df4c38eae015c7c9ccbe7.png'
import {FaEye} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function BestSelling({products , addToWishlist,addToCart,getItemFromDetails}) { 
  return (
    <div className='mt-5'>
      <div className="sales m-5">
          <div className='d-flex align-items-center gap-3 '>
            <div style={{height:'30px',width:'20px',backgroundColor:'#DB4444',borderRadius:'4px'}}></div> 
            <span style={{color:'#DB4444',fontWeight:'600',fontSize:'16px'}}>This Month</span>
          </div>
          <div className='my-4 d-flex justify-content-between'>
            <h1 >Best Selling Products</h1>
            <button className='btn btn-danger  px-4'>View All</button>
          </div>
      </div>
      <div className="container flashSales">
       <div className="row g-5 d-flex justify-content-center mx-auto">
              {
                products.slice(8,12).map((val,i)=>{
                  return(
                <div key={i} className="col-lg-3 col-md-6 col-sm-12 begin" >
                  <div className=" card product_card border-0 w-100" >
                    <div className='d-flex flex-column top justify-content-center align-items-center'>
                      <div className='icons d-flex flex-column gap-2' >
                        <IoIosHeartEmpty onClick={()=>{addToWishlist(val)}} className='border rounded-circle w-75 fs-4 h-100 p-1 icon' />
                        <FaEye  className='border rounded-circle w-75 fs-4 h-100 p-1 icon'/>
                      </div>
                      <Link  to={`product/${val.id}`}> <img src={val.thumbnail} height={'200px'} width={'200px'}className="card-img-top" alt="..." /></Link>
                      <div className="add">
                        <button onClick={()=>addToCart(val)} className='btn btn-dark rounded-0 w-100'>Add To Cart</button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{val.title}</h5>
                      <div className='d-flex gap-3'>
                      <span className='text-danger'>${val.price}</span>
                      <span className='text-black-50 text-decoration-line-through'>${Math.ceil(val.price + val.stock)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                  )
                })
              }
         </div>
       </div>
      </div>
  )
}

export default BestSelling

