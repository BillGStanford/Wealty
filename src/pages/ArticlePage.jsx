import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import { Clock, User, Tag, Share2, ArrowLeft, Check } from 'lucide-react';
import { articles } from '../data/articles';
import { Alert } from "../components/ui/Alert";
import { EmbedSection } from '../components/EmbedSection';

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
      <div className="min-h-screen bg-[#ede7c7] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-[#5b0302] mb-4">Article Not Found</h1>
          <Link
            to="/"
            className="inline-flex items-center text-[#5b0302] hover:text-[#5b0302]/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="font-serif tracking-wider">RETURN HOME</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${article.title} - Wealth Essence`}</title>
        <meta name="description" content={article.description} />
      </Helmet>

      <main className="min-h-screen bg-[#ede7c7]">
        {showCopied && (
          <div className="fixed top-4 right-4 z-50">
            <Alert className="bg-[#5b0302]/10 border-[#5b0302]">
              <Check className="h-4 w-4 text-[#5b0302]" />
              <span className="text-[#5b0302] font-serif">Link copied to clipboard</span>
            </Alert>
          </div>
        )}

        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center text-[#5b0302]/80 hover:text-[#5b0302] mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="font-serif tracking-wider text-sm">BACK TO HOME</span>
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-4">
              <span className="font-serif tracking-widest text-sm text-[#5b0302]/80">
                {article.genre.toUpperCase()}
              </span>
            </div>

            <h1 className="font-serif text-5xl text-[#5b0302] leading-tight mb-8">
              {article.title}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-[#5b0302]/70 pb-8 border-b border-[#5b0302]/20">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-serif">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <time className="font-serif">
                  {format(new Date(article.date), 'MMMM d, yyyy')}
                </time>
              </div>
              <button 
                onClick={handleShare}
                className="ml-auto flex items-center gap-2 hover:text-[#5b0302] transition-colors"
              >
                <Share2 className="h-4 w-4" />
                <span className="font-serif tracking-wider">SHARE</span>
              </button>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-[#5b0302]">
            <div 
              className="font-serif first-letter:text-7xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:font-bold first-letter:text-[#5b0302]"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Embed Section */}
          <EmbedSection 
            videoEmbeds={article.videoEmbeds} 
            otherEmbeds={article.otherEmbeds} 
          />

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-[#5b0302]/20">
            <div className="flex flex-wrap gap-4">
              {article.tags?.map((tag) => (
                <span 
                  key={tag}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#5b0302] text-sm text-[#5b0302] font-serif"
                >
                  <Tag className="h-3 w-3" />
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
          </footer>
        </article>
      </main>
    </>
  );
}
