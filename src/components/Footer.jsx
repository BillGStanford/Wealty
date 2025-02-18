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
    <footer className="bg-[#5b0302] text-[#ede7c7]/90">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-[#ede7c7] text-2xl font-serif font-bold mb-6">About Wealth Essence</h3>
          <p className="text-[#ede7c7]/90 leading-relaxed text-lg font-serif">
            Bringing you the latest news and insights from around the world. Stay informed with us on current affairs, politics, culture, and more.
          </p>
        </div>

        <div>
          <h3 className="text-[#ede7c7] text-2xl font-serif font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-lg font-serif">
            <li><a href="aboutus.html" className="hover:text-[#ede7c7]">About Us</a></li>
            <li><a href="signupcontact.html" className="hover:text-[#ede7c7]">Contact</a></li>
            <li>
              <button onClick={() => {
                setModalContent({ 
                  title: 'Privacy Policy', 
                  content: 'Privacy policy content...'
                });
                setIsModalOpen(true);
              }} className="text-[#ede7c7]/90 hover:text-[#ede7c7]">
                Privacy Policy
              </button>
            </li>
            <li>
              <button onClick={() => {
                setModalContent({ 
                  title: 'Terms of Service', 
                  content: 'Terms of service content...'
                });
                setIsModalOpen(true);
              }} className="text-[#ede7c7]/90 hover:text-[#ede7c7]">
                Terms of Service
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#ede7c7] text-2xl font-serif font-bold mb-6">Follow Us</h3>
          <div className="flex space-x-8 text-2xl">
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-[#ede7c7]/90 hover:text-[#ede7c7]">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-[#ede7c7]/20 pt-6 text-center text-lg text-[#ede7c7]/70 font-serif">
        <p>&copy; {new Date().getFullYear()} Wealth Essence. All rights reserved.</p>
      </div>
    </div>

    <Modal
      title={modalContent.title}
      content={modalContent.content}
      isOpen={isModalOpen}
      closeModal={() => setIsModalOpen(false)}
    />
  </footer>
  );
}
