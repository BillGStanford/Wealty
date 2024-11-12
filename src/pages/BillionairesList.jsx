import React from 'react';
import { billionairesData } from '../data/billionaires';

const BillionairesList = () => {
  const formatNetWorth = (amount) => {
    return `$${amount.toFixed(1)}B`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">World's Billionaires List</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Net Worth
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Source
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Country
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Industry
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {billionairesData.map((billionaire) => (
              <tr key={billionaire.rank} className={billionaire.rank === 1 ? 'bg-gray-50' : ''}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className={`text-sm font-medium ${
                      billionaire.rank === 1 ? 'text-xl font-bold text-green-600' : 'text-gray-900'
                    }`}>
                      {billionaire.rank}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className={`rounded-full ${
                          billionaire.rank === 1 ? 'w-16 h-16' : 'w-12 h-12'
                        }`}
                        src={billionaire.image}
                        alt={billionaire.name}
                      />
                    </div>
                    <div className="ml-4">
                      <div className={`text-sm font-medium ${
                        billionaire.rank === 1 ? 'text-lg font-bold' : 'text-gray-900'
                      }`}>
                        {billionaire.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm ${
                    billionaire.rank === 1 ? 'text-green-600 font-bold' : 'text-gray-900'
                  }`}>
                    {formatNetWorth(billionaire.netWorth)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {billionaire.age}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {billionaire.source}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {billionaire.country}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {billionaire.industry}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillionairesList;