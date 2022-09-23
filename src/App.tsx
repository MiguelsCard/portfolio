import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import GeoISpy from './components/GeoISpy';
import Jamazon from './components/Jamazon';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='intro'>
        <p>
          Welcome to my portfolio! I'm Miguel Cruz, and below I've got some
          projects I've worked on.
        </p>
      </div>
      <div className='intro'>Spacing</div>
      <GeoISpy />
      <Jamazon />
      {/* <header className='App-header'></header> */}
    </div>
  );
}

export default App;
