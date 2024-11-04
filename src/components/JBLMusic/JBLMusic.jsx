import React from 'react'
import "./JblMusic.css"
import Jbg from '../../assets/downs/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
function JblMusic() {
  return (
    <div className=' mt-5'>
      <div className="container p-5 bg-black music d-flex justify-content-between">
        <div className="texts d-flex flex-column gap-4 ">
          <span className='' style={{color:'#00FF66'}}>Categories</span>
          <h1 style={{width:'130%',color:'#fff'}}>Enhance Your Music Experience</h1>
          <div className='time'>
            <div>
              <b>23</b>
              <span>Hours</span>
            </div>
            <div>
              <b>05</b>
              <span>Days</span>
            </div>
            <div>
              <b>59</b>
              <span>Minutes</span>
            </div>
            <div>
              <b>35</b>
              <span>Seconds</span>
            </div>
          </div>
          <button className='btn buy_now'>Buy Now!</button>
        </div>
        <div className="music_img">
          <img src={Jbg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default JblMusic
