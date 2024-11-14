import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchFunction from './SearchFunction';
import { articles } from '../data/articles';  // Changed to named import

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link to="/" className="text-3xl font-serif font-bold text-gray-900">
            Our Days Media Int.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link to="/music" className="text-gray-500 hover:text-gray-900">
                Music Charts
              </Link>
              <Link to="/billionaires" className="text-gray-500 hover:text-gray-900">
                Billionaires List
              </Link>
            </nav>
            <SearchFunction articles={articles} />
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center space-x-4 md:hidden">
            <SearchFunction articles={articles} />
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`md:hidden transform transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <nav className="flex flex-col space-y-4 py-4">
            <Link
              to="/music"
              className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
            >
              Music Charts
            </Link>
            <Link
              to="/billionaires"
              className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
            >
              Billionaires List
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
