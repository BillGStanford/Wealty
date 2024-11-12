import React from 'react';
import { musicData } from '../data/music';

const MusicPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Day Media - Music Top 10</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Position
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Album
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Week
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Peak Pos.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Weeks on Chart
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {musicData.map((item) => (
              <tr key={item.position} className={item.position === 1 ? 'bg-gray-50' : ''}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className={`text-sm font-medium ${item.position === 1 ? 'text-xl font-bold text-blue-600' : 'text-gray-900'}`}>
                      {item.position}
                    </span>
                    {item.isNew && (
                      <span className="ml-2 text-xs text-yellow-500 font-semibold">NEW</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 ${item.position === 1 ? 'relative' : ''}`}>
                      <img
                        className={`object-cover rounded-md ${
                          item.position === 1 ? 'w-36 h-36 transform transition-all duration-300 hover:scale-105' : 'w-20 h-20'
                        }`}
                        src={item.image}
                        alt={`${item.title} album cover`}
                      />
                      {item.position === 1 && (
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">1</span>
                        </div>
                      )}
                    </div>
                    <div className="ml-4">
                      <div className={`text-sm font-medium ${item.position === 1 ? 'text-lg font-bold' : 'text-gray-900'}`}>
                        {item.title}
                      </div>
                      <div className={`text-sm ${item.position === 1 ? 'text-base' : 'text-gray-500'}`}>
                        {item.artist}
                      </div>
                      {item.hasAward && (
                        <span className="text-blue-500 text-lg">★</span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.lastWeek}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.peakPos}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.weeksOnChart}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MusicPage;