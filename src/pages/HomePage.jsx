import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Filter, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { articles, genres } from '../data/articles';

export default function HomePage() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredArticles = selectedGenre === 'All'
    ? articles
    : articles.filter(article => article.genre === selectedGenre);

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);


  return (
    <>
      <Helmet>
        <title>Wealth Essence - Legacy & Prosperity</title>
        <meta name="description" content="Discover the essence of wealth and legacy." />
      </Helmet>

      <main className="bg-[#ede7c7]">
        {/* Left Sidebar Navigation */}
        <div className="fixed left-0 top-0 h-screen w-24 border-r border-[#5b0302]/20 hidden lg:flex flex-col items-center justify-between py-8">
          <div className="writing-vertical-lr transform rotate-180 text-[#5b0302]/60 text-sm">
            {format(new Date(), 'MMMM d, yyyy')}
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:ml-24">

          {/* Genre Navigation */}
          <div className="sticky top-0 bg-[#ede7c7] border-b border-[#5b0302]/20 z-10">
            <div className="max-w-7xl mx-auto px-8 py-6">
              <div className="flex justify-between items-center">
                <button
                  className="lg:hidden flex items-center gap-2 text-[#5b0302]"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-5 h-5" />
                  <span className="font-serif tracking-wider">FILTER</span>
                </button>

                <AnimatePresence>
                  {(showFilters || window.innerWidth >= 1024) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="absolute top-full left-0 right-0 bg-[#ede7c7] lg:relative lg:top-0 lg:bg-transparent"
                    >
                      <div className="flex flex-wrap justify-center gap-8 p-4 lg:p-0">
                        {genres.map((genre) => (
                          <button
                            key={genre}
                            onClick={() => setSelectedGenre(genre)}
                            className={`font-serif tracking-wider transition-all ${
                              selectedGenre === genre
                                ? 'text-[#5b0302]'
                                : 'text-[#5b0302]/60 hover:text-[#5b0302]'
                            }`}
                          >
                            {genre.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Featured Articles Section */}
          {featuredArticles.length > 0 && (
            <section className="border-b border-[#5b0302]/20">
              <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  {featuredArticles.slice(0, 2).map((article) => (
                    <Link
                      key={article.slug}
                      to={`/article/${article.slug}`}
                      className="group"
                    >
                      <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden">
                        <img
                          src={article.thumbnail}
                          alt={article.title}
                          className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="font-serif tracking-widest text-sm text-[#5b0302]/80">
                          {article.genre.toUpperCase()}
                        </div>
                        <h2 className="font-serif text-4xl text-[#5b0302] group-hover:text-[#5b0302]/80 transition-colors">
                          {article.title}
                        </h2>
                        <p className="text-[#5b0302]/70 line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Regular Articles Grid */}
          <section className="max-w-7xl mx-auto px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {regularArticles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/article/${article.slug}`}
                  className="group flex flex-col"
                >
                  <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="font-serif tracking-widest text-xs text-[#5b0302]/80 mb-3">
                      {article.genre.toUpperCase()}
                    </div>
                    <h3 className="font-serif text-xl text-[#5b0302] mb-3 group-hover:text-[#5b0302]/80 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-[#5b0302]/70 text-sm mb-4 line-clamp-2 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-[#5b0302]/60 mt-auto">
                      <span>{format(new Date(article.date), 'MMMM d, yyyy')}</span>
                      <span className="font-serif tracking-wider flex items-center gap-2">
                        READ MORE <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}