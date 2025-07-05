// app/page.tsx

import VideoFade from "./components/VideoFade";
import VideoHeader from "./components/VideoHeader";
import CompanyInformation from "./components/CompanyInfo";
import ServicesText from "./components/atoms/ServicesText";
import ImageGrid from "./components/ImageGrid";
import MoreButton from "./components/Buttoon/MoreButton";
import ProjectGrid from "./components/ProjectGrid";
import ServicesSection from "./components/ServicesSection";
import NewsSection from "./components/NewsSection";
import RecruitCard from "./components/RecruitCard";

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '150vh', overflowX: 'hidden' }}>
      {/* 動画とヘッダー */}
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <VideoFade />  {/* ← クライアント。動画のフェードアウト処理だけ */}
        <VideoHeader />
      </div>

      {/* 以下サーバーコンポーネント群 */}
      <div style={{ position: 'relative', zIndex: 1, marginTop: '4rem' }}>
        <CompanyInformation />
        <div className="mt-20" />
        <ServicesText titleText="SERVICES" subtitleText="事業情報" />
        <div className="mt-10" />
        <ImageGrid />
        <div className="flex justify-center mt-4 mb-20">
          <MoreButton />
        </div>
        <ServicesText titleText="WORKS" subtitleText="実績例" />
        <div className="mt-10" />
        <ProjectGrid />
        <div className="mt-10" />
        <ServicesSection />
        <NewsSection />
        <div className="mt-10" />
        <RecruitCard />
        <div className="mb-20" />
      </div>
    </div>
  );
}
