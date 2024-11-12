import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link to="/" className="text-3xl font-serif font-bold text-gray-900">
            Our Days Media Int.
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/music" className="text-gray-500 hover:text-gray-900">
              Music Charts
            </Link>
            <Link to="/billionaires" className="text-gray-500 hover:text-gray-900">
              Billionaires List
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
