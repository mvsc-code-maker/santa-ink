import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Artists from './components/Artists';
import Piercing from './components/Piercing';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Artists />
        <Piercing />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;