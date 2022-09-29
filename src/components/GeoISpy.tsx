import React, { useRef, useMemo, useEffect } from 'react';

export const GeoISpy: React.FC = () => {
  const revealRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  revealRefs.current = [];

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    entry.target.classList.add('show');
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
  }, []);

  useEffect(() => {
    const obsever = new IntersectionObserver(callbackFunction, options);
    revealRefs.current.forEach((element) => {
      if (element) {
        obsever.observe(element);
      }
      return () => {
        if (element) {
          obsever.unobserve(element);
        }
      };
    });
  }, [revealRefs, options]);

  //This function adds elements to the array
  const addToRefs = (el: HTMLAnchorElement) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className='ProjectCard'>
      <div className='left'>
        <img src='geo1.png' alt='app scanning the screen'></img>
        <img src='geo2.png' alt='success screen'></img>
        <a
          ref={addToRefs}
          href='https://drive.google.com/file/d/1cWz3mB7O8mEEc5xRZCtAb3ADCSuFM4rK/view'
        >
          <p style={{ margin: '2rem' }}>
            A react native app that encourages users to explore their
            surroundings
          </p>
          <h1>GeoISpy</h1>
        </a>

        {/* <a ref={addToRefs} href='ProjectCard'></a> */}
      </div>
      <div className='right'>
        <a
          className='hide'
          ref={addToRefs}
          href='https://drive.google.com/file/d/1cWz3mB7O8mEEc5xRZCtAb3ADCSuFM4rK/view'
        >
          <h6>Video demonstration</h6>
        </a>
        <a
          className='hide'
          ref={addToRefs}
          href='https://snack.expo.dev/@colinketcham/geo-i-spy_v2'
        >
          <img src='expologo.png' alt='expo logo'></img>
          <h6>Try out our app on expo!</h6>
        </a>
        <a
          className='hide'
          ref={addToRefs}
          href='https://github.com/Rowlfs-Pianopalace-2204-fsa-Capstone/geo-i-spy'
        >
          <img src='GitHub-logo.jpeg' alt='github logo'></img>
          <h6>Github repo</h6>
        </a>
      </div>
    </div>
  );
};
export default GeoISpy;
