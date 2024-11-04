import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'
import portrait from '../../assets/downs/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png'
import shop from '../../assets/downs/Icon-Shop.png'
import sale from '../../assets/downs/Icon-Sale.png'
import money from '../../assets/downs/Icon-Moneybag.png'
import shopping from '../../assets/downs/Icon-Shopping bag.png'
import fMan from '../../assets/downs/image 46.png'
import sMan from '../../assets/downs/image 47.png'
import woman from '../../assets/downs/image 51.png'
import twitter from '../../assets/downs/twitter.png'
import insta from '../../assets/downs/icon-instagram.png'
import linkeIn from '../../assets/downs/icon-Linkedin.png'
import delivery from '../../assets/downs/icon-delivery.png'
import secure from '../../assets/downs/icon-secure.png'
import Customer from '../../assets/downs/icon-Customer service.png'
function About() {
  let pathname=location.pathname.split('/')
  let part = pathname[pathname.length-1]
console.log(pathname[pathname.length-1]);
  return (
    <div className='d-flex flex-column gap-5'>
      <div className='m-3'>
         <span><Link className='text-decoration-none text-secondary' to={'/'} >Home</Link> / {part}</span>
      </div>
      <div className="container d-flex justify-content-between gap-5">
        <div className="ourStory w-50 d-flex flex-column gap-2">
          <h1>Our Story</h1>
          <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
          </p>
          <p>
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
        </div>
        <img src={portrait} width={'500px'} alt="" />
      </div>
      <div className="container shoppingIcons d-flex justify-content-between gap-5">
        <div className='d-flex align-items-center justify-content-center flex-column gap-2'>
          <div className='icon '>
            <img src={shop} alt="" />
          </div>
          <h3>10.5k </h3>
          <span>Sallers active our site</span>
        </div>
        <div className='d-flex align-items-center justify-content-center flex-column gap-2'>
          <div className='icon '>
            <img src={sale} alt="" />
          </div>
          <h3>33k</h3>
          <span>Mopnthly Produduct Sale</span>
        </div>
        <div className='d-flex  align-items-center justify-content-center flex-column gap-2'>
          <div className='icon '>
            <img src={shopping} alt="" />
          </div>
          <h3>45.5k </h3>
          <span>Customer active in our site</span>
        </div>
        <div className='d-flex align-items-center justify-content-center flex-column gap-2'>
          <div className='icon '>
            <img src={money} alt="" />
          </div>
          <h3>25k </h3>
          <span>Anual gross sale in our site</span>
        </div>
      </div>
      <div className="container d-flex characters gap-5">
        <div className='d-flex flex-column gap-3 character'>
          <div className='d-flex align-center justify-content-center' style={{backgroundColor:'#F5F5F5'}}>
              <img src={fMan} height={'300px'} width={'180px'} alt="" />
          </div>
          <h3>Tom Cruise</h3>
          <span>Founder & Chairman</span>
          <div>
             <img src={twitter} alt="" />
             <img src={insta} alt="" />
             <img src={linkeIn} alt="" />
          </div>
        </div>
        <div className='d-flex flex-column gap-3 character'>
          <div className='d-flex align-center justify-content-center' style={{backgroundColor:'#F5F5F5'}}>
              <img src={woman} height={'300px'} width={'180px'} alt="" />
          </div>
          <h3>Emma Watson</h3>
          <span>Managing Director</span>
          <div>
             <img src={twitter} alt="" />
             <img src={insta} alt="" />
             <img src={linkeIn} alt="" />
          </div>
        </div>
        <div className='d-flex flex-column gap-3 character'>
          <div className='d-flex align-center justify-content-center' style={{backgroundColor:'#F5F5F5'}}>
              <img src={sMan} height={'300px'} width={'180px'} alt="" />
          </div>
          <h3>Will Smith</h3>
          <span>Product Designer</span>
          <div>
             <img src={twitter} alt="" />
             <img src={insta} alt="" />
             <img src={linkeIn} alt="" />
          </div>
        </div>
      </div>
      <div className='circles m-auto w-100 d-flex justify-content-center'>
          <div className='m-auto  d-flex  gap-2'>
            <span></span>
            <span></span>
            <span style={{backgroundColor:'#DB4444'}}></span>
            <span></span>
            <span></span>
          </div>
      </div>
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

export default About
