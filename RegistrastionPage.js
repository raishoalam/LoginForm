import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './LoginPage.css'

const RegistrationPage = () => {
    const [registrationData,setRegistrationData] = useState({
        username:'',
        password:''
    })


const handleRegistrationChange = (e) => {
const {name,value} = e.target;

setRegistrationData((prevData) => ({
    ...prevData,
    [name] : value,
}))

}

const handleRegistrationSubmit = async(e) => {
e.preventDefault();
try{
    const response = await axios.post('http://localhost:8002/register',registrationData);
    console.log(response.data);
}
catch(error){
    console.log(error)
}
setRegistrationData({
    username:'',
    password:'',
})
}

  return (
    <div>
      <div className='wrapper-section'>


      <div className='login-card-section'>
          <img src='https://img.freepik.com/free-vector/forms-concept-illustration_114360-4797.jpg?' className='login-img' alt='LoginImg' />
        </div>

        <div className='login-card-section1'>
      <h1 className='login-heading'>Registration<span className='login-heading-design'> Form</span></h1>
      <form onSubmit={handleRegistrationSubmit}>
      <div className='input-cont'>
        <input 
        type='text'
        name='username'
        placeholder='Username'
        value={registrationData.username}
        onChange={handleRegistrationChange}
        className='input-section'
        required
        />
        <br />
        <input 
        type='password'
        name='password'
        placeholder='Password'
        value={registrationData.password}
        onChange={handleRegistrationChange}
        className='input-section'
        required
        />
        <br />
        <button type='submit' className='login-btn'>Register Here</button>
        </div>
        <p className='login-intro'>
            Already registered? <Link to="/login" className='link'>Login Here</Link>
        </p>
      </form>
    </div>
    </div>
    </div>
  )
}

export default RegistrationPage;