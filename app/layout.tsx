// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header/MyHeader";
import Footer from "@/app/components/Footer/Footer";

export const metadata: Metadata = {
title: "合同会社L.SECURUTY",
description:
"北海道を代表する警備会社。サービスの質に抜群の評価をいただいております。",
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