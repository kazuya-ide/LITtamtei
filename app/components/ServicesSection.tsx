"use client";

import React from 'react';
import Image from 'next/image';
// framer-motion をインポート
import { motion } from 'framer-motion';

// --- 元の imageData はそのまま ---
const imageData = [
  {
    src: '/Business Meeting_edited_edited.jpg',
    alt: '法人のお客様向け',
    title: '法人のお客様向け',
    description: '警護、警備においての最重要課題は顧客・契約先(クライアント)の安全保障です。それを維持管理するには警護に携わるスタッフの資質が大きく影響します。合同会社L.SECURITYは、護身防衛能力の向上に努めています。',
    link: '/',
  },
  {
    src: '/ボディガード.jpg',
    alt: '個人のお客様向け',
    title: '個人のお客様向け',
    description: '私たちは、お客様一人ひとりの安全と安心を第一に考え、お客様のニーズに合わせた最適な警備サービスを提供しています。高度な訓練を受けた警備員が、お客様の安全を24時間体制で守ります。',
    link: '/',
  },
];
// --- ここまで変更なし ---

// --- framer-motion の variants 定義 ---
const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // タイピング速度
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 10, // オプション: 下から登場
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1, // 文字の表示速度
      ease: "easeOut",
    },
  },
};
// --- ここまで variants 定義 ---

const ServicesSection = () => {
  const headlineText = "Crafted Security: Customized Solutions for You"; // アニメーションさせるテキスト

  return (
    // --- 外側の div は変更なし ---
    <div className="bg-black py-16 text-white">
      <div className="container mx-auto px-4">

        {/* Customized Solution Headline */}
        <div className="mb-12 text-center">
          {/* ▼▼▼ ここから h2 の変更 ▼▼▼ */}
          <motion.h2
            className="text-4xl font-bold tracking-tight" // 元のクラス名を維持
            variants={sentenceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            aria-label={headlineText} // アクセシビリティのため
            // style={{ minHeight: '1.2em' }} // オプション: 高さ固定
          >
            {headlineText.split("").map((char, index) => (
              <motion.span
                key={char + "-" + index}
                variants={letterVariants}
                style={{ display: 'inline-block', willChange: 'opacity, transform' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>
          {/* ▲▲▲ ここまで h2 の変更 ▲▲▲ */}

          {/* --- サブタイトルは元のまま --- */}
          <p className="mt-2 text-lg text-yellow-500">お客様の安心を、精密に設計。</p>
        </div>

        {/* --- Description Section は元のまま --- */}
        <div className="mb-8 text-center">
          <p className="text-lg">
            私たちL securityは創業から現在にわたり、北海道での幅広い分野の警備に努めており、今後も北海道の警備業界全体の基盤を支えるスペシャリストとして、幅広いニーズに高い技術力で応える独自のサービスを提供してまいります。個人のお客様から法人のお客様まで、1号警備から4号警備まで幅広い分野にてお客様の期待に応えられるよう今後も誠意を持って努めてまいります。
          </p>
        </div>

        {/* --- Image and Button Section は元のまま --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {imageData.map((item, index) => (
            <div key={index} className="relative">
              <Image
                src={item.src}
                alt={item.alt}
                width={768}
                height={512}
                className="w-full h-auto object-cover rounded-md"
              />
              <div className="mt-2 text-white">{item.description}</div>
              <div className="mt-4">
                <a href={item.link} className="bg-yellow-500 text-black py-2 px-4 rounded-md flex items-center justify-center space-x-2">
                  <span className="text-xl">{item.title}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* --- ここまで変更なし --- */}

      </div>
    </div>
  );
};

export default ServicesSection;