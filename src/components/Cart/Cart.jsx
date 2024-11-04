import React from 'react'
import "./Cart.css"
import jbl from '../../assets/downs/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
import { Link } from 'react-router-dom'
import {IoIosArrowUp} from 'react-icons/io'
import {IoIosArrowDown} from 'react-icons/io'
function Cart({cartItems,products2,delateFromCart,inCrement,deCrement,getItemFromCart}) {
  let pathname=location.pathname.split('/')
  let part = pathname[pathname.length-1]
  let total=0.00;
  console.log(cartItems);
  
  return (
    <div>
      <div className='m-5'>
        <span className='text-secondary'><Link className='text-decoration-none text-secondary' to={'/'} >Home</Link> / <b className='text-black fw-normal'>{part} </b></span>
      </div>
      <div className="container mt-5 mb-5">
        {
          cartItems.length===0?
            <div className='m-5 d-flex justify-content-center'>
              <h1 className='m-5 text-danger mx-auto'>The Cart Has No Items ( <span className='text-success'>Start Adding Products</span>)</h1>
            </div>
          :
        <>
          <table className="cart  table table-borderless  ">
            <thead>
              <tr className='' >
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {
                cartItems.map((val ,index)=>{
                  {total+=val.price * val.amount}
                  return(
                    <tr key={index} className=''>
                      <td scope='row' className='d-flex gap-3 align-items-center position-relative'>
                        <div onClick={()=>delateFromCart(index)} className='btn btn-danger p-0 deleteCartItem' style={{position:'absolute',top:'2px',left:'5px',cursor:'pointer',borderRadius:'50%',height:'0',width:'0',color:'white',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#DB4444',transition:'.5s'}}>X</div>
                      <Link to={val.image?`/product2/${val.id}/${val.amount}`:`/product/${val.id}/${val.amount}`} onClick={()=>getItemFromCart(val)}><img  src={val.image||val.thumbnail} width={'50px'} height={'40px'} alt="" /></Link>
                        <span>{val.title.slice(0,20)}</span>
                      </td>
                      <td scope='row'>${val.price}</td>
                      <td scope='row'>
                        <div className='d-flex align-items-center gap-3 px-2 p-1 rounded-2' style={{border:'2px solid #00000066'}}>
                          <span> {val.amount}</span>
                          <div className='d-flex flex-column p-0'>
                            <button className='btn p-0  d-flex align-items-center' style={{height:'20px'}}>
                              <IoIosArrowUp onClick={()=>inCrement(val)} className='arrows' style={{cursor:'pointer',transition:'.5s'}}/>
                            </button>
                            <button className='btn p-0 m-0 d-flex align-items-center' style={{height:'20px'}}>
                              <IoIosArrowDown  onClick ={()=>deCrement(val)} className='arrows' style={{cursor:'pointer',transition:'.5s'}}/>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td scope='row'>${val.price * val.amount}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        
          <div className='btns d-flex justify-content-between'>
            <button className='btn btn-outline-dark px-4'>Return To Shop</button>
            <button className='btn btn-outline-dark px-4'>Update Cart</button>
          </div>
          <div className="container checkout mt-5">
            <div className='first'>
              <input type="text" className='h-100 ' placeholder='Coupon Code' />
              <button className='btn btn-danger'>Apply Coupon</button>
            </div>
            <div className="second w-25">
              <h5>Cart Total</h5>
              <div className='d-flex justify-content-between'>
                <span>Subtotal:</span>
                <span>${total}</span>
              </div>
              <hr />
              <div className='d-flex justify-content-between'>
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <hr />
              <div className='d-flex justify-content-between'>
                <span>Total:</span>
                <span>${total}</span>
              </div>
              <div className='d-flex justify-content-center align-items-center mt-3'>
                <Link to={'CheckOut'}  className='btn btn-danger px-4 mx-auto'>Process to checkout</Link>
              </div>
            </div>
          </div>
        </>
       }
      </div>
    </div>
  )
}

export default Cart
