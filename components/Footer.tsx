import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display font-bold text-3xl tracking-wider text-white uppercase border-2 border-white px-3 py-1 mb-6 inline-block">
              Santa Ink
            </span>
            <p className="text-zinc-500 font-sans text-sm max-w-xs">
              Estúdio profissional focado em arte, higiene e exclusividade. Transformando ideias em arte eterna.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-zinc-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-zinc-400 transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-6">
              Localização & Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-white mr-3 mt-1 flex-shrink-0" />
                <p className="text-zinc-400 text-sm">
                  R. Jorge Street, 96<br />
                  Jd. Gumercindo, Guarulhos - SP<br />
                  07090-020
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-white mr-3 flex-shrink-0" />
                <p className="text-zinc-400 text-sm">
                  (11) 4962-3941
                </p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-6">
              Horário de Funcionamento
            </h4>
            <div className="flex items-start">
              <Clock size={20} className="text-white mr-3 mt-1 flex-shrink-0" />
              <ul className="text-zinc-400 text-sm space-y-2">
                <li className="flex justify-between w-48">
                  <span>Seg - Sex:</span>
                  <span className="text-white">10h às 20h</span>
                </li>
                <li className="flex justify-between w-48">
                  <span>Sáb:</span>
                  <span className="text-white">10h às 18h</span>
                </li>
                <li className="flex justify-between w-48">
                  <span>Dom:</span>
                  <span className="text-zinc-600">Fechado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-sans uppercase tracking-widest">
          <p>© 2024 Santa Ink. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Guarulhos - SP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;