import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

function Navbar({wishlistItems,cartItems}) {
  return (
    <div className='sticky-top'>
      <div className="top_nav px-5 ">
        <div className="containerr px-4">
          <div className="text">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </div>
          <div className="language">English  <RiArrowDropDownLine /></div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg px-5 "style={{backgroundColor:"#fff"}}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">Exclusive</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-5">
              <li className="nav-item">
                <Link to={''} className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'Contact'} className="nav-link " aria-current="page" href="#">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to={'About'} className="nav-link " aria-current="page" href="#">About</Link>
              </li>
              <li className="nav-item">
                <Link to={'Sign up'} className="nav-link " aria-current="page" href="#">Sign Up</Link>
              </li>
            </ul>
          </div>
              <div className=' contents d-flex align-items-center justify-content-center gap-3' >
                <div className='search d-flex align-items-center justify-content-around ' style={{backgroundColor:"#F5F5F5",width:"70%",padding:"7px 12px 7px 20px"}}>
                  <input type="text" className='inpt_search w-75 fs-5' placeholder='What are you looking for?' style={{border:"none",outline:"none",backgroundColor:"transparent"}}/>
                  <FiSearch className='icon'/>
                </div>
                <div className="icons d-flex align-items-center justify-content-center gap-3 ">
                     <Link to={'Wishlist'}  className='text-black text-decoration-none d-flex align-items-center justify-content-center'>
                       <GoHeart className='icon'/>
                       <div>
                          <b className=''>{wishlistItems.length}</b>
                       </div>
                     </Link> 
                    <Link to={'Cart'} className='text-black'>
                      <PiShoppingCartSimpleLight className='icon'/>
                      <div>
                          <b className=''>{cartItems.length}</b>
                       </div>
                    </Link>
                </div>
              </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
