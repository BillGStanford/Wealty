import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const SearchFunction = ({ articles }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        closeSearch();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeSearch = () => {
    setIsSearchOpen(false);
    setTimeout(() => {
      setSearchQuery('');
      setSearchResults([]);
    }, 300);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filteredResults = articles.filter((article) => {
      const searchTerm = query.toLowerCase();
      return (
        article.title.toLowerCase().includes(searchTerm) ||
        article.author.toLowerCase().includes(searchTerm) ||
        article.description.toLowerCase().includes(searchTerm)
      );
    });

    setSearchResults(filteredResults);
  };

  return (
    <div ref={searchRef} className="relative" style={{ zIndex: 1000 }}>
      <div className={`transition-all duration-300 ease-in-out ${
        isSearchOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
      }`}>
        <button
          onClick={() => setIsSearchOpen(true)}
          className={`p-2 text-gray-500 hover:text-gray-900 transition-colors duration-200 ${
            isSearchOpen ? 'pointer-events-none' : ''
          }`}
          aria-label="Open search"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>

      <div
        className={`absolute right-0 top-0 transition-all duration-300 ease-in-out ${
          isSearchOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="w-72 md:w-96">
          <div className="flex items-center bg-white border rounded-lg shadow-lg" style={{ position: 'relative', zIndex: 1001 }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full px-4 py-2 rounded-l-lg focus:outline-none"
              autoFocus
            />
            <button
              onClick={closeSearch}
              className="p-2 text-gray-500 hover:text-gray-900 transition-colors duration-200"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Overlay */}
          {searchQuery && (
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm" 
              style={{ zIndex: 998 }}
            />
          )}

          {/* Search Results Dropdown */}
          <div
            className={`absolute right-0 left-0 mt-2 transition-all duration-300 ease-in-out ${
              searchQuery && searchResults.length > 0
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
            style={{ zIndex: 999 }}
          >
            {searchResults.length > 0 && (
              <div className="bg-white border rounded-lg shadow-xl max-h-[80vh] overflow-y-auto">
                {searchResults.map((result) => (
                  <Link
                    key={result.id}
                    to={`/article/${result.slug}`}
                    onClick={closeSearch}
                    className="flex items-start p-4 hover:bg-gray-50 border-b last:border-b-0 transition-colors duration-200"
                  >
                    {/* Thumbnail */}
                    <div className="flex-shrink-0 w-16 h-16 mr-4">
                      <img
                        src={result.thumbnail || "/api/placeholder/64/64"}
                        alt={result.title}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    {/* Content */}
                    <div className="flex-grow min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{result.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        By {result.author} • {result.genre}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* No Results Message */}
          {searchQuery && searchResults.length === 0 && (
            <div
              className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-xl p-4"
              style={{ zIndex: 999 }}
            >
              <p className="text-gray-500">No results found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFunction;