import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Clock, User, Tag } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function ArticleCard({ article, index, isHero = false, sideArticles = [] }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (isHero) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        {/* Left Column */}
        <div className="md:col-span-3 space-y-6">
          {sideArticles.slice(0, 2).map((article, idx) => (
            <div key={idx} className="border-b pb-4">
              <span className="text-red-600 text-xs font-medium uppercase tracking-wider mb-2 block">
                {article.genre}
              </span>
              <Link to={`/article/${article.slug}`} className="group">
                <h3 className="text-lg font-serif mb-2 group-hover:text-gray-600">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500">{article.author}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* Center Column - Main Article */}
        <div className="md:col-span-6">
          <Link to={`/article/${article.slug}`} className="group block">
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-red-600 text-sm font-medium uppercase tracking-wider">
                  {article.genre}
                </span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-500 text-sm">{article.author}</span>
              </div>
              <h2 className="text-3xl font-serif font-normal leading-tight group-hover:text-gray-600">
                {article.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {article.description}
              </p>
            </div>
          </Link>
        </div>

        {/* Right Column */}
        <div className="md:col-span-3 space-y-6">
          {sideArticles.slice(2, 4).map((article, idx) => (
            <div key={idx} className="border-b pb-4">
              <span className="text-red-600 text-xs font-medium uppercase tracking-wider mb-2 block">
                {article.genre}
              </span>
              <Link to={`/article/${article.slug}`} className="group">
                <h3 className="text-lg font-serif mb-2 group-hover:text-gray-600">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500">{article.author}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Regular article card - magazine style
  return (
    <article ref={ref} className="group mb-12 max-w-4xl">
      <div className="space-y-4">
        {/* Author Badge */}
        <Link to={`/article/${article.slug}`} className="inline-block">
          <span className="inline-flex items-center px-3 py-1 text-sm bg-indigo-100 text-indigo-700 font-medium rounded-sm">
            {article.author}
          </span>
        </Link>

        {/* Main Content */}
        <Link to={`/article/${article.slug}`} className="block group">
          {/* Genre Tag */}
          {article.genre && (
            <div className="mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {article.genre}
              </span>
            </div>
          )}
          
          {/* Title */}
          <h2 className="text-3xl font-serif font-bold leading-tight mb-3 group-hover:text-gray-700">
            {article.title}
          </h2>
          
          {/* Description */}
          <div className="text-gray-600 leading-relaxed mb-4 text-lg">
            {article.description}
          </div>
          
          {/* Thumbnail Image */}
          <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden">
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Metadata */}
          <div className="flex items-center text-sm text-gray-500 gap-4">
            {article.date && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {format(new Date(article.date), 'MMM d, yyyy')}
              </div>
            )}
            {article.readTime && (
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {article.readTime}
              </div>
            )}
          </div>
        </Link>
      </div>
      <div className="border-b border-gray-200 mt-8"></div>
    </article>
  );
}
