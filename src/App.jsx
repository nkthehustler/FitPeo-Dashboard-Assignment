import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import './index.css';

function App() {
  return (
    <div className="flex bg-[#f5f7fa] min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
