// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Add this import
import { FaTwitter, FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa'; // Import more social media icons

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Us Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">About Our Days</h3>
            <p className="text-gray-400 leading-relaxed">
              Bringing you the latest news and insights from around the world. Stay informed with us on current affairs, politics, culture, and more.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
            <ul class="space-y-2">
  <li><a href="aboutus.html" target='_blank' class="hover:text-white">About Us</a></li>
  <li><a href="signupcontact.html" target='_blank' class="hover:text-white">Contact</a></li>
</ul>

              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              {/* Twitter Icon */}
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTwitter className="h-6 w-6" />
              </a>
              {/* YouTube Icon */}
              <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaYoutube className="h-6 w-6" />
              </a>
              {/* Facebook Icon */}
              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaFacebookF className="h-6 w-6" />
              </a>
              {/* Instagram Icon */}
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Our Days. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
