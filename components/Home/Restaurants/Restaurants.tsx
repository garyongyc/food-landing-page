import React from 'react';
import RestaurantCard from './RestaurantCard';

const Restaurants = () => {
  return (
    <section className='pt-16 pb-16'>
      <h2 className='text-2xl sm:text-3xl font-extrabold text-center'>
        Available restaurants near you.
      </h2>
      <div className='w-[80%] mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-14 '>
        <div data-aos='fade-up' data-aos-anchor-placement='top-center'>
          <RestaurantCard
            image='/images/r1.jpg'
            title='Pizza Hut Delicious Pizza'
          />
        </div>
        <div
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          data-aos-delay='100'
        >
          <RestaurantCard
            image='/images/r2.jpg'
            title='Chipotle Mexican Grill'
          />
        </div>
        <div
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          data-aos-delay='200'
        >
          <RestaurantCard image='/images/r3.jpg' title='Mcdonalds' />
        </div>
        <div
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          data-aos-delay='300'
        >
          <RestaurantCard
            image='/images/r4.jpg'
            title='The Baked Bear San Francisco'
          />
        </div>
        <div
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          data-aos-delay='400'
        >
          <RestaurantCard image='/images/r5.jpg' title='Shake Shack' />
        </div>
        <div
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          data-aos-delay='500'
        >
          <RestaurantCard
            image='/images/r6.jpg'
            title='Chubby Chinese Noodles'
          />
        </div>
      </div>
      <div className='flex justify-center mt-12'>
        <button className='px-9 py-2.5 sm:px-12 sm:py-3.5 cursor-pointer rounded-full font-bold text-base sm:text-lg bg-cyan-700 text-white hover:bg-cyan-950 transition-all duration-300 dark:bg-cyan-300 dark:hover:bg-cyan-200 dark:text-black'>
          Discover More &rarr;
        </button>
      </div>
    </section>
  );
};

export default Restaurants;
