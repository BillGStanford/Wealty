import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Grid, Layout } from 'lucide-react';

const LifestylePage = () => {
  const [activeView, setActiveView] = useState('grid');
  
  // Static content - replace with your actual data
  const categories = [
    { id: 5, name: 'Fashion', count: 14 }
  ];

  const galleries = [
    {
      id: 1,
      category: 'Estates',
      title: 'Mediterranean Villa Collection',
      description: 'Exclusive properties nestled in the heart of coastal paradise',
      image: '/images/Mediterranean-Villa-1.jpg',
      date: 'Summer 2024'
    },
    {
      id: 2,
      category: 'Timepieces',
      title: 'Pix Watch',
      description: 'Masterpieces of horological excellence',
      image: '/images/pexels-pixabay-277319.jpg',
      date: 'Spring 2024'
    },
    // Add more gallery items as needed
  ];

  return (
    <>
      <Helmet>
        <title>Luxury Lifestyle - Wealth Essence</title>
        <meta name="description" content="Explore our curated luxury lifestyle collections" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="font-serif text-4xl mb-6 text-[#5b0302]">Curated Excellence</h1>
          <p className="text-[#5b0302]/70 max-w-2xl mx-auto">
            Discover our meticulously curated collections of life's finest offerings,
            where luxury meets legacy in perfect harmony.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              className="group flex flex-col items-center"
            >
              <span className="font-serif text-lg text-[#5b0302] mb-2">
                {category.name}
              </span>
              <span className="text-sm text-[#5b0302]/60">
                {category.count} Collections
              </span>
            </button>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex justify-end mb-8 gap-4">
          <button
            onClick={() => setActiveView('grid')}
            className={`p-2 ${activeView === 'grid' ? 'text-[#5b0302]' : 'text-[#5b0302]/50'}`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveView('layout')}
            className={`p-2 ${activeView === 'layout' ? 'text-[#5b0302]' : 'text-[#5b0302]/50'}`}
          >
            <Layout className="w-5 h-5" />
          </button>
        </div>

        {/* Gallery Grid */}
        <div className={`grid gap-8 ${activeView === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {galleries.map((gallery) => (
            <div
              key={gallery.id}
              className={`group ${
                activeView === 'layout'
                  ? 'flex gap-8 items-center'
                  : 'flex flex-col'
              }`}
            >
              <div className={`overflow-hidden ${
                activeView === 'layout' ? 'w-1/2' : 'aspect-[4/3] mb-4'
              }`}>
                <img
                  src={gallery.image}
                  alt={gallery.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className={activeView === 'layout' ? 'w-1/2' : ''}>
                <div className="font-serif tracking-wider text-sm text-[#5b0302]/80 mb-2">
                  {gallery.category.toUpperCase()} • {gallery.date}
                </div>
                <h2 className="font-serif text-2xl text-[#5b0302] mb-3 group-hover:text-[#5b0302]/80 transition-colors">
                  {gallery.title}
                </h2>
                <p className="text-[#5b0302]/70 mb-4">
                  {gallery.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LifestylePage;
