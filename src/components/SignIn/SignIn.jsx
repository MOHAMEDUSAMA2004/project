import React, { useEffect, useState } from 'react'
import "./SignIn.css"
import img from "../../assets/downs/a1c7dc5b68a42239311e510f54d8cd59.jpg"
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { Modal,Button } from 'react-bootstrap'
import { FaFaceSadTear } from 'react-icons/fa6';


function SignIn() {
  let [email, setEmail] = useState('');
  let[password , setPassword] = useState('')
  let [error , setError] = useState(false)
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

useEffect(()=>{
  let data = JSON.parse(localStorage.getItem('signUp'))
},[])
  function handleSignIn(){
    for(var i = 0 ; i<data.length ; i++){
        if(data[i].email==email && data[i].password===password){
          setError('')
          navigate('/')
        }
        else{
          handleShow()
          setError(true)
        }
    }
  }


  return (
    <div>
      <Modal className='custom-modal' show={show} bg="dark"  variant="primary" onHide={handleClose}>
        <div className='modal-content bg-dark'>
        <Modal.Header  closeButton>
          <Modal.Title className='text-light'>Please Try Again!!! <FaFaceSadTear className='text-warning'/> </Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-danger'>Oooooh No. Your Email Or Password is Incorrect Please Check</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </div>
      </Modal>


      <div className="container m-0 p-0">
        <div className="row  gx-5">
          <div className="col-lg-8 col-md-10 col-sm-12 py-5">
            <img src={img} width={'100%'} height={'650px'} alt="" />
          </div>
          <div className="col-lg-4 col-md-10 col-sm-12 my-auto">
            <div className='container w-100  '>
              <div className="card border-0 ">
                <div className="card-body">
                <h4 className="card-title mb-3">Log in to Exclusive</h4>
                <h6 className="card-subtitle mb-5 fw-light">Enter your details below</h6>
                <div className="card-text">
                  <form onSubmit={handleSignIn} className='d-flex flex-column gap-3' style={{width:'100%'}}>
                    <div className=' signInfo d-flex flex-column gap-4'>
                      <input required type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email or Phone Number' style={{width:'100%'}}/>
                      <input required type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder='password' style={{width:'100%',marginBottom:'10px'}}/>
                    </div>
                    <div className='btns d-flex justify-content-between align-items-baseline'>
                      <button type='submit' className='create btn btn-danger  text-light mb-3' style={{backgroundColor:'#DB4444',fontSize:'14px',transition:'.9s',padding:'11px 40px'}}>Log In</button>
                      <Link to={'forget'} className='forget' href="">Forget Password?</Link>
                    </div>
                  </form>
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

export default SignIn
