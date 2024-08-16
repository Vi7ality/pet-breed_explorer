'use client';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import Logo from './logo';
import MenuBtn from './mb-menu-btn';
import { useState } from 'react';
import MobileMenu from './mb-menu';
import NavDesktop from './nav-desktop';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-5 text-xl font-bold text-gray-900">
            <Logo />
            <p>Find your favorite breed</p>
          </div>
          <NavDesktop />
          <MenuBtn toggleMenu={toggleMenu} isOpen={isOpen} />
        </div>
      </div>
      {isOpen && <MobileMenu />}
    </header>
  );
};

export default Header;
