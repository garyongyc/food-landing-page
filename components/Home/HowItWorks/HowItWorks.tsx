import React from 'react';
import StepCard from './StepCard';

const HowItWorks = () => {
  return (
    <section className='py-16'>
      <h2 className='text-xl sm:text-2xl text-center font-extrabold'>
        How It Works
      </h2>
      <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
        <div>
          <StepCard
            num='01'
            image='/images/w1.png'
            title='Become a rider'
            description='As a delivery rider, you can make reliable money on your own terms'
          />
        </div>
        <div>
          <StepCard
            num='02'
            image='/images/w2.png'
            title='Become a partner'
            description='As a partner, you can make reliable money on your own terms'
          />
        </div>
        <div>
          <StepCard
            num='03'
            image='/images/w3.png'
            title='Become a rider'
            description='As a delivery rider, you can make reliable money on your own terms'
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
