"use client";
import React, { useState } from "react";

// 法人用FAQ
const businessFAQ = [
  { q: "契約までの流れを教えてください。", a: "まずはお問い合わせいただき、ご要望のヒアリング後にお見積りとご提案、契約手続きとなります。" },
  { q: "対応可能な警備エリアは？", a: "北海道全域に対応しております。道外の場合もご相談ください。" },
  { q: "夜間や休日の警備も可能ですか？", a: "はい、24時間365日対応が可能です。ご希望の時間帯をご指定ください。" },
  { q: "短期間や単発の依頼もできますか？", a: "はい、イベントや催事などの短期警備も多数実績がございます。" },
  { q: "どのような施設の警備実績がありますか？", a: "オフィスビル、工場、店舗、商業施設、イベント会場など多様な実績があります。" },
  { q: "急なトラブル時の対応は？", a: "緊急時にも迅速に対応できる体制を整えておりますのでご安心ください。" },
  { q: "見積もりは無料ですか？", a: "はい、お見積もりやご相談は無料で承っております。" },
  { q: "契約後のフォロー体制は？", a: "定期的なご報告やご要望のヒアリングを通じ、常に最適な警備を提供します。" },
  { q: "契約に必要な書類は何ですか？", a: "ご契約時にはご担当者様の身分証明書、会社登記簿謄本などをご用意いただきます。" },
  { q: "料金体系はどのようになっていますか？", a: "ご依頼内容・期間・警備員数等によりお見積もりいたします。お気軽にご相談ください。" },
];

// 個人用FAQ
const personalFAQ = [
  { q: "個人でも警備を依頼できますか？", a: "もちろんです。ご自宅や個人イベントなどの警備も承ります。" },
  { q: "どんなシーンで利用されていますか？", a: "ストーカー対策、要人警護、引越し時の安全確保など幅広くご利用いただいています。" },
  { q: "女性でも依頼できますか？", a: "はい、女性のお客様のご相談も多数ございますのでご安心ください。" },
  { q: "どのくらい前に申し込めばいいですか？", a: "可能な限りご要望に対応しますが、余裕を持ったご連絡をおすすめします。" },
  { q: "費用はどのくらいかかりますか？", a: "ご依頼内容によって異なりますので、まずはお気軽にご相談ください。" },
  { q: "家族や子どもだけの場面でも依頼できますか？", a: "はい、ご家族やお子様の安全確保も対応可能です。" },
  { q: "守秘義務は守られますか？", a: "はい、個人情報やご依頼内容の秘密は厳守いたします。" },
  { q: "警備員の指定はできますか？", a: "ご希望に応じて対応いたしますのでご相談ください。" },
  { q: "深夜や早朝の対応は可能ですか？", a: "はい、24時間体制で対応しております。" },
  { q: "当日依頼にも対応できますか？", a: "状況によりますが、できる限り対応いたしますのでまずはご相談ください。" },
];

// 求職者用FAQ
const recruitFAQ = [
  { q: "未経験でも応募できますか？", a: "はい、未経験の方も大歓迎です。充実した研修制度がありますのでご安心ください。" },
  { q: "年齢や性別の制限はありますか？", a: "18歳以上であれば性別問わずご応募いただけます。" },
  { q: "勤務日数や時間は選べますか？", a: "シフト制のため、ご希望を考慮して調整可能です。" },
  { q: "資格は必要ですか？", a: "入社後に必要な資格取得をサポートいたしますので、現時点で無資格でも大丈夫です。" },
  { q: "どんな仕事が多いですか？", a: "交通誘導や施設警備、イベント警備など様々な現場があります。" },
  { q: "給料や待遇について教えてください。", a: "経験・能力によりますが、面接時に詳しくご説明します。" },
  { q: "女性も活躍できますか？", a: "はい、多くの女性スタッフも在籍し、活躍しています。" },
  { q: "正社員登用はありますか？", a: "希望や適性に応じて正社員登用も積極的に行っています。" },
  { q: "制服や装備は支給されますか？", a: "はい、制服・必要な装備品はすべて会社より支給します。" },
  { q: "応募方法を教えてください。", a: "Web応募、電話、公式LINEなど各種方法でご応募いただけます。" },
];

const faqData = {
  business: businessFAQ,
  personal: personalFAQ,
  recruit: recruitFAQ,
};

const categories = [
  { key: "business", label: "法人のお客様" },
  { key: "personal", label: "個人のお客様" },
  { key: "recruit", label: "求職者の方" },
];

export default function FAQPage() {
  const [selected, setSelected] = useState("business");

  return (
    <div className="bg-neutral-900 min-h-screen py-14 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 text-center">よくある質問</h1>
        {/* カテゴリタブ */}
        <div className="flex justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelected(cat.key)}
              className={`px-5 py-2 rounded-t-xl text-lg font-bold transition
                ${selected === cat.key
                  ? "bg-yellow-400 text-black shadow"
                  : "bg-neutral-800 text-white hover:bg-yellow-400 hover:text-black"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 各質問すべて開いた状態で表示 */}
        <div className="space-y-5">
          {faqData[selected].map((item, idx) => (
            <div key={idx} className="bg-neutral-800 rounded-lg shadow p-5">
              <div className="font-semibold text-lg text-yellow-400 mb-2">Q. {item.q}</div>
              <div className="text-base text-white">A. {item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
