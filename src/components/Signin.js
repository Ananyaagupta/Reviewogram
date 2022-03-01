import React from 'react';
import './Signin.css';
import vector from "../components/images/vector1.png";
import logo from "../components/images/logo.png";
function Signin() {
  return <div>
      <div className='body'>
      <img className='vector1' src={vector}/> 
      <div className='signin'>Sign in</div> 
      
      <div className='div1'>
      <img className='logo' src={logo}/> <br></br>
      <input type="text" placeholder="User name" id="user_name" className="text-camp" name="name"></input>
      <input type="text" placeholder="Password" id="user_name" className="text-camp" name="name"></input>
      <p className='up'>Dont have an account?
           Sign up</p>
      
      
      </div>
     

   
      

      </div>



  </div>;

}

export default Signin;
