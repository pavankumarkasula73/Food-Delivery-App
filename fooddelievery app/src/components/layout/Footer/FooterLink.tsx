import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <li>
      <a
        href={href}
        className="text-gray-400 hover:text-white transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );
};

export default FooterLink;