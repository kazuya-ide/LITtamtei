// app/components/TestimonialsAccordion.tsx
"use client";

import { useState } from "react";


type Voice = {
  name: string;
  title: string;
  rating: number;
  comment: string;
  avatar?: string;
};

const voices: Voice[] = [
  {
    name: "30代女性",
    title: "浮気調査",
    rating: 5,
    comment:
      "夫の行動に不安があり相談しました。最初のヒアリングから丁寧で、無理のない計画と見積りに安心できました。調査中は要所で連絡があり、過度な期待や不安を持たないよう配慮も感じました。報告書は写真と時系列が明快で、弁護士からも扱いやすいと言われました。結果を踏まえて夫婦で話し合い、今後のルール作りまで支援してもらえたのが心強かったです。",
  },
  {
    name: "40代男性",
    title: "素行・企業調査",
    rating: 4,
    comment:
      "取引先の信用不安が出たため、反社チェックと担当者の素行確認を依頼。公開情報の裏付けに加え、現地での合法的な確認まで行ってくれ、リスク箇所を具体的に提示してくれました。レポートは根拠資料へのリンクや注記が整っており、社内決裁にそのまま使えました。過度な表現は避け、事実ベースでまとめられている点にも好感を持ちました。",
  },
  {
    name: "50代女性",
    title: "ストーカー対策・身辺警護",
    rating: 5,
    comment:
      "知らない人物に後をつけられている気がして相談。状況を丁寧に整理いただき、証拠化のポイントと安全確保の行動指針を提示してくれました。必要に応じ警察相談の同席や、夜間の帰宅同行にも対応。自宅周辺の見回りと動線の見直しで不安が和らぎ、生活を取り戻せました。大げさに煽らず、現実的にできる対策を提案してくれる姿勢が信頼できました。",
  },
];

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          className={`w-4 h-4 ${n <= value ? "text-amber-500" : "text-neutral-300"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 15.27l-5.18 3.04 1.58-5.36L1 8.63l5.46-.4L10 3.5l3.54 4.73 5.46.4-5.4 4.32 1.58 5.36L10 15.27z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-neutral-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 text-center">
          お客様の声
        </h2>

        <div className="space-y-4">
          {voices.map((v, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-white border border-neutral-200 rounded-xl shadow-sm"
              >
                <button
                  className="w-full px-5 py-4 flex items-center gap-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {/* 丸数字部分 */}
                  <div className="w-10 h-10 rounded-full bg-emerald-900 text-white grid place-items-center text-sm font-bold">
                    {i + 1}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                      <div className="font-semibold text-neutral-900">
                        {v.name}・{v.title}
                      </div>
                      <Stars value={v.rating} />
                    </div>
                    {!isOpen && (
                      <div className="mt-1 text-sm text-neutral-500 line-clamp-2">
                        {v.comment}
                      </div>
                    )}
                  </div>
                  <span className="ml-2 text-neutral-400">{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-neutral-700 leading-relaxed">
                    {v.comment}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
