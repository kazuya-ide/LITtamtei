"use client";
import Image from "next/image";

// 各サービス項目
const services = [
  { title: "警備員の派遣" },
  { title: "イベント警備" },
  { title: "災害対策" },
  { title: "機械警備" },
  { title: "その他サービス" },
];

// 各説明ブロック
const details = [
  {
    heading: "危機管理対策",
    body: (
      <>
        企業・個人が抱える様々なリスクや課題に対し、<br />
        豊富な知識と経験を活かした“組織的かつ迅速な対応”で、早期解決をサポートします。<br />
        正確な状況分析と多角的な対策提案で、安心・安全な環境を維持します。
      </>
    ),
  },
  {
    heading: "情報調査",
    body: (
      <>
        企業や個人に対する脅威やリスクを徹底調査。<br />
        秘密保持を徹底しつつ、信頼できる情報と的確な防犯アドバイスをご提供します。
      </>
    ),
  },
  {
    heading: "養護施設・一時保護施設の警備",
    body: (
      <>
        依頼に応じて通学路見守りや、施設・公園等の巡回警備も実施。<br />
        子どもや高齢者の安心・安全を見守る地域密着のサービスです。
      </>
    ),
  },
  {
    heading: "防犯対策・診断・カメラ設置",
    body: (
      <>
        施設やご自宅の防犯診断、防犯カメラ・センサーの設置提案、<br />
        物理的対策や運用の見直しまでトータルでご支援。犯罪の未然防止・抑止効果もアップします。
      </>
    ),
  },
];

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-neutral-900 pb-20">
      {/* ヒーローイメージ＋キャッチ */}
      <section className="w-full flex flex-col items-center mb-16 pt-10">
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-[8%] gap-10">
          {/* 画像 */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400/70">
              <Image
                src="/名称未設定-4.png"
                alt="Other Service"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* キャッチコピー */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-center tracking-wider text-white uppercase mb-4 leading-snug drop-shadow">
              どのような事でも<br />
              北海道の警備のことなら<br />
              <span className="text-yellow-400">Lsecurity</span>
              <br />
              にお任せください！
            </h1>
            <p className="text-yellow-300 text-lg mt-2 text-center">
              総合警備からリスクコンサルまで<br className="hidden md:inline" />法人ニーズに幅広く対応
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
          法人のセキュリティや危機管理対策について<br />
          お気軽にご相談ください。専門スタッフが最適なプランをご提案します。
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
