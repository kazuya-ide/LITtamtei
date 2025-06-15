// components/RecruitCard.tsx
import Link from "next/link";
import { Briefcase, ChevronRight } from "lucide-react";

export default function RecruitCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md flex flex-col items-start p-6 max-w-lg mx-auto border-l-4 border-yellow-400 hover:shadow-xl transition">
      <div className="flex items-center mb-3">
        <Briefcase className="text-yellow-400 mr-2" size={32} />
        <h3 className="text-xl font-bold text-gray-900">採用情報</h3>
      </div>
      <div className="text-gray-700 text-base mb-4">
        <span className="font-semibold text-yellow-600">L security</span> では新しい仲間を募集しています！<br />
        「地域の安全と安心を一緒に守りませんか？」
      </div>
      <ul className="text-sm text-gray-600 mb-4 space-y-1">
        <li>・未経験・学生・主婦も大歓迎</li>
        <li>・週1日～OK／柔軟シフト制</li>
        <li>・福利厚生・研修制度充実</li>
      </ul>
      <Link
        href="/recruit"
        className="mt-auto flex items-center text-yellow-500 hover:underline font-bold group"
      >
        詳細・応募はこちら
        <ChevronRight className="ml-1 group-hover:translate-x-1 transition" size={20} />
      </Link>
    </div>
  );
}
