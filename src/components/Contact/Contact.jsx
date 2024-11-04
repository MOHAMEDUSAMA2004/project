import React from 'react'
import "./Contact.css"
import {useParams,Link} from "react-router-dom"
import {IoCallOutline} from "react-icons/io5"
import {CiMail} from "react-icons/ci"
function Contact() {
  let pathname=location.pathname.split('/')
  let part = pathname[pathname.length-1]
  return (
    <div className='m-5'>
      <div>
        <span className='text-secondary'><Link className='text-decoration-none text-secondary' to={'/'} >Home</Link> / <b className='text-black fw-normal'>{part} </b></span>
      </div>
      <div className="container m-5 w-100 h-100 d-flex flex-column " style={{padding:'40px 0'}}>
        <div className="row g-5 d-flex justify-content-between">
          <div className="col-lg-3 col-md-10 col-sm-12 d-flex flex-column p-4 shadow" style={{borderRadius:'8px'}}>
            <div className=" d-flex flex-column gap-4 " style={{borderBottom:'1px solid #000'}}>
              <div className=" d-flex gap-2 align-items-center">
                <IoCallOutline  className='call'/>
                <span>Call To Us</span>
              </div>
              <div className='mb-5'>
                <p>We are available 24/7, 7 days a week.</p>
                <span>Phone: +8801611112222</span>
              </div>
            </div>
            <div className=" d-flex flex-column gap-4 mt-5" style={{}}>
              <div className=" d-flex gap-2 align-items-center">
                <CiMail  className='call'/>
                <span>Write To US</span>
              </div>
              <div className=''>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <span>Emails: customer@exclusive.com</span><br />
                <span>Emails: support@exclusive.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-10 col-sm-12 shadow ">
            <div className="container p-4 m-0">
              <form action="" className=' d-flex flex-column gap-4 '>
                <div className='d-flex  inpts'>
                  <input type="text" placeholder='Your Name *' name="" id="" />
                  <input type="email" placeholder='Your Email *' name="" id="" />
                  <input type="number" placeholder='Your Phone *' name="" id="" />
                </div>
                <textarea contextMenu='none' type="text" name="" placeholder='Your Massage' id="" style={{width:'100%',height:'300px',backgroundColor:'#F5F5F5',border:'none',outline:'none',borderRadius:'4px',resize:'none',padding:'10px' }}/>
                <div style={{display:'flex',justifyContent:'end'}}>
                  <button className='btn' style ={{backgroundColor:'#DB4444',color:'#fff',fontSize:'14px',padding:'10px 28px',borderRadius:'4px'}}>Send Massage</button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
