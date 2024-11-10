// src/components/SidebarAds.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ads = [
  {
    id: 1,
    title: "Hiring Editors",
    description: "Sign up now for Free to Edit and Share",
    image: "/images/ads/ads1.jpg.webp",
    link: "#",
    backgroundColor: "bg-gradient-to-r from-purple-500 to-indigo-600",
  },
];

export default function SidebarAds() {
  return (
    <aside className="w-full lg:w-80 space-y-6">
      {ads.map((ad) => (
        <motion.div
          key={ad.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <a 
            href={ad.link}
            className={`block ${ad.backgroundColor} text-white p-6 transition-transform duration-300 hover:shadow-xl`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">{ad.title}</h3>
              <ExternalLink className="w-5 h-5" />
            </div>
            <p className="text-sm opacity-90">{ad.description}</p>
          </a>
        </motion.div>
      ))}


    </aside>
  );
}