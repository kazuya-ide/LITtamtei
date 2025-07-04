"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL;

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(WP_API_URL + "?per_page=12&_embed");
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
    <div className="relative min-h-screen flex flex-col bg-neutral-900">
      {/* 背景画像をより濃く */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          opacity: 0.28, // ←ここを0.28や0.32ぐらいまで上げる
        }}
      >
        <Image
          src="/名称未設定-31.png"
          alt="背景画像"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* 本文コンテナに半透明ブラックレイヤー */}
      <main className="flex-1 relative z-10">
        <section className="py-16">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 背景と本文の視認性を上げるレイヤー */}
            <div className="absolute inset-0 bg-neutral-900/60 pointer-events-none z-[-1]" />
            {/* 見出し */}
            <div className="mb-10 text-center">
              <h1 className="text-3xl font-bold tracking-widest text-white mb-2 drop-shadow">BLOG</h1>
              <p className="text-lg text-yellow-100">新着記事一覧</p>
              <hr className="w-24 mx-auto border-t-2 border-yellow-200/40 mt-4" />
            </div>

            {/* 記事カードグリッド */}
            {loading ? (
              <div className="text-center text-gray-200 py-16">読み込み中...</div>
            ) : posts.length === 0 ? (
              <div className="text-center text-gray-300 py-16">記事がありません</div>
            ) : (
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                {posts.map((post) => {
                  // アイキャッチ画像
                  const thumbnail =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
                  // カテゴリー
                  const categories = post._embedded?.["wp:term"]?.[0] || [];
                  // タグ
                  const tags = post._embedded?.["wp:term"]?.[1] || [];
                  // 抜粋
                  const excerpt =
                    post.excerpt?.rendered?.replace(/<[^>]+>/g, "")?.slice(0, 90) || "";

                  return (
                    <Link
                      href={`/blog/${post.id}`}
                      key={post.id}
                      className="group bg-neutral-800/90 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition border border-yellow-100/10"
                    >
                      {/* アイキャッチ画像 */}
                      {thumbnail && (
                        <div className="relative w-full h-56 bg-gray-800/40">
                          <Image
                            src={thumbnail}
                            alt={post.title.rendered}
                            fill
                            className="object-cover group-hover:scale-105 transition"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={false}
                          />
                        </div>
                      )}

                      <div className="flex-1 flex flex-col p-6">
                        {/* カテゴリー */}
                        <div className="flex flex-wrap gap-2 mb-2">
                          {categories.map((cat) => (
                            <span
                              key={cat.id}
                              className="px-3 py-1 rounded-full bg-yellow-200/10 text-yellow-200 text-xs font-semibold border border-yellow-400/20"
                            >
                              {cat.name}
                            </span>
                          ))}
                        </div>

                        {/* タイトル */}
                        <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-yellow-300 transition drop-shadow">
                          <span
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                          />
                        </h2>

                        {/* 投稿日 */}
                        <div className="text-xs text-yellow-100 mb-2">
                          {new Date(post.date).toLocaleDateString()}
                        </div>

                        {/* 抜粋 */}
                        <p className="text-gray-100 text-base mb-4">
                          {excerpt}
                          {excerpt && excerpt.length >= 80 && "…"}
                        </p>

                        {/* タグ */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {tags.map((tag) => (
                            <span
                              key={tag.id}
                              className="px-2 py-1 rounded bg-yellow-300/10 text-yellow-200 text-xs border border-yellow-300/20"
                            >
                              #{tag.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* フッターも黒系半透明 */}
      <footer className="relative z-20 mt-10 border-t border-yellow-200/10 bg-neutral-900/80 backdrop-blur">
        <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-yellow-100">
          <div>&copy; {new Date().getFullYear()} L security</div>
          <div>
            <Link href="/privacy" className="hover:underline mr-4">プライバシーポリシー</Link>
            <Link href="/contact" className="hover:underline">お問い合わせ</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
