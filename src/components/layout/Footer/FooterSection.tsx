import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection = ({ title, children }: FooterSectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
      <ul className="space-y-2">
        {children}
      </ul>
    </div>
  );
};

export default FooterSection;