import React, { useState } from 'react';
import './Login.css';

const RegisterPage = ({ onGoBack }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
    
    <div className='logWindow'>
        <div className='bgGif'>
            <img src='/img/moneyFall.gif' alt='background' className='bgImage' />
      </div>
     
      <div className='regBox'>
        <form onSubmit={handleSubmit}>
            <div><button id ='backbtn' onClick={onGoBack}>⇦</button>
            <h3>Register</h3>
            </div>
            
            <div><input type='text' placeholder='Enter Your Name'></input></div>
            <div><input type='text' placeholder='Enter Your NetID'></input></div>
            <div><input type='password' placeholder='Enter Password'></input></div>
            
            <div><button type ='submit'>Register</button></div>
            
        </form>
      </div>
      
    </div>
    </>
  );
}
const ForgotPasswordPage = ({ onGoBack }) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle the form submission here
    };
  
    return (
      <>
        <button id ='backbtn' onClick={onGoBack}>⇦</button>
        <div className='logWindow'>
          <div className='bgGif'>
            <img src='/img/moneyFall.gif' alt='background' className='bgImage' />
          </div>
          <div className='regBox'>
            <form onSubmit={handleSubmit}>
              <div>
                <h3>Forgot Password</h3>
              </div>
              <div>
                <input type='text' placeholder='Enter Your NetID'></input>
              </div>
              <div>
                <button type ='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  


const LoginPage = () => {
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);

  const handleRegisterClick = () => {
    console.log('RegisterBtnClicked');
    setIsRegisterClicked(true);
  }

  const handleGoBack = () => {
    setIsRegisterClicked(false);
  }

  if (isRegisterClicked) {
    return <RegisterPage onGoBack={handleGoBack} />;
  }

  return (
    <>
      <div className='bgGif'>
        <img src='/img/moneyFall.gif' alt='background' className='bgImage' />
      </div>
      <div className='logWindow'>
        <div className='logBox'>
          <form>
            <div><h1>Freebies</h1></div>
            <div><input type ='text' placeholder='UID'></input></div>
            <div><input type ='text' placeholder='Password'></input></div>
            <div> <a href=''>Forgot password</a> </div>
            <div>
              <button>Login</button>
              <button onClick={handleRegisterClick}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
