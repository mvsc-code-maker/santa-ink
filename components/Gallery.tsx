import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import SectionTitle from './SectionTitle';

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-24 bg-zinc-950 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Galeria" subtitle="divider" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <div 
              key={index} 
              className="aspect-square relative group overflow-hidden bg-zinc-900"
            >
              <img 
                src={img} 
                alt={`Trabalho ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-display text-white text-sm uppercase tracking-widest border border-white px-3 py-1">
                  Ver
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <a href="#" className="inline-block text-zinc-500 hover:text-white font-display uppercase tracking-widest text-sm border-b border-transparent hover:border-white pb-1 transition-all">
             Ver mais no Instagram
           </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;