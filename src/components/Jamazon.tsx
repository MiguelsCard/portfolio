import React from 'react';

export const Jamazon: React.FC = () => {
  return (
    <div className='ProjectCard'>
      <div className='left'>
        <img src='jamazon1.png' alt='app'></img>
        <img src='jamazon2.png' alt='second'></img>
        <h1>Jamazon</h1>
      </div>
      <div className='right'>
        <a href='https://jamazon-prime-fs.herokuapp.com/home'>
          {/* <img src='expologo.png' alt='expo logo'></img> */}
          <h6>Check out the site!</h6>
        </a>
      </div>
    </div>
  );
};
export default Jamazon;
