import React from 'react';
import reactLogo from '../assets/react.svg';
import profileImage from '../assets/profileImage.png';
import './Home.css';

function Home() {
  return (
      <div className='homeContainer'>
        <div>
          <img src={profileImage} alt="profile" width="300" className='profile' />
        </div>
        <div>
            <h1>Hi, my name is Shai</h1>
            <h2>I am a Front-End Developer!</h2>
            <h3>Specialized in creating projects with React</h3>
            <img src={reactLogo} alt="react logo" width="100" className='logo' />
        </div>
      </div>
  );
}

export default Home;