import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';
import { format } from 'date-fns';
import { Clock, User, Tag, Share2, Check } from 'lucide-react';
import { Alert } from "../components/ui/Alert"; // Adjust this relative path based on your directory structure

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);
  const [showCopied, setShowCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-serif text-gray-800">Article not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-serif"> {/* Use the serif font for entire page */}
      {/* Alert for copied link */}
      {showCopied && (
        <div className="fixed top-4 right-4 z-50">
          <Alert className="bg-green-50 border-green-200">
            <Check className="h-4 w-4 text-green-600" />
            <span className="text-green-600">Link copied to clipboard</span>
          </Alert>
        </div>
      )}

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Category Tag */}
        <div className="mb-8">
          <span className="uppercase text-xs tracking-widest text-gray-500 font-medium">
            {article.genre}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-5xl leading-tight mb-8 text-gray-900 font-bold">
          {article.title}
        </h1>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-12 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="font-medium">{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <time>{format(new Date(article.date), 'MMMM d, yyyy')}</time>
          </div>
          <button 
            onClick={handleShare}
            className="ml-auto flex items-center gap-2 hover:text-gray-900 transition-colors"
          >
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </button>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none text-justify">
          <div 
            className="first-letter:text-7xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:font-bold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-4">
            {article.tags?.map((tag) => (
              <span 
                key={tag}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        </footer>
      </article>
    </div>
  );
}
