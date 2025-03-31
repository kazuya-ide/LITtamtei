// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header/MyHeader";
import Footer from "@/app/components/Footer/Footer";

export const metadata: Metadata = {
title: "Web開発ポートフォリオ | フロントエンドからバックエンドまで | kazuya ide",
description:
"kazuya ide のポートフォリオサイト。フロントエンド(React, Next.js)からバックエンド(WordPress, Node.js)まで、幅広いWeb開発スキルを活かした作品を掲載しています。実績やブログ記事も公開中。",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body
className={'bg-black text-white antialiased'}
>
<Header />
<main>{children}</main>
<Footer />
</body>
</html>
);
}