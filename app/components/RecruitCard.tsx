// components/RecruitCard.tsx
"use client";

import Link from "next/link";
import { Briefcase, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function RecruitCard() {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-gradient-to-br from-white to-neutral-100 rounded-3xl shadow-md flex flex-col items-start p-8 max-w-lg mx-auto border border-neutral-200"
    >
      <div className="flex items-center mb-5">
        <div className="p-3 bg-neutral-200 rounded-full mr-3">
          <Briefcase className="text-neutral-600" size={26} />
        </div>
        <h3 className="text-2xl font-extrabold text-[#232323] tracking-tight">
          採用情報
        </h3>
      </div>

      <div className="text-[#444] text-lg leading-relaxed mb-7">
        <span className="font-semibold">合同会社LIT</span> では、  
        新しい仲間を募集しています。<br />
        <span className="text-[#666]">
          安心と信頼を支える仕事を、私たちと一緒に始めませんか？
        </span>
      </div>

      <motion.div
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
      >
        <Link
          href="/recruit"
          className="mt-auto flex items-center text-[#232323] hover:text-black font-bold group transition-colors"
        >
          詳細・応募はこちら
          <ChevronRight
            className="ml-1 group-hover:translate-x-1 transition-transform"
            size={20}
          />
        </Link>
      </motion.div>
    </motion.div>
  );
}
