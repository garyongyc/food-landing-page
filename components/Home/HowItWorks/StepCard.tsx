import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  num: string;
  title: string;
  image: string;
  description: string;
};

const StepCard = ({ num, title, image, description }: Props) => {
  return (
    <article>
      <div className='relative'>
        <Image
          src={image}
          alt={`Picture of {title}`}
          width={250}
          height={250}
          className='mx-auto object-contain'
        />
        <span className='flex justify-center items-center w-14 h-14 text-center bg-pink-600 text-white rounded-full font-bold absolute top-0 left-0 text-xl'>
          {num}
        </span>
        <h3 className='mt-6 text-lg md:text-xl font-bold text-center'>
          {title}
        </h3>
        <p className='text-center sm:w-[80%] mx-auto text-gray-700 dark:text-gray-300 mt-3 font-medium'>
          {description}
        </p>
        <Link
          href='#_'
          className='mt-4 text-base font-bold text-blue-800 dark:text-blue-400 hover:text-blue-600 transition-all duration-150 cursor-pointer inline-block w-full text-center'
        >
          Start earning &rarr;
        </Link>
      </div>
    </article>
  );
};

export default StepCard;
