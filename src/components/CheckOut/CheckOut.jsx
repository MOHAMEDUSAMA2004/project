import React, { useState } from 'react'
import "./CheckOut.css"
import { Link } from 'react-router-dom'
import jbl from '../../assets/downs/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
import bKash from '../../assets/downs/Bkash.png'
import visa from '../../assets/downs/image 30.png'
import masterCard from '../../assets/downs/image 31.png'
import Nagad from '../../assets/downs/image 33.png'
import {MdDone} from 'react-icons/md'
function CheckOut({cartItems}) {
  let pathname=location.pathname.split('/')
  let part = pathname[pathname.length-1]
  let [check,setCheck] = useState(false)
  let [radio , setRadio] = useState(null)
  function handleCheck(){
    setCheck(!check)
  }
  function handleRadio(b){
    setRadio(b)
  }
  let total=0
  let subTotal=0
  return (
    <div>
      <div>
        <span className='text-secondary'><Link className='text-decoration-none text-secondary' to={'/'} >Home</Link> / <b className='text-black fw-normal'>{part} </b></span>
      </div>
      <div className=" mt-5 container">
        <h3>Billing Details</h3>
        <div className='checkDetails d-flex justify-content-between'>
            <div className="first">
              <div className='d-flex flex-column userDEtails justify-content-center'>
                <label htmlFor="fNama">First Name*</label>
                <input type="text" id="fNama" />
              </div>
              <div className='d-flex flex-column userDEtails justify-content-center'>
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" />
              </div>
              <div className='d-flex flex-column userDEtails justify-content-center'>
                <label htmlFor="address">Street Address*</label>
                <input type="text" id="address" />
              </div>
              <div className='d-flex flex-column userDEtails justify-content-center'>
                <label htmlFor="Apartment">Apartment, floor, etc. (optional)</label>
                <input type="text" id="Apartment" />
              </div>
              <div className='d-flex flex-column userDEtails justify-content-center'>
                <label htmlFor="town">Town/City*</label>
                <input type="text" id="town" />
              </div>
              <div className='d-flex flex-column userDEtails justify-content-center'>
                <label htmlFor="num">Phone Number*</label>
                <input type="number" className='' style={{WebkitAppearance:'none',MozAppearance:'textfield',appearance:'none',margin:'0'}} id="num" />
              </div>
              <div className='d-flex flex-column userDEtails justify-content-center'>
                <label htmlFor="email">Email Address*</label>
                <input type="email" id="email" />
              </div>
              <div className='d-flex  flex-row gap-3 align-items-center'>
              <div onClick={()=>{handleCheck(1)}}  className={`checkbox ${check===true?"checked":""}`} id='checkbox'><MdDone className='fs-5 '/></div>
              <label htmlFor="checkbox">Save this information for faster check-out next time</label>
              </div>
            </div>
            <div className="second d-flex flex-column gap-3 ">
              <div className='cart d-flex flex-column gap-2 '>
                {
                
                  cartItems.map((val,key)=>{
                    {
                      total+=val.price * val.amount
                    }
                    return(
                      <div className='d-flex justify-content-between align-items-center py-2 '>
                        <div>
                          <img src={val.image||val.thumbnail} width={'35px'} height={'35px'} alt="" />
                          <span>{val.title.slice(0,10)}(x{val.amount})</span>
                        </div>
                        <span>${val.price}</span>
                      </div>
                    )
                  })

                }
                <div className='d-flex justify-content-between  align-items-center py-2'>
                  <span>Subtotal : </span>
                  <span>${total}</span>
                </div>
                <div className='d-flex justify-content-between  align-items-center py-2' style={{borderBottom:'1px solid #000'}}>
                  <span>Shipping:</span>
                  <span>free</span>
                </div>
                <div className='d-flex justify-content-between  align-items-center py-2' style={{borderBottom:'1px solid #000'}}>
                  <span>Total:</span>
                  <span>${total}</span>
                </div>
              </div>
              <div className='payment d-flex justify-content-between'>
                <div className='d-flex flex-column gap-2'>
                  <div className='d-flex gap-2 align-items-center'>
                    <span onClick={()=>{handleRadio(1)}} className={`radio ${radio===1?"selected":""}`} id='radio1' ></span>
                    <label htmlFor="radio1">Bank</label>
                  </div>
                  <div className='d-flex gap-2 align-items-center'>
                    <span  onClick={()=>{handleRadio(2)}} className={`radio ${radio===2?"selected":""}`}  id='radio2' ></span>
                    <label htmlFor="radio2">Cash on delivery</label>
                  </div>
                </div>
                <div className='d-flex gap-1 align-items-center'>
                  <img src={bKash} alt="" />
                  <img src={visa} alt="" />
                  <img src={masterCard} alt="" />
                  <img src={Nagad} alt="" />
                </div>
              </div>
              <div className='d-flex gap-3'>
                <input type="text"  placeholder='Coupon Code' className='p-2 ps-3'/>
                <button className='btn btn-danger'>Apply Coupon</button>
              </div>
              <button className='btn btn-danger' style={{width:'50%'}}>Place Order</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
