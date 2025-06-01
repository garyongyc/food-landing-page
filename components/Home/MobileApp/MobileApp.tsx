import Image from 'next/image';
import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const MobileApp = () => {
  return (
    <section className='py-16'>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center'>
        <Image
          src='/images/app.png'
          alt='download mobile app image'
          width={800}
          height={800}
          className='object-cover'
        />
        <div>
          <h2 className='text-2xl sm:text-4xl font-bold leading-8 sm:leading-12'>
            Connecting our user with iOS & Android apps. Download from iTune &
            Play store
          </h2>
          <p className='mt-6 text-base text-gray-800 leading-6 sm:leading-8 dark:text-gray-400'>
            Pick one of our stock themes, or create your custom theme with the
            most advanced theme editor on any online survey building tool. We’re
            driven beyond just finishing the projects. We want to find solutions
            using our website & apps.
          </p>
          <div className='flex items-center space-x-6 mt-6'>
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
      </div>
    </section>
  );
};

export default MobileApp;
