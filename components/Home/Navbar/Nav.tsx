'use client';

import ThemeToggler from '@/components/Helper/ThemeToggler';
import { NavLinks } from '@/constants/constants';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { MdDeliveryDining } from 'react-icons/md';

type NavProps = {
  openNav: () => void;
};

const Nav = ({ openNav }: NavProps) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`transition-all duration-200 h-[12vh] z-[100] ${
        navBg ? 'bg-white dark:bg-gray-900 shadow-md' : 'fixed'
      } w-full fixed`}
    >
      <nav className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/* LOGO */}
        <div className='flex items-center space-x-2'>
          <div className='h-10 w-10 bg-blue-950 dark:bg-white rounded-full flex items-center justify-center'>
            <MdDeliveryDining className='text-white dark:text-black h-6 w-6' />
          </div>
          <span className='text-xl font-bold hidden sm:block md:text-2xl text-blue-950 dark:text-white'>
            Foodie
          </span>
        </div>
        {/* NAVLINKS */}
        <ul className='hidden lg:flex items-center space-x-10'>
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className='text-black hover:text-green-700 font-bold transition-all 
                duration-200 hover:border-b-2 dark:text-white dark:hover:text-green-300'
              >
                <li>{link.label}</li>
              </Link>
            );
          })}
        </ul>
        {/* BUTTONS */}
        <div className='flex items-center space-x-4'>
          {/* JOIN NOW BTN */}
          <button
            className='bg-blue-950 dark:bg-white dark:text-black
          dark:hover:bg-green-300 px-8 py-2.5 text-white font-bold rounded-lg hover:bg-black transition-all duration-300 cursor-pointer'
          >
            Join Now
          </button>
          {/* THEME TOGGLER BTN */}
          <ThemeToggler />
          {/* MOBILE MENU BTN */}
          <HiBars3BottomRight
            onClick={openNav}
            className='w-8 h-8 text-blue-950 cursor-pointer lg:hidden dark:text-white'
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
