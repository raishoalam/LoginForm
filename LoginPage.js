import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css'


const LoginPage = () => {
   const history = useNavigate();

const [loginData,setLoginData] = useState({
  username:'',
  password:'',
})


//submit function
const handleLoginSubmit = async(e) => {
 e.preventDefault();

 try{
  const response = await axios.post('http://localhost:8002/login',loginData);
  const {success,message} = response.data;
   
  if(loginData.data === success){
    console.log('Login Successfully');
    alert('Login Successfully..');
    history('/');
  }
  else{
    console.log(message);
    alert('email and password is Incorrect');
  }
 }
 catch(error){
  console.error('Login error',error)
  alert('email and password is Incorrect');
 }
 setLoginData({
    username:'',
    password:''
 })
}

  const handleLoginChange = (e) => {
    const {name,value} = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]:value
    }))
  }
  return (
    <div>
      <div className='wrapper-section'>
        <div className='login-card-section'>
          <img src='https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7862.jpg?' className='login-img' alt='LoginImg' />
        </div>

     
    
    <div className='login-card-section1'>
      <h1 className='login-heading'>STUDY <span className='login-heading-design'>SPHERE</span></h1>
      <form onSubmit={handleLoginSubmit}>
        <div className='input-cont'>
        <input 
        type='text'
        name='username'
        placeholder='Username'
        value={loginData.username}
        onChange={handleLoginChange}
        className='input-section'
        required
        />
        <br />
        <input 
        type='password'
        name='password'
        placeholder='Password'
        value={loginData.password}
        onChange={handleLoginChange}
        className='input-section'
        required
        />
         <br />
         <button type='submit' className='login-btn'>Login</button>
         </div>
        
        <p className='login-intro'>
          Not registered yet? <Link to ='/registration' className='link'>Register Here</Link>
        </p>
      </form>
    </div>
    </div>
    </div>
    
  )
}

export default LoginPage
