"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Text and Image */}
        <div className="flex flex-col items-start">
          <h2 className="text-4xl font-bold mb-4">CONTACT US</h2>
          <p className="text-xl text-yellow-500 mb-6">お問い合わせ</p>

       {/* Image */}
<div className="w-full h-80 relative bg-white">
  <Image
    src="/レイヤー 1.png" // Replace with your image path
    alt="Halifax Building"
    fill
    style={{
      objectFit: 'contain', // cover を contain に変更
      width: '100%',
      height: '100%',
    }}
  />
</div>
        </div>

        {/* Right Side - Contact Information */}
        <div className="flex flex-col items-start">
          <h3 className="text-4xl font-semibold mb-16">L.SECURITY</h3> {/* mb-20 -> mb-4, removed percentage padding */}
          <ul className="list-none pl-0 mb-6">
            <li className="mb-1">
              <span className="text-yellow-500 mr-2">▶</span> 本社：〒063-0061
              北海道札幌市西区西町北１４丁目１−１５ ホクシンビル３F
            </li>
            <li className="mb-1">TEL : 011-215-6432 FAX： 011-215-6432</li>
            <li className="mb-1">E-mail：info@llc-lit.com</li>
            <li className="mb-1">
              <span className="text-yellow-500 mr-2">▶</span> ​
              営業時間 ８：００〜１７：００
            </li>
          </ul>

          {/* Button */}
          <Link href="/" className="w-full sm:w-auto">
            <div className="group relative border border-white px-6 py-2 inline-block text-white hover:bg-white hover:text-gray-800 transition-colors duration-300">
              <span className="mr-3">お問い合わせ</span>
              <svg
                className="inline-block h-4 w-4 transition-transform group-hover:translate-x-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}