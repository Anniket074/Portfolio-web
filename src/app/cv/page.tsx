"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone, Briefcase, Code, Star, Trophy } from "lucide-react";

export default function CVPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, y: 0,
      transition: { type: "spring" as const, stiffness: 50, damping: 15 }
    }
  };

  return (
    <main className="bg-[#121212] min-h-screen text-white relative font-sans p-6 md:p-16 lg:p-24 selection:bg-white/20 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-blue-500/10 to-purple-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation */}
        <motion.div initial={{ opacity:0, x: -20 }} animate={{ opacity:1, x:0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-16 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium tracking-wide">Back to Portfolio</span>
          </Link>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-24">
          
          {/* Header Section */}
          <motion.header variants={itemVariants} className="text-center md:text-left md:flex justify-between items-end gap-8 border-b border-white/10 pb-12">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/40 mb-4">
                Anniket
              </h1>
              <p className="text-2xl md:text-3xl text-white/70 font-light tracking-wide mb-8">
                Senior Unity & VR Developer
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-white/40">
                <a href="mailto:anniket19121995@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={16} /> anniket19121995@gmail.com
                </a>
                <span className="flex items-center gap-2">
                  <Phone size={16} /> +91 800 327 3794
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={16} /> Lucknow, India
                </span>
              </div>
            </div>
          </motion.header>

          {/* Overview */}
          <motion.section variants={itemVariants} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-white/5 to-transparent blur-xl rounded-3xl -z-10" />
            <p className="text-xl md:text-2xl leading-relaxed text-white/80 font-light max-w-4xl">
              I am a passionate <span className="font-semibold text-white">Unity and VR Developer</span> with over three years of experience forging high-fidelity immersive worlds. I have successfully architected and delivered transformative projects to <span className="font-semibold text-white">50+ international clients</span>, consistently maintaining a <span className="font-semibold text-white">4.9/5 satisfaction rating</span>.
            </p>
          </motion.section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Left Column: Experience */}
            <div className="lg:col-span-2 space-y-16">
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
                  <Briefcase className="text-blue-400" /> Professional Experience
                </h2>
                
                <div className="space-y-12 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-white/10">
                  
                  {/* Job 1 */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-[#121212] border-2 border-blue-400 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                    </div>
                    <div className="mb-2">
                      <h3 className="text-2xl font-semibold text-white/90">Unity & VR Developer</h3>
                      <div className="text-white/40 flex items-center gap-3 mt-1">
                        <span className="font-medium text-white/60">DanzerArt Studios / Freelance</span>
                        <span>•</span>
                        <span>06/2022 – Present</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-3 text-white/60 leading-relaxed list-disc list-outside ml-4">
                      <li>Delivered <strong className="text-white/80 font-medium">50+ Unity and VR applications</strong> across gaming, simulation, training, and visualization for clients in the US, UK, and Germany.</li>
                      <li>Engineered <strong className="text-white/80 font-medium">35+ immersive Meta Quest experiences</strong> utilizing the XR Interaction Toolkit for grabbable objects, realistic physics, and gesture controls.</li>
                      <li>Spearheaded comprehensive project documentation detailing architecture, modules, and VR testing protocols for reliable project handovers.</li>
                      <li>Consulted directly with clients worldwide, generating over <strong className="text-white/80 font-medium">INR 500,000+</strong> in freelance revenue while ensuring impeccable communication across timezones.</li>
                    </ul>
                  </div>

                  {/* Job 2 */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-[#121212] border-2 border-white/20" />
                    <div className="mb-2">
                      <h3 className="text-2xl font-semibold text-white/90">VR Game Developer</h3>
                      <div className="text-white/40 flex items-center gap-3 mt-1">
                        <span className="font-medium text-white/60">Fiverr Global Platform</span>
                        <span>•</span>
                        <span>2022</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-3 text-white/60 leading-relaxed list-disc list-outside ml-4">
                      <li>Developed comprehensive gameplay systems including player interactions, shooting mechanics, UI systems, and optimized physics environments.</li>
                      <li>Maintained high-efficiency deployment pipelines optimizing for standalone VR hardware to ensure 90+ FPS stability.</li>
                    </ul>
                  </div>

                  {/* Job 3 */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-[#121212] border-2 border-white/20" />
                    <div className="mb-2">
                      <h3 className="text-2xl font-semibold text-white/90">Graphic Designer & Team Lead</h3>
                      <div className="text-white/40 flex items-center gap-3 mt-1">
                        <span className="font-medium text-white/60">Whiteboard</span>
                        <span>•</span>
                        <span>06/2020 – 05/2023</span>
                      </div>
                    </div>
                    <p className="mt-4 text-white/60 leading-relaxed">
                      Oversaw junior designers and successfully conducted technical webinars on modern graphic design principles over three consecutive years.
                    </p>
                  </div>

                </div>
              </motion.section>

              {/* Projects Highlight */}
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
                  <Trophy className="text-amber-400" /> Featured Projects
                </h2>
                <div className="grid gap-6">
                  {/* SpaceWar VR */}
                  <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors">
                    <h3 className="text-xl font-semibold text-white/90 mb-2">SpaceWar VR</h3>
                    <p className="text-sm text-amber-400/80 mb-4 font-mono">Meta Quest | Unity C# | XR Toolkit</p>
                    <p className="text-white/60 leading-relaxed text-sm">
                      Implemented VR ship controls, laser shooting mechanics, real-time combat feedback, and modular scalable AI state machines optimizing performance for a flawless 90+ FPS.
                    </p>
                  </div>
                  {/* Takeshi */}
                  <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors">
                    <h3 className="text-xl font-semibold text-white/90 mb-2">Takeshi&apos;s Castle 3D</h3>
                    <p className="text-sm text-purple-400/80 mb-4 font-mono">Unity | 3D Architecture | Physics</p>
                    <p className="text-white/60 leading-relaxed text-sm">
                      Designed dynamic shifting platforms, robust knockback systems, and physics-based player mobility mechanics across modularly constructed levels for high replayability.
                    </p>
                  </div>
                </div>
              </motion.section>
            </div>

            {/* Right Column: Skills */}
            <div className="space-y-12">
              <motion.section variants={itemVariants} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-2xl shadow-black/50">
                <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                  <Code className="text-emerald-400" /> Core Arsenal
                </h2>
                <div className="flex flex-wrap gap-2">
                  {['Unity Engine', 'C#', 'Virtual Reality', 'Meta Quest SDK', 'Unreal Engine', 'C / C++', 'Blender 3D', 'Data Structures', 'Game Optimization', 'Level Designing', 'Animation Logic', 'JavaScript', 'CSS3'].map((skill) => (
                    <span key={skill} className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full" />
                <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                  <Star className="text-amber-400" /> Strengths
                </h2>
                <ul className="space-y-4 text-white/70">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Client Management</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Complex Problem-Solving</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Technical Documentation</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Cross-timezone Comm</li>
                </ul>
              </motion.section>
            </div>

          </div>
        </motion.div>
      </div>
    </main>
  );
}
