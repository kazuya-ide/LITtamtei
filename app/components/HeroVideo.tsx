'use client';

export default function SimpleVideo() {
  return (
    <div className="w-screen"> {/* 親の制限を受けないフル幅 */}
      <video
        className="block w-full h-auto"  // 横100%、縦は元比率
        autoPlay
        muted
        loop
        playsInline
        controls          // 不要なら消してOK（再生確認のため一旦つける）
        preload="metadata"
        poster="/hero-poster.jpg" // 任意
      >
        <source src="/file.mp4" type="video/mp4" />
        {/* 可能なら互換性のため WebM も用意 */}
        {/* <source src="/hero.webm" type="video/webm" /> */}
        お使いのブラウザは動画に対応していません。
      </video>
    </div>
  );
}
