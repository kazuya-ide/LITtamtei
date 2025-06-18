import Image from 'next/image';
import Link from 'next/link';

export default function CompanyInformation() {
  return (
    <div className="relative flex flex-col md:flex-row items-stretch w-full overflow-hidden px-[10%]">
      {/* Text Section */}
      <div className="relative w-full md:w-7/12 p-6 md:p-10 bg-yellow-500 order-1">
        <div
          className="absolute top-0 right-0 bottom-0 left-auto w-48 bg-yellow-500 transform skew-x-[-20deg] origin-bottom-right shadow-none hidden md:block"
          style={{ zIndex: 1, right: '0px' }}
        />
        <div className="relative" style={{ zIndex: 2 }}>
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-3 md:mb-6">COMPANY</h1>
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 md:mb-8">INFORMATION</h1>
          <h2 className="text-lg md:text-xl text-black mb-3 md:mb-4">企業情報</h2>
          <p className="text-sm text-black mb-1 md:mb-2">
            私たちの使命は、お客様と社会の日常を守り抜くこと。
          </p>
          <p className="text-sm text-black mb-1 md:mb-2">
            最前線で求められるのは、緻密な観察力と冷静な判断力、そして一瞬の決断力です。
          </p>
          <p className="text-sm text-black mb-1 md:mb-2">
            L.SECURITYは最新のノウハウと豊富な現場経験を活かし、全スタッフがプロ意識と誇りを持って警備業務に従事しています。
          </p>
          <p className="text-sm text-black mb-3 md:mb-4">
            柔軟な対応力と、どんな状況でも「安心」を提供する揺るぎない覚悟で、これからも信頼される警備のスペシャリスト集団であり続けます。
          </p>
          <div className="mt-6 md:mt-auto w-fit">
            <Link href="/about" >
              <div className="group relative border border-black px-6 py-2 inline-block text-black hover:bg-black hover:text-yellow-500 transition-colors duration-300">
                <span className="mr-3">MORE</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:block md:relative md:w-6/12 md:order-2 bg-white">
        <Image
          src="/名称未設定-10.png"
          alt="Security Image"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
