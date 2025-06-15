"use client";
import Image from "next/image";

// サービス項目
const services = [
  { title: "身辺警護" },
  { title: "送迎時警護" },
  { title: "住居防犯強化" },
  { title: "緊急対応サービス" },
  { title: "その他ご相談" },
];

// 各説明ブロック
const details = [
  {
    heading: "身辺警護",
    body: (
      <>
        お客様一人ひとりの安全を最優先に考え、経験豊富な警備員が常に寄り添いながら、移動時や日常生活におけるあらゆるリスクから守ります。<br />
        安心して日々をお過ごしいただけるよう、個々の状況に合わせた警護プランを設計します。
      </>
    ),
  },
  {
    heading: "送迎時警護",
    body: (
      <>
        お子様の通学・塾やご高齢者の外出時、重要なご移動の際に警備員が同行・付き添いを行います。<br />
        不審者やトラブルからしっかり守り、ご家族の安心をサポートします。
      </>
    ),
  },
  {
    heading: "住居防犯強化",
    body: (
      <>
        プロの視点でご自宅やマンションの防犯診断を行い、防犯カメラ設置やセンサー強化、窓・玄関などの物理的対策までトータルにご提案。<br />
        暮らしの安心を高めます。
      </>
    ),
  },
  {
    heading: "緊急対応サービス",
    body: (
      <>
        予期せぬトラブルや不審者発見、ストーカー被害などの際、迅速に現場へ駆け付け。<br />
        万一の場合も24時間体制でしっかりサポートします。
      </>
    ),
  },
  {
    heading: "その他ご相談",
    body: (
      <>
        日常のちょっとした「不安」や「困りごと」も、気軽にご相談ください。<br />
        防犯対策から生活安全まで、地域密着で幅広くサポートします。
      </>
    ),
  },
];

export default function PersonalPage() {
  return (
    <div className="min-h-screen bg-neutral-900 pb-20">
      {/* ヒーローイメージ＋キャッチ */}
      <section className="w-full flex flex-col items-center mb-16 pt-10">
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-[8%] gap-10">
          {/* 画像 */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400/70">
              <Image
                src="/ボディガード.jpg"
                alt="個人のお客様向け"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* キャッチコピー */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-center tracking-wider text-white uppercase mb-4 leading-snug drop-shadow">
              あなたとご家族の<br />
              安心・安全を守ります<br />
              <span className="text-yellow-400">Lsecurity</span>に
              <br />
              何でもご相談ください！
            </h1>
            <p className="text-yellow-300 text-lg mt-2 text-center">
              プロによる身辺警護・防犯診断・緊急対応を<br className="hidden md:inline" />24時間365日サポート
            </p>
          </div>
        </div>
      </section>

      {/* サービス項目 */}
      <section className="max-w-5xl mx-auto mb-14 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-neutral-800 rounded-xl shadow-md flex items-center justify-center px-4 py-7 font-bold text-center text-yellow-400 text-base md:text-lg border border-yellow-400/30 hover:bg-neutral-700 transition"
            >
              {service.title}
            </div>
          ))}
        </div>
      </section>

      {/* 詳細説明ブロック */}
      <section className="max-w-3xl mx-auto space-y-10 px-4">
        {details.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-yellow-400"
          >
            <h2 className="text-xl md:text-2xl font-bold text-yellow-700 mb-2 tracking-wide">
              {item.heading}
            </h2>
            <div className="text-gray-800 leading-relaxed text-base md:text-lg whitespace-pre-line">
              {item.body}
            </div>
          </div>
        ))}
      </section>

      {/* お問い合わせ案内 */}
      <section className="max-w-xl mx-auto mt-20 text-center">
        <hr className="border-yellow-400 border-t-2 w-24 mx-auto mb-8" />
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">ご相談・お問い合わせ</h2>
        <p className="text-gray-200 mb-6">
          どんな些細なことでも、お気軽にご相談ください。<br />
          セキュリティのプロが、あなたの「安心」を全力でサポートします。
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-yellow-500 text-black font-bold rounded-full shadow hover:bg-yellow-600 transition"
        >
          お問い合わせはこちら
        </a>
      </section>
    </div>
  );
}
