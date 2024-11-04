import React from 'react'
import "./Category.css"
import { MdOutlineArrowForward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";
import phone from '../../assets/downs/Category-CellPhone.png'
import camera from '../../assets/downs/Category-camera.png'
import computer from '../../assets/downs/Category-computer.png'
import gamepad from '../../assets/downs/Category-gamepad.png'
import headphone from '../../assets/downs/Category-headphone.png'
import smartwatch from '../../assets/downs/Category-smartwatch.png'
function Category() {
  return (
    <div className='mt-5'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className='d-flex align-items-center gap-3 '>
              <div style={{height:'30px',width:'20px',backgroundColor:'#DB4444',borderRadius:'4px'}}></div> 
              <span style={{color:'#DB4444',fontWeight:'600',fontSize:'16px'}}>Categories</span>
            </div>
            <div className='my-4 d-flex justify-content-between'>
              <h1 >Browse By Category</h1>
              <div className='d-flex gap-2'>
                <MdOutlineArrowBack className=' arrow1 ' />
                <MdOutlineArrowForward  className='arrow2  '/>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="container ">
              <div className="d-flex cats ">
                <div className=" d-flex flex-column align-items-center gap-2 cat">
                  <img src={phone} width={'50px'} alt="" />
                  <span>Phones</span>
                </div>
                <div className=" d-flex flex-column align-items-center gap-2 cat">
                  <img src={computer} width={'50px'} alt="" />
                  <span>Computers</span>
                </div>
                <div className=" d-flex flex-column align-items-center gap-2 cat">
                  <img src={smartwatch} width={'50px'} alt="" />
                  <span>SmartWatch</span>
                </div>
                <div className=" d-flex flex-column align-items-center gap-2 cat">
                  <img src={camera} width={'50px'} alt="" />
                  <span>Camera</span>
                </div>
                <div className=" d-flex flex-column align-items-center gap-2 cat">
                  <img src={headphone} width={'50px'} alt="" />
                  <span className=''>HeadPhones</span>
                </div>
                <div className=" d-flex flex-column align-items-center gap-2 cat">
                  <img src={gamepad} width={'50px'} alt="" />
                  <span>Gaming</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
