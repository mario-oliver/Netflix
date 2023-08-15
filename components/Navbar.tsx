import React from 'react';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <nav className="w-full fixed z-40">
      <div className="px-4 md:px-16 py-6 flex flex-row items-center duration-500 transition bg-zing-900 bg-opacity-90">
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
