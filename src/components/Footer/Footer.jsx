import React from 'react'
import "./Footer.css"
import send from '../../assets/downs/Vector.png'
import {AiOutlineSend} from 'react-icons/ai'
import QR from '../../assets/downs/Qr Code.png'
import gPlay from '../../assets/googlePlay.png'
import {FaApple} from 'react-icons/fa'
import {FaRegCopyright} from 'react-icons/fa6'
function Footer() {
  return (
    <footer className='p-5 pb-3 bg-black text-light '>
      <div className="container d-flex gap-5 justify-content-between mb-4" >
        <div className="first ">
          <h4>Exclusive</h4>
          <h5>Subscribe</h5>
          <span>Get 10% off your first order</span>
          <div>
            <input type="text" placeholder='Enter your email' />
            <AiOutlineSend  className='fs-5'/>
          </div>
        </div>
        <div className="second ">
          <h4>Support</h4>
          <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <span>exclusive@gmail.com</span>
          <i>+88015-88888-9999</i>
        </div>
        <div className="third ">
          <h4>Account</h4>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="forth ">
          <h4>Quick Link</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="fifth ">
          <h4>Download App</h4>
          <span>Save $3 with App New User Only</span>
          <div className="links mt-5 d-flex align-items-center gap-3">
            <div className="Qr_code ">
              <img src={QR}  />
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center gap-3' >
              <div className="google d-flex align-items-center px-1 gap-0">
                <img src={gPlay} width={'40px'} height={'40px'} alt="" />
                <div className='d-flex flex-column gap-0'>
                  <span className=''>GET IT ON</span>
                  <b className=' '>Google Play</b>
                </div>
              </div>
              <div className="google d-flex align-items-center px-1">
                <FaApple  style={{width:'40px' , height:'40px'}} />
                <div className='d-flex flex-column'>
                  <span>GET IT ON</span>
                  <b className='m-0 p-0'>Google Play</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="last mt-2 ">
        <div className="text mx-auto d-flex gap-2 align-items-center" style={{width:'max-content',color:'#F9F9F933'}}>
        <FaRegCopyright />
        <span>Copyright Rimel 2022. All right reserved</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
