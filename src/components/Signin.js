import React from 'react';
import './Signin.css';
import vector from "../components/images/vector1.png";
import logo from "../components/images/logo.png";
function Signin() {
  return <div>
      <div className='body'>
      <img className='vector1' src={vector}/>  
      <img className='logo' src={logo}/>  
      <input type="text" placeholder="Your name here" id="user_name" className="text-camp" name="name"></input>


      </div>




  </div>;

}

export default Signin;
