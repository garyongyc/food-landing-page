import React from 'react';

const foodCats = [
  'pizza',
  'breakfast',
  'japanese',
  'halal',
  'dessert',
  'lebanese',
  'american',
  'sushi',
  'greek',
  'thai',
  'vegetarian',
  'italian',
  'mexican',
  'indian',
  'chinese',
  'burgers',
];

const Categories = () => {
  return (
    <section className='py-16'>
      <h1 className='text-xl sm:text-2xl text-center font-extrabold'>
        Popular foods by categories
      </h1>
      <div className='w-[80%] mx-auto mt-10'>
        <div className='flex flex-wrap gap-4 justify-center'>
          {foodCats.map((category, index) => (
            <span
              key={category}
              className='py-3 px-6 rounded-full cursor-pointer hover:bg-emerald-600 hover:text-white transition-all duration-300 bg-gray-100 dark:bg-gray-800 dark:text-white text-gray-900 font-semibold text-lg'
              data-aos='zoom-in'
              data-aos-anchor-placement='top-center'
              data-aos-delay={index * 100}
            >
              {category[0].toUpperCase() + category.slice(1)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
