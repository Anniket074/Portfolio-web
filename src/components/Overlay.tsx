"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Section 1: 0% to 20% scroll (Fades out)
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // Section 2: 30% to 50% scroll (Fades in then out)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.55], [50, -50]);

  // Section 3: 60% to 80% scroll (Fades in then out)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.9], [50, -50]);

  return (
    <div className="absolute top-0 left-0 w-full pointer-events-none h-[500vh] z-10">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-end pb-24 md:pb-32 text-center px-4"
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl mb-4">
            Anniket
          </h1>
          <p className="text-lg md:text-2xl text-white/80 font-light tracking-wide drop-shadow-lg mb-8">
            Senior Unity & VR Developer • Crafting Immersive Worlds
          </p>
          <a href="/cv" className="pointer-events-auto px-8 py-4 rounded-full bg-white text-black font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Explore My Expertise
          </a>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24"
        >
          <h2 className="text-3xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-2xl max-w-2xl uppercase">
            Proven Global Experience
          </h2>
          <p className="mt-4 text-white/70 text-lg md:text-xl max-w-md drop-shadow-md">
            Delivered 50+ high-quality Unity and VR applications for clients across the US, UK, and Germany, maintaining a near-perfect 4.9/5 satisfaction rating.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-24 text-right"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white drop-shadow-2xl max-w-2xl">
            Specialized in Virtual Reality
          </h2>
          <p className="mt-4 text-white/70 text-lg md:text-xl max-w-md drop-shadow-md">
            Engineered 35+ cutting-edge Meta Quest experiences featuring advanced physics, intuitive interactions, and optimized performance.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
