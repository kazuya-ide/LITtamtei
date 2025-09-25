'use client';

import Image from 'next/image';

export default function HeroFullscreen() {
  return (
    <section className="relative w-full h-[100svh] bg-white overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/hokeraitoka-fuiteirurainwo-liureruno-mo-fano-bei-jing.png"
        alt="清潔感のある白背景で相談者を支える探偵事務所のイメージ"
        fill
        priority
        sizes="100vw"
        className="object-contain"
      />

      {/* グラデーション（下部のみ） */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent md:h-28"
        aria-hidden="true"
      />

      {/* テキスト：下段の中央配置 */}
      <div className="absolute inset-x-0 bottom-8 flex justify-center px-4">
        <div className="max-w-xl md:max-w-2xl rounded-2xl bg-black/45 backdrop-blur-sm p-6 md:p-8 text-white shadow-lg text-center">
          <span className="inline-block rounded-full bg-indigo-500/90 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
            秘密厳守・匿名相談可
          </span>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
            真実をつかみ、法で守る
          </h1>
          <p className="mt-3 text-sm md:text-base text-white/95">
            警察OBの実地経験と弁護士連携で、確かな証拠収集と安心のサポートを。
          </p>

          {/* CTA */}
          <div className="mt-6 flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center rounded-2xl px-6 py-3 text-sm font-semibold bg-white text-gray-900 shadow hover:bg-gray-100"
            >
              今すぐ相談
            </a>
          </div>
        </div>
      </div>

      {/* 白背景への遷移 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
