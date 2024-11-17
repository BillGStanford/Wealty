import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchFunction from './SearchFunction';
import { articles } from '../data/articles';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between py-2 border-b">
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-500 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <Link to="/music" className="hover:text-gray-600">MUSIC CHARTS</Link>
            <Link to="/billionaires" className="hover:text-gray-600">BILLIONAIRES</Link>
            <Link to="/quizzes" className="hover:text-gray-600">QUIZZES</Link>
          </div>

          <div className="flex items-center space-x-4">
            <SearchFunction articles={articles} />
            <Link to="/subscribe" className="hidden lg:block text-sm font-medium px-4 py-2 bg-black text-white hover:bg-gray-800">
              Donate
            </Link>

          </div>
        </div>

        {/* Logo Section */}
        <div className="py-8 text-center">
          <Link to="/" className="inline-block">
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight">
              Our Days Media
            </h1>
            <p className="text-sm mt-2 text-gray-600">Ideas. Influence. Impact.</p>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <nav className="flex flex-col space-y-4 py-4">
            <Link to="/music" className="text-gray-600 hover:text-gray-900">Music Charts</Link>
            <Link to="/billionaires" className="text-gray-600 hover:text-gray-900">Billionaires List</Link>
            <Link to="/quizzes" className="text-gray-600 hover:text-gray-900">Quizzes</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
