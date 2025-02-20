import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const AdPlaceholder = ({ text = "Advertisement Space Available" }) => (
  <div className="w-full h-full bg-gradient-to-r from-[#ede7c7] to-[#e5deb8] flex items-center justify-center">
    <div className="text-center">
      <div className="text-[#5b0302]/60 font-serif text-sm tracking-wider">{text}</div>
    </div>
  </div>
);

const AdImage = ({ src, alt }) => {
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-full bg-[#ede7c7]">
      {!imageError ? (
        <img
          src={src}
          alt={alt}
          className="absolute w-full h-full object-contain object-center"
          onError={() => setImageError(true)}
          onLoad={() => setLoading(false)}
        />
      ) : (
        <AdPlaceholder text="Image failed to load" />
      )}
      {loading && <AdPlaceholder text="Loading..." />}
    </div>
  );
};

const VideoThumbnail = ({ thumbnail, onClick }) => (
  <div 
    onClick={onClick}
    className="group relative w-full h-full cursor-pointer bg-[#ede7c7]"
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <img 
        src={thumbnail} 
        alt="Video thumbnail" 
        className="w-full h-full object-contain object-center"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    </div>
    <div className="absolute inset-0 bg-[#5b0302]/20 group-hover:bg-[#5b0302]/30 transition-all flex items-center justify-center">
      <Play className="w-12 h-12 text-[#ede7c7] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
    </div>
  </div>
);

const AdvertisementSection = ({ 
  imageAds = [], 
  videoAds = [], 
  autoPlayInterval = 5000,
  className = ""
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    if (imageAds.length <= 1 && videoAds.length <= 1) return;
    if (isVideoPlaying) return;

    const imageInterval = setInterval(() => {
      if (imageAds.length > 1) {
        setCurrentImageIndex(prev => (prev + 1) % imageAds.length);
      }
    }, autoPlayInterval);

    const videoInterval = setInterval(() => {
      if (videoAds.length > 1) {
        setCurrentVideoIndex(prev => (prev + 1) % videoAds.length);
      }
    }, autoPlayInterval);

    return () => {
      clearInterval(imageInterval);
      clearInterval(videoInterval);
    };
  }, [imageAds.length, videoAds.length, autoPlayInterval, isVideoPlaying]);

  const NavigationButton = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 bg-[#ede7c7]/90 hover:bg-[#ede7c7] p-1.5 rounded-full shadow-lg transition-all z-10"
      style={{ [direction === 'left' ? 'left' : 'right']: '8px' }}
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-4 h-4 text-[#5b0302]" />
      ) : (
        <ChevronRight className="w-4 h-4 text-[#5b0302]" />
      )}
    </button>
  );

  const Dots = ({ current, total, onDotClick }) => (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
      {[...Array(total)].map((_, idx) => (
        <button
          key={idx}
          onClick={() => onDotClick(idx)}
          className={`w-1.5 h-1.5 rounded-full transition-all ${
            idx === current 
              ? 'bg-[#ede7c7]' 
              : 'bg-[#ede7c7]/50 hover:bg-[#ede7c7]/70'
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className={`w-full bg-[#5b0302]/5 border-b border-[#5b0302]/10 ${className}`}>
      <div className="max-w-6xl mx-auto p-3">
        <div className="flex gap-3">
          {/* Image Advertisement Section */}
          <div className="w-1/2">
            <div className="relative h-28 overflow-hidden rounded border border-[#5b0302]/10">
              {imageAds.length > 0 ? (
                imageAds.map((ad, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <AdImage src={ad.imageUrl} alt={ad.alt || 'Advertisement'} />
                    {ad.link && (
                      <a
                        href={ad.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-20"
                      />
                    )}
                  </div>
                ))
              ) : (
                <AdPlaceholder text="Image Advertisement Space" />
              )}
              {imageAds.length > 1 && (
                <>
                  <NavigationButton
                    direction="left"
                    onClick={() => setCurrentImageIndex(prev => 
                      prev === 0 ? imageAds.length - 1 : prev - 1
                    )}
                  />
                  <NavigationButton
                    direction="right"
                    onClick={() => setCurrentImageIndex(prev => 
                      (prev + 1) % imageAds.length
                    )}
                  />
                  <Dots
                    current={currentImageIndex}
                    total={imageAds.length}
                    onDotClick={setCurrentImageIndex}
                  />
                </>
              )}
            </div>
          </div>

          {/* Video Advertisement Section */}
          <div className="w-1/2">
            <div className="relative h-28 overflow-hidden rounded border border-[#5b0302]/10">
              {videoAds.length > 0 ? (
                videoAds.map((ad, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      idx === currentVideoIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {isVideoPlaying && idx === currentVideoIndex ? (
                      <video
                        src={ad.videoUrl}
                        controls
                        autoPlay
                        className="absolute w-full h-full object-contain object-center bg-[#ede7c7]"
                        onEnded={() => setIsVideoPlaying(false)}
                      />
                    ) : (
                      <VideoThumbnail
                        thumbnail={ad.thumbnail || '/path/to/default-video-thumbnail.jpg'}
                        onClick={() => setIsVideoPlaying(true)}
                      />
                    )}
                    {ad.link && !isVideoPlaying && (
                      <a
                        href={ad.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-20"
                      />
                    )}
                  </div>
                ))
              ) : (
                <AdPlaceholder text="Video Advertisement Space" />
              )}
              {videoAds.length > 1 && !isVideoPlaying && (
                <>
                  <NavigationButton
                    direction="left"
                    onClick={() => setCurrentVideoIndex(prev => 
                      prev === 0 ? videoAds.length - 1 : prev - 1
                    )}
                  />
                  <NavigationButton
                    direction="right"
                    onClick={() => setCurrentVideoIndex(prev => 
                      (prev + 1) % videoAds.length
                    )}
                  />
                  <Dots
                    current={currentVideoIndex}
                    total={videoAds.length}
                    onDotClick={setCurrentVideoIndex}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementSection;