import React from 'react';
import { PIERCER } from '../constants';
import SectionTitle from './SectionTitle';
import { Instagram, MessageCircle, ShieldCheck } from 'lucide-react';

const Piercing: React.FC = () => {
  return (
    <section id="piercing" className="py-24 bg-black px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-2">
                Body Piercing
              </h2>
              <p className="font-display text-xl text-zinc-400 uppercase tracking-widest">
                 {PIERCER.name}
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-zinc-900/50 p-6 border-l-2 border-white">
                <p className="text-zinc-300 font-sans leading-relaxed">
                  {PIERCER.description}
                </p>
              </div>

              <div>
                <h4 className="font-display text-lg text-white uppercase tracking-wider mb-4 flex items-center">
                  <ShieldCheck size={20} className="mr-2" />
                  Serviços
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PIERCER.services.map((service, index) => (
                    <li key={index} className="flex items-center text-zinc-400 text-sm font-sans">
                      <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full mr-3"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href={PIERCER.whatsapp}
                  className="flex items-center justify-center px-8 py-3 bg-white text-black font-display text-sm font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Agendar Piercing
                </a>
                <a 
                  href={PIERCER.instagram}
                  className="flex items-center justify-center px-8 py-3 border border-zinc-700 text-white font-display text-sm font-bold uppercase tracking-wider hover:border-white hover:bg-transparent transition-all"
                >
                  <Instagram size={18} className="mr-2" />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-square md:aspect-[4/5] lg:aspect-[3/4] w-full max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-zinc-800 transform translate-x-4 translate-y-4"></div>
              <img 
                src={PIERCER.image} 
                alt="Body Piercing" 
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Piercing;
