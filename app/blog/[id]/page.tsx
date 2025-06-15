"use client";
import { useParams } from "next/navigation";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image"; // 追加

// WP APIのURL
const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL;

// 型定義（最低限でOK。詳しくやりたければ個別に追加も可）
type WPPost = {
  id: number;
  title: { rendered: string };
  date: string;
  modified: string;
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
    "wp:term"?: Array<{ id: number; name: string }[]>;
    author?: Array<{ name: string }>;
  };
};

function formatDate(dateString: string) {
  const d = new Date(dateString);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export default function BlogDetailPage() {
  const params = useParams();
  const id = params.id as string;

  // 投稿データ取得
  const { data: post, error, isLoading } = useSWR<WPPost>(
    id ? `${WP_API_URL}/${id}?_embed` : null,
    async (url) => {
      const res = await fetch(url);
      if (!res.ok) throw new Error("記事が取得できませんでした");
      return res.json();
    }
  );

  if (isLoading) return <div className="p-10 text-center">読み込み中...</div>;
  if (error) return <div className="p-10 text-center text-red-600">記事が取得できませんでした</div>;
  if (!post) return <div className="p-10 text-center">記事が見つかりません</div>;

  // アイキャッチ画像
  const thumbnail = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  // カテゴリー取得
  const categories: Array<{ id: number; name: string }> = post._embedded?.["wp:term"]?.[0] || [];

  // タグ取得
  const tags: Array<{ id: number; name: string }> = post._embedded?.["wp:term"]?.[1] || [];

  // 著者名
  const author = post._embedded?.author?.[0]?.name || "";

  // 更新日
  const modified = post.modified;

  return (
    <section className="relative py-12 bg-neutral-50 min-h-screen">
      <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white rounded-2xl shadow-lg">

        {/* カテゴリータグ */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {categories.map((cat) => (
            <span key={cat.id} className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold">
              {cat.name}
            </span>
          ))}
        </div>

        {/* タイトル */}
        <h1 className="text-4xl font-bold text-neutral-900 mb-4 leading-tight">{post.title.rendered}</h1>

        {/* アイキャッチ画像 */}
        {thumbnail && (
          <div className="relative w-full h-80 mb-6 rounded-xl overflow-hidden shadow">
            <Image
              src={thumbnail}
              alt={post.title.rendered}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority={false}
            />
          </div>
        )}

        {/* メタ情報 */}
        <div className="flex flex-wrap items-center text-xs text-gray-500 mb-6 gap-2">
          <span>著者: {author}</span>
          <span>｜公開: {formatDate(post.date)}</span>
          {modified && modified !== post.date && (
            <span>｜更新: {formatDate(modified)}</span>
          )}
        </div>

        {/* タグ */}
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {tags.map((tag) => (
              <span key={tag.id} className="px-2 py-1 rounded bg-gray-200 text-gray-700 text-xs">
                #{tag.name}
              </span>
            ))}
          </div>
        )}

        {/* 本文 */}
        <div className="prose prose-lg max-w-none mx-auto mb-10" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

        {/* 記事下ナビ */}
        <div className="flex justify-between items-center mt-8 border-t pt-6">
          <Link href="/blog" className="text-blue-600 hover:underline font-semibold">
            ← 記事一覧へ
          </Link>
        </div>
      </div>
    </section>
  );
}
