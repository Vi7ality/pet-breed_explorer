'use client';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import MobileMenu from './mb-menu';

export interface MenuBtnProps {
    toggleMenu(): void;
    isOpen: boolean;
}

export default function MenuBtn({ toggleMenu, isOpen }: MenuBtnProps) {
  return (
    <>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
    </>
  );
}
