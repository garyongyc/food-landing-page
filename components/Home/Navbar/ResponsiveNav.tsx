'use client';

import React, { useState } from 'react';
import Nav from '@/components/Home/Navbar/Nav';
import MobileNav from '@/components/Home/Navbar/MobileNav';

const ResponsiveNav = () => {
  const [navShown, setNavShown] = useState(false);

  const openNav = () => setNavShown(true);

  const closeNav = () => setNavShown(false);

  return (
    <>
      <Nav openNav={openNav} />
      <MobileNav navShown={navShown} closeNav={closeNav} />
    </>
  );
};

export default ResponsiveNav;
