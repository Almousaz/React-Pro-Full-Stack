import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import  { toast } from 'react-hot-toast';



const Login = () => {


  const [email,setEmail]=useState('')
  const navigate=useNavigate()
  const [password,setPassword]=useState('')



  const handleSubmit= async(e)=>{
    e.preventDefault();
      console.log(email,password)
      try {
          const request= await axios.post('http://localhost:3636/api/auth/login',{email,password})
          const reponse= request.data 

          if (request.status==200) {
            if (reponse.user.role =='admin') {
              navigate('/admin')
            }else if (reponse.user.role =='user') {
               navigate('/')
            }
            toast.success(reponse.message)
            // dispatch(SetUser(reponse.user))
            
          }
          console.log(reponse)
      } catch (error) {
        console.log(error)
      }
   }



  return (


    

    <div className='login-container'>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
        <div className='input-group'>
            <label htmlFor="Email">Email</label>
            <input type="email" name="" id="email" 
                onChange={(e)=>setEmail(e.target.value)}
            />
        </div>
        <div className='input-group'>
            <label htmlFor="passowrd">Password</label>
            <input type="password" name=""
              onChange={(e)=>setPassword(e.target.value)} id="password" />
        </div>
        <button type='submit'>Login</button>
        <p className='register-link'>
        Not registered? <Link to={'/register'}>Register here</Link>
        </p>
    </form>
</div>




  )
}

export default Login