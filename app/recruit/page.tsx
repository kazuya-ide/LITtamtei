"use client";
import Image from "next/image";
import Link from "next/link";
import { Briefcase } from "lucide-react";

export default function RecruitPage() {
  return (
    <div className="min-h-screen bg-neutral-900 py-12 px-4">
      {/* ヒーロー */}
      <section className="max-w-3xl mx-auto flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 mb-12">
        <div className="flex items-center mb-2">
          <Briefcase className="text-yellow-400 mr-2" size={36} />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">採用情報</h1>
        </div>
        <p className="text-gray-600 text-lg mb-6 text-center">
          「地域の安全を、あなたの力で。」
        </p>
        {/* イラストや社風写真など */}
        <div className="w-full mb-6">
          <Image
            src="/recruit_hero.jpg"
            alt="L securityの求人"
            width={700}
            height={300}
            className="w-full object-cover rounded-xl"
            priority
          />
        </div>
        <p className="text-gray-800 text-base mb-2">
          L securityは、警備・セキュリティ業務のプロフェッショナル集団です。
          現在、事業拡大のため新しい仲間を募集しています。
        </p>
        <p className="text-gray-700 text-sm mb-6">
          未経験・学生・主婦・シニアも大歓迎。<br />
          研修制度充実＆安心の福利厚生で、働きやすい環境です。
        </p>
      </section>

      {/* 職種・待遇 */}
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 mb-12">
        <h2 className="text-xl font-bold text-yellow-700 mb-6 border-l-4 border-yellow-400 pl-3">募集職種</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-1 mb-8">
          <li>施設警備スタッフ（商業施設・学校・イベント等）</li>
          <li>交通誘導警備スタッフ（道路工事・駐車場）</li>
          <li>機械警備・モニター監視スタッフ</li>
          <li>身辺警護スタッフ（要人警護、送迎）</li>
        </ul>
        <h3 className="text-lg font-bold text-gray-900 mb-2">主な待遇・勤務条件</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>時給1,100円～（経験・資格・現場により変動）</li>
          <li>週1日～/短時間・長期歓迎／WワークOK</li>
          <li>交通費支給／制服貸与／資格取得支援／社保完備</li>
          <li>正社員登用制度あり</li>
        </ul>
      </section>

      {/* 応募方法 */}
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 mb-16">
        <h2 className="text-xl font-bold text-yellow-700 mb-4 border-l-4 border-yellow-400 pl-3">応募方法</h2>
        <p className="mb-2 text-gray-800">
          まずは下記の応募フォーム、またはお電話・メールからご連絡ください。<br />
          担当者より追ってご案内いたします。
        </p>
        <ul className="mb-4 text-gray-700">
          <li>電話：<a href="tel:011-123-4567" className="underline text-yellow-700">011-123-4567</a></li>
          <li>メール：<a href="mailto:info@l-security.jp" className="underline text-yellow-700">info@l-security.jp</a></li>
        </ul>
       <Link
  href="/contact"
  className="inline-block px-6 py-2 rounded bg-yellow-500 text-black font-bold shadow hover:bg-yellow-600 transition"
>
  応募フォームはこちら
</Link>
      </section>
    </div>
  );
}
