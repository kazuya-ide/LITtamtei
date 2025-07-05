import fs from "fs";
import path from "path";
import matter from "gray-matter";

const columnsDir = path.join(process.cwd(), "content/columns");

// 全コラム一覧取得
export function getAllColumns() {
  const files = fs.readdirSync(columnsDir);
  return files.map((file) => {
    const filePath = path.join(columnsDir, file);
    const md = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(md);
    return {
      slug: data.slug,
      title: data.title,
      date: data.date,
      image: data.image,
      excerpt: data.excerpt,
    };
  });
}

// 指定slugで本文取得
export function getColumnBySlug(slug: string) {
  const filePath = path.join(columnsDir, `${slug}.md`);
  const md = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(md);
  return {
    ...data,
    content,
  };
}
