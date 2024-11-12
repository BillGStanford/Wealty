// src/components/RandomQuestionModal.jsx
import React, { useState } from 'react';

export default function RandomQuestionModal({ isOpen, onClose, onAccept }) {
  const [showModal, setShowModal] = useState(false); // Set the modal to not show by default
  const surveyLink = "https://forms.gle/bM2R9a6d5sqWAoHF6"; // Replace with your Google Forms link

  const handleAccept = () => {
    onAccept(); // Call the parent onAccept function if needed
    setShowModal(false); // Hide the modal after accepting
  };

  const handleClose = () => {
    onClose(); // Call the parent onClose function if needed
    setShowModal(false); // Hide the modal if the user closes it
  };

  // If you want to prevent the modal from showing regardless of isOpen or time, return null here
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-4/5 sm:w-3/4 md:w-1/2 lg:w-1/3 shadow-xl text-center relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">We'd love your feedback!</h2>
        <p className="text-gray-600 mb-6">
          We value your opinion. Please take a moment to fill out our survey by clicking the link below.
        </p>

        <div className="space-x-4">
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            Take the Survey
          </button>
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
          >
            Not Now
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          <a href={surveyLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Open the Survey
          </a>
        </p>
      </div>
    </div>
  );
}
