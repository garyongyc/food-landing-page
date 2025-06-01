'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Reviews = () => {
  return (
    <section className='py-16'>
      <h1 className='text-xl sm:text-2xl font-extrabold text-center capitalize'>
        What people say about us.
      </h1>
      <div className='mt-10 w-[80%] mx-auto'>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          <ReviewCard
            title='Great work!'
            userName='Jessica Doe'
            image='/images/c1.png'
            role='UI/UX Designer'
            review='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur officiis laudantium numquam aliquam eum veniam ad sit. Excepturi, ex nisi.'
          />
          <ReviewCard
            title='Creative work!'
            userName='Janey Doe'
            image='/images/c2.png'
            role='Web Developer'
            review='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur officiis laudantium numquam aliquam eum veniam ad sit. Excepturi, ex nisi.'
          />
          <ReviewCard
            title='Awesome work!'
            userName='John Doe'
            image='/images/c3.png'
            role='App Developer'
            review='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur officiis laudantium numquam aliquam eum veniam ad sit. Excepturi, ex nisi.'
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
