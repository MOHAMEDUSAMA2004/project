import React from 'react'
import "./NewArrival.css"
function NewArrival() {
  return (
    <div className='mt-5'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className='d-flex align-items-center gap-3 '>
                <div style={{height:'30px',width:'20px',backgroundColor:'#DB4444',borderRadius:'4px'}}></div> 
                <span style={{color:'#DB4444',fontWeight:'600',fontSize:'16px'}}>Featured</span>
              </div>
              <div className='my-4 d-flex justify-content-between'>
                <h1 >New Arrival</h1>
              </div>
          </div>
          <div className="col-12">
            <div className="container">
              <div className="row arrival g-5">
                <div className="col-lg-6 col-md-12 col-sm-12 bg-black PlayStation" style={{height:'100px'}}>
                  <div className='' style={{width:'55%',padding:'20px 0',fontSize:'13px'}}>
                    <h6>PlayStation 5</h6>
                    <p>Black and White version of the PS5 coming out on sale.</p>
                    <a href="" className='btn'>Shop Now</a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column gap-4">
                  <div className="Women_Collections  w-100" style={{backgroundColor:'#0D0D0D'}}>
                    <div className='' style={{width:'55%',padding:'30px',fontSize:'12px'}}>
                      <h6>PlayStation 5</h6>
                      <p>Featured woman collections that give you another vibe.</p>
                      <a className='btn btn' href="">Shop Now</a>
                    </div>
                  </div>
                  <div className='double d-flex gap-3 ' style={{height:'288px'}}>
                    <div className="Speakers  w-100" style={{backgroundColor:'#0D0D0D'}}>
                      <div className='' style={{width:'70%',padding:'10px 20px',fontSize:'12px'}}>
                        <h6>PlayStation 5</h6>
                        <p>Black and White version of the PS5 coming out on sale.</p>
                        <a className='btn btn' href="">Shop Now</a>
                      </div>
                    </div>
                    <div className=" Perfume w-100" style={{backgroundColor:'#0D0D0D'}}>
                      <div className='' style={{width:'100%',padding:'10px 20px',fontSize:'12px'}}>
                        <h6>PlayStation 5</h6>
                        <p>Amazon wireless speakers</p>
                        <a className='btn btn' href="">Shop Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewArrival
