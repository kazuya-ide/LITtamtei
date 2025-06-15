"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL;

const BlogPage = () => {
  const backgroundRef = useRef(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (backgroundRef.current) {
      backgroundRef.current.style.opacity = "0.4";
    }
  }, []);

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
    <section className="relative py-16 overflow-hidden">
      {/* 背景画像を「名称未設定-31.png」に変更 */}
      <div
        ref={backgroundRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0,
          transition: "opacity 1s ease-in-out",
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

      {/* 本文コンテナ */}
      <div className="container relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* 見出し */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-widest text-black mb-2">BLOG</h1>
          <p className="text-lg text-gray-600">新着記事一覧</p>
          <hr className="w-24 mx-auto border-t-2 border-gray-400 mt-4" />
        </div>

        {/* 記事カードグリッド */}
        {loading ? (
          <div className="text-center text-gray-500 py-16">読み込み中...</div>
        ) : posts.length === 0 ? (
          <div className="text-center text-gray-400 py-16">記事がありません</div>
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
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition"
                >
                  {/* アイキャッチ画像 */}
                  {thumbnail && (
                    <div className="relative w-full h-56 bg-gray-100">
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
                          className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold"
                        >
                          {cat.name}
                        </span>
                      ))}
                    </div>

                    {/* タイトル */}
                    <h2 className="text-2xl font-bold mb-2 text-black group-hover:text-yellow-600 transition">
                      <span
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                    </h2>

                    {/* 投稿日 */}
                    <div className="text-xs text-gray-500 mb-2">
                      {new Date(post.date).toLocaleDateString()}
                    </div>

                    {/* 抜粋 */}
                    <p className="text-gray-700 text-base mb-4">
                      {excerpt}
                      {excerpt && excerpt.length >= 80 && "…"}
                    </p>

                    {/* タグ */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {tags.map((tag) => (
                        <span
                          key={tag.id}
                          className="px-2 py-1 rounded bg-gray-200 text-gray-700 text-xs"
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
  );
};

export default BlogPage;
