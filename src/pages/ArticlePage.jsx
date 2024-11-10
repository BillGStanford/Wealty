// src/pages/ArticlePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';
import { format } from 'date-fns';
import { Helmet } from 'react-helmet-async';
import SidebarAds from '../components/SidebarAds';
import { Clock, User, Tag, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{article.title} - Our Days</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.thumbnail} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
          >
            <header className="mb-8">
              <h1 className="text-4xl font-serif font-bold mb-4">{article.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-6">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {article.author}
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {format(new Date(article.date), 'MMMM d, yyyy')}
                </div>
                <div className="flex items-center">
                  <Tag className="w-5 h-5 mr-2" />
                  {article.genre}
                </div>
              </div>

              <div className="relative">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-[400px] object-cover rounded-xl"
                />
                <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </header>

            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </motion.article>

          {/* Sidebar */}
          <SidebarAds />
        </div>
      </div>
    </>
  );
}