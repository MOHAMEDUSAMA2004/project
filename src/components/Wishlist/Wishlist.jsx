import React from 'react'
import "./Wishlist.css"
import {AiOutlineDelete} from 'react-icons/ai'
import {FaEye} from 'react-icons/fa'
import apple from '../../assets/downs/e5011a6f245df4c38eae015c7c9ccbe7.png'
function Wishlist({wishlistItems , products2 ,deleteFromWishlist,addToCart}) {
  let start = Math.floor(Math.random() * (products2.length));
  if(start>=46){
    start = 45
  }
  let end = start + 4;
  console.log(start , end);
  
  return (
    <div>
      <div className="container mt-5 ">
        <div className="first d-flex justify-content-between">
          <span>Wishlist ( {wishlistItems.length} )</span>
          {
            wishlistItems.length===0 ? 
            ""
            :
            <button  className='btn btn-outline-dark '>Move All To Bag</button>
          }
        </div>
        <div className=" second row gx-5 gy-1">
          {
            !wishlistItems.length?
              <h1 className='text-danger mt-5 mb-5 d-flex justify-content-center'>There Is no Items In The Wishlist</h1>
            :
              wishlistItems.map((val ,index)=>{
                return(
                  <div key={index} className="col-lg-3 col-md-6 col-sm-12 begin mt-5" >
                      <div className=" card product_card border-0 w-100" >
                        <div className='d-flex flex-column top justify-content-center align-items-center'>
                          <div className='icons d-flex flex-column gap-2' >
                            <AiOutlineDelete onClick={()=>(deleteFromWishlist(val,index))} className='border rounded-circle w-75 fs-4 h-100 p-1 icon' />
                          </div>
                          <img src={val.image ||val.thumbnail} height={'200px'} width={'50px'}  className="card-img-top" alt="..." />
                          <div className="add">
                            <button  onClick={()=>addToCart(val)} className='btn btn-dark rounded-0 w-100'>Add To Cart</button>
                          </div>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{val.title.slice(0,20)}</h5>
                          <div className='d-flex gap-3'>
                          <span className='text-danger'> $ {val.price}</span>
                          <span className='text-black-50 text-decoration-line-through'> $ {val.price + val.discount}</span>
                          </div>
                        </div>
                      </div>
                  </div>
                )
              })
          }
        </div>
        <div className="third container">
          <div className="sales m-5 d-flex justify-content-between">
            <div className='d-flex align-items-center gap-3 '>
              <div style={{height:'30px',width:'20px',backgroundColor:'#DB4444',borderRadius:'4px'}}></div> 
              <span style={{color:'#DB4444',fontWeight:'600',fontSize:'16px'}}>Just For You</span>
            </div>
            <button className='btn btn-outline-dark'> See All </button>
          </div>
          <div className="row">
          {
            products2.slice(start , end).map((val,i)=>{
              return(
                <div key={i} className="col-lg-3 col-md-6 col-sm-12 begin" >
                <div className=" card product_card border-0 w-100" >
                  <div className='d-flex flex-column top justify-content-center align-items-center'>
                    <div className='icons d-flex flex-column gap-2' >
                      <FaEye  className='border rounded-circle w-75 fs-4 h-100 p-1 icon'/>
                    </div>
                    <img src={val.image} height={'200px'} width={'200px'}  className="card-img-top" alt="..." />
                    <div className="add">
                      <button onClick={()=>addToCart(val)}  className='btn btn-dark rounded-0 w-100'>Add To Cart</button>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{val.title.slice(0,20)}</h5>
                    <div className='d-flex gap-3'>
                    <span className='text-danger'>${val.price}</span>
                    <span className='text-black-50 text-decoration-line-through'>{val.discount?`$ ${val.price + val.discount}`:''}</span>
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
    </div>
  )
}

export default Wishlist
