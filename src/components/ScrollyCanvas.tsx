"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120;

const currentFrame = (index: number) =>
  `/sequence/frame_${index.toString().padStart(3, "0")}_delay-0.066s.png`;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload all images
    let loadedCount = 0;
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };
      imagesRef.current.push(img);
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderFrame = (index: number) => {
    if (!imagesRef.current[index] || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    
    // Update canvas size appropriately
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > canvasRatio) {
      // Image is wider than canvas
      drawWidth = img.height * canvasRatio;
      offsetX = (img.width - drawWidth) / 2;
      ctx.drawImage(img, offsetX, 0, drawWidth, img.height, 0, 0, canvas.width, canvas.height);
    } else {
      // Image is taller than canvas
      drawHeight = img.width / canvasRatio;
      offsetY = (img.height - drawHeight) / 2;
      ctx.drawImage(img, 0, offsetY, img.width, drawHeight, 0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    if (imagesLoaded) {
      renderFrame(0);
    }
  }, [imagesLoaded, windowSize.width, windowSize.height]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (imagesLoaded) {
      renderFrame(Math.round(latest));
    }
  });

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#121212]">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-50 bg-[#121212]">
            <span className="text-white/50 text-sm tracking-widest uppercase">Loading experience...</span>
          </div>
        )}
      </div>
    </div>
  );
}
