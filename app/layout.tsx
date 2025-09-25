import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header/MyHeader";
import FooterWrapper from "@/app/components/FooterWrapper";

export const metadata: Metadata = {
  title: "合同会社LIT",
  description:
    "北海道で地域社会に貢献することを目的に活動している会社です。北海道をよりよく、住みやすい街に。その一助になれるように日々邁進しております",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-[#ededed] text-[#232323] antialiased min-h-screen font-sans">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
