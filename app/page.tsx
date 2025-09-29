// app/page.tsx
import HeroSection from "./components/Herosection";
import CompanyInformation from "./components/CompanyInfo";
import NewsSection from "./components/NewsSection";
import HeroVideo from "./components/HeroVideo";
import GroupCompaniesCarousel from "./components/GroupCompaniesCarousel";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* ページ先頭に動画ブロック */}
      <div className="w-screen">
        <HeroVideo />
      </div>

      {/* 下のコンテンツ */}
      <div className="relative z-10 bg-white mt-16">
        <HeroSection />
        <CompanyInformation />
        <div className="mt-20" />
        <GroupCompaniesCarousel />
        <NewsSection />
        <div className="mb-20" />
      </div>
    </main>
  );
}
