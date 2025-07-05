// lib/news.ts

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// newsディレクトリの絶対パス
const newsDir = path.join(process.cwd(), "content/news");

// すべてのお知らせ一覧を取得
export function getAllNews() {
  const files = fs.readdirSync(newsDir);
  return files
    .map((file) => {
      const filePath = path.join(newsDir, file);
      const md = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(md);
      return {
        slug: data.slug,
        title: data.title,
        date: data.date,
        image: data.image,
        excerpt: data.excerpt,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

// 指定slugでmdファイル（と本文）を取得
export function getNewsBySlug(slug: string) {
  const files = fs.readdirSync(newsDir);
  for (const file of files) {
    const filePath = path.join(newsDir, file);
    const md = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(md);
    if (data.slug === slug) {
      return { ...data, content };
    }
  }
  throw new Error("Not found");
}
