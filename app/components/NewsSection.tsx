import Link from "next/link";
import { getAllNews } from "@/lib/news";

export default function NewsSection() {
  const news = getAllNews();
  return (
    <section className="w-full px-4 py-16 bg-[#ededed] border-b border-[#bbb]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#232323] mb-8">NEWS</h2>
        <hr className="border-t border-[#bbb] mb-6" />
        <ul className="divide-y divide-[#bbb]">
          {news.slice(0, 3).map((item) => (
            <li key={item.slug} className="flex flex-col md:flex-row items-start md:items-center py-7">
              <span className="text-sm md:w-32 font-bold text-[#bbb] uppercase">RELEASE</span>
              <span className="text-sm md:w-40 text-[#232323]">
                {new Date(item.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </span>
              <Link
                href={`/news/${item.slug}`}
                className="font-bold text-lg md:text-xl text-[#232323] hover:underline ml-0 md:ml-8"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Link
            href="/news"
            className="inline-block bg-[#232323] px-5 py-2 text-xl font-extrabold text-white tracking-tight hover:bg-[#111] transition"
          >
            READ MORE <span className="inline-block ml-2 text-2xl align-middle">&raquo;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
