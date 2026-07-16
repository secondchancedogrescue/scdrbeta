import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../css/header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };

  }, [isOpen]);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/dogs", label: "Available Dogs" },
    { to: "/volunteer", label: "Volunteer" },
    { to: "/us", label: "About Us" },
    { to: "/donate", label: "Donate" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <header className={`tw-bg-[#fffafa] tw-text-[#cd1c18] tw-fixed tw-top-0 tw-left-0 tw-w-full tw-z-20`}>
      <div className='desktop-nav tw-flex tw-items-center tw-justify-between tw-px-4 tw-py-4'>

        {/*Logo and Name*/}
        <div className='tw-flex tw-items-center'>
          <img className='tw-h-10 tw-w-8 tw-mt-2 tw-mb-1 tw-mr-3' src='https://secondchancedogrescue.org/wp-content/uploads/2020/01/logo.png' alt='' />
          <div>
            <p>Second Chance</p>
            <p className='tw-text-xs tw-text-[#878787]'>DOG RESCUE</p>
          </div>
        </div>

        {/*Desktop Nav*/}
        <nav className='tw-hidden md:tw-flex tw-gap-6'>
          {navItems.map(({ to, label }) => (
            <NavLink key={to} to={to} end onClick={scrollToTop} className={({ isActive }) => `tw-rounded-full tw-px-4 tw-py-2 tw-transition-colors ${isActive ? "tw-bg-[#cd1c18] tw-text-[#fffafa]" : "tw-text-[#cd1c18] hover:tw-bg-[#f2f2f2]"}`}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/*Mobile Nav*/}
        <button className='md:hidden tw-z-20' onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} className='tw-text-3xl' />
        </button>

        <nav className={`${isOpen ? 'tw-flex' : 'tw-hidden'} tw-absolute tw-top-full tw-w-full tw-left-0 tw-overflow-y-auto tw-flex-col tw-items-start tw-text-3xl tw-bg-[#fffafa] tw-gap-6 tw-pt-8 tw-h-[calc(100vh-64px)] md:hidden`}>
          {navItems.map(({ to, label }) => (
            <NavLink key={to} to={to} end onClick={() => {setIsOpen(false); scrollToTop()} } className={({ isActive }) => `tw-block tw-w-full tw-pl-8 tw-py-4 tw-transition-colors ${isActive ? "tw-bg-[#cd1c18] tw-text-[#fffafa]" : "hover:tw-bg-[#f2f2f2] hover:tw-text-[#cd1c18]"}`}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header