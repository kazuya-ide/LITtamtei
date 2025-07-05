"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from 'next/image';

// ▼ メニュー項目を一元管理
const navLinks = [
  { label: "ホーム", href: "/" },
  { label: "企業情報", href: "/about" },
  { label: "事業情報", href: "/projects" },
  { label: "法人のお客様", href: "/business" },
  { label: "個人のお客様", href: "/personal" },
  { label: "最新情報", href: "/news" },
  { label: "採用情報", href: "/recruit" },
  { label: "お問い合わせ", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="py-4 sticky top-0 z-50 bg-transparent">
      <div className="container mx-auto flex justify-between items-center px-4 text-white">

        {/* ロゴ＋テキスト */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-auto">
            <Image
              src="/L-securiyロゴ_edited.png"
              alt="L Security Logo"
              height={32}
              width={120}
              priority
              className="object-contain h-full w-auto"
            />
          </div>
          <span className="text-xl font-bold">L.SECURITY</span>
        </Link>

        {/* PCメニュー */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`py-2 px-4 hover:text-yellow-400 transition-colors duration-300 ${
                pathname === href ? 'text-yellow-400 font-bold' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* ハンバーガーメニュー */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="border-none cursor-pointer transition-colors duration-300 flex items-center"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {/* ハンバーガー */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-8 h-8 ${isMenuOpen ? 'hidden' : 'block'}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            {/* 閉じる */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-8 h-8 ${isMenuOpen ? 'block' : 'hidden'}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* モバイル用メニュー */}
        <div
          className={`fixed top-0 right-0 h-full z-40 bg-neutral-900 text-white transition-all duration-300 shadow-lg ${
            isMenuOpen ? 'w-[75vw] max-w-xs opacity-100' : 'w-0 opacity-0 pointer-events-none'
          }`}
          style={{ minWidth: '240px' }}
        >
          <nav className="flex flex-col gap-4 p-8 pt-20">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-lg font-bold py-2 px-4 rounded hover:bg-yellow-400 hover:text-black transition ${
                  pathname === href ? 'text-yellow-400 underline' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        {/* 背景クリックでメニュー閉じる */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
