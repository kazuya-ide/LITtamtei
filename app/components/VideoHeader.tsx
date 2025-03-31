// components/VideoHeader.jsx
import { useRef, useEffect, useState } from 'react';

const VideoHeader = () => {
  const videoRef = useRef(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollY = window.scrollY;
        const fadeOutHeight = 500;

        if (scrollY < fadeOutHeight) {
          setOpacity(1 - scrollY / fadeOutHeight);
        } else {
          setOpacity(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src="L security 警備 北海道.mp4"
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: 'fixed',
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
};

export default VideoHeader;