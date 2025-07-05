// app/components/VideoFade.tsx
"use client";
import { useRef, useEffect, useState } from "react";

export default function VideoFade() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const videoElement = videoRef.current;
        const videoTop = videoElement.offsetTop;
        const scrollY = window.scrollY;
        const fadeOutHeight = videoTop + videoElement.offsetHeight;
        if (scrollY < fadeOutHeight) {
          setOpacity(1 - scrollY / fadeOutHeight);
        } else {
          setOpacity(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <video
      ref={videoRef}
      src="6.mp4"
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
        opacity: opacity,
        transition: 'opacity 0.3s ease-in-out',
      }}
    />
  );
}
