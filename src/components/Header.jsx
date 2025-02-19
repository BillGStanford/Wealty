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
    <header className="bg-[#ede7c7] border-b border-[#5b0302]/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-2 border-b border-[#5b0302]/20">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#5b0302]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="hidden lg:flex items-center space-x-6 text-sm text-[#5b0302]">
          <Link to="/" className="hover:text-[#5b0302]/70 font-serif tracking-wide">HOME</Link>
            <Link to="/quizzes" className="hover:text-[#5b0302]/70 font-serif tracking-wide">QUIZZES</Link>
            <Link to="/lifestyle" className="hover:text-[#5b0302]/70 font-serif tracking-wide">LIFESTYLE</Link>
          </div>

          <div className="flex items-center space-x-4">
            <SearchFunction articles={articles} />
            <Link to="/subscribe" className="hidden lg:block text-sm font-serif tracking-wide px-6 py-2 bg-[#5b0302] text-[#ede7c7] hover:bg-[#5b0302]/90">
              Donate
            </Link>
          </div>
        </div>

        <div className="py-12 text-center flex justify-center items-center flex-col">
          <Link to="/" className="inline-block">
            <img 
              src="images/WealthEssence.jpg" 
              alt="Wealth Essence Logo" 
              className="w-auto h-26 md:h-60"
            />
            <p className="text-sm mt-4 text-[#5b0302]/80 font-serif tracking-wide">
              WEALTH DOESN'T MAKE HAPPINESS, IT FINDS YOU HAPPINESS
            </p>
          </Link>
        </div>

        <div className={`lg:hidden transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <nav className="flex flex-col space-y-4 py-4">
          <Link to="/" className="text-[#5b0302] hover:text-[#5b0302]/70 font-serif">Home</Link>
            <Link to="/quizzes" className="text-[#5b0302] hover:text-[#5b0302]/70 font-serif">Quizzes</Link>
            <Link to="/lifestyle" className="text-[#5b0302] hover:text-[#5b0302]/70 font-serif">Lifestyle</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
