import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import ViewProfile from './pages/ViewProfile.jsx';
import UniversePage from './pages/UniversePage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile" element={<ViewProfile />} />
      <Route path="/universe" element={<UniversePage />} />
    </Routes>
  );
}

export default App;
