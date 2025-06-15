"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

// 投稿データ型
type WPPost = {
  id: number;
  title: { rendered: string };
  date: string;
};

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL;

export default function NewsSection() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(WP_API_URL + "?per_page=5&_embed");
        const data = await res.json();
        setPosts(data);
      } catch {
        setPosts([]);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <section className="flex flex-col items-center w-full my-12">
      {/* 上の横棒 */}
      <hr className="w-24 border-t-2 border-yellow-400 mb-2" />

      {/* NEWSテキスト */}
      <div className="text-center mb-2">
        <div className="text-xl md:text-2xl font-bold tracking-widest uppercase text-yellow-600 drop-shadow-sm">NEWS</div>
        <div className="text-base md:text-lg font-bold tracking-widest uppercase text-neutral-700">最新情報</div>
      </div>

      {/* 下の横棒 */}
      <hr className="w-24 border-t-2 border-yellow-400 my-2" />

      {/* 投稿一覧 */}
      <div className="w-full max-w-xl mt-4 rounded-xl bg-white/80 shadow-md p-4">
        {loading ? (
          <div className="text-center text-gray-500 py-4">読み込み中...</div>
        ) : posts.length === 0 ? (
          <div className="text-center text-gray-400 py-4">投稿がありません</div>
        ) : (
          <ul>
            {posts.map((post) => (
              <li
                key={post.id}
                className="py-3 px-2 border-b border-gray-100 flex flex-col gap-1 hover:bg-yellow-50 transition"
              >
                <Link
                  href={`/blog/${post.id}`}
                  className="text-base font-semibold text-yellow-700 hover:underline"
                >
                  <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </Link>
                <span className="text-xs text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 一覧はこちらボタン */}
      <Link
        href="/blog"
        className="mt-8 inline-block px-7 py-3 rounded-full bg-yellow-500 text-black font-bold shadow hover:bg-yellow-600 transition-all text-lg"
      >
        一覧はこちら
      </Link>
    </section>
  );
}
