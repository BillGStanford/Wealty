// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { genres } from '../data/articles'; // Add this import

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link to="/" className="text-3xl font-serif font-bold text-gray-900">
            Our Days Media Int.
          </Link>
          <nav className="hidden md:flex space-x-8">
            {genres.map((genre) => (
              <Link
                key={genre}
                to={`/genre/${genre.toLowerCase()}`}
                className="text-gray-500 hover:text-gray-900"
              >
                
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
