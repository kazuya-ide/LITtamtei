"use client";
import SocialLinks from './components/SocialLinks';
import NewsSection from './components/NewsSection';
import GoogleMaps from './components/GoogleMaps';
import ImageGrid from "./components/ImageGrid";
import ServicesText from "./components/atoms/ServicesText";
import MoreButton from "./components/Buttoon/MoreButton";
import { useRef, useEffect, useState } from "react";
import CompanyInformation from "./components/CompanyInfo";
import ContactUs from "./components/ContactUs";
import Image from 'next/image';
import VideoHeader from "./components/VideoHeader";
import ProjectGrid from './components/ProjectGrid';
import ServicesSection from './components/ServicesSection';


export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const videoElement = videoRef.current;
        const videoTop = videoElement.offsetTop; // 動画要素の上端の絶対位置を取得
        const scrollY = window.scrollY;
        const fadeOutHeight = videoTop + videoElement.offsetHeight; // 動画の高さ分も考慮

        // 動画が画面外に出るまでフェードアウト
        if (scrollY < fadeOutHeight) {
          setOpacity(1 - scrollY / fadeOutHeight);
        } else {
          setOpacity(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div
      style={{
        position: 'relative',
        minHeight: '150vh',
        overflowX: 'hidden',
      }}
    >
      {/* 動画とコンテンツをまとめるコンテナ */}
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100vh', // 動画の高さ
            overflow: 'hidden',
          }}
        >
          <video
            ref={videoRef}
            src="6.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute', // 絶対配置に変更
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -1, // 他のコンテンツの下に表示
              opacity: opacity,
              transition: 'opacity 0.3s ease-in-out',
            }}
          />
        <VideoHeader />
        </div>
          <div style={{ position: 'relative', zIndex: 1, marginTop: '4rem' }}>
         
          <ServicesText titleText="SERVICES" subtitleText="事業情報" />
          <ImageGrid />
          <div className="flex justify-center mt-4 mb-20">
    <MoreButton />
</div>
          <ServicesText titleText="WORKS" subtitleText="実績例" />
          <div className="mt-10"></div>
          <ProjectGrid/>
          <div className="mt-10"></div>
          <ServicesSection/>
          <NewsSection/>
          <div className="mt-10"></div>
          <CompanyInformation />
          <div className="mt-10"></div>
          
         
       
          <ContactUs />
        
          <div className="mt-10"> {/* 上部にマージンを追加 */}
          <GoogleMaps/>
         </div>
         <SocialLinks/>
          </div>
        </div>
      </div>
    
  );
}