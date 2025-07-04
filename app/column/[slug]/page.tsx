"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// 仮データ
const columnDetails = {
  "security-day": {
    title: "警備員の1日 〜現場密着レポート〜",
    date: "2024-06-18",
    image: "/column/guard_day.jpg",
    body: (
      <>
        <p>
          警備員の仕事は「現場に立つ」だけではありません。L securityでは、朝のブリーフィングからスタートし、現地へ向かい、状況に応じた巡回や監視、トラブル対応まで1日を通してお客様の安心を守ります。<br /><br />
          特に現場ごとの特徴を把握する力と、予想外の事態にも動じない冷静さが求められます。終業後はその日の気づきや改善点をチームで共有。日々の積み重ねがプロ意識につながっています。
        </p>
      </>
    ),
  },
  "beyond-security": {
    title: "「安全」を超えて。L securityの想い",
    date: "2024-06-10",
    image: "/column/beyond_security.jpg",
    body: (
      <>
        <p>
          警備会社の本当の役割は「安心を創造する」ことにあります。L securityでは単に事故や事件を防ぐだけでなく、お客様が安心して日々を過ごせる空間をつくるため、技術・マナー・現場力すべてに力を注いでいます。<br /><br />
          変化する社会の中で、警備も進化が必要です。社員一人ひとりが「自分が家族を守るつもり」で現場に立つ。それがL securityの変わらぬ信念です。
        </p>
      </>
    ),
  },
  "risk-knowledge": {
    title: "知っておきたい現代の防犯リスクと対策",
    date: "2024-05-28",
    image: "/column/risk_knowledge.jpg",
    body: (
      <>
        <p>
          近年は情報化や多様化で新しい犯罪手口も増えています。防犯カメラやセンサー活用はもちろんですが、実は「日常の行動意識」も大きなリスク対策のひとつです。<br /><br />
          例えば「帰宅時の無施錠」「SNSでの位置情報公開」など、誰でもできる小さな注意が被害防止につながります。現場を知る警備のプロから、今後も分かりやすく役立つ情報をお届けします。
        </p>
      </>
    ),
  },
};

// 他コラムリスト
function ColumnOthersList({ others }) {
  return (
    <div className="bg-neutral-900/90 rounded-2xl shadow px-4 py-6 border border-slate-700">
      <div className="font-bold text-yellow-400 text-lg mb-4 flex items-center gap-2">
        <svg className="inline-block w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        他のコラム
      </div>
      <ul className="flex flex-col gap-3">
        {others.map((col) => (
          <li key={col.slug}>
            <Link href={`/column/${col.slug}`} className="flex items-center group font-medium text-gray-300 hover:text-yellow-400 transition">
              <span className="truncate">{col.title}</span>
              <svg className="ml-2 w-4 h-4 opacity-60 group-hover:opacity-100 transition" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 型宣言不要バージョン（JS的に）
export default function ColumnDetailPage({ params }) {
  const { slug } = params;
  const post = columnDetails[slug];

  if (!post) return notFound();

  // 他のコラム（自分以外）
  const others = Object.entries(columnDetails)
    .filter(([key]) => key !== slug)
    .map(([key, value]) => ({
      slug: key,
      title: value.title,
    }));

  return (
    <div className="bg-neutral-950 min-h-screen py-10 px-2">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Mainコラムカード */}
        <div className="col-span-1 lg:col-span-3">
          <div className="bg-neutral-900/90 rounded-2xl shadow-xl px-6 py-10 relative border border-slate-700">
            <div className="mb-5">
              <Link href="/column" className="text-yellow-400 text-sm hover:underline flex items-center gap-1">
                <svg className="inline w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                コラム一覧へ戻る
              </Link>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">{post.title}</h1>
            <div className="text-xs text-gray-400 mb-4">{post.date}</div>
            <div className="w-full h-56 relative rounded-lg overflow-hidden mb-6 shadow border border-slate-700">
              <Image src={post.image} alt={post.title} fill className="object-cover brightness-90" sizes="(max-width: 768px) 100vw, 60vw" />
            </div>
            <div className="prose prose-invert max-w-none text-gray-100 text-base leading-relaxed">
              {post.body}
            </div>
          </div>
        </div>
        {/* サイド他記事リスト */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-6 justify-start mt-12 lg:mt-0">
          <ColumnOthersList others={others} />
        </div>
      </div>
      {/* モバイル：下部にも他コラム */}
      <div className="lg:hidden max-w-2xl mx-auto mt-10">
        <ColumnOthersList others={others} />
      </div>
    </div>
  );
}
