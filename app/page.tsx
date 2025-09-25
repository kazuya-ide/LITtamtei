// app/page.tsx
import HeroSection from "./components/Herosection";
import CompanyInformation from "./components/CompanyInfo";

import NewsSection from "./components/NewsSection";
import HeroVideo from "./components/HeroVideo";

import GroupCompaniesCarousel from "./components/GroupCompaniesCarousel";
export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '150vh', overflowX: 'hidden' }}>
   <HeroVideo/>
<HeroSection/>
    
      <div style={{ position: 'relative', zIndex: 1, marginTop: '4rem' }}>
        <CompanyInformation />
        <div className="mt-20" />
        <GroupCompaniesCarousel/>
       
        
        <NewsSection />
        <div className="mt-10" />
      
        <div className="mb-20" />
      </div>
    </div>
  );
}
