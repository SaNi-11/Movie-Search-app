import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
