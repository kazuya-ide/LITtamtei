"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const companies = [
  {
    name: "北海工務店",
    en: "Hokkai Construction",
    description: "地域密着型の建設会社。安全・安心の施工実績多数。",
    description_en: "A local construction company with a strong safety track record.",
    logo: "/hokkai.jpg",
    link: "https://www.sapporo-builderr.com",
    bg: "bg-[#f5f5f5]",
  },
  {
    name: "味扉（あじと）",
    en: "Ajito",
    description: "新しい食文化を提案するフードベンチャー。",
    description_en: "A food venture offering new culinary experiences.",
    logo: "/ajito.jpg",
    link: "https://www.hotpepper.jp/strJ003324016",
    bg: "bg-[#ededed]",
  },
  {
    name: "L.SECURITY",
    en: "L.SECURITY",
    description: "セキュリティのプロフェッショナル集団。",
    description_en: "A professional group of IT security specialists.",
    logo: "/lsec.jpg",
    link: "https://l-security-lit.com",
    bg: "bg-[#e8e8e8]",
  },
];

export default function CarouselCrossfade() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % companies.length);
  const prev = () => setIndex((i) => (i - 1 + companies.length) % companies.length);

  return (
    <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={companies[index].name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className={`absolute inset-0 flex items-center justify-center ${companies[index].bg}`}
        >
          <Link
            href={companies[index].link}
            target="_blank"
            rel="noopener noreferrer"
            className="group max-w-2xl w-[92vw] md:w-[700px] bg-white rounded-3xl shadow-xl border border-[#bbb] flex flex-col items-center py-12 px-8 transition-all duration-500 hover:shadow-2xl"
          >
            <Image
              src={companies[index].logo}
              alt={companies[index].name + " Logo"}
              width={350}
              height={120}
              priority
              className="object-contain max-h-[140px] mb-6 grayscale"
            />
            <h3 className="text-3xl font-bold text-[#232323] mb-1 tracking-widest">
              {companies[index].en}
            </h3>
            <span className="text-lg text-[#666] mb-3">{companies[index].name}</span>
            <p className="text-[#888] text-base text-center mt-2 min-h-[40px]">
              {companies[index].description_en}
            </p>
            <p className="text-[#bbb] text-sm text-center">{companies[index].description}</p>
            <span className="mt-10 px-10 py-3 rounded-full border border-[#bbb] bg-white text-[#232323] font-bold tracking-wide shadow-md text-lg group-hover:bg-[#ededed] group-hover:text-[#232323] transition">
              Visit Website
            </span>
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* 左右ナビゲーション */}
      <button
        onClick={prev}
        className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 bg-white border border-[#bbb] rounded-full p-3 shadow hover:bg-[#232323] hover:text-white transition"
      >
        <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 bg-white border border-[#bbb] rounded-full p-3 shadow hover:bg-[#232323] hover:text-white transition"
      >
        <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ページドット */}
      <div className="absolute bottom-8 flex gap-3">
        {companies.map((_, i) => (
          <span
            key={i}
            className={`block w-3 h-3 rounded-full ${i === index ? "bg-[#232323]" : "bg-[#bbb]"}`}
          />
        ))}
      </div>
    </section>
  );
}
