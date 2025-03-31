// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // ヘッダー要素 (背景は透明のまま)
    <header className="py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 text-white">

        {/* ▼▼▼ ロゴとテキスト部分の変更 ▼▼▼ */}
        {/* Link の className に gap-2 を追加して画像とテキストの間隔を調整 */}
        <Link href="/" className="flex items-center gap-2"> {/* gap-2 を追加 */}
          {/* ロゴ画像 */}
          <div className="relative h-8 w-auto">
            <Image
              src="/L-securiyロゴ_edited.png"
              alt="L Security Logo"
              height={32}
              width={120} // アスペクト比に合わせて調整
              priority
              className="object-contain h-full w-auto"
            />
          </div>
          {/* テキストを追加 */}
          <span className="text-xl font-bold">L.SECURITY</span> {/* テキストのスタイルを指定 */}
        </Link>
        {/* ▲▲▲ ここまで変更 ▲▲▲ */}

        {/* PC用メニュー */}
        <nav className={`hidden items-center gap-4`}>
          <Link href="/" className={`py-2 px-4 hover:text-blue-500 transition-colors duration-300 ${pathname === '/' ? 'text-gray-300' : ''}`}>
            Home
          </Link>
          <Link href="/about" className={`py-2 px-4 hover:text-blue-500 transition-colors duration-300 ${pathname === '/about' ? 'text-gray-300' : ''}`}>
            About
          </Link>
          <Link href="/projects" className={`py-2 px-4 hover:text-blue-500 transition-colors duration-300 ${pathname === '/projects' ? 'text-gray-300' : ''}`}>
            Projects
          </Link>
          <Link href="/blog" className={`py-2 px-4 hover:text-blue-500 transition-colors duration-300 ${pathname === '/blog' ? 'text-gray-300' : ''}`}>
            Blog
          </Link>
          <Link href="/sample" className={`py-2 px-4 hover:text-blue-500 transition-colors duration-300 ${pathname === '/sample' ? 'text-gray-300' : ''}`}>
            Sample
          </Link>
        </nav>

        {/* ハンバーガーメニューボタン */}
        <div className={`flex items-center gap-4`}>
          <button
            onClick={toggleMenu}
            className="border-none cursor-pointer transition-colors duration-300 flex items-center"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {/* ハンバーガーアイコン */}
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
            {/* 閉じるアイコン */}
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
          className={`absolute top-12 right-0 z-10 ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}
          style={{ width: '40vw' }}
        >
          <nav className="flex flex-col items-center gap-4 p-4 bg-gray-800 text-white">
            <Link href="/" className="py-2 px-4 hover:text-blue-500 transition-colors duration-300 text-xl">
              Home
            </Link>
            <Link href="/about" className="py-2 px-4 hover:text-blue-500 transition-colors duration-300 text-xl">
              About
            </Link>
            <Link href="/projects" className="py-2 px-4 hover:text-blue-500 transition-colors duration-300 text-xl">
              Projects
            </Link>
            <Link href="/blog" className="py-2 px-4 hover:text-blue-500 transition-colors duration-300 text-xl">
              Blog
            </Link>
            <Link href="/sample" className="py-2 px-4 hover:text-blue-500 transition-colors duration-300 text-xl">
              Sample
            </Link>
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Header;