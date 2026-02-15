import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-3">
        {title}
      </h2>
      {subtitle && (
        <div className={`h-1 w-20 bg-white ${centered ? 'mx-auto' : ''}`} />
      )}
    </div>
  );
};

export default SectionTitle;