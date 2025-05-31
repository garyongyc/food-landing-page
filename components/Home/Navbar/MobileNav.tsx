import { NavLinks } from '@/constants/constants';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type NavProps = {
  navShown: boolean;
  closeNav: () => void;
};

const MobileNav = ({ navShown, closeNav }: NavProps) => {
  const navOpen = navShown ? 'translate-x-0' : 'translate-x-[-100%]';
  return (
    <nav>
      {/* OVERLAY */}
      <div
        className={`${navOpen} fixed inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* NAVLINKS */}
      <div
        className={`${navOpen} text-white fixed z-[1050] w-[80%] sm:w-[60%] h-full flex flex-col 
      justify-center transform transition-all duration-500 delay-300 bg-blue-950 space-y-6`}
      >
        <ul>
          {NavLinks.map((link) => {
            return (
              <Link key={link.id} href={link.url}>
                <li className='text-white text-[20px] sm:text-[30px] border-b-[1.5px] w-fit ml-12 border-white pb-2 my-6'>
                  {link.label}
                </li>
              </Link>
            );
          })}
        </ul>
        <CgClose
          onClick={closeNav}
          className='absolute text-white top-6 right-6 w-6 h-6 sm:w-8 sm:h-8 cursor-pointer'
        />
      </div>
    </nav>
  );
};

export default MobileNav;
