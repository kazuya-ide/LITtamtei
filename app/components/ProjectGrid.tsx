import React from "react";
import Image from "next/image";

// 4つだけピックアップ
const projects = [
  {
    id: 1,
    image: "第66回さっぽろ雪まつりはスケートリンクと滑り台も。藤野リュージュもオープン  長谷川体育施設株式会社   スポーツ施設の総合建設業。陸上競.jpg",
    text: "北海道雪まつり",
    date: "2023-01-15",
  },
  {
    id: 2,
    image: "３年ぶり北海道マラソン、１万８０００人駆け抜ける…東京五輪のコース一部取り入れ  読売新聞.jpg",
    text: "北海道フルマラソン",
    date: "2023-02-20",
  },
  {
    id: 3,
    image: "ホームメイト】歴史と伝統を体感！北海道のお祭り9選.jpg",
    text: "夏祭り",
    date: "2023-03-25",
  },
  {
    id: 4,
    image: "冬の北海道の魅力凝縮！雪まつりやグルメなど極寒の地で過ごすスペシャルイベント - OnTrip JAL.jpg",
    text: "空港イベント",
    date: "2023-04-30",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div
      className="
        rounded-2xl
        overflow-hidden
        bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950
        shadow-2xl border border-yellow-100/10
        flex flex-col
        group
        transition-all duration-200
        hover:scale-[1.035] hover:shadow-yellow-400/20
      "
    >
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={`/${project.image}`}
          alt={project.text}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        {/* テキスト抜け感 */}
        <div className="absolute left-0 right-0 bottom-0 px-5 pb-4 pt-8 flex flex-col items-end">
          <span className="text-xl font-bold text-yellow-300 drop-shadow-md">{project.text}</span>
          <span className="text-xs text-yellow-100/80 mt-0.5">{project.date}</span>
        </div>
      </div>
    </div>
  );
};

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-8 px-[6vw]">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
