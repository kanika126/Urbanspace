import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Explore from './components/Explore';
import History from './components/History';

const App = () => {
  // State to hold all the submitted records
  const [records, setRecords] = useState([]);

  // Function to add a new record
  const addRecord = (record) => {
    setRecords((prevRecords) => [...prevRecords, record]);
  };

  return (
    <Router>
      <Header />
      <div className="container mx-auto min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Main />} /> {/* Main Component for Home */}
          <Route 
            path="/explore" 
            element={<Explore onAddRecord={addRecord} />} 
          /> {/* Explore Component with addRecord prop */}
          <Route 
            path="/history" 
            element={<History records={records} />} 
          /> {/* History Component with records prop */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
