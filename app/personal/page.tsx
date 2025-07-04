"use client";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, AlarmClock, Home, HelpCircle } from "lucide-react";

const serviceCards = [
  { title: "身辺警護", desc: "経験豊富なプロ警備員が、あなたとご家族の安心を24時間サポート。", icon: ShieldCheck, tip: "VIP・お子様・ご高齢者にも対応可能" },
  { title: "送迎時警護", desc: "通学や重要な移動の付き添い・エスコートもお任せください。", icon: UserCheck, tip: "柔軟なプラン設計が好評です" },
  { title: "住居防犯強化", desc: "防犯診断やカメラ設置、物理的な強化策までトータルご提案。", icon: Home, tip: "戸建て・マンション・別荘にも" },
  { title: "緊急対応サービス", desc: "不審者・ストーカー・各種トラブル時に現場急行します。", icon: AlarmClock, tip: "24時間・365日即時対応" },
  { title: "その他ご相談", desc: "日々のちょっとした「不安」もご相談ください。地域密着で対応。", icon: HelpCircle, tip: "まずは気軽にご連絡を！" },
];

const detailSections = [
  {
    heading: "本当に安心できる身辺警護",
    icon: ShieldCheck,
    body: (
      <>
        <div className="text-white/90 text-lg md:text-xl font-semibold mb-1">
          移動・通勤・通学時の安全を徹底サポート。<br />
          目立ちすぎず、しかし確実な警護を実施。<br />
          お客様のご希望や生活スタイルに合わせて最適なプランをご提案します。
        </div>
        <ul className="list-disc list-inside text-gray-300 text-base md:text-lg mb-2 ml-2">
          <li>24時間365日、臨機応変に対応</li>
          <li>女性・お子様・ご高齢者にも柔軟に</li>
          <li>完全プライバシー厳守</li>
          <li>日常の“さりげない”警護もOK</li>
        </ul>
        <blockquote className="bg-neutral-900/80 border-l-4 border-yellow-400 py-3 px-5 rounded-xl text-yellow-200 mt-1 text-base md:text-lg font-bold">
          「万が一」を未然に防ぐ、プロの安心をあなたに。
        </blockquote>
      </>
    )
  },
  {
    heading: "ご家族の「移動」もプロが守る",
    icon: UserCheck,
    body: (
      <>
        <div className="text-white/90 text-lg md:text-xl font-semibold mb-1">
          お子様や高齢者の送迎時もお任せください。<br />
          トラブル防止・安全確保を最優先に、プロが同行いたします。<br />
          多忙なご家庭の安心を支えます。
        </div>
        <ul className="list-disc list-inside text-gray-300 text-base md:text-lg mb-2 ml-2">
          <li>登下校・塾・習い事の付き添い</li>
          <li>高齢者の通院・お出かけの同行</li>
          <li>指定場所へのお迎え・送り対応</li>
          <li>万一の際も即時対応</li>
        </ul>
        <blockquote className="bg-neutral-900/80 border-l-4 border-yellow-400 py-3 px-5 rounded-xl text-yellow-200 mt-1 text-base md:text-lg font-bold">
          家族の「もしも」をプロの力でゼロに。
        </blockquote>
      </>
    )
  },
  {
    heading: "住まいの防犯診断・強化",
    icon: Home,
    body: (
      <>
        <div className="text-white/90 text-lg md:text-xl font-semibold mb-1">
          防犯カメラ・センサー設置から物理的対策までトータルにご提案。<br />
          あなたの家族と財産を守るため、プロ目線で最適なソリューションを提供します。
        </div>
        <ul className="list-disc list-inside text-gray-300 text-base md:text-lg mb-2 ml-2">
          <li>プロによる現地無料防犯診断</li>
          <li>最適なカメラ・センサー・ライト等ご提案</li>
          <li>玄関・窓・外構の物理的強化も対応</li>
          <li>設置後もアフターサポート万全</li>
        </ul>
        <blockquote className="bg-neutral-900/80 border-l-4 border-yellow-400 py-3 px-5 rounded-xl text-yellow-200 mt-1 text-base md:text-lg font-bold">
          防犯は“点検＋仕組み＋習慣”の３つが大切です。
        </blockquote>
      </>
    )
  },
  {
    heading: "緊急対応・日々のちょっとした不安も",
    icon: AlarmClock,
    body: (
      <>
        <div className="text-white/90 text-lg md:text-xl font-semibold mb-1">
          不審者・ストーカー被害、近隣トラブルなども、専門スタッフが迅速に現場急行。<br />
          日常の「ちょっと不安…」にも、地域密着で寄り添います。
        </div>
        <ul className="list-disc list-inside text-gray-300 text-base md:text-lg mb-2 ml-2">
          <li>24時間365日、緊急時も即対応</li>
          <li>警察・弁護士・自治体連携もサポート</li>
          <li>防犯相談、生活安全アドバイスも受付</li>
          <li>「こんなことでも相談して大丈夫？」も歓迎</li>
        </ul>
        <blockquote className="bg-neutral-900/80 border-l-4 border-yellow-400 py-3 px-5 rounded-xl text-yellow-200 mt-1 text-base md:text-lg font-bold">
          あなたの「安心」を24時間いつでも支えます。
        </blockquote>
      </>
    )
  }
];

const faqs = [
  { q: "どんな人でも依頼できますか？", a: "個人・ご家族問わずどなたでもご相談いただけます。まずはお気軽にご相談ください。" },
  { q: "女性や子供の警護にも対応していますか？", a: "はい。女性警備員やご家族の警護など、ご要望に柔軟に対応します。" },
  { q: "急なトラブルでも対応可能ですか？", a: "24時間365日、緊急出動に対応しています。" },
];

export default function PersonalPage() {
  return (
    <div className="relative min-h-screen bg-neutral-950 pb-28 overflow-x-hidden">
      {/* パーティクル背景 */}
      <Particles
        className="fixed inset-0 z-0 pointer-events-none"
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 30,
          particles: {
            number: { value: 60, density: { enable: true, area: 900 } },
            color: { value: ["#fff", "#fde047", "#facc15"] },
            opacity: { value: 0.16 },
            size: { value: { min: 1.7, max: 3.5 } },
            move: { enable: true, speed: 0.18, direction: "none", outModes: "out" },
            links: { enable: false },
          },
          detectRetina: true,
        }}
      />

      {/* ヒーローセクション */}
      <section className="w-full flex flex-col items-center justify-center pt-16 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl bg-neutral-900/95 rounded-3xl shadow-2xl px-10 py-14 flex flex-col items-center border border-slate-700"
        >
          <span className="inline-block mb-5">
            <ShieldCheck size={52} className="text-yellow-400 drop-shadow-[0_0_18px_#fde047aa]" />
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-center tracking-wide text-white mb-6">
            個人のお客様の<br />
            <span className="text-yellow-300">安心・安全</span>を守ります
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl font-semibold text-center mb-6">
            24時間365日サポート。<br className="hidden md:inline" />
            お客様に最適な警護・防犯・緊急対応プランをご提案。
          </p>
          <a
            href="/contact"
            className="px-8 py-3 rounded-full bg-yellow-400/90 text-black text-lg md:text-xl font-bold shadow-xl hover:scale-105 hover:bg-yellow-300 transition-all duration-200"
          >
            無料相談はこちら
          </a>
        </motion.div>
      </section>

      {/* サービスカード */}
      <section className="max-w-6xl mx-auto mb-24 px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {serviceCards.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-slate-900 rounded-2xl shadow-lg flex flex-col items-center justify-center px-7 py-9 text-center border border-slate-700 hover:border-yellow-300 hover:scale-105 hover:shadow-yellow-300/10 transition-all cursor-pointer group"
            >
              <s.icon className="w-11 h-11 mb-3 text-yellow-300 group-hover:scale-110 transition" />
              <span className="text-yellow-300 text-lg md:text-xl mb-2 font-bold tracking-wide">{s.title}</span>
              <span className="text-white text-base font-semibold mb-3">{s.desc}</span>
              <span className="mt-auto text-gray-400 text-xs font-bold opacity-90">{s.tip}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 詳細説明ブロック */}
      <section className="max-w-5xl mx-auto space-y-14 px-4 relative z-10">
        {detailSections.map((item) => (
          <motion.div
            key={item.heading}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-neutral-900/90 rounded-3xl shadow-xl border-l-8 border-yellow-300/20 p-10 flex flex-col gap-2"
          >
            <div className="flex items-center mb-3">
              <item.icon className="w-10 h-10 text-yellow-300 mr-3" />
              <h2 className="text-xl md:text-2xl font-extrabold text-yellow-200 tracking-wide">
                {item.heading}
              </h2>
            </div>
            {item.body}
          </motion.div>
        ))}
      </section>

      {/* Q&Aアコーディオン */}
      <section className="max-w-2xl mx-auto mt-28 mb-16 px-4 relative z-10">
        <h2 className="text-2xl font-extrabold text-white mb-8 text-center">
          よくあるご質問
        </h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="bg-neutral-900/80 rounded-xl p-6 shadow-lg border border-slate-700 group"
            >
              <summary className="cursor-pointer font-bold text-base text-yellow-200 group-open:text-yellow-300 transition">
                {faq.q}
              </summary>
              <div className="mt-3 text-gray-200">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* お問い合わせ案内（CTA） */}
      <section id="contact" className="max-w-2xl mx-auto mt-20 text-center relative z-10">
        <hr className="border-slate-700 border-t-2 w-24 mx-auto mb-8" />
        <h2 className="text-3xl font-extrabold text-white mb-6">
          無料ご相談・お問い合わせ
        </h2>
        <p className="text-gray-200 text-lg mb-7">
          どんな些細なことでも、お気軽にご相談ください。<br />
          セキュリティのプロが、あなたの「安心」を全力でサポートします。
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-4 bg-yellow-400 text-black font-extrabold text-lg rounded-full shadow hover:bg-yellow-300 transition"
        >
          今すぐ無料で相談する
        </a>
        {/* 電話・担当者案内 */}
        <div className="mt-8 flex flex-col items-center gap-1">
          <div className="text-gray-300 text-base font-semibold mb-1">
            お急ぎの方はこちらまで
          </div>
          <a
            href="tel:09092370011"
            className="text-lg font-bold text-yellow-300 hover:text-yellow-400 underline tracking-wider"
            style={{ letterSpacing: '0.05em' }}
          >
            TEL 090-9237-0011
          </a>
          <span className="text-gray-400 text-base font-semibold mt-0.5">担当　久保</span>
        </div>
      </section>
    </div>
  );
}
