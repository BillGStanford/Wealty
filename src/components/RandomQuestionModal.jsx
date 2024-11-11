// src/components/RandomQuestionModal.jsx
import React from 'react';

export default function RandomQuestionModal({ isOpen, onClose, onAccept }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-4/5 sm:w-3/4 md:w-1/2 lg:w-1/3 shadow-xl text-center relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Would you like to read the new Terms and Services?</h2>
        <p className="text-gray-600 mb-6">We have updated our Terms and Services. You can read them now or later. Click below to proceed.</p>

        <div className="space-x-4">
          <button
            onClick={onAccept}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            Yes, read them
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
          >
            No, thanks
          </button>
        </div>
      </div>
    </div>
  );
}
