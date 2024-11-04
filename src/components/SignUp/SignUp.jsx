import React, { useEffect, useState } from 'react'
import "./SignUp.css"
import img from "../../assets/downs/a1c7dc5b68a42239311e510f54d8cd59.jpg"
import { FcGoogle } from "react-icons/fc";
import { json, Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
function SignUp() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password , setPassword] = useState('')
  const [error,setError] = useState('')
  const [data ,setData] = useState({})
  const navigate =useNavigate();




let [signUp , setSignUp] = useState([])
function handleSignUp(e){
  e.preventDefault()
  setSignUp([...signUp , {name , email , password}]);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
    didClose: () => {
      navigate('/Sign in')
  }
});
  Toast.fire({
    icon: "success",
    title: "Correct , You are about to go to login page"
  });
}
useEffect(()=>{
  if(localStorage.getItem('signUp')==null){
    setSignUp([])
  }else{
    setSignUp(JSON.parse(localStorage.getItem('signUp')))
  }
},[])
useEffect(()=>{
  localStorage.setItem('signUp', JSON.stringify(signUp))
},[signUp])
  return (
    <div>
      <div className="container m-0 p-0">
        <div className="row  gx-5">
          <div className="col-lg-8 col-md-10 col-sm-12 py-5">
            <img src={img} width={'100%'} height={'650px'} alt="" />
          </div>
          <div className="col-lg-4 col-md-10 col-sm-12 my-auto">
            <div className='container w-100  '>
              <div className="card border-0 ">
                <div className="card-body">
                <h4 className="card-title mb-3">Create An Account</h4>
                <h6 className="card-subtitle mb-5 fw-light">Enter your details below</h6>
                <div className="card-text">
                  <form onSubmit={handleSignUp} className='d-flex flex-column gap-3' style={{width:'100%'}}>
                    <div className=' signInfo d-flex flex-column gap-4'>
                      <input type="text" required value={name} onChange={e=>setName(e.target.value)} placeholder='Name' style={{width:'100%'}}/>
                      <input type="text" required value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email or Phone Number' style={{width:'100%'}}/>
                      <input type="password" required value={password} onChange={e=>setPassword(e.target.value)} placeholder='password' style={{width:'100%',marginBottom:'10px'}}/>
                    </div>
                    <div className='btns'>
                      <button type='submit' className='create btn btn-danger w-100 text-light mb-3' style={{backgroundColor:'#DB4444',fontSize:'14px',transition:'.9s'}}>Create An Account</button>
                      <button className='btn btn btn-outline-dark w-100  ' style={{fontSize:'14px',transition:'.9s'}}><FcGoogle className='fs-4 me-2'/> Sign up with Google</button>
                      <p style={{fontSize:"12px",textAlign:'center',marginTop:'30px'}}>Already have account?<Link to={'/Sign in'} href="" className='login '> Log In </Link></p>
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

export default SignUp
