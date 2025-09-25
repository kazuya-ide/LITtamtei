// app/components/ServiceCards.tsx
import Image from "next/image";

type Service = {
  title: string;
  lead: string;     // サービステキスト（短文）
  detail: string;   // 詳細テキスト
  image: string;    // /public/ パス
  alt: string;
};

const services: Service[] = [
  {
    title: "浮気調査",
    lead: "裁判で使える証拠を徹底収集",
    detail:
      "行動の時系列・入退室の瞬間・接触相手まで、法的活用を見据えた形式で丁寧に記録。弁護士連携にも対応します。",
    image: "/meishii-hua-jiato-huagroom.jpg",
    alt: "浮気調査のイメージ",
  },
  {
    title: "素行・行動調査",
    lead: "行動記録を詳細にレポート",
    detail:
      "対象者の動線・立ち寄り先・接触人物を合法の範囲で取得。写真とログを整理した読みやすい報告書を納品します。",
    image: "/ri-bennofutokotowo-buiteiru-ren.jpg",
    alt: "素行調査のイメージ",
  },
  {
    title: "企業調査・採用調査",
    lead: "反社チェック・雇用前調査も対応",
    detail:
      "公開情報の裏付けや現地確認を組み合わせ、信用リスクを多角的に確認。採用前の経歴・トラブル歴の確認も可能です。",
    image: "/takushino-yun-zhuan-shouka-gu-keno-zhun-beiwoshiteimasu.jpg",
    alt: "企業調査のイメージ",
  },
  {
    title: "ストーカー対策",
    lead: "法的対応まで一貫して支援",
    detail:
      "記録化と安全確保を最優先に、警察相談の同席や弁護士連携までサポート。夜間の同行や自宅周辺の警戒強化にも対応。",
    image: "/ye-buku-nu-xingno-hourono-jing-se.jpg",
    alt: "ストーカー対策のイメージ",
  },
  {
    title: "身辺警護",
    lead: "日常から特別な場面まで安全を守ります",
    detail:
      "通勤・通学の同行からイベント時の警護まで、状況に応じた体制で未然防止を徹底。警察OBの知見で安心を提供します。",
    image: "/eriawo-jianteiruhaiankurukato-nu-xing.jpg",
    alt: "身辺警護のイメージ",
  },
];

export default function ServiceCards() {
  return (
    <section className="bg-neutral-50 py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center">
          サービス内容
        </h2>
        <p className="mt-3 text-neutral-600 text-center">
          法的有効性と安全性に配慮し、状況に最適な手段でご支援します。
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-6 gap-6">
          {services.map((s, i) => {
            const spanClass = i < 2 ? "md:col-span-3" : "md:col-span-2";
            return (
              <article
                key={s.title}
                className={`bg-white border border-emerald-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition ${spanClass}`}
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={i < 2}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-emerald-700">
                    {s.lead}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                    {s.detail}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
