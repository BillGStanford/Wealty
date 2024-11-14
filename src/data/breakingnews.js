// src/data/breakingnews.js

export const breakingNewsData = [
    {
      id: '1',
      title: 'The British Royals - And their Empire of Real Estate',
      slug: 'the-british-royals-and-their-empire-of-real-estate',
      author: 'Kuma',
      date: '2024-11-10',
      genre: 'Lifestyle',
      thumbnail: '/images/balmoral.jpg',
      description: 'The British Royals - And their Empire of Real Estate',
      content: `  `,
      breakingnewsinfo: true, // This will trigger this article to appear in the breaking news ticker
    },
    {
      id: '2',
      title: 'Tech Giants Face New Regulatory Challenges in Europe',
      slug: 'tech-giants-face-new-regulatory-challenges-in-europe',
      author: 'Sasha',
      date: '2024-11-09',
      genre: 'Technology',
      thumbnail: '/images/tech-giants.jpg',
      description: 'The regulatory environment in Europe is shifting rapidly...',
      content: `  `,
      breakingnewsinfo: false, // This article will not appear in the ticker
    },
    {
      id: '3',
      title: 'Global Warming: Urgent Climate Change Measures Needed Now',
      slug: 'urgent-climate-change-measures-needed-now',
      author: 'Alex',
      date: '2024-11-08',
      genre: 'Environment',
      thumbnail: '/images/global-warming.jpg',
      description: 'The planet is facing an existential crisis...',
      content: `  `,
      breakingnewsinfo: true, // This article will trigger the ticker
    },
    // Add more articles as needed
  ];
  