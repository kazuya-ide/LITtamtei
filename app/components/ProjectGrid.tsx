import React from 'react';
import Image from 'next/image';

const projects = [
  { id: 1, image: '第66回さっぽろ雪まつりはスケートリンクと滑り台も。藤野リュージュもオープン  長谷川体育施設株式会社   スポーツ施設の総合建設業。陸上競.jpg', text: '北海道雪まつり', date: '2023-01-15' },
  { id: 2, image: '３年ぶり北海道マラソン、１万８０００人駆け抜ける…東京五輪のコース一部取り入れ  読売新聞.jpg', text: '北海道フルマラソン', date: '2023-02-20' },
  { id: 3, image: 'ホームメイト】歴史と伝統を体感！北海道のお祭り9選.jpg', text: '夏祭り', date: '2023-03-25' },
  { id: 4, image: '冬の北海道の魅力凝縮！雪まつりやグルメなど極寒の地で過ごすスペシャルイベント - OnTrip JAL.jpg', text: '空港イベント', date: '2023-04-30' },
  { id: 5, image: '第66回さっぽろ雪まつりはスケートリンクと滑り台も。藤野リュージュもオープン  長谷川体育施設株式会社   スポーツ施設の総合建設業。陸上競.jpg', text: 'プロジェクト 5', date: '2023-05-05' },
  { id: 6, image: '３年ぶり北海道マラソン、１万８０００人駆け抜ける…東京五輪のコース一部取り入れ  読売新聞.jpg', text: 'プロジェクト 6', date: '2023-06-10' },
  { id: 7, image: 'ホームメイト】歴史と伝統を体感！北海道のお祭り9選.jpg', text: '夏祭り', date: '2023-07-15' },
  { id: 8, image: '冬の北海道の魅力凝縮！雪まつりやグルメなど極寒の地で過ごすスペシャルイベント - OnTrip JAL.jpg', text: '空港イベント', date: '2023-04-30' },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-md p-4">
      <Image
        src={`/${project.image}`}
        alt={`Project ${project.id}`}
        width={500}  // 適切な幅を指定
        height={300} // 適切な高さを指定
        className="w-full h-auto object-cover"
      />
      <div className="mt-2 text-right"> {/* text-rightクラスを追加 */}
        <p className="text-sm">{project.text}</p>
        <p className="text-xs text-gray-500">{project.date}</p>
      </div>
    </div>
  );
};

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;