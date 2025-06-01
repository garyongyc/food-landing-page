import Image from 'next/image';
import React from 'react';

type Props = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: Props) => {
  return (
    <div className='flex flex-col justify-center items-center mx-auto'>
      <Image
        src={icon}
        width={100}
        height={100}
        alt={`Icon image of ${title}`}
        className='mx-auto object-contain'
      />
      <h3 className='font-bold mt-6 mb-2 text-lg'>{title}</h3>
      <p className='text-center w-[80%]'>{description}</p>
    </div>
  );
};

export default FeatureCard;
