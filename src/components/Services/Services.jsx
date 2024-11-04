import React from 'react'
import "./Services.css"
import delivery from '../../assets/downs/icon-delivery.png'
import secure from '../../assets/downs/icon-secure.png'
import Customer from '../../assets/downs/icon-Customer service.png'
function Services() {
  return (
    <div className='mt-5 p-5'>
      <div className="container p-5 services d-flex">
        <div className="DELIVERY ">
          <div className="logo bg-black rounded-circle">
            <img src={delivery} alt="" />
          </div>
          <b className='mb-0'>FREE AND FAST DELIVERY</b>
          <span className='mt-0'>Free delivery for all orders over $140</span>
        </div>
        <div className="CUSTOMER ">
          <div className="logo bg-black rounded-circle">
            <img src={Customer} alt="" />
          </div>
          <b className='mb-0'>24/7 CUSTOMER SERVICE</b>
          <span className='mt-0'>Friendly 24/7 customer support</span>
        </div>
        <div className="secure ">
          <div className="logo bg-black rounded-circle">
            <img src={secure} alt="" />
          </div>
          <b className='mb-0'>MONEY BACK GUARANTEE</b>
          <span className='mt-0'>We reurn money within 30 days</span>
        </div>
      </div>
    </div>
  )
}

export default Services
