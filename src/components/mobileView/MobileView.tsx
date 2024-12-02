import React, { useState, useRef, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { RxHamburgerMenu } from 'react-icons/rx';
import useThemeStore from '../../store/themeStore';
import ThemeSwitch from '../ThemeSwitch';

const MobileView: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useThemeStore(); // Get the theme from Zustand store
  const isDm = theme === "dark";

  // Apply the theme to the body element when it changes
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [theme]); // Re-run effect when theme changes

  // Close the sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={`relative min-h-screen flex flex-col dark:bg-gray-800 ${isDm ? "bg-dark" : "bg-light"}`}>

      {/* Page Content */}
      <div className="flex-grow">
        {/* Header */}
        <div className="flex justify-between items-center mt-5 mx-4">
          {/* Mobile Hamburger Icon */}
          <button
            className="flex items-center justify-center w-12 h-12 text-black rounded-full shadow-lg focus:outline-none md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 hover:text-gray-300" />
            ) : (
              <RxHamburgerMenu className="h-6 w-6 hover:text-gray-300" />
            )}
          </button>

          {/* "Welcome to MyApp" text centered */}
          <h1 className="flex-grow text-center text-2xl font-bold">Welcome to MyApp</h1>

          {/* Theme Switch on the right */}
          <ThemeSwitch />
        </div>
      </div>

      {/* Hamburger Button */}
      <div>
        {/* Mobile Hamburger Button (visible only on mobile) */}
        <div className="fixed bottom-4 left-4 md:hidden">
          <button
            className="flex items-center justify-center w-12 h-12 text-black rounded-full shadow-lg focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 hover:text-gray-300" />
            ) : (
              <RxHamburgerMenu className="h-6 w-6 hover:text-gray-300" />
            )}
          </button>
        </div>

        {/* Desktop Hamburger Button (hidden on mobile) */}
        <div className="hidden md:flex fixed top-4 left-4">
          <button
            className="flex items-center justify-center w-12 h-12 text-black rounded-full shadow-lg focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 hover:text-gray-300" />
            ) : (
              <RxHamburgerMenu className="h-6 w-6 hover:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute bottom-16 left-4 right-4 bg-white shadow-lg rounded-lg p-4">
          <ul className="space-y-4 text-center">
            <li
              className="text-gray-800 font-medium cursor-pointer hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </li>
            <li
              className="text-gray-800 font-medium cursor-pointer hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Setting
            </li>
            <li
              className="text-gray-800 font-medium cursor-pointer hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </li>
            <li
              className="text-gray-800 font-medium cursor-pointer hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Sidebar */}
      {isMenuOpen && (
        <div
          ref={sidebarRef}
          className="hidden md:block fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-300 shadow-lg p-4"
        >
          <button
            className="absolute top-4 right-4 text-gray-800 hover:text-gray-500 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <ul className="space-y-4 text-left mt-12">
            <li
              className="text-gray-800 dark:text-white dark:bg-gray-600 font-medium cursor-pointer hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </li>
            <li
              className="text-gray-800 dark:text-white dark:bg-gray-600 font-medium cursor-pointer hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Setting
            </li>
            <li
              className="text-gray-800 dark:text-white dark:bg-gray-600 font-medium cursor-pointer hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </li>
            <li
              className="text-gray-800 dark:text-white dark:bg-gray-600 font-medium cursor-pointer hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileView;
