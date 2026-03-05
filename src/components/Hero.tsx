import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/dark_tattoo_studio/1920/1080?grayscale" 
          alt="Santa Ink Studio Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter mb-4 uppercase leading-none">
          Santa Ink
        </h1>
        <p className="font-sans font-light text-xl md:text-2xl text-gray-300 tracking-[0.2em] mb-10 uppercase border-y border-gray-600 inline-block py-2 px-6">
          Arte eterna em preto e branco
        </p>
        
        <div className="mt-8">
          <a 
            href="#artistas"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all duration-200 bg-transparent border border-white font-display tracking-widest uppercase hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Conhecer Artistas
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;
