
import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import DetectionPage from './pages/Detection';
import About from './pages/About';
import { PageType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('HOME');

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME':
        return <Home onNavigate={setCurrentPage} />;
      case 'IMAGE':
        return <DetectionPage type="IMAGE" onBack={() => setCurrentPage('HOME')} />;
      case 'VIDEO':
        return <DetectionPage type="VIDEO" onBack={() => setCurrentPage('HOME')} />;
      case 'NEWS':
        return <DetectionPage type="NEWS" onBack={() => setCurrentPage('HOME')} />;
      case 'ABOUT':
        return <About />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

export default App;
