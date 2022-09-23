import React from 'react';

export const GeoISpy = () => {
  return (
    <div className='ProjectCard'>
      <div className='left'>
        <img src='geo1.png' alt='app scanning the screen'></img>
        <img src='geo2.png' alt='success screen'></img>
        <h1>GeoISpy image</h1>
      </div>
      <div className='right'>
        <a href='https://drive.google.com/file/d/1cWz3mB7O8mEEc5xRZCtAb3ADCSuFM4rK/view'>
          <h6>Video demonstration</h6>
        </a>
        <a href='https://snack.expo.dev/@colinketcham/geo-i-spy_v2'>
          <img src='expologo.png' alt='expo logo'></img>
          <h6>Try out our app on expo!</h6>
        </a>
        <a href='https://github.com/Rowlfs-Pianopalace-2204-fsa-Capstone/geo-i-spy'>
          <img src='GitHub-logo.jpeg' alt='github logo'></img>
          <h6>Front-end github repo</h6>
        </a>
      </div>
    </div>
  );
};
export default GeoISpy;
