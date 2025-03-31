"use client";

import Image from 'next/image';

export default function NewsSection() {
  return (
    <div className="bg-yellow-500">
      <div className="flex">
        {/* Left Side: Text Content */}
        <div className="w-1/2 pr-8">
          <div className="text-4xl font-bold mb-2">NEWS</div>
          <div className="text-lg mb-4">最新情報</div>

          {/* 画像を追加 */}
          <div className="mb-4">
            <Image
              src="/Twitter、ホームタブにリストをタブ表示してスワイプで切り替え可能に – OREFOLDER.png" // 適切なパスに修正
              alt="News"
              width={400} // サイズを調整
              height={300} // サイズを調整
              objectFit="cover" // または contain
            />
          </div>

          <div className="mb-4">

          </div>

        </div>

        {/* Right Side: Image Content */}
        <div className="w-1/2 relative"> {/* w-1/2 の領域に position: relative を設定 */}
          <div className="absolute inset-0"> {/* 絶対配置で親要素いっぱいに広げる */}
            <Image
              src="/神姫警備保障株式会社  警備員手配、巡回警備、イベント警備、駐車場管理、コールセンター等は、安心安全警備の神姫警備 保障株式会社へお任せ下さ.jpg"
              alt="Executive Protection"
              layout="fill" // fill に変更
              objectFit="cover" // cover に変更
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}