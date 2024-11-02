import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to toggle the visibility of the Logout button
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Function to handle the toggle
  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen); // Toggle visibility
  };

  return (
    <header className="bg-[#17B169] text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Website Name */}
        <h1 className="text-xl font-bold">EcoChic Living</h1>

        {/* Middle Navigation Links */}
        <ul className="flex space-x-6 text-lg">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/explore" className="hover:text-gray-300">Explore</Link></li>
          <li><Link to="/history" className="hover:text-gray-300">History</Link></li>
        </ul>

        {/* Profile Icon and Dropdown Logout */}
        <div className="relative">
          {/* Profile Icon */}
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={handleProfileClick} // Click to toggle logout
          />

          {/* Conditional rendering of Logout button */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white text-black rounded shadow-lg z-10">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => alert('Logged out')}>
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
