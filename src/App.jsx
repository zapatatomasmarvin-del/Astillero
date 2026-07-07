import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BoatShowcase from './components/BoatShowcase';
import About from './components/About';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BoatDetail from './pages/BoatDetail';

function HomePage() {
  return (
    <main>
      <Hero />
      <BoatShowcase />
      <About />
      <Location />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bote/:id" element={<BoatDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
