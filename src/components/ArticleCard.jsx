// src/components/ArticleCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Clock, User, Tag } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function ArticleCard({ article, index, isHero = false }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Conditional styles for hero card
  const cardClasses = isHero
    ? 'group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'
    : 'group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300';

  const imageClasses = isHero
    ? 'w-full h-[450px] object-cover transition-all duration-300 group-hover:scale-110 group-hover:backdrop-blur-xl'
    : 'w-full h-56 object-cover transition-all duration-300 group-hover:scale-105';

  const titleClasses = isHero
    ? 'text-3xl font-bold mb-4 group-hover:text-white group-hover:underline transition-colors duration-300 z-20'
    : 'text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-200';

  const descriptionClasses = isHero
    ? 'text-white text-lg line-clamp-3 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20'
    : 'text-gray-600 mb-4 line-clamp-2';

  const contentClasses = isHero
    ? 'absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-black w-full px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20'
    : 'p-6';

  const buttonClasses = isHero
    ? 'inline-block bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20'
    : 'inline-block bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all duration-300';

  return (
    <div
      ref={ref}
      className={cardClasses}
      style={{ position: 'relative', marginBottom: isHero ? '10px' : '0' }}  // Adding marginBottom for hero card
    >
      <Link to={`/article/${article.slug}`} className="block">
        <div className="relative group">
          {/* Image with linear gradient overlay on hover */}
          <img
            src={article.thumbnail}
            alt={article.title}
            className={`${imageClasses} group-hover:opacity-80`} // Image opacity change on hover
          />
          {isHero && (
            // Apply gradient overlay only for hero article card
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent group-hover:from-black group-hover:to-black opacity-50 z-10"></div>
          )}

          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm z-20">
            {article.genre}
          </div>

          {/* Hero Content (only for hero card) */}
          {isHero && (
            <div className={contentClasses}>
              <h1 className={titleClasses}>{article.title}</h1>
              <p className={descriptionClasses}>{article.description}</p>
              <Link
                to={`/article/${article.slug}`}
                className={buttonClasses}
              >
                Read Now
              </Link>
            </div>
          )}
        </div>

        {/* Non-Hero Content (for normal articles) */}
        {!isHero && (
          <div className="p-6">
            <h2 className={titleClasses}>{article.title}</h2>
            <p className={descriptionClasses}>{article.description}</p>
            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {article.author}
              </div>

              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {format(new Date(article.date), 'MMM d, yyyy')}
              </div>

              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {article.readTime || '5 min read'}
              </div>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
}
