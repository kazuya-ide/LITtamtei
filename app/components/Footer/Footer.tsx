import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-14 px-2 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-0 justify-between">
        {/* --- 1カラム目: ブランド --- */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center md:items-start">
            {/* ロゴ */}
            <div className="w-44 h-14 relative mb-4">
              <Image
                src="/レイヤー 1.png"
                alt="L security ロゴ"
                fill
                className="object-contain"
                sizes="176px"
              />
            </div>
            <div className="text-2xl font-extrabold tracking-wide mb-2">L security</div>
            {/* MAPボタン */}
            <div className="flex items-center mb-1">
              <a
                href="https://maps.google.com/?q=北海道札幌市西区西町北１４丁目１−１５ ホクシンビル３F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-3 py-1 rounded flex items-center gap-1 text-xs shadow transition"
                style={{ whiteSpace: "nowrap" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414A5 5 0 1112.414 13.414l4.243 4.243a1 1 0 101.414-1.414zM15 11a4 4 0 11-8 0 018 0z" />
                </svg>
                MAP
              </a>
            </div>
            {/* 住所 */}
            <div className="text-xs text-gray-400 mb-1 mt-0">
              <a
                href="https://maps.app.goo.gl/LJ8NvAkpVTGZMLLU6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition underline underline-offset-2"
              >
                〒063-0061 北海道札幌市西区西町北１４丁目１−１５ ホクシンビル３F
              </a>
            </div>
            {/* TEL */}
            <div className="text-xs text-gray-400 mb-1">
              TEL:{" "}
              <a
                href="tel:0112156432"
                className="underline hover:text-yellow-400 transition"
              >
                011-215-6432
              </a>
            </div>
            {/* Email */}
            <div className="text-xs text-gray-400 mb-2">
              E-mail:{" "}
              <a
                href="mailto:info@llc-lit.com"
                className="underline hover:text-yellow-400 transition"
              >
                info@llc-lit.com
              </a>
            </div>
          </div>
          {/* 下部リンク */}
          <div className="mt-5 flex flex-col md:flex-row gap-3 text-xs text-gray-400">
            <Link href="/privacy-policy" className="hover:text-yellow-400">プライバシーポリシー</Link>
            <span className="hidden md:inline">|</span>
            <a href="https://www.lit4.net/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">LLC-LIT</a>
          </div>
          <div className="mt-2 text-xs text-gray-500">&copy; {currentYear} L security LLC-LIT</div>
        </div>

        {/* --- 2カラム目: SITEMAP --- */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="uppercase tracking-widest text-sm font-semibold text-gray-200 mb-4">SITEMAP</div>
          <nav className="flex flex-col gap-2 text-base font-medium">
            <Link href="/" className="hover:text-yellow-400 transition">ホーム</Link>
            <Link href="/business" className="hover:text-yellow-400 transition">法人のお客様</Link>
            <Link href="/personal" className="hover:text-yellow-400 transition">個人のお客様</Link>
            <Link href="/about" className="hover:text-yellow-400 transition">企業情報</Link>
            <Link href="/news" className="hover:text-yellow-400 transition">お知らせ</Link>
            <Link href="/faq" className="hover:text-yellow-400 transition">よくある質問</Link>
            <Link href="/column" className="hover:text-yellow-400 transition">コラム</Link>
          </nav>
        </div>

        {/* --- 3カラム目: ENTRY --- */}
        <div className="flex-1 flex flex-col items-center md:items-end">
          <div className="uppercase tracking-widest text-sm font-semibold text-gray-200 mb-4">ENTRY</div>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            {/* 採用情報ボタン */}
            <Link href="/recruit" className="block">
              <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition text-black py-3 rounded-lg font-bold text-lg shadow">
                採用情報
              </button>
            </Link>
            {/* お仕事のご依頼ボタン */}
            <Link href="/contact" className="block">
              <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition text-black py-3 rounded-lg font-bold text-lg shadow">
                お仕事のご依頼はこちら
              </button>
            </Link>
            {/* お問い合わせボタン */}
            <Link href="/contact" className="block">
              <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition text-black py-3 rounded-lg font-bold text-lg shadow">
                お問い合わせ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
