// src/components/common/Footer/Footer.tsx

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightText = `© ${currentYear} L security LLC-LIT`;

  return (
    <footer className="py-4 text-center bg-black text-white !important">
      <p>{copyrightText}</p>
    </footer>
  );
}