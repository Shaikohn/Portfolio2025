import React from 'react';
import reactLogo from '../assets/react.svg';
import nodeLogo from '../assets/node.svg';
import profileImage from '../assets/profileImage.png';
import './Home.css';

function Home() {
  return (
      <div className='homeContainer'>
        <div>
            <h1>Hi, my name is Shai</h1>
            <h2>I am a Back-End Developer!</h2>
            <h3>Specialized in creating projects with Node</h3>
            <img src={nodeLogo} alt="react logo" width="100" className='logo' />
        </div>
        <img src={profileImage} alt="profile" className='profileImage' />
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