import './App.css';
import React, { useState } from 'react';
import Posts from './post';
import LoginPage from './Login';

const App = ()=> {
  const [isVisible, setIsVisible] = useState(true);
  

  return (
    <div className='App'>
      
     {/* <div className='upLoadform'>
        <Posts/>
       
      </div>
      <div className = "ProfileCard">
        {isVisible && <Profile
          name = {'Tom'}
          profileImg = {'/img/ditto.webp'}
          sellRate = {5.1}
          buyRate = {5.0}
          status = {'verified'}
          setIsVisible={setIsVisible} // Pass setIsVisible as a prop
        />}
        </div>*/}
        <div> <LoginPage/></div>

    </div>
  );
}

const Profile = (props) => {
  return(
    <>
    <div>
      <h3><a href={`#${props.name}`}>{props.name}</a></h3>
      <img src={props.profileImg} alt='' style={{width: '70px', height: '70px'}}></img>
      <p>Status: {props.status} </p>
    </div>
    <div>
      <br/>
      <br/>
      <h5>Sell Rate: {props.sellRate}/5.0</h5>
      <h5>Buy Rate: {props.buyRate}/5.0 </h5>
    </div>
    <div>
      <button onClick = {() => props.setIsVisible(false)}>Close</button>
    </div>
    </>
  )
}




export default App;
