import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import GeoISpy from './components/GeoISpy';
import Jamazon from './components/Jamazon';

// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='intro'>
        <div className='logos'>
          <a className='logo' href='https://github.com/MiguelsCard'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className='logo'
            href='https://www.linkedin.com/in/miguel-angel-cruz-card/'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          {/* <a href='mailto:MiguelACruz2099@gmail.com'>
            <FontAwesomeIcon icon={faMailchimp} />
          </a> */}
        </div>
        <p>
          Welcome to my portfolio! Below I've got some projects I've worked on.
        </p>
        <FontAwesomeIcon
          icon={faArrowAltCircleDown}
          className='bounce'
          style={{
            position: 'absolute',
            bottom: '0',
          }}
        />
      </div>

      <GeoISpy />
      <Jamazon />
      {/* <header className='App-header'></header> */}
    </div>
  );
}

export default App;
