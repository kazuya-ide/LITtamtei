"use client";
import Image from "next/image";
import { useState } from "react";

// みんなの声データ
const voices = [
  {
    name: "YUTA",
    role: "警備スタッフ",
    message:
      "警備は想像以上にクリエイティブな仕事です。お客様や仲間の安全を守ることが、自分の成長にも直結しています。L securityの仲間とならどんな現場も乗り越えられる自信があります。",
    image: "/illust_staff1.svg",
  },
  {
    name: "MISAKI",
    role: "現場サポート",
    message:
      "この会社は新しい挑戦を楽しめる場所。若いチームですが、互いに支え合う雰囲気があってとても心強いです。『警備＝堅い仕事』のイメージがいい意味で変わりました！",
    image: "/illust_staff2.svg",
  },
  {
    name: "MAKOTO",
    role: "リーダー",
    message:
      "警備の仕事は“誰かの日常”を守る、社会に必要不可欠な役割だと実感しています。会社のこれからを仲間たちと一緒に作っていけるのが嬉しいですね。",
    image: "/illust_staff3.svg",
  },
];

export default function AboutPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-900 pb-20">
      {/* HEROタイトル */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-10 pt-12 pb-8 px-[8%]">
        <div className="flex-1 w-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter leading-tight mb-2">
            COMPANY<br />INFORMATION
          </h1>
          <div className="text-yellow-400 text-xl font-bold mb-6">企業情報</div>
        </div>
        <div className="w-full md:w-2/5 max-w-xl aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-gray-700">
          <Image
            src="/8b38290a-62fa-428f-9c84-a3e150bf5cfd.png"
            alt="会社ビル外観"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* セクションナビ */}
      <section className="flex flex-wrap gap-4 px-[8%] mb-8 border-b border-neutral-700 pb-3">
        {["はじめに", "企業理念", "みんなの声", "会社概要", "認可"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="uppercase tracking-wider text-lg font-bold text-yellow-400 hover:text-yellow-200 transition"
          >
            {item}
          </a>
        ))}
      </section>

      {/* --- Section 1: はじめに --- */}
      <section id="section1" className="max-w-5xl mx-auto px-4 py-12 border-b border-neutral-800">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-1 bg-yellow-400 inline-block rounded"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">はじめに</h2>
        </div>
        <p className="text-gray-100 text-lg leading-relaxed mb-2">
          警護、警備においての最重要課題は顧客・契約先（クライアント）の安全保障です。<br />
          それを維持管理するには警護に携わるスタッフの資質が大きく影響します。
        </p>
        <p className="text-gray-300 text-base leading-relaxed mt-4">
          私たちは常に「武道」を通して護身防衛能力の向上に努めています。<br />
          日々の厳しい練習・生活を通じて強靭な精神力や、実行力、洞察力、判断力、威圧感、責任感、礼節感などを体得することが最大限に必要な要素であると考えています。
        </p>
      </section>

      {/* --- Section 2: 企業理念 --- */}
      <section id="section2" className="max-w-5xl mx-auto px-4 py-12 border-b border-neutral-800">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-1 bg-yellow-400 inline-block rounded"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">企業理念</h2>
        </div>
        <p className="text-gray-100 text-lg leading-relaxed mb-2">
          「すべての人に安全と安心を。」<br />
          <span className="text-yellow-300 font-semibold">L security</span>は、犯罪や事故を未然に防ぎ、誰もが安心して生活できる社会の実現を目指します。
        </p>
        <ul className="list-disc list-inside mt-3 text-gray-300 text-base space-y-1 pl-5">
          <li>お客様・社会からの信頼を最も大切にする</li>
          <li>誠実で真摯な対応を貫く</li>
          <li>社員が誇りを持ち、成長できる環境を作る</li>
          <li>プロフェッショナル集団として技術・知識を磨き続ける</li>
          <li>地域社会の発展に貢献する</li>
        </ul>
      </section>

      {/* --- Section 3: みんなの声 --- */}
      <section id="section3" className="max-w-5xl mx-auto px-4 py-12 border-b border-neutral-800">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-1 bg-yellow-400 inline-block rounded"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">みんなの声</h2>
        </div>
        <p className="text-gray-200 text-lg mb-8">
          L securityの現場で活躍する仲間たちの声を紹介します。<br />
          新しいチームだからこそ、前向きなエネルギーとチャレンジ精神があふれています。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {voices.map((voice) => (
            <div
              key={voice.name}
              className="flex flex-col items-center bg-neutral-800 rounded-xl shadow-lg p-6 h-full"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400 mb-3 flex items-center justify-center bg-gray-900">
                <Image
                  src={voice.image}
                  alt={voice.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-gray-100 text-base mb-3 whitespace-pre-line">&quot;{voice.message}&quot;</div>
              <div className="mt-auto text-yellow-400 font-bold">{voice.name}</div>
              <div className="text-gray-400 text-sm">{voice.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 4: 会社概要 --- */}
      <section id="section4" className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md px-8 py-12 mt-16 mb-10 border-t-4 border-yellow-400">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-1 bg-yellow-400 inline-block rounded"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-700">会社概要</h2>
        </div>
        <table className="w-full text-left text-gray-800 border-separate [border-spacing:0.5rem]">
          <tbody>
            <tr>
              <th className="font-semibold w-36 align-top">会社名</th>
              <td>合同会社　LIT</td>
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
      <section id="section5" className="max-w-3xl mx-auto flex flex-col items-center bg-white rounded-2xl shadow-md px-8 py-14 mb-24 border-t-4 border-yellow-400 relative">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-1 bg-yellow-400 inline-block rounded"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-700">認可</h2>
        </div>
        <button
          className="w-full max-w-xl overflow-hidden rounded-lg border border-yellow-200 shadow focus:outline-none"
          onClick={() => setShowModal(true)}
          tabIndex={0}
          aria-label="認可証明画像を拡大表示"
        >
          <div className="relative w-full aspect-[3/2] bg-gray-100">
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
        <div className="mt-2 text-gray-600 text-sm">画像クリックで拡大</div>
        {/* モーダル：認可画像拡大 */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            onClick={() => setShowModal(false)}
          >
            <div className="bg-white rounded-xl shadow-xl p-4 max-w-3xl w-[96vw] flex flex-col items-center relative">
              <button
                className="absolute top-2 right-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded-full p-1 w-8 h-8 flex items-center justify-center focus:outline-none"
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
      </section>
    </div>
  );
}
