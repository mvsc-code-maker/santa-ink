import React from 'react';
import { ARTISTS } from '../constants';
import SectionTitle from './SectionTitle';
import { Instagram, MessageCircle } from 'lucide-react';

const Artists: React.FC = () => {
  return (
    <section id="artistas" className="py-24 bg-zinc-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Nossos Tatuadores" subtitle="divider" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {ARTISTS.map((artist) => (
            <div key={artist.id} className="group relative">
              <div className="aspect-[3/4] overflow-hidden bg-zinc-900 border border-zinc-800">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                />
              </div>
              
              <div className="mt-6 flex flex-col items-center">
                <h3 className="font-display text-3xl font-bold text-white uppercase tracking-wide">
                  {artist.name}
                </h3>
                
                <div className="flex flex-wrap justify-center gap-2 mt-3 mb-6">
                  {artist.specialties.map((spec, index) => (
                    <span 
                      key={index}
                      className="text-xs font-sans font-medium text-zinc-400 uppercase tracking-wider px-2 py-1 border border-zinc-800"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={artist.whatsapp}
                    className="flex items-center px-6 py-2 bg-white text-black font-display text-sm font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
                  >
                    <MessageCircle size={16} className="mr-2" />
                    Orçar
                  </a>
                  <a 
                    href={artist.instagram}
                    className="flex items-center px-6 py-2 border border-white text-white font-display text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all"
                  >
                    <Instagram size={16} className="mr-2" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;