import React, { useState } from 'react';

const Explore = ({ onAddRecord }) => {
  // State for the form inputs
  const [budget, setBudget] = useState(50000); // Default budget value
  const [area, setArea] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  
  // State to hold the image URL
  const [imageUrl, setImageUrl] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { budget, area, state, district };
    onAddRecord(newRecord); // Pass the new record to the parent component
    // Reset form fields
    setBudget(50000);
    setArea('');
    setState('');
    setDistrict('');
  };

  // Function to handle image display
  const handleShowImage = () => {
    // Set the image URL (Replace with actual image URL)
    setImageUrl('https://via.placeholder.com/400'); // Example placeholder image
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="https://cdn.pixabay.com/video/2024/04/24/209289_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Form Container */}
      <div className="relative w-full max-w-xl bg-white p-6 rounded-lg shadow-lg space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">EcoChic Living Image Generate</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Budget Slider */}
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">
              Budget: <span className="font-bold">${budget}</span>
            </label>
            <input
              type="range"
              min="1000"
              max="50000"
              step="100"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Area Input */}
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">Area (sq. feet):</label>
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Enter area in sq. feet"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>

          {/* State Dropdown */}
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">State:</label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="" disabled>Select State</option>
              <option value="State1">Delhi</option>
              <option value="State2">Mumbai</option>
              {/* Add more state options here */}
            </select>
          </div>

          {/* District Dropdown */}
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">District:</label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="" disabled>Select District</option>
              <option value="District1">South Delhi</option>
              <option value="District2">Juhu</option>
              {/* Add more district options here */}
            </select>
          </div>

          {/* Submit Button */}
          <div className="form-group">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Generate 
            </button>
          </div>
        </form>

        {/* Button to Show Image */}
        <div className="form-group">
          <button
            onClick={handleShowImage}
            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300 mt-4"
          >
            Show Suggestion
          </button>
        </div>

        {/* Display Image */}
        {imageUrl && (
          <div className="mt-4 flex justify-center">
            <img src={imageUrl} alt="Displayed" className="rounded-md shadow-md max-w-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
