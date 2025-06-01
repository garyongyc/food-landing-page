import Image from 'next/image';
import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className='relative w-full h-screen flex flex-col justify-center'>
      <div className='w-[90%] md:w-[80%] mx-auto grid items-center grid-cols-1 xl:grid-cols-2 gap-10'>
        {/* TEXT CONTENT */}
        <div>
          <h1 className='text-3xl md:text-4xl lg:text-5xl my-6 font-extrabold leading-[2.5rem] md:leading-[4rem]'>
            Your favourite food,{' '}
            <span className='text-pink-600'>delivered</span> to you.
          </h1>
          <p className='text-sm md:text-base font-medium text-gray-800 dark:text-gray-400'>
            Food, drinks, groceries and more delivered to your doorstep.
          </p>
          {/* DOWNLOAD TEXT */}
          <p className='text-gray-700 dark:text-gray-400 text-sm my-6'>
            App is available for download.
          </p>
          {/* APP STORE BTNS */}
          <div className='flex space-x-6'>
            <a
              href='#_'
              className='flex items-center group border border-gray-400 px-4 py-3 rounded-md hover:bg-gray-950 transition-all duration-300'
            >
              <FaApple className='text-2xl group-hover:text-white mr-3 transition-all duration-300' />
              <div>
                <p className='text-xs group-hover:text-white transition-all duration-300'>
                  Download Via
                </p>
                <p className='text-sm font-semibold group-hover:text-white transition-all duration-300'>
                  App Store
                </p>
              </div>
            </a>
            <a
              href='#_'
              className='flex items-center group border border-gray-400 px-4 py-3 rounded-md hover:bg-gray-950 transition-all duration-300'
            >
              <FaGooglePlay className='text-2xl group-hover:text-white mr-3 transition-all duration-300' />
              <div>
                <p className='text-xs group-hover:text-white transition-all duration-300'>
                  Download Via
                </p>
                <p className='text-sm font-semibold group-hover:text-white transition-all duration-300'>
                  Google Play
                </p>
              </div>
            </a>
          </div>
        </div>
        {/* IMAGE CONTENT */}
        <div>
          <Image
            src='/images/hero.png'
            alt='hero-image'
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
