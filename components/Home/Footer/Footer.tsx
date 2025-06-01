import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { MdDeliveryDining } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className='py-16 bg-gray-800'>
      <div className='w-[80%] mx-auto grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        <div>
          <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
              <MdDeliveryDining className='w-6 h-6 text-black' />
            </div>
            <span className='hidden text-xl sm:block md:text-2xl text-white font-bold'>
              Foodie
            </span>
          </div>
          <p className='mt-4 text-gray-200 font-medium'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            ullam consequuntur voluptate eligendi, blanditiis ab quae maiores!
          </p>
          <div className='mt-4 flex space-x-4'>
            <div className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-col text-white cursor-pointer'>
              <FaFacebook />
            </div>
            <div className='w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-col text-white cursor-pointer'>
              <FaInstagram />
            </div>
            <div className='w-8 h-8 bg-black rounded-full flex items-center justify-center flex-col text-white cursor-pointer'>
              <FaX />
            </div>
            <div className='w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-col text-white cursor-pointer'>
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
