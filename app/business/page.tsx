"use client";
import Image from "next/image";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness, Users, AlertTriangle, Cpu, Layers,
} from "lucide-react";

const serviceCards = [
  { title: "警備員の派遣", desc: "ニーズや現場状況に最適な人員を柔軟派遣。迅速・丁寧な対応。", icon: BriefcaseBusiness, tip: "常駐・スポット両対応" },
  { title: "イベント警備", desc: "コンサートや各種イベントで事故・トラブル未然防止。", icon: Users, tip: "規模問わず" },
  { title: "災害対策", desc: "緊急時の避難・誘導・情報連携。復旧支援も対応。", icon: AlertTriangle, tip: "BCP支援" },
  { title: "機械警備", desc: "センサー・監視カメラ等のIT警備で24h安心。", icon: Cpu, tip: "IoT対応可" },
  { title: "その他サービス", desc: "ご要望に応じて幅広く柔軟対応。まずはご相談を。", icon: Layers, tip: "特注プラン可" },
];

const faqs = [
  { q: "どんな現場・業種でも対応できますか？", a: "はい、商業施設・イベント・建設現場・マンション・学校など幅広く対応しています。" },
  { q: "急な依頼にも対応できますか？", a: "可能な限り迅速対応いたします。まずはお電話ください。" },
  { q: "機械警備と常駐警備は併用できますか？", a: "組み合わせたご提案が可能です。ご希望に最適化します。" },
];

export default function BusinessPage() {
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
            opacity: { value: 0.17 },
            size: { value: { min: 1.7, max: 3.5 } },
            move: { enable: true, speed: 0.14, direction: "none", outModes: "out" },
            links: { enable: false },
          },
          detectRetina: true,
        }}
      />

      {/* ヒーロー部（全幅画像＋テキスト重ね） */}
      <section className="relative w-full min-h-[380px] md:min-h-[520px] lg:min-h-[600px] flex items-center overflow-hidden mb-20 z-10">
        <Image
          src="/名称未設定-4.png"
          alt="警備・リスク対策"
          fill
          className="object-cover w-full h-full brightness-90"
          priority
          sizes="100vw"
          style={{ zIndex: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />
        <div className="relative z-20 w-full flex justify-center">
          <div className="max-w-7xl w-full px-8 md:px-20 py-12 md:py-20">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight drop-shadow-[0_0_12px_#18181b]">
              安心と信頼の
              <br />
              <span className="text-yellow-300">総合警備サービス</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-2xl font-semibold mb-8 drop-shadow">
              法人・施設からイベント・災害対策まで
              <br />
              <span className="text-white font-bold">Lsecurity</span>が安全をフルサポート
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 rounded-full bg-yellow-400/90 text-black text-lg md:text-xl font-bold shadow-xl hover:scale-105 hover:bg-yellow-300 transition-all duration-200"
            >
              無料相談はこちら
            </a>
          </div>
        </div>
      </section>

      {/* サービスカードグリッド */}
      <section className="max-w-7xl mx-auto mb-24 px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {serviceCards.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-slate-900
                rounded-2xl shadow-lg flex flex-col items-center justify-center px-7 py-9
                text-center border border-slate-700 hover:border-yellow-300
                hover:scale-105 hover:shadow-yellow-300/10 transition-all cursor-pointer group"
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
        {/* ...（詳細説明は省略、前回同様）... */}
      </section>

      {/* FAQアコーディオン */}
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

      {/* CTA案内 */}
      <section id="contact" className="max-w-2xl mx-auto mt-20 text-center relative z-10">
        <hr className="border-slate-700 border-t-2 w-24 mx-auto mb-8" />
        <h2 className="text-3xl font-extrabold text-white mb-6">
          ご相談・お問い合わせ
        </h2>
        <p className="text-gray-200 text-lg mb-7">
          法人のセキュリティや危機管理対策について
          <br />
          まずはお気軽にご相談ください。
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-4 bg-yellow-400 text-black font-extrabold text-lg rounded-full shadow hover:bg-yellow-300 transition"
        >
          無料で相談する
        </a>
        {/* 電話・担当者情報 */}
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
