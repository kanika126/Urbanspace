import React from 'react';

const History = ({ records }) => {
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

      {/* History Records Container */}
      <div className="relative w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">History of Records</h2>
        {records.length === 0 ? (
          <p className="text-gray-600 text-center">No records available.</p>
        ) : (
          <ul className="space-y-4">
            {records.map((record, index) => (
              <li key={index} className="border border-gray-300 p-4 rounded-md">
                <p><strong>Budget:</strong> ${record.budget}</p>
                <p><strong>Area:</strong> {record.area} sq. feet</p>
                <p><strong>State:</strong> {record.state}</p>
                <p><strong>District:</strong> {record.district}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default History;


