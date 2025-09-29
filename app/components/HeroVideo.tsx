// components/HeroVideo.tsx
'use client';

export default function HeroVideo() {
  return (
    <div className="w-screen pt-20"> {/* ヘッダー高さ64pxぶん余白 */}
      <video
        className="block w-full h-auto"  // 横幅100%、高さは比率自動
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        controls  // 確認用（不要なら削除OK）
      >
        <source src="/file.mp4" type="video/mp4" />
        <source src="/file.webm" type="video/webm" />
        お使いのブラウザは動画に対応していません。
      </video>
    </div>
  );
}
