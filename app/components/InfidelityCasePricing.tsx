// app/components/InfidelityCases.tsx
// 先頭に目立つヘッダー（見出し＋説明）を追加した版

type CaseItem = {
  id: string;
  header: { title: string; badge: string };
  result: string;
  after: string;
  plan: { cat: string; name: string };
  price: string;
  details: { label: string; value: string }[];
};

const cases: CaseItem[] = [
  {
    id: "CASE 01",
    header: { title: "夫のLINEから面会予定を把握", badge: "30代配偶者のご相談" },
    result:
      "事前に面会日が把握できていたため、昼（自宅周辺）から尾行を開始。食事・買い物後に宿泊施設へ入る場面を確認。入退室の映像と時刻を記録しました。",
    after:
      "報告書と写真を基に話し合いを実施。配偶者は事実を認め、関係修復を優先する方針に。弁護士連携による合意書作成もご案内しました。",
    plan: { cat: "浮気調査プラン", name: "ピンポイントAプラン" },
    price: "¥50,000",
    details: [
      { label: "調査日", value: "LINEで特定された1日" },
      { label: "調査時間", value: "19:00〜22:00（合計3時間）" },
      { label: "納品物", value: "写真・時系列記録付き報告書（法的活用を想定）" },
    ],
  },
  {
    id: "CASE 02",
    header: { title: "奥様の週末帰りが遅く、浮気が心配に", badge: "40代男性のご相談" },
    result:
      "週末の退社後から奥様を2回追尾。会社の同僚と飲食・カラオケ・バーへ立ち寄った後、深夜に帰宅を確認。特定の異性との密会は認められず、浮気の事実はなし。",
    after:
      "疑いが晴れ、依頼者様は大きな安心を得られました。調査実施の事実は奥様に伝えず、今後はご夫婦でのコミュニケーション改善を提案しました。",
    plan: { cat: "浮気調査プラン", name: "ピンポイントBプラン" },
    price: "¥88,000",
    details: [
      { label: "調査日", value: "帰宅が遅いと想定される週末の退社後" },
      { label: "調査時間", value: "17:00〜23:00（合計6時間）" },
      { label: "納品物", value: "行動ログ・写真・時刻記録のレポート" },
    ],
  },
  {
    id: "CASE 03",
    header: { title: "浮気のLINEは見つかったが、会う日が不明", badge: "30代主婦のご相談" },
    result:
      "移動は車両利用が多かったため、事前に車両へ合法的範囲でGPSを設置。1週間の動きを解析し、怪しい曜日とエリアを特定。翌週に3日間の調査を実施し、決定的証拠を撮影。",
    after:
      "度重なる浮気に区切りを付けたいとの希望に沿い、浮気相手からの慰謝料請求を弁護士と連携して進行。最終的に離婚が成立しました。",
    plan: { cat: "浮気調査プラン", name: "複数日向け（GPS併用）Aプラン" },
    price: "¥220,000",
    details: [
      { label: "調査日", value: "GPS解析1週間＋怪しい日を3日間調査" },
      { label: "調査時間", value: "合計15時間 / 1週間" },
      { label: "納品物", value: "写真・動画・時系列記録の報告書（弁護士提出想定）" },
    ],
  },
];

export default function InfidelityCases() {
  return (
<section className="w-full bg-white">
  {/* === 追加：上部ヒーローヘッダー === */}
  <div className="bg-emerald-700 text-white mb-12">
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide mb-6">
        浮気調査の事例と費用
      </h1>
      <p className="text-sm md:text-base text-emerald-50/90 leading-relaxed mb-4">
        実際のご相談をもとに、調査の流れ・証拠化のポイント・費用感をわかりやすく掲載しています。
        条件（時間帯・移動手段・警戒度）により費用は変動しますが、まずは無料相談で最適なプランをご提案します。
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <span className="bg-emerald-800/70 px-3 py-1 rounded">秘密厳守</span>
        <span className="bg-emerald-800/70 px-3 py-1 rounded">法的活用を見据えた報告書</span>
        <span className="bg-emerald-800/70 px-3 py-1 rounded">見積り無料</span>

          </div>
        </div>
      </div>

      {/* === 以降：各ケース === */}
      {cases.map((c) => (
        <article key={c.id} className="border-b border-neutral-200">
          {/* セクション見出し帯 */}
          <div className="bg-emerald-900 text-white">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
              <h2 className="text-lg md:text-2xl font-extrabold tracking-wide mb-6">
                {c.id} ― {c.header.title}
              </h2>
              <span className="text-xs md:text-sm bg-emerald-800/70 px-3 py-1 rounded">
                {c.header.badge}
              </span>
            </div>
          </div>

          {/* 本文 2カラム */}
          <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
            {/* 左：結果 & その後 */}
            <div className="space-y-6">
              <div className="border-2 border-neutral-300 rounded-md overflow-hidden shadow-sm">
                <div className="bg-neutral-800 text-white px-4 py-2 font-bold flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                    />
                  </svg>
                  浮気調査の結果
                </div>
                <div className="px-5 py-4 text-sm md:text-base text-neutral-700">{c.result}</div>
              </div>

              <div className="flex justify-center" aria-hidden>
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-neutral-500" />
              </div>

              <div className="rounded-md shadow-sm border-2 border-emerald-700/40 overflow-hidden">
                <div className="bg-emerald-100 px-5 py-3 text-emerald-900 font-bold">その後…</div>
                <div className="px-5 py-4 text-sm md:text-base text-neutral-700">{c.after}</div>
              </div>
            </div>

            {/* 右：価格パネル */}
            <div className="rounded-md border border-neutral-200 overflow-hidden bg-neutral-50 shadow-sm">
              <div className="flex gap-2 px-4 pt-4">
                <span className="bg-rose-700 text-white text-xs md:text-sm px-3 py-1 rounded">
                  {c.plan.cat}
                </span>
                <span className="bg-rose-600 text-white text-xs md:text-sm px-3 py-1 rounded">
                  {c.plan.name}
                </span>
              </div>

              <div className="px-6 pt-6 pb-2">
                <div className="text-4xl md:text-5xl font-extrabold text-rose-700 tracking-tight">
                  {c.price}
                </div>
                <p className="text-xs md:text-sm text-neutral-500 mt-1">
                  ※ 条件・難易度・エリアにより変動する場合があります
                </p>
              </div>

              <div className="mt-4 divide-y divide-neutral-200 text-sm md:text-base">
                {c.details.map((d) => (
                  <div key={d.label} className="px-6 py-4 grid grid-cols-3">
                    <div className="text-neutral-400">{d.label}</div>
                    <div className="col-span-2 text-neutral-800">{d.value}</div>
                  </div>
                ))}
              </div>

              <div className="px-6 py-6">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center w-full rounded-md bg-emerald-900 text-white font-semibold px-5 py-3 hover:bg-emerald-800 transition"
                >
                  無料相談・お見積り
                </a>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
