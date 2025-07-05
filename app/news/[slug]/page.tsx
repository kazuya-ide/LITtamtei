import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getNewsBySlug, getAllNews } from "@/lib/news";
import { remark } from "remark";
import html from "remark-html";

export default async function NewsDetailPage({ params }) {
  const { slug } = params;
  let post;
  try {
    post = getNewsBySlug(slug);
  } catch {
    return notFound();
  }

  // Markdown本文 → HTML変換
  const processed = await remark().use(html).process(post.content);
  const contentHtml = processed.toString();

  // 他のお知らせリスト（自分以外）
  const others = getAllNews().filter((n) => n.slug !== slug);

  return (
    <div className="bg-neutral-950 min-h-screen py-10 px-2">
      <div className="max-w-3xl mx-auto">
        <div className="bg-neutral-900/90 rounded-2xl shadow-xl px-6 py-10 relative border border-slate-700">
          <div className="mb-5">
            <Link href="/news" className="text-yellow-400 text-sm hover:underline flex items-center gap-1">
              <svg className="inline w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              お知らせ一覧へ戻る
            </Link>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">{post.title}</h1>
          <div className="text-xs text-gray-400 mb-4">{post.date}</div>
          {post.image && (
            <div className="w-full h-56 relative rounded-lg overflow-hidden mb-6 shadow border border-slate-700">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover brightness-90"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          )}
          <div
            className="prose prose-invert max-w-none text-gray-100 text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>

        {/* 他のお知らせリスト（任意で表示） */}
        {others.length > 0 && (
          <div className="mt-10 bg-neutral-900/70 rounded-xl shadow px-5 py-6 border border-slate-700">
            <div className="font-bold text-yellow-400 text-lg mb-4">他のお知らせ</div>
            <ul className="flex flex-col gap-2">
              {others.map((n) => (
                <li key={n.slug}>
                  <Link href={`/news/${n.slug}`} className="text-gray-300 hover:text-yellow-400 transition">
                    {n.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// 静的生成のため全slug取得
export async function generateStaticParams() {
  const news = getAllNews();
  return news.map((n) => ({ slug: n.slug }));
}
