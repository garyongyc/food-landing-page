import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

type Props = {
  title: string;
  image: string;
  role: string;
  userName: string;
  review: string;
};

const ReviewCard = ({ title, userName, image, role, review }: Props) => {
  return (
    <article className='bg-gray-100 dark:bg-gray-900 p-6 rounded-lg mr-4 shadow-md'>
      <h1 className='text-xl font-bold'>{title}</h1>
      <div className='flex mt-2 items-center space-x-1'>
        <FaStar className='text-yellow-400 w-5 h-5' />
        <FaStar className='text-yellow-400 w-5 h-5' />
        <FaStar className='text-yellow-400 w-5 h-5' />
        <FaStar className='text-yellow-400 w-5 h-5' />
        <FaStar className='text-yellow-400 w-5 h-5' />
      </div>
      <p className='mt-4 text-base text-gray-800 font-medium dark:text-gray-300'>
        {review}
      </p>
      <span className='block w-full h-[1px] bg-gray-300 dark:bg-gray-700 my-6'></span>
      <div className='flex items-center space-x-4'>
        <Image
          src={image}
          alt={`Picture of ${userName}`}
          height={60}
          width={60}
          className='rounded-full'
        />
        <div>
          <p className='text-lg font-bold'>{userName}</p>
          <p className='text-sm sm:text-base'>{role}</p>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
