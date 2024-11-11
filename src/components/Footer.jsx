// src/components/Footer.jsx
import React, { useState } from 'react';
import { FaTwitter, FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Modal from './Modal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Us Section */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-6">About Our Days</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Bringing you the latest news and insights from around the world. Stay informed with us on current affairs, politics, culture, and more.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-lg">
              <li><a href="aboutus.html" target="_blank" className="hover:text-white">About Us</a></li>
              <li><a href="signupcontact.html" target="_blank" className="hover:text-white">Contact</a></li>
              <li>
                <button
                  onClick={() => openModal('Privacy Policy', 'Here is the Privacy Policy content...')}
                  className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal('Terms of Service', 'Here are the Terms of Service...')}
                  className="text-gray-400 hover:text-white"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-6">Follow Us</h3>
            <div className="flex space-x-8 text-2xl">
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaYoutube />
              </a>
              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-lg text-gray-500">
          <p>&copy; {new Date().getFullYear()} Our Days. All rights reserved.</p>
        </div>
      </div>

      {/* Modal */}
      <Modal
        title={modalContent.title}
        content={modalContent.content}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </footer>
  );
}
