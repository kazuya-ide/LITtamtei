// app/components/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full h-[80vh] bg-[#ededed] flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* 左側 画像 */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            src="/nu-xingka-fan-xiang-hua-miannorimikkusumetiawotaffusuru-ji-shu-ge-xinno-bei-jing.jpg" // public/ 配下に画像を置いてください
            alt="革新で未来をつくるイメージ"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* 右側 テキスト */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#232323] tracking-tight mb-6">
            革新で未来をつくる<br />LITグループ
          </h1>
          <p className="text-lg md:text-2xl text-[#666] mb-8 max-w-xl">
            新しい価値を地域と社会に。建設・飲食・ITなど多様な分野で挑戦を続けています。
          </p>
          <a
            href="#about"
            className="inline-block px-6 py-3 bg-[#232323] text-white rounded-lg shadow hover:bg-[#444] transition"
          >
            もっと見る
          </a>
        </div>
      </div>
    </section>
  );
}
