import React, { useRef, useMemo, useEffect } from 'react';

export const Jamazon: React.FC = () => {
  const refs = useRef<(HTMLAnchorElement | null)[]>([]);
  refs.current = [];

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
    const observer = new IntersectionObserver(callbackFunction, options);
    refs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    });
  }, [refs, options]);

  const addToRefs = (el: HTMLAnchorElement) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div className='ProjectCard'>
      <div className='left'>
        <img src='jamazon1.png' alt='app'></img>
        <img src='jamazon2.png' alt='second'></img>
        <a ref={addToRefs} href='https://jamazon-prime-fs.herokuapp.com/home'>
          <h1>Jamazon</h1>
        </a>
      </div>
      <div className='right'>
        <a
          className='hide'
          ref={addToRefs}
          href='https://jamazon-prime-fs.herokuapp.com/home'
        >
          {/* <img src='expologo.png' alt='expo logo'></img> */}
          <h6>Check out the site!</h6>
        </a>
      </div>
    </div>
  );
};
export default Jamazon;
