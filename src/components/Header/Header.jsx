import React from 'react'
import "./Header.css"
import { RiArrowDropDownLine } from "react-icons/ri";
import apple from '../../assets/downs/e5011a6f245df4c38eae015c7c9ccbe7.png'
import phone from '../../assets/downs/7215f42e5883a64157f0aa3a4d1a866a.jpg'
import { RiArrowRightLine } from "react-icons/ri";

function Header() {
  return (
    <header className='d-flex px-0 gap-5'>
      <div className="category  ">
        <ul>
          <li>Womans's Fashion <RiArrowDropDownLine style={{transform:"rotate(-90deg)",fontSize:"25px"}}/></li>
          <li>Mens's Fashion <RiArrowDropDownLine style={{transform:"rotate(-90deg)",fontSize:"25px"}}/></li>
          <li>Electronics</li>
          <li>Home & Life Style</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby's & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
      <div className="line"></div>
      <div className="iphone text-light w-100 px-4">
        <div className="container h-100 bg-black d-flex justify-content-between ">
          <div className="right_hand p-5 d-flex gap-2 flex-column">
          <div className="apple text-light d-flex gap-3 align-items-center" >
            <img src={apple} alt="" width={'40px'} height={'49px'}/>
            <span>iPhone 14 Series</span>
          </div>
          <h1>Up to 10% off Voucher</h1>
          <div className="shop-now">
            <a href=''>Shop Now</a>
            <RiArrowRightLine />
          </div>
          </div>
          <div className='slides'>
            <div>
              <span></span>
              <span></span>
              <span style={{backgroundColor:'#DB4444',border:'2px solid #fff'}}></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="left_hand">
            <img src={phone} alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
