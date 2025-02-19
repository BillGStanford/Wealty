import React from 'react';

const VideoEmbed = ({ embed }) => {
  const getEmbedUrl = (platform, url) => {
    switch (platform) {
      case 'youtube':
        return url;
      case 'vimeo':
        return url;
      default:
        return url;
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-serif text-[#5b0302] mb-2">{embed.title}</h3>
      <div className="relative w-full pt-[56.25%] bg-black/5">
        <iframe
          src={getEmbedUrl(embed.platform, embed.url)}
          className="absolute top-0 left-0 w-full h-full"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

const OtherEmbed = ({ embed }) => {
  const getEmbedConfig = (platform) => {
    switch (platform) {
      case 'twitter':
        return {
          height: '400',
          template: (url) => `https://platform.twitter.com/embed/Tweet.html?url=${encodeURIComponent(url)}`
        };
      case 'instagram':
        return {
          height: '400',
          template: (url) => `https://www.instagram.com/embed?url=${encodeURIComponent(url)}`
        };
      case 'linkedin':
        return {
          height: '500',
          template: (url) => url
        };
      case 'spotify':
        return {
          height: '152',
          template: (url) => url
        };
      default:
        return {
          height: '400',
          template: (url) => url
        };
    }
  };

  const config = getEmbedConfig(embed.platform);

  return (
    <div className="mb-8">
      <h3 className="text-lg font-serif text-[#5b0302] mb-2">{embed.title}</h3>
      <div className="w-full bg-black/5">
        <iframe
          src={config.template(embed.url)}
          className="w-full"
          height={config.height}
          frameBorder="0"
          scrolling="no"
          allowTransparency
        />
      </div>
    </div>
  );
};

export const EmbedSection = ({ videoEmbeds = [], otherEmbeds = [] }) => {
  if (!videoEmbeds.length && !otherEmbeds.length) return null;

  return (
    <section className="mt-16 pt-8 border-t border-[#5b0302]/20">
      {videoEmbeds.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-serif text-[#5b0302] mb-6">Related Videos</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {videoEmbeds.slice(0, 7).map(embed => (
              <VideoEmbed key={embed.id} embed={embed} />
            ))}
          </div>
        </div>
      )}

      {otherEmbeds.length > 0 && (
        <div>
          <h2 className="text-2xl font-serif text-[#5b0302] mb-6">Related Content</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {otherEmbeds.slice(0, 10).map(embed => (
              <OtherEmbed key={embed.id} embed={embed} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};