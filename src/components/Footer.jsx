import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#17B169] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Website Name */}
        <h1 className="text-lg font-bold">EcoChic Living</h1>

        {/* Footer Links */}
        <ul className="flex space-x-6 text-lg">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/explore" className="hover:text-gray-300">Explore</Link></li>
          <li><Link to="/history" className="hover:text-gray-300">History</Link></li>
        </ul>
      </div>

      {/* Copyright Line */}
      <div className="text-center mt-4">
        <p className="text-sm">&copy; 2024 EcoChic Living. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
