import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section className='py-16'>
      <h2 className='text-xl sm:text-2xl font-extrabold text-center capitalize'>
        Browse our quality features.
      </h2>
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
        <div>
          <FeatureCard
            icon='/images/f1.svg'
            title='Analytics Business'
            description='We are driven beyond just finishing the projects. We want to find smart solutions.'
          />
        </div>
        <div>
          <FeatureCard
            icon='/images/f2.svg'
            title='Largest People'
            description='We are driven beyond just finishing the projects. We want to find smart solutions.'
          />
        </div>
        <div>
          <FeatureCard
            icon='/images/f3.svg'
            title='Wide Coverage Map'
            description='We are driven beyond just finishing the projects. We want to find smart solutions.'
          />
        </div>
        <div>
          <FeatureCard
            icon='/images/f4.svg'
            title='Artificial Intelligence'
            description='We are driven beyond just finishing the projects. We want to find smart solutions.'
          />
        </div>
        <div>
          <FeatureCard
            icon='/images/f5.svg'
            title='Trusted & Secure'
            description='We are driven beyond just finishing the projects. We want to find smart solutions.'
          />
        </div>
        <div>
          <FeatureCard
            icon='/images/f6.svg'
            title='Mobile Apps'
            description='We are driven beyond just finishing the projects. We want to find smart solutions.'
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
