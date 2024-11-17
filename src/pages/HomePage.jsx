import React, { useState, useEffect } from 'react';
import { articles, genres } from '../data/articles';
import { breakingNewsData } from '../data/breakingnews'; // Import breaking news data
import ArticleCard from '../components/ArticleCard';

import { Helmet } from 'react-helmet-async';
import { Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import RandomQuestionModal from '../components/RandomQuestionModal';

export default function HomePage() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter articles based on genre and sort them by 'status'
  const filteredArticles = selectedGenre === 'All'
    ? articles
    : articles.filter(article => article.genre === selectedGenre);

  // Sort articles: 'New' articles first, followed by 'Old'
  const sortedArticles = filteredArticles.sort((a, b) => {
    if (a.status === 'New' && b.status !== 'New') return -1;
    if (a.status !== 'New' && b.status === 'New') return 1;
    return 0;
  });

  // Find the urgent news article (if any)
  const urgentNews = articles.find(article => article.newsWorth === 'Urgent-News');

  // Filter the breaking news headlines where breakingnewsinfo is true
  const breakingNewsHeadlines = breakingNewsData.filter(news => news.breakingnewsinfo);

  // Trigger the modal after a delay (simulate NYT-style pop-up)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000); // 2 seconds delay before the modal shows

    return () => clearTimeout(timer); // Clear the timer if component unmounts
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalAccept = () => {
    setIsModalOpen(false);
    // Handle the action when the user accepts (e.g., redirect to Terms page)
    // For now, we just log it
    console.log("User accepted to read Terms & Services");
  };

  return (
    <>
      <Helmet>
        <title>Our Days - Latest News and Stories</title>
        <meta name="description" content="Stay informed with the latest news from Our Days." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breaking News Ticker */}
        <div className="bg-black text-white p-2 rounded-md mb-4">
          <div className="flex items-center space-x-4">
            <span className="font-semibold">Breaking News: </span>
            <div className="flex-1 overflow-hidden whitespace-nowrap">
              <div className="animate-marquee">
                {breakingNewsHeadlines.length > 0
                  ? breakingNewsHeadlines.map((news, index) => (
                      <span key={index} className="mr-8">
                        {news.title}
                      </span>
                    ))
                  : 'No breaking news at the moment.'}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Hero Section for Urgent News */}
            {urgentNews && (
              <ArticleCard article={urgentNews} isHero={true} index={0} />
            )}

            

            {/* Mobile Filter Toggle */}
            <button
              className="lg:hidden flex items-center space-x-2 mb-4 text-gray-600"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-5 h-5" />
              <span>Filter by Genre</span>
            </button>

            {/* Genre Filters */}
            <AnimatePresence>
  {(showFilters || window.innerWidth >= 1024) && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="overflow-hidden mb-8 flex justify-center"  // Center align the container
    >
      <div className="flex flex-wrap gap-2 justify-center">  {/* Center align the buttons */}
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`px-4 py-2 rounded-full transition-all duration-200 ${
              selectedGenre === genre
                ? 'bg-black text-white'  // Selected genre black
                : 'bg-black-400 text-black hover:bg-gray-200' // Unselected genres in grayscale
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>


            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          
        </div>
      </div>

      {/* Random Question Modal */}
      <RandomQuestionModal 
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onAccept={handleModalAccept}
      />
    </>
  );
}
