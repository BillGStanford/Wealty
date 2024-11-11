// src/components/Modal.jsx
import React from 'react';
import { Transition } from '@headlessui/react'; // For smooth transitions

export default function Modal({ title, content, isOpen, closeModal }) {
  return (
    <Transition
      show={isOpen}
      enter="transform transition ease-in-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transform transition ease-in-out duration-300"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-10 rounded-lg w-full sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-1/3 shadow-xl relative">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl font-bold"
          >
            &times;
          </button>

          {/* Modal Content */}
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">{title}</h1>
          <p className="text-gray-700 leading-relaxed text-lg">{content}</p>
        </div>
      </div>
    </Transition>
  );
}
