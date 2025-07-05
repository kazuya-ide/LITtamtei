// app/components/NewsSection.tsx
import Link from "next/link";
import { getAllNews } from "@/lib/news"; // サーバー側で呼ぶ

export default function NewsSection() {
  const news = getAllNews();
  return (
    <section className="flex flex-col items-center w-full my-12">
      <hr className="w-24 border-t-2 border-yellow-400 mb-2" />

      <div className="text-center mb-2">
        <div className="text-xl md:text-2xl font-bold tracking-widest uppercase text-yellow-600 drop-shadow-sm">NEWS</div>
        <div className="text-base md:text-lg font-bold tracking-widest uppercase text-neutral-700">最新情報</div>
      </div>

      <hr className="w-24 border-t-2 border-yellow-400 my-2" />

      <div className="w-full max-w-xl mt-4 rounded-xl bg-white/80 shadow-md p-4">
        {news.length === 0 ? (
          <div className="text-center text-gray-400 py-4">投稿がありません</div>
        ) : (
          <ul>
            {news.slice(0, 5).map((item) => (
              <li
                key={item.slug}
                className="py-3 px-2 border-b border-gray-100 flex flex-col gap-1 hover:bg-yellow-50 transition"
              >
                <Link
                  href={`/news/${item.slug}`}
                  className="text-base font-semibold text-yellow-700 hover:underline"
                >
                  {item.title}
                </Link>
                <span className="text-xs text-gray-500">
                  {new Date(item.date).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link
        href="/news"
        className="mt-8 inline-block px-7 py-3 rounded-full bg-yellow-500 text-black font-bold shadow hover:bg-yellow-600 transition-all text-lg"
      >
        一覧はこちら
      </Link>
    </section>
  );
}
