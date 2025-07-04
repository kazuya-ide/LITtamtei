"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const imageData = [
  {
    src: '/法人用.png',
    alt: '法人のお客様向け',
    title: '法人のお客様向け',
    description: '警護、警備においての最重要課題は顧客・契約先(クライアント)の安全保障です。それを維持管理するには警護に携わるスタッフの資質が大きく影響します。合同会社L.SECURITYは、状況に応じた的確な判断力と冷静な行動力で、法人の皆様に最適な警備プランを提供します。',
    link: '/business',
    button: '法人のお客様向け 詳しくはこちら'
  },
  {
    src: '/個人用TOP.png',
    alt: '個人のお客様向け',
    title: '個人のお客様向け',
    description: '私たちは、お客様一人ひとりの安全と安心を第一に考え、お客様のライフスタイルやご希望に合わせた警備サービスをお届けします。高度な訓練を受けた警備員が、24時間体制で大切な日常を守ります。安心してお任せください。',
    link: '/personal',
    button: '個人のお客様向け 詳しくはこちら'
  },
];

// framer-motion用
const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};
const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  const beforeText = "Crafted Security: Customized Solutions";
  const afterText = "for You";

  return (
    <div className="bg-black py-16 text-white">
      <div className="container mx-auto px-4">

        {/* ヘッドライン */}
        <div className="mb-12 text-center">
          <motion.h2
            className="text-4xl font-bold tracking-tight"
            variants={sentenceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            aria-label={`${beforeText} ${afterText}`}
          >
            {beforeText.split("").map((char, index) => (
              <motion.span
                key={char + "-" + index}
                variants={letterVariants}
                style={{ display: 'inline-block', willChange: 'opacity, transform' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            <span className="block md:inline">
              {" "}
              {afterText.split("").map((char, index) => (
                <motion.span
                  key={"forYou-" + index}
                  variants={letterVariants}
                  style={{ display: 'inline-block', willChange: 'opacity, transform' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          </motion.h2>
          <p className="mt-2 text-lg text-yellow-500">お客様の安心を、精密に設計。</p>
        </div>

        {/* 会社説明 */}
        <div className="mb-8 text-center">
          <p className="text-lg">
            私たちL securityは創業から現在にわたり、北海道での幅広い分野の警備に努めており、今後も北海道の警備業界全体の基盤を支えるスペシャリストとして、幅広いニーズに高い技術力で応える独自のサービスを提供してまいります。<br />
            個人のお客様から法人のお客様まで、1号警備から4号警備まで幅広い分野にてお客様の期待に応えられるよう今後も誠意を持って努めてまいります。
          </p>
        </div>

        {/* 法人/個人ページへの2カラム導線（スマホは1カラム） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {imageData.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-gray-900 rounded-2xl p-6 flex flex-col items-center shadow-lg h-full"
              style={{ minHeight: 480 }}
            >
              {/* 画像枠：高さ220pxで固定 */}
              <div className="w-full rounded-lg overflow-hidden mb-4" style={{ height: 220 }}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={220}
                  className="object-cover w-full h-full"
                  style={{ width: '100%', height: '100%' }}
                  priority={idx === 0}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <div className="text-base text-gray-200 text-center">{item.description}</div>
              <div className="flex-grow" />
              <a
                href={item.link}
                className="mt-6 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-xl text-lg shadow transition w-full text-center"
                style={{ minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {item.button}
              </a>
            </div>
          ))}
        </div>

        {/* 共通のお仕事依頼ボタン */}
        <div className="flex justify-center mt-12">
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl text-2xl shadow-lg flex items-center gap-3 transition-all duration-200"
            style={{ letterSpacing: "0.05em" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8zm-6 4v-1a2 2 0 10-4 0v1" />
            </svg>
            お仕事のご依頼はこちらから
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
