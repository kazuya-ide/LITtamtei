"use client";
import Image from "next/image";
import Link from "next/link";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { PieChart, Pie, Cell } from "recharts";
import type { PieLabelRenderProps } from "recharts";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const generationData = [
  { name: "10代", value: 5 },
  { name: "20代", value: 35 },
  { name: "30代", value: 30 },
  { name: "40代", value: 20 },
  { name: "50代以上", value: 10 },
];
const COLORS = ["#bae6fd", "#60a5fa", "#fbbf24", "#f87171", "#a3e635"];

function renderCustomizedLabel({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  name,
}: PieLabelRenderProps & { name?: string }) {
  const RADIAN = Math.PI / 180;
  // outerRadiusは number | string | function の可能性があるので型ガード
  const outRad = typeof outerRadius === "number"
    ? outerRadius
    : typeof outerRadius === "string"
      ? Number(outerRadius)
      : 140; // 予備値
  const cxx = typeof cx === "number" ? cx : Number(cx);
  const cyy = typeof cy === "number" ? cy : Number(cy);

  const radius = outRad + 32;
  const x = cxx + radius * Math.cos(-midAngle * RADIAN);
  const y = cyy + radius * Math.sin(-midAngle * RADIAN);

  if ((percent ?? 0) < 0.04) return null;

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor={x > cxx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={15}
      fontWeight={name === "20代" || name === "30代" ? "bold" : "normal"}
      style={{
        paintOrder: "stroke",
        stroke: "#222",
        strokeWidth: 5,
        strokeLinejoin: "round",
        strokeOpacity: 0.7,
      }}
    >
      <tspan fill="#fff">{name}</tspan>
    </text>
  );
}


export default function RecruitPage() {
  return (
    <div className="relative min-h-screen bg-neutral-950 py-12 px-2 overflow-x-hidden">
      {/* パーティクル背景 */}
      <Particles
        className="fixed inset-0 z-0 pointer-events-none"
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 30,
          particles: {
            number: { value: 32, density: { enable: true, area: 1200 } },
            color: { value: ["#fff", "#dbeafe", "#fde047"] },
            opacity: { value: 0.13 },
            size: { value: { min: 2, max: 4 } },
            move: { enable: true, speed: 0.14, direction: "none", outModes: "out" },
            links: { enable: false },
          },
          detectRetina: true,
        }}
      />

      {/* HERO */}
      <motion.section
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center rounded-3xl bg-neutral-900/90 shadow-2xl border border-slate-700 p-8 md:p-12 mb-12"
        variants={fadeInUp}
        initial="hidden"
        animate="show"
      >
        <div className="flex items-center gap-3 mb-4 z-10">
          <Briefcase className="text-blue-300" size={44} />
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow">
            採用情報
          </h1>
        </div>
        <div className="text-lg md:text-2xl font-semibold text-white mb-4 z-10 text-center">
          札幌・近郊で<br className="md:hidden" />警備スタッフ募集中
        </div>
        <p className="text-neutral-200 text-base mb-2 text-center z-10">
          未経験・学生・主婦・シニアも大歓迎。<br />
          <span className="font-bold text-blue-300">「地域の安心を一緒につくりませんか？」</span>
        </p>
        <div className="w-full mb-7 z-10 relative rounded-2xl overflow-hidden shadow-xl border border-blue-100 group">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent pointer-events-none" />
          <div className="relative w-full h-48 md:h-56">
            <Image
              src="/名称未設定-1.png"
              alt="L securityの求人"
              fill
              className="object-cover rounded-2xl"
              priority
              style={{ zIndex: 0 }}
            />
          </div>
        </div>
        <div className="text-neutral-200 text-base z-10 text-center">
          L securityは札幌を中心に活動する警備のプロ集団です。<br />
          人柄重視で新しい仲間を募集中！
        </div>
      </motion.section>

      {/* 若手比率セクション（黒系リッチカード） */}
      <motion.section
        className="
          relative z-10 max-w-3xl mx-auto
          rounded-3xl bg-neutral-900/95 shadow-2xl border border-slate-700
          p-8 md:p-12 mb-10 flex flex-col items-center
        "
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.09 }}
      >
        <div className="w-full flex flex-col items-center">
          <h3 className="text-2xl md:text-2xl font-bold text-blue-200 mb-2 text-center drop-shadow">
            若い世代が活躍中！
          </h3>
          <p className="text-neutral-100 mb-6 text-center max-w-lg font-semibold">
            L securityは20代・30代の若手スタッフが主力として現場で活躍しています。<br />
            「やってみたい」「地域を守りたい」という想いがあれば大歓迎。<br />
            新しい仲間を心よりお待ちしています！
          </p>
          <div className="w-full flex justify-center mb-6">
            <PieChart width={450} height={360}>
              <Pie
                data={generationData}
                cx="50%"
                cy="50%"
                innerRadius={110}
                outerRadius={140}
                dataKey="value"
                label={renderCustomizedLabel}
                labelLine={true}
                paddingAngle={2}
                stroke="#222"
              >
                {generationData.map((entry, idx) => (
                  <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="w-full flex justify-center">
            <table className="table-auto border border-slate-600 rounded-lg text-base w-64 shadow bg-neutral-950/80">
              <thead>
                <tr className="bg-blue-900/30">
                  <th className="px-2 py-1 text-white">年代</th>
                  <th className="px-2 py-1 text-white">割合</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 py-1 text-neutral-100">10代</td>
                  <td className="px-2 py-1 text-neutral-100">5%</td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-neutral-100">20代</td>
                  <td className="px-2 py-1 text-blue-200 font-bold">35%</td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-neutral-100">30代</td>
                  <td className="px-2 py-1 text-blue-200 font-bold">30%</td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-neutral-100">40代</td>
                  <td className="px-2 py-1 text-neutral-100">20%</td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-neutral-100">50代以上</td>
                  <td className="px-2 py-1 text-neutral-100">10%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-neutral-400 text-sm mt-4 text-center">
            ※ 20代・30代のスタッフが全体の <span className="font-bold text-blue-200">65%</span> を占めています
          </div>
        </div>
      </motion.section>

      {/* 職種・待遇 */}
      <motion.section
        className="relative z-10 max-w-3xl mx-auto rounded-3xl bg-neutral-900/95 shadow-xl border border-slate-700 p-8 md:p-12 mb-10"
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.12 }}
      >
        <h2 className="text-2xl font-bold text-blue-200 mb-5 border-l-4 border-blue-400 pl-4 tracking-wide">
          募集職種
        </h2>
        <ul className="list-disc list-inside text-white space-y-2 mb-6 pl-2">
          <li>施設警備（百貨店・駐車場・学校・イベント等）</li>
          <li>交通誘導警備（イベント・工事現場等）</li>
          <li>機械警備・モニター監視</li>
          <li>身辺警護（要人警護・送迎）</li>
        </ul>
        <h3 className="text-lg font-bold text-white mb-2">待遇・勤務条件</h3>
        <ul className="list-disc list-inside text-neutral-100 space-y-1 mb-6 pl-2">
          <li>日給12,000円～14,400円（勤務日数・役割による）</li>
          <li>週1日～OK／シフト自由／副業・Wワーク歓迎</li>
          <li>交通費支給・送迎あり／制服・携帯貸与</li>
          <li>法定研修20h（時給1,010円・しっかりサポート）</li>
          <li>正社員登用あり／友達紹介制度あり</li>
          <li>社会保険・各種手当完備</li>
          <li>髪型・髪色・ピアス自由／シニア・学生も歓迎！</li>
        </ul>
        <div className="text-neutral-400 text-xs mb-1">
          ※勤務地：札幌市内／西区西町北14丁目1-15ホクシンビル3F
        </div>
        <div className="text-neutral-400 text-xs">
          ※直行直帰OK・送迎あり・マイカー通勤可
        </div>
      </motion.section>

      {/* 仕事内容 */}
      <motion.section
        className="relative z-10 max-w-3xl mx-auto rounded-3xl bg-neutral-900/90 shadow-lg border border-slate-700 p-8 md:p-12 mb-10"
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-blue-200 mb-5 border-l-4 border-blue-400 pl-4 tracking-wide">
          お仕事内容・働き方
        </h2>
        <div className="text-white text-base mb-2">
          <b>【施設警備】</b> 施設内巡回や受付・監視カメラチェック・お客様対応など
        </div>
        <div className="text-white text-base mb-2">
          <b>【交通誘導】</b> イベントや現場での歩行者・車両の安全誘導
        </div>
        <div className="text-blue-100 text-base mb-2">
          <b>勤務時間</b>：8:00～17:00（休憩1h）※希望に応じて夜勤・短時間も可
        </div>
        <div className="text-blue-100 text-base mb-2">
          <b>給与例</b>：週1日→4.8万円／週3日→14.4万円／週5日→24万円（月4週換算）
        </div>
        <div className="text-neutral-400 text-sm mb-2">
          ※年齢18歳以上（警備業法による）<br />
          幅広い世代が活躍中。働きやすい職場です。
        </div>
      </motion.section>

      {/* 応募方法 */}
      <motion.section
        className="relative z-10 max-w-3xl mx-auto rounded-3xl bg-neutral-900/90 shadow-xl border border-slate-700 p-8 md:p-12 mb-24"
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.28 }}
      >
        <h2 className="text-2xl font-bold text-blue-200 mb-4 border-l-4 border-blue-400 pl-4 tracking-wide">
          応募方法
        </h2>
        <div className="text-white mb-3">
          応募は下記フォームまたはメール・お電話にて受付中！<br />
          担当者より折り返しご案内します。
        </div>
        <ul className="mb-4 text-neutral-200 text-base space-y-1">
          <li>
            メール：
            <a href="mailto:info@l-security.jp" className="underline text-blue-400 hover:text-blue-200 transition">info@l-security.jp</a>
          </li>
          <li>
            TEL：
            <a href="tel:09092370011" className="underline text-blue-400 hover:text-blue-200 font-bold ml-1">090-9237-0011</a>
            <span className="text-gray-400 text-sm ml-2">担当 久保</span>
          </li>
        </ul>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px #93c5fd66" }}
          whileTap={{ scale: 0.98 }}
          className="relative z-10"
        >
          <Link href="/contact" className="inline-block w-full">
            <button className="w-full px-8 py-4 rounded-full bg-blue-500 text-white font-extrabold shadow-md text-lg hover:bg-blue-400 transition-all duration-200">
              応募フォームはこちら
            </button>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
