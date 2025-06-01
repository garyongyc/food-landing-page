'use client';

import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [btnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 300) {
        setBtnVisible(true);
      } else {
        setBtnVisible(false);
      }
    };
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    btnVisible && (
      <button
        onClick={scrollToTop}
        className='p-5 bg-cyan-500 fixed bottom-6 right-6 rounded-full text-white transition-all duration-500 cursor-pointer'
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTop;
