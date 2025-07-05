"use client";
import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Quote } from "lucide-react";

// スタッフの声データ
const voices = [
  {
    name: "KEIYA",
    role: "警備リーダー",
    message:
      "警備は想像以上にクリエイティブな仕事。お客様や仲間の安全を守ることが、自分の成長にも直結しています。L securityの仲間とならどんな現場も乗り越えられる自信があります。",
    image: "/keiya-face.png",
  },
  {
    name: "KYOKO",
    role: "現場サポート",
    message:
      "この会社は新しい挑戦を楽しめる場所。若いチームですが、互いに支え合う雰囲気があってとても心強いです。『警備＝堅い仕事』のイメージがいい意味で変わりました！",
    image: "/kyokoface.png",
  },
  {
    name: "YOU-GA",
    role: "現場リーダー",
    message:
      "警備の仕事は“誰かの日常”を守る、社会に必要不可欠な役割。会社のこれからを仲間たちと一緒に作っていけるのが嬉しいですね。",
    image: "/yuugaface.png",
  },
];

export default function AboutPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 pb-20">
      {/* HERO */}
      <section className="py-16 px-4 flex flex-col items-center justify-center text-center relative overflow-x-hidden">
        <div className="mb-6 flex items-center justify-center gap-3">
          <ShieldCheck className="w-12 h-12 text-blue-300 drop-shadow-[0_0_18px_#60a5fa88]" />
          <span className="text-blue-100 text-3xl font-extrabold tracking-tight drop-shadow">L security</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter leading-tight mb-4 drop-shadow-lg">
          COMPANY<br className="hidden md:inline" /> PROFILE
        </h1>
        <div className="inline-block bg-blue-500/10 rounded-full px-5 py-2 mt-3 mb-2">
          <span className="text-base md:text-lg text-blue-300 font-bold tracking-wide">企業情報</span>
        </div>
        <p className="max-w-2xl text-neutral-200 text-lg mt-4 mb-0 font-semibold">
          北海道の警備・セキュリティの未来を切り拓く。
          <br className="hidden md:inline" />
          信頼とプロフェッショナルの力で、地域社会の安心を守ります。
        </p>
      </section>

      {/* セクションナビ */}
      <section className="flex flex-wrap gap-4 justify-center px-4 mb-12 border-b border-slate-800 pb-3">
        {[
          { label: "はじめに", id: "section1" },
          { label: "企業理念", id: "section2" },
          { label: "みんなの声", id: "section3" },
          { label: "会社概要", id: "section4" },
          { label: "認可", id: "section5" },
        ].map((item) => (
          <a
            key={item.label}
            href={`#${item.id}`}
            className="uppercase tracking-wider text-base font-bold text-blue-300 hover:text-blue-100 transition"
          >
            {item.label}
          </a>
        ))}
      </section>

      {/* --- Section 1: はじめに --- */}
      <section id="section1" className="max-w-4xl mx-auto px-4 py-12 border-b border-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-1 bg-blue-400 inline-block rounded"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-200">はじめに</h2>
        </div>
        <p className="text-neutral-100 text-lg leading-relaxed mb-4">
          警備・警護において最も大切な使命は、<span className="font-bold text-blue-200">お客様・社会の安全保障</span>です。<br />
          その基盤を支えるのは、現場スタッフ一人ひとりの「人間力」。<br />
          <span className="text-blue-300 font-semibold">L security</span>は、日々の訓練や自己研鑽を通じて<br />
          <span className="text-blue-100">実行力・洞察力・責任感・礼節</span>を身につけ、信頼に応え続けています。
        </p>
      </section>

      {/* --- Section 2: 企業理念 --- */}
      <section id="section2" className="max-w-4xl mx-auto px-4 py-12 border-b border-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-1 bg-blue-400 inline-block rounded"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-200">企業理念</h2>
        </div>
        <p className="text-neutral-100 text-lg leading-relaxed mb-2">
          <span className="text-blue-200 font-semibold">「すべての人に安全と安心を。」</span><br />
          L securityは、<span className="text-blue-100">犯罪や事故の未然防止</span>、<span className="text-blue-100">誰もが安心して暮らせる社会の実現</span>を目指します。
        </p>
        <ul className="list-disc list-inside mt-4 text-neutral-200 text-base space-y-1 pl-5">
          <li>お客様・社会からの信頼を最優先に</li>
          <li>誠実で真摯なプロフェッショナル対応</li>
          <li>社員が誇りと成長を感じられる環境づくり</li>
          <li>技術・知識の探求とチームワーク強化</li>
          <li>地域社会の発展と安心に貢献</li>
        </ul>
      </section>

      {/* --- Section 3: みんなの声 --- */}
      <section id="section3" className="max-w-5xl mx-auto px-4 py-12 border-b border-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-1 bg-blue-400 inline-block rounded"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100">みんなの声</h2>
        </div>
        <p className="text-neutral-300 text-lg mb-10 text-center">
          L securityの現場で活躍するスタッフの声を紹介します。<br />
          挑戦と信頼、支え合いの空気がここにはあります。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {voices.map((voice) => (
            <div
              key={voice.name}
              className="flex flex-col items-center p-6 h-full rounded-2xl shadow-lg border border-slate-700 bg-gradient-to-br from-neutral-900/90 to-slate-800/90"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-300 mb-4 bg-gray-900">
                <Image
                  src={voice.image}
                  alt={voice.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-neutral-100 text-base mb-4 whitespace-pre-line font-semibold text-center">
                <Quote className="inline-block w-5 h-5 text-blue-300 mb-1 mr-1" />
                {voice.message}
              </div>
              <div className="mt-auto text-lg font-bold text-blue-200">{voice.name}</div>
              <div className="text-neutral-400 text-sm font-medium">{voice.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 4: 会社概要 --- */}
      <section
        id="section4"
        className="
          max-w-3xl mx-auto rounded-2xl shadow-xl px-8 py-12 mt-16 mb-10
          border border-slate-700 border-t-4 border-t-blue-400
          bg-gradient-to-br from-neutral-900/90 to-slate-900/90
        "
      >
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-1 bg-blue-400 inline-block rounded"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100">会社概要</h2>
        </div>
        <table className="w-full text-left text-neutral-100 border-separate [border-spacing:0.5rem]">
          <tbody>
            <tr>
              <th className="font-semibold w-36 align-top">会社名</th>
              <td>合同会社 LIT</td>
            </tr>
            <tr>
              <th className="font-semibold align-top">屋号</th>
              <td>L security</td>
            </tr>
            <tr>
              <th className="font-semibold align-top">代表取締役</th>
              <td>堀内　勝</td>
            </tr>
            <tr>
              <th className="font-semibold align-top">所在地</th>
              <td>
                〒063-0061<br />
                北海道札幌市西区西町北１４丁目１−１５<br />
                ホクシンビル３F
              </td>
            </tr>
            <tr>
              <th className="font-semibold align-top">業務内容</th>
              <td>
                1号警備　施設警備<br />
                2号警備　交通誘導、雑踏警備<br />
                3号警備　現金輸送、貴重品運搬<br />
                4号警備　身辺警護、要人送迎
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* --- Section 5: 認可 --- */}
      <section
        id="section5"
        className="
          max-w-3xl mx-auto flex flex-col items-center rounded-2xl shadow-xl px-8 py-14 mb-24
          border border-slate-700 border-t-4 border-t-blue-400
          relative bg-gradient-to-br from-white to-blue-50
        "
      >
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-1 bg-blue-400 inline-block rounded"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400">認可</h2>
        </div>
        <button
          className="w-full max-w-xl overflow-hidden rounded-lg border-2 border-blue-200/40 shadow focus:outline-none bg-white"
          onClick={() => setShowModal(true)}
          tabIndex={0}
          aria-label="認可証明画像を拡大表示"
        >
          <div className="relative w-full aspect-[3/2] bg-white flex items-center justify-center">
            <Image
              src="/アセット 13.svg"
              alt="認可証明"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
        </button>
        <div className="mt-2 text-gray-500 text-sm">画像クリックで拡大</div>
        {/* モーダル：認可画像拡大 */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            onClick={() => setShowModal(false)}
          >
            <div className="bg-white rounded-xl shadow-xl p-4 max-w-3xl w-[96vw] flex flex-col items-center relative border border-blue-200/40">
              <button
                className="absolute top-2 right-2 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded-full p-1 w-8 h-8 flex items-center justify-center focus:outline-none"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowModal(false);
                }}
                aria-label="閉じる"
              >
                ×
              </button>
              <div className="w-full">
                <Image
                  src="/アセット 13.svg"
                  alt="認可証明 拡大"
                  width={900}
                  height={600}
                  className="object-contain w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        )}
        <div className="mt-5 text-blue-700 text-sm text-center">
          北海道公安委員会認定（番号：第123456号）<br />
          許可証原本の閲覧・写しの提出もご相談に応じて対応します。
        </div>
      </section>
    </div>
  );
}
