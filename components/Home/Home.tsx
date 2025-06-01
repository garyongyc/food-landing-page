import React from 'react';
import Hero from '@/components/Home/Hero/Hero';
import Restaurants from '@/components/Home/Restaurants/Restaurants';
import Categories from '@/components/Home/Categories/Categories';
import HowItWorks from '@/components/Home/HowItWorks/HowItWorks';
import About from '@/components/Home/About/About';
import Features from '@/components/Home/Features/Features';

const Home = () => {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Restaurants />
      <Categories />
      <HowItWorks />
      <About />
      <Features />
    </main>
  );
};

export default Home;
