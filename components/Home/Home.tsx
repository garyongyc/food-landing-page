'use client';

import React, { useEffect } from 'react';
import Hero from '@/components/Home/Hero/Hero';
import Restaurants from '@/components/Home/Restaurants/Restaurants';
import Categories from '@/components/Home/Categories/Categories';
import HowItWorks from '@/components/Home/HowItWorks/HowItWorks';
import About from '@/components/Home/About/About';
import Features from '@/components/Home/Features/Features';
import Reviews from '@/components/Home/Reviews/Reviews';
import MobileApp from '@/components/Home/MobileApp/MobileApp';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };
    initAOS();
  }, []);

  return (
    <main className='overflow-hidden'>
      <Hero />
      <Restaurants />
      <Categories />
      <HowItWorks />
      <About />
      <Features />
      <Reviews />
      <MobileApp />
    </main>
  );
};

export default Home;
