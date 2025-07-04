// components/RecruitCard.tsx
import Link from "next/link";
import { Briefcase, ChevronRight } from "lucide-react";

export default function RecruitCard() {
  return (
    <div className="bg-neutral-800 rounded-2xl shadow-md flex flex-col items-start p-6 max-w-lg mx-auto border-l-4 border-yellow-700/30 hover:shadow-2xl transition border border-neutral-700">
      <div className="flex items-center mb-3">
        <Briefcase className="text-yellow-500 mr-2" size={32} />
        <h3 className="text-xl font-bold text-gray-100">採用情報</h3>
      </div>
      <div className="text-gray-100 text-base mb-4">
        <span className="font-semibold text-yellow-200">L security</span> では新しい仲間を募集しています！<br />
        <span className="text-gray-300">「地域の安全と安心を一緒に守りませんか？」</span>
      </div>
      <Link
        href="/recruit"
        className="mt-auto flex items-center text-gray-100 hover:text-yellow-400 font-bold group transition"
      >
        詳細・応募はこちら
        <ChevronRight className="ml-1 group-hover:translate-x-1 transition" size={20} />
      </Link>
    </div>
  );
}
