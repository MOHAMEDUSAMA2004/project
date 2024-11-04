import React from 'react'
import "./NotFound.css"
import {useParams,Link} from "react-router-dom"
function NotFound() {
  return (
    <div className='m-5'>
      <div>
        <span className='text-secondary'>Home / <b className='text-black fw-normal'>404 Error </b></span>
      </div>
      <div className="container d-flex flex-column justify-content-center align-items-center" style={{height:'400px'}}>
        <h1 className='fw-bold' style={{fontSize:'80px'}}>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Link to={''} className='btn mt-5' style={{padding:'5px 20px', backgroundColor:'#DB4444',color:'#fff',borderRadius:'4px'}}>Back to home page</Link>
      </div>
    </div>
  )
}

export default NotFound
