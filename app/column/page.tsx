"use client";
import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    slug: "security-day",
    title: "警備員の1日 〜現場密着レポート〜",
    excerpt: "警備員はどんな1日を過ごしているのか？実際の現場密着で紹介します。",
    image: "/column/guard_day.jpg",
  },
  {
    slug: "beyond-security",
    title: "「安全」を超えて。L securityの想い",
    excerpt: "単なる警備でなく“安心を創造する仕事”へのこだわりを、代表が語ります。",
    image: "/column/beyond_security.jpg",
  },
  {
    slug: "risk-knowledge",
    title: "知っておきたい現代の防犯リスクと対策",
    excerpt: "日常生活に潜むリスクや、プロがすすめる最新防犯対策をわかりやすく解説。",
    image: "/column/risk_knowledge.jpg",
  },
];

export default function ColumnListPage() {
  return (
    <div className="bg-neutral-950 min-h-screen py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10 text-center drop-shadow-lg">
          コラム
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((col) => (
            <Link key={col.slug} href={`/column/${col.slug}`} className="group">
              <div
                className={`
                  bg-neutral-900/90 rounded-2xl shadow-lg overflow-hidden
                  border border-slate-700
                  transition-all duration-200
                  hover:scale-105 hover:shadow-2xl
                  hover:border-t-4 hover:border-t-yellow-400
                  hover:border-slate-700
                  flex flex-col h-full
                `}
                style={{ borderTopWidth: "1px" }}
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    className="object-cover brightness-90"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="font-bold text-lg text-yellow-300 mb-2 group-hover:text-yellow-400 transition">
                    {col.title}
                  </h2>
                  <p className="text-gray-400 text-sm flex-1">{col.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
