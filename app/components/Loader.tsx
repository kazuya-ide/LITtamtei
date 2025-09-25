"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onFinish }: { onFinish?: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ロゴやエレメントのアニメーション
    const tl = gsap.timeline({
      onComplete: () => {
        // アニメ完了後にフェードアウト
        gsap.to(loaderRef.current, {
          autoAlpha: 0,
          duration: 0.8,
          delay: 0.2,
          onComplete: onFinish,
        });
      },
    });

    tl.fromTo(
      ".loader-logo",
      { scale: 0.8, opacity: 0, y: 30 },
      { scale: 1.15, opacity: 1, y: 0, ease: "back.out(2)", duration: 0.8 }
    )
      .to(".loader-bar", {
        width: "100%",
        background:
          "linear-gradient(90deg, #3b82f6, #00c6fb, #43e97b, #38f9d7)",
        duration: 1.2,
        ease: "power2.inOut",
      })
      .to(".loader-text", { opacity: 1, y: 0, duration: 0.5, delay: -0.7 });

    // 3秒後に自動で消える
    const timer = setTimeout(() => {
      gsap.to(loaderRef.current, {
        autoAlpha: 0,
        duration: 0.8,
        onComplete: onFinish,
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
      style={{ transition: "opacity 0.8s" }}
    >
      <div className="loader-logo mb-10">
        {/* SVGやロゴ */}
        <svg width="90" height="90" viewBox="0 0 90 90">
          <ellipse cx="45" cy="45" rx="38" ry="40" fill="#243b55" stroke="#66b3ff" strokeWidth="5"/>
          <path d="M30 50 l17 18 24-27" stroke="#43e97b" strokeWidth="7" fill="none" strokeLinecap="round"/>
          <circle cx="45" cy="45" r="20" stroke="#fff" strokeWidth="2"/>
        </svg>
      </div>
      <div className="relative w-64 h-4 bg-white/10 rounded-full overflow-hidden loader-bar">
        {/* GSAPでwidthがアニメーション */}
      </div>
      <div className="loader-text text-xl opacity-0 translate-y-3 mt-8 tracking-wide">
        Loading...
      </div>
    </div>
  );
}
