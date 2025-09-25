"use client";
import React, { useState } from "react";

type FAQ = { q: string; a: string };

const detectiveFAQ: FAQ[] = [
  { q: "相談から依頼までの流れは？", a: "お問い合わせ→ヒアリング→お見積り→ご契約→調査着手→中間報告→最終報告（報告書・写真・動画）。緊急案件にも可能な限り対応します。" },
  { q: "浮気・不倫調査では何が分かりますか？", a: "対象者の行動記録、接触相手、日時・場所の特定、宿泊の有無などを証拠として記録します。裁判提出を想定した形式での報告書作成にも対応します。" },
  { q: "素行・行動調査はどこまで可能ですか？", a: "日々の行動パターン、立ち寄り先、接触人物などを合法の範囲で記録します。必要に応じて写真・動画も取得します。" },
  { q: "反社チェックや企業調査は対応可能？", a: "はい。公開情報・独自リソース・適法な現地確認を組み合わせ、反社会的勢力との関係性や信用リスクを多角的に確認します。" },
  { q: "ストーカー・トラブルの相談は何をしてくれますか？", a: "被害状況の把握、証拠化の支援、警戒強化、必要に応じて警察・弁護士連携まで一貫してサポートします。緊急時は即応体制を取ります。" },
  { q: "身辺警護はどんな場面で依頼できますか？", a: "帰宅・通学・通勤の同行、イベント出席時の警護、自宅・ホテル・会場の安全確認など。警察OBの知見を活かし危険を未然に防ぎます。" },
  { q: "弁護士との連携はできますか？", a: "はい。収集した証拠が法的に有効となるよう弁護士と連携して進行可能です。必要に応じて提携弁護士のご紹介も行います。" },
  { q: "料金の目安は？", a: "内容・難易度・稼働時間・人員・機材によって変動します。ご希望とご予算を伺い、無理のない調査計画とお見積りをご提示します。相談・見積りは無料です。" },
  { q: "秘密は守られますか？", a: "守秘義務を徹底します。ご相談内容・個人情報・調査過程は厳格に管理し、外部へ漏れることはありません。匿名相談も可能です。" },
  { q: "対応エリアは？", a: "原則として北海道のみ対応しています。札幌市を中心に、道内全域にて調査・警護が可能です。お気軽にご相談ください。" },
  { q: "報告書はどのようにもらえますか？", a: "調査結果は書面報告書に写真・時系列記録を付して納品します。必要に応じて動画・データのご提供、弁護士向け要約版の作成も可能です。" },
  { q: "当日や直前の依頼もできますか？", a: "状況によりますが、最優先で体制を調整します。まずはお電話・メールにてご連絡ください。" },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-neutral-900 min-h-screen py-14 px-4 pt-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-300 mb-8 text-center">
          よくある質問（探偵サービス）
        </h1>

        <div className="space-y-4">
          {detectiveFAQ.map((item, idx) => (
            <div key={idx} className="bg-neutral-800 rounded-lg shadow">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-indigo-300 font-semibold text-lg"
              >
                <span>Q. {item.q}</span>
                <span>{openIndex === idx ? "−" : "+"}</span>
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-4 text-white">A. {item.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-lg bg-indigo-300 text-black font-bold hover:bg-indigo-200 transition"
          >
            無料相談・お見積りはこちら
          </a>
        </div>
      </div>
    </div>
  );
}
