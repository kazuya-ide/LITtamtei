// app/components/TanteiFooter.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function TanteiFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-emerald-50 to-neutral-100 text-gray-800 py-14 px-2 border-t border-emerald-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-0 justify-between">
        {/* --- 1カラム目: ブランド --- */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center md:items-start">
            {/* ロゴ */}
            <div className="w-44 h-14 relative mb-4">
              <Image
                src="/lit-logo.jpg" // 半角英数ファイル名推奨
                alt="LITロゴ"
                fill
                className="object-contain"
                sizes="176px"
                priority
              />
            </div>

            <div className="text-2xl font-extrabold tracking-wide mb-2 text-emerald-800">
              LLC-LIT
            </div>

            {/* MAPボタン */}
            <div className="flex items-center mb-1">
              <a
                href="https://maps.google.com/?q=北海道札幌市西区西町北１４丁目１−１５ ホクシンビル３F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-bold px-3 py-1 rounded flex items-center gap-1 text-xs shadow transition"
                style={{ whiteSpace: "nowrap" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 12.414A5 5 0 1112.414 13.414l4.243 4.243a1 1 0 101.414-1.414zM15 11a4 4 0 11-8 0 018 0z"
                  />
                </svg>
                MAP
              </a>
            </div>

            <div className="text-xs text-gray-600 mb-1 mt-0">
              <a
                href="https://maps.app.goo.gl/LJ8NvAkpVTGZMLLU6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-700 transition underline underline-offset-2"
              >
                〒063-0061 北海道札幌市西区西町北１４丁目１−１５ ホクシンビル３F
              </a>
            </div>
            <div className="text-xs text-gray-600 mb-1">
              TEL:{" "}
              <a
                href="tel:0112156432"
                className="underline hover:text-emerald-700 transition"
              >
                011-215-6432
              </a>
            </div>
            <div className="text-xs text-gray-600 mb-2">
              E-mail:{" "}
              <a
                href="mailto:info@llc-lit.com"
                className="underline hover:text-emerald-700 transition"
              >
                info@llc-lit.com
              </a>
            </div>
          </div>

          {/* 下部リンク */}
          <div className="mt-5 flex flex-col md:flex-row gap-3 text-xs text-gray-600">
            <Link href="/privacy-policy" className="hover:text-emerald-700">
              プライバシーポリシー
            </Link>
            <span className="hidden md:inline">|</span>
            <a
              href="https://www.lit4.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-700"
            >
              LLC-LIT
            </a>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            &copy; {currentYear} LLC-LIT
          </div>
        </div>

        {/* --- 2カラム目: SITEMAP --- */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="uppercase tracking-widest text-sm font-semibold text-emerald-900 mb-4">
            SITEMAP
          </div>
          <nav className="flex flex-col gap-2 text-base font-medium">
            <Link href="/" className="hover:text-emerald-700 transition">
              ホーム
            </Link>
            <Link
              href="https://www.sapporo-builderr.com"
              className="hover:text-emerald-700 transition"
            >
              北海工務店
            </Link>
            <Link
              href="https://www.hotpepper.jp/strJ003324016/"
              className="hover:text-emerald-700 transition"
            >
              AJITO
            </Link>
            <Link
              href="https://l-security-lit.com"
              className="hover:text-emerald-700 transition"
            >
              Lsecurity
            </Link>
            <Link href="/news" className="hover:text-emerald-700 transition">
              お知らせ
            </Link>
            <Link href="/faq" className="hover:text-emerald-700 transition">
              よくある質問
            </Link>
          </nav>
        </div>

        {/* --- 3カラム目: ENTRY --- */}
        <div className="flex-1 flex flex-col items-center md:items-end">
          <div className="uppercase tracking-widest text-sm font-semibold text-emerald-900 mb-4">
            ENTRY
          </div>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <Link
              href="/recruit"
              className="w-full bg-emerald-100 hover:bg-emerald-200 transition text-emerald-900 py-3 rounded-lg font-bold text-lg shadow text-center"
            >
              採用情報
            </Link>
            <Link
              href="/contact"
              className="w-full bg-emerald-100 hover:bg-emerald-200 transition text-emerald-900 py-3 rounded-lg font-bold text-lg shadow text-center"
            >
              調査のご依頼はこちら
            </Link>
            <Link
              href="/contact"
              className="w-full bg-emerald-100 hover:bg-emerald-200 transition text-emerald-900 py-3 rounded-lg font-bold text-lg shadow text-center"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
