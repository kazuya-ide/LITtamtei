// ImageComponent.jsx (または .tsx)

import Image from 'next/image';

export default function GoogleMaps() {
  return (
    <div className="relative w-full h-[30vh]">
      <Image
        src="/image.png"
        alt="Image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}