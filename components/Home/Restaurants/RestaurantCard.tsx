import Image from 'next/image';
import React from 'react';

type RestaurantProps = {
  image: string;
  title: string;
};

const RestaurantCard = ({ image, title }: RestaurantProps) => {
  return (
    <div>
      <Image
        src={image}
        alt={`Picture of ${title}`}
        width={400}
        height={400}
        className='w-full h-[250px] object-cover'
      />
      <h1 className='mt-4 w-fit hover:text-blue-950 dark:hover:text-amber-300 transition-all duration-200 cursor-pointer text-base sm:text-lg font-bold'>
        {title}
      </h1>
    </div>
  );
};

export default RestaurantCard;
