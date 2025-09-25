"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const companies = [
  {
    name: "北海工務店",
    en: "Hokkai Construction",
    description: "地域密着型の建設会社。安全・安心の施工実績多数。",
    description_en: "A local construction company with a strong safety track record.",
    logo: "/北海工務店　ロゴ.JPG.jpg",
    link: "https://www.sapporo-builderr.com",
  },
  {
    name: "味扉（あじと）",
    en: "Ajito",
    description: "新しい食文化を提案するフードベンチャー。",
    description_en: "A food venture offering new culinary experiences.",
    logo: "/ajito_2022のプロフィール写真.jpg",
    link: "https://www.hotpepper.jp/strJ003324016/?vos=evhpppg0007&pog=mt(b)ti(kwd-2315813023436)dv(c)cr(738602708295)fi()gi(142320910489)ci(17559560127)lc(9197678)ps()nw(g)&gclsrc=aw.ds&gad_source=1&gad_campaignid=17559560127&gbraid=0AAAAADSGJMF8UfGYenHmXncxBoGksCJdF&gclid=Cj0KCQjw267GBhCSARIsAOjVJ4FvKhbtUyL-OaINmCU5Z7tA3F__LdJTakr_XpoBgMLw0RkCTi2mr3EaApipEALw_wcB",
  },
  {
    name: "L.SECURITY",
    en: "L.SECURITY",
    description: "セキュリティのプロフェッショナル集団。",
    description_en: "A professional group of IT security specialists.",
    logo: "/Lsecurity.jpg",
    link: "https://l-security-lit.com",
  },
];

const GroupCompaniesCarousel = () => {
  const [index, setIndex] = useState(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!scrollAreaRef.current) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        if (e.deltaX > 10 && index < companies.length - 1) {
          setIndex(i => Math.min(i + 1, companies.length - 1));
          e.preventDefault();
        } else if (e.deltaX < -10 && index > 0) {
          setIndex(i => Math.max(i - 1, 0));
          e.preventDefault();
        }
      } else if (e.deltaY > 10) {
        if (index < companies.length - 1) {
          setIndex(i => Math.min(i + 1, companies.length - 1));
          e.preventDefault();
        }
      } else if (e.deltaY < -10) {
        if (index > 0) {
          setIndex(i => Math.max(i - 1, 0));
          e.preventDefault();
        }
      }
    };
    const el = scrollAreaRef.current;
    if (el) el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      if (el) el.removeEventListener("wheel", handleWheel);
    };
  }, [index]);

  const slideStyle = {
    transform: `translateX(-${index * 100}vw)`,
    transition: "transform 0.7s cubic-bezier(.33,.72,.19,.98)",
    width: `${companies.length * 100}vw`,
  };

  return (
    <section className="relative w-screen min-h-screen bg-[#ededed] flex flex-col items-center justify-start py-10">
      {/* タイトル */}
      <div className="w-full max-w-3xl text-center mx-auto mb-12 mt-6">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#232323] mb-3 uppercase">
          OUR GROUP COMPANIES
        </h2>
        <p className="text-[#666] text-base md:text-lg">
          Introducing Our Group Companies
        </p>
        <div className="mx-auto mt-3 h-[3px] w-12 bg-[#232323] rounded" />
      </div>
      {/* カルーセル */}
      <div
        ref={scrollAreaRef}
        className="relative w-screen h-[62vh] md:h-[72vh] flex items-center overflow-hidden select-none"
        style={{ touchAction: "pan-y" }}
      >
        <div className="flex h-full" style={slideStyle}>
          {companies.map((company, i) => (
            <div
              key={company.name}
              className="w-screen flex justify-center items-center px-2 md:px-0"
            >
              <Link
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group max-w-lg w-[92vw] md:w-[600px] mx-auto bg-white rounded-3xl shadow-xl border border-[#bbb] flex flex-col items-center py-10 px-5 md:px-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                tabIndex={index === i ? 0 : -1}
                aria-hidden={index !== i}
              >
                <Image
                  src={company.logo}
                  alt={company.name + " Logo"}
                  width={350}
                  height={120}
                  priority={i === 0}
                  className="object-contain max-h-[140px] mb-6 grayscale"
                />
                <h3 className="text-2xl font-bold text-[#232323] mb-1 tracking-widest">{company.en}</h3>
                <span className="text-base text-[#666] mb-2">{company.name}</span>
                <p className="text-[#888] text-base text-center mt-2 min-h-[40px]">
                  {company.description_en}
                </p>
                <p className="text-[#bbb] text-sm text-center">{company.description}</p>
                <span className="mt-8 px-8 py-3 rounded-full border border-[#bbb] bg-white text-[#232323] font-bold tracking-wide shadow-md text-base group-hover:bg-[#ededed] group-hover:text-[#232323] transition">
                  Visit Website
                </span>
              </Link>
              {/* 左右ナビ */}
              {i > 0 && (
                <button
                  aria-label="Previous"
                  onClick={() => setIndex(i - 1)}
                  className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 bg-white border border-[#bbb] rounded-full p-3 shadow hover:bg-[#232323] hover:text-white transition"
                >
                  <svg width={22} height={22} viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#888" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              )}
              {i < companies.length - 1 && (
                <button
                  aria-label="Next"
                  onClick={() => setIndex(i + 1)}
                  className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 bg-white border border-[#bbb] rounded-full p-3 shadow hover:bg-[#232323] hover:text-white transition"
                >
                  <svg width={22} height={22} viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#888" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              )}
            </div>
          ))}
        </div>
        {/* ページドット */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {companies.map((_, i) => (
            <span
              key={i}
              className={`block w-3 h-3 rounded-full ${i === index ? "bg-[#232323]" : "bg-[#bbb]"} transition`}
            />
          ))}
        </div>
      </div>
      {/* 下スクロール案内（ラストのみ） */}
      {index === companies.length - 1 && (
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#bbb] animate-bounce z-20">
  <span className="text-sm">Scroll Down</span>
  <svg width={38} height={38} fill="none" stroke="#bbb" strokeWidth={2}>
    <path d="M19 10v16M10 24l9 7 9-7" strokeLinecap="round" />
  </svg>
</div>
      )}
    </section>
  );
};

export default GroupCompaniesCarousel;
