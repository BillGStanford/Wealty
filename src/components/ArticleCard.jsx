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
        {/* Side Articles */}
        <div className="md:col-span-3 space-y-6">
          {sideArticles.slice(0, 2).map((article, idx) => (
            <div key={idx} className="border-b border-[#5b0302]/20 pb-4">
              <span className="text-[#5b0302] text-xs font-medium uppercase tracking-widest mb-2 block">
                {article.genre}
              </span>
              <Link to={`/article/${article.slug}`} className="group">
                <h3 className="text-lg font-serif mb-2 group-hover:text-[#5b0302]">
                  {article.title}
                </h3>
                <p className="text-sm text-[#5b0302]/70">{article.author}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* Main Article */}
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
                <span className="text-[#5b0302] text-sm font-medium uppercase tracking-widest">
                  {article.genre}
                </span>
                <span className="text-[#5b0302]/40">/</span>
                <span className="text-[#5b0302]/70 text-sm">{article.author}</span>
              </div>
              <h2 className="text-3xl font-serif font-normal leading-tight group-hover:text-[#5b0302]">
                {article.title}
              </h2>
              <p className="text-[#5b0302]/80 leading-relaxed">
                {article.description}
              </p>
            </div>
          </Link>
        </div>

        {/* Side Articles */}
        <div className="md:col-span-3 space-y-6">
          {sideArticles.slice(2, 4).map((article, idx) => (
            <div key={idx} className="border-b border-[#5b0302]/20 pb-4">
              <span className="text-[#5b0302] text-xs font-medium uppercase tracking-widest mb-2 block">
                {article.genre}
              </span>
              <Link to={`/article/${article.slug}`} className="group">
                <h3 className="text-lg font-serif mb-2 group-hover:text-[#5b0302]">
                  {article.title}
                </h3>
                <p className="text-sm text-[#5b0302]/70">{article.author}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Regular article card
  return (
    <article ref={ref} className="group mb-12 max-w-4xl bg-[#ede7c7]/30 p-6 border border-[#5b0302]/10">
      <div className="space-y-4">
        <Link to={`/article/${article.slug}`} className="inline-block">
          <span className="inline-flex items-center px-3 py-1 text-sm bg-[#5b0302] text-[#ede7c7] font-medium">
            {article.author}
          </span>
        </Link>

        <Link to={`/article/${article.slug}`} className="block group">
          {article.genre && (
            <div className="mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#5b0302]/70">
                {article.genre}
              </span>
            </div>
          )}
          
          <h2 className="text-3xl font-serif font-bold leading-tight mb-3 group-hover:text-[#5b0302]">
            {article.title}
          </h2>
          
          <div className="text-[#5b0302]/80 leading-relaxed mb-4 text-lg">
            {article.description}
          </div>
          
          <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden">
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="flex items-center text-sm text-[#5b0302]/70 gap-4">
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
      <div className="border-b border-[#5b0302]/20 mt-8"></div>
    </article>
  );
}