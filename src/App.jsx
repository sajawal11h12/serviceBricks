import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './components/Home/Home';
import Feature from './components/Features/Feature';
import Documentation from './components/Documentation/Documentation';
import Consulting from './components/Consulting/Consulting';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="features" element={<Feature />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="consulting" element={<Consulting />} />
        <Route path="about" element={<About />} />
        {/* Redirect from root path to Home */}
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
