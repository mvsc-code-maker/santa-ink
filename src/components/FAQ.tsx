import React from 'react';
import { FAQS } from '../constants';
import SectionTitle from './SectionTitle';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-black px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Dúvidas Frequentes" centered />
        
        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-zinc-800 p-6 bg-zinc-900/20 hover:border-zinc-600 transition-colors duration-300">
              <h3 className="font-display text-lg md:text-xl font-bold text-white uppercase tracking-wide mb-3">
                {faq.question}
              </h3>
              <p className="font-sans text-zinc-400 font-light leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
