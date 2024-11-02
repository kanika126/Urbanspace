import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="relative h-screen w-full bg-black">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://cdn.pixabay.com/video/2024/04/24/209289_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Text and Button */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 bg-black bg-opacity-50">
        {/* Responsive Text */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-lg mx-auto"> Welcome to EcoChic Living</h1>
        <p className="text-lg md:text-3xl mb-8 max-w-lg mx-auto">Discover customized aesthetic for your beautiful place.</p>
        <p className="text-lg md:text-2xl mb-8 max-w-lg mx-auto">A small step towards sustainability at your budget.</p>

        {/* Explore Button */}
        <Link to="/explore">
          <button className="bg-white text-[#17B169] font-semibold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
