// src/components/ArticleCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Clock, User, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ArticleCard({ article, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/article/${article.slug}`}
        className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="relative">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {article.genre}
          </div>
        </div>
        
        <div className="p-6">
          <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-200">
            {article.title}
          </h2>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {article.description}
          </p>
          
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
      </Link>
    </motion.div>
  );
}