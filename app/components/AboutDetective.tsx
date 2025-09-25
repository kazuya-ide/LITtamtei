// app/components/AboutDetective.tsx
import Image from "next/image";

export default function AboutDetective() {
  return (
    <section className="w-full bg-white">
      {/* 上部の帯 */}
      <div className="bg-emerald-800 h-20 md:h-28 w-full" />

      {/* 本文：左テキスト / 右イメージ */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 md:gap-8 px-4 md:px-6 -mt-10 md:-mt-14">
        {/* 左：テキストボックス（帯に少し重ねる） */}
        <div className="bg-white rounded-md shadow-sm border border-emerald-100 p-6 md:p-8">
          <p className="text-emerald-900 font-semibold tracking-wide">
            北海道の探偵事務所・浮気調査
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-emerald-900 leading-tight">
           LIT総合探偵社について
          </h2>

          <h3 className="mt-6 text-lg md:text-xl font-bold text-emerald-900">
            1人1人のお悩みを丁寧にお聞きし、最適な解決策をご提案します
          </h3>
          <div className="h-[2px] w-24 bg-emerald-700 mt-2 mb-4" />

          <div className="prose prose-neutral max-w-none text-[15px] md:text-base leading-relaxed">
            <p>
              私たちが最も大切にしているのは<strong>「調査力」と「誠実な対応」</strong>です。
              不安やご事情はお客様ごとに異なります。初回のヒアリングで目的と優先順位を明確にし、
              無理のない計画とお見積りをご提示します。強引な勧誘や不要な追加費用はありません。
            </p>
            <p>
              LIT総合探偵社は<strong>北海道に拠点</strong>を置き、
              必要に応じて道外にも対応。
              都市部の繁華街や住宅街、観光地での調査にも精通したスタッフが担当します。
            </p>
            <p>
              浮気調査ではデートシーンや出入りの<strong>決定的瞬間の撮影</strong>を重視し、
              事実関係を時系列で整理した<strong>報告書（法的活用を想定）</strong>を納品します。
              調査中は状況に応じて<strong>リアルタイム報告</strong>も可能。ご希望があれば弁護士連携も行います。
            </p>
            <p>
              「今すぐ動いてほしい」「できるだけ匿名で相談したい」などのご要望にも柔軟に対応します。
              まずはお気軽にご相談ください。<strong>秘密厳守・見積り無料</strong>です。
            </p>
          </div>

          {/* 小さな情報行 */}
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-emerald-900">
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-700" />
              24時間受付／緊急案件の即応可
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-700" />
              報告書・写真・動画をセットで納品
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-700" />
              北海道に対応
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-700" />
              弁護士との連携サポート
            </li>
          </ul>
        </div>

        {/* 右：イメージ（カバー表示） */}
        <div className="relative h-[260px] md:h-auto min-h-[360px] rounded-md overflow-hidden shadow-sm border border-emerald-100">
          <Image
            src="/hokkaido_pref_e8_22_4_21_1.jpg"    // public/ に画像を置く
            alt="デスクに広げた調査ツールのイメージ"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
