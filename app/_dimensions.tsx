'use client';

import React, { useState, useEffect } from 'react';

export default function Dimensions() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Only add event listener if window is defined
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      // Cleanup event listener
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <main className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg text-black">
        <h1 className="text-4xl font-bold mb-4">Device Dimensions</h1>
        <div className="text-2xl">
          <p>
            Width: <span className="font-mono">{dimensions.width}px</span>
          </p>
          <p>
            Height: <span className="font-mono">{dimensions.height}px</span>
          </p>
        </div>
      </div>
    </main>
  );
}
