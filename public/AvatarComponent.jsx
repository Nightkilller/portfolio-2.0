import React from 'react';
import Link from 'next/link';

/**
 * Avatar Component for Next.js / React
 * - 140px Desktop / 100px Tablet / 80px Mobile
 * - Tight cropped viewBox vector (filling container completely)
 * - Smooth opacity swap on hover (0.25s ease)
 * - Zero movement, zero scaling, zero distortion
 */
export function Avatar() {
  return (
    <Link href="/" className="avatar-container" aria-label="Aditya Gupta Home">
      <img
        src="/avatar-normal.svg"
        alt="Aditya Gupta Normal Avatar"
        className="avatar-img avatar-img-normal"
      />
      <img
        src="/avatar-wink.svg"
        alt="Aditya Gupta Winking Avatar"
        className="avatar-img avatar-img-wink"
      />
      <style jsx>{`
        .avatar-container {
          display: block;
          position: relative;
          width: 140px;
          height: 140px;
          cursor: pointer;
        }
        @media (max-width: 960px) {
          .avatar-container {
            width: 100px;
            height: 100px;
          }
        }
        @media (max-width: 600px) {
          .avatar-container {
            width: 80px;
            height: 80px;
          }
        }
        .avatar-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: opacity 0.25s ease;
          transform: none;
        }
        .avatar-img-normal {
          opacity: 1;
          z-index: 1;
        }
        .avatar-img-wink {
          opacity: 0;
          z-index: 2;
        }
        .avatar-container:hover .avatar-img-wink {
          opacity: 1;
        }
      `}</style>
    </Link>
  );
}
