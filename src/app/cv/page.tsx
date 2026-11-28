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
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/40 mb-4">
                Anniket Prajapati
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide mb-8">
                Unity Developer — Gameplay Systems, XR &amp; 3D (C#)
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-white/40">
                <a href="mailto:anniket19121995@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={16} /> anniket19121995@gmail.com
                </a>
                <span className="flex items-center gap-2">
                  <Phone size={16} /> +91 80032 73794
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={16} /> Lucknow, India (IST)
                </span>
              </div>
            </div>

            <div className="mt-10 md:mt-0 flex flex-col items-center md:items-end gap-4 shrink-0">
              <a
                href="/Anniket_Resume.pdf"
                download
                className="px-7 py-3 rounded-full bg-white text-black font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                Download Resume (PDF)
              </a>
              <div className="flex gap-5 text-sm text-white/50">
                <a href="https://github.com/Anniket074" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/anniket1912" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="https://www.fiverr.com/artdanzer" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Fiverr</a>
              </div>
            </div>
          </motion.header>

          {/* Overview */}
          <motion.section variants={itemVariants} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-white/5 to-transparent blur-xl rounded-3xl -z-10" />
            <p className="text-xl md:text-2xl leading-relaxed text-white/80 font-light max-w-4xl">
              Unity developer with <span className="font-semibold text-white">35+ delivered client projects</span> and <span className="font-semibold text-white">29 publicly showcased builds</span> across hyper-casual mobile, VR, 3D and motion design. I own gameplay systems end to end — force-based physics, raycast and reflection prediction, scoring and combo logic, currency and shop economies, level progression, and XR interaction through the Unity XR Interaction Toolkit. Ten VR applications on motion controllers, five hyper-casual 3D mobile games, and a branded VR arcade piece built with Doritos. Recorded gameplay exists for every showcased build, so the work can be verified rather than taken on trust — with a <span className="font-semibold text-white">4.9/5 rating across 22 verified client reviews</span>.
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
                      <h3 className="text-2xl font-semibold text-white/90">Unity &amp; XR Developer</h3>
                      <div className="text-white/40 flex items-center gap-3 mt-1">
                        <span className="font-medium text-white/60">DanzerArt Studios (Freelance)</span>
                        <span>•</span>
                        <span>Jun 2022 – Present</span>
                        <span>•</span>
                        <span>Remote</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-3 text-white/60 leading-relaxed list-disc list-outside ml-4">
                      <li>Delivered <strong className="text-white/80 font-medium">35+ client projects end to end</strong>, from scoped brief to installable build, for clients across the US, UK and Germany.</li>
                      <li>Built <strong className="text-white/80 font-medium">10 VR applications</strong> on the Unity XR Interaction Toolkit: 6DOF flight combat, wave-defence FPS with enemy AI, physics-based archery, a branded arcade piece, and scientific visualisation.</li>
                      <li>Shipped <strong className="text-white/80 font-medium">5 hyper-casual 3D mobile games and 7 2D games</strong> covering force-based physics, scoring and combo chains, coin economies with in-game shops, and 78 levels of progression.</li>
                      <li>Architected gameplay behind interfaces rather than in scene scripts — one interactable contract implemented by four obstacle types, so new content plugs into the bounce loop without the loop being touched.</li>
                      <li>Kept frame budgets on standalone VR hardware through profiling, draw-call batching and render-scale tuning.</li>
                      <li>Wrote handover documentation covering module structure, architecture notes and VR testing protocols.</li>
                    </ul>
                  </div>

                  {/* Job 2 */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-[#121212] border-2 border-white/20" />
                    <div className="mb-2">
                      <h3 className="text-2xl font-semibold text-white/90">VR Game Developer</h3>
                      <div className="text-white/40 flex items-center gap-3 mt-1">
                        <span className="font-medium text-white/60">Fiverr (artdanzer)</span>
                        <span>•</span>
                        <span>Oct 2022 – Present</span>
                        <span>•</span>
                        <span>Remote</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-3 text-white/60 leading-relaxed list-disc list-outside ml-4">
                      <li>Maintain an active Unity VR gig rated <strong className="text-white/80 font-medium">4.9/5 across 22 verified client reviews</strong>, covering Meta Quest builds, XR Interaction Toolkit implementation, bug fixing and performance repair.</li>
                      <li>Deliver VR gameplay systems for marketplace clients: player interaction, shooting mechanics, UI systems and optimised physics environments.</li>
                      <li>Build deployment pipelines targeting standalone Quest hardware, and repair third-party projects without breaking their existing structure.</li>
                    </ul>
                  </div>

                  {/* Job 3 */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-[#121212] border-2 border-white/20" />
                    <div className="mb-2">
                      <h3 className="text-2xl font-semibold text-white/90">Graphic Designer &amp; Team Lead</h3>
                      <div className="text-white/40 flex items-center gap-3 mt-1">
                        <span className="font-medium text-white/60">Whiteboard</span>
                        <span>•</span>
                        <span>Jun 2020 – May 2023</span>
                        <span>•</span>
                        <span>Lucknow, India</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-3 text-white/60 leading-relaxed list-disc list-outside ml-4">
                      <li>Led a four-person design team, owning game UI and UX concepts, HUD layouts and icon sets within real-time rendering budgets.</li>
                      <li>Ran technical webinars on graphic design principles across three consecutive years.</li>
                    </ul>
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
                      6DOF flight combat against laser turrets and patrolling flying robots, built around a base-assault objective, with modular AI state machines tuned for a stable 90+ FPS on standalone hardware.
                    </p>
                  </div>
                  {/* Crunch Dunk VR */}
                  <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors">
                    <h3 className="text-xl font-semibold text-white/90 mb-2">Crunch Dunk VR (Doritos Collaboration)</h3>
                    <p className="text-sm text-orange-400/80 mb-4 font-mono">Meta Quest | Unity C# | Firebase</p>
                    <p className="text-white/60 leading-relaxed text-sm">
                      A branded 60-second throwing challenge built with Doritos for a real client brief — physics-driven motion-controller throws, real-time scoring and Firebase analytics, delivered on standalone Quest hardware.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Education */}
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold tracking-tight mb-8">Education</h2>
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
                  <h3 className="text-xl font-semibold text-white/90 mb-2">B.Tech, Computer Science</h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    Institute of Engineering and Technology (IET), Jankipuram, Lucknow — 2024 · CGPA 7.8
                  </p>
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
                  {['C#', 'C / C++', 'JavaScript', 'TypeScript', 'HLSL / Shader Graph', 'SQL', 'Unity 6', 'Unity 2022.3 LTS', 'Unity 2021.3 LTS', 'XR Interaction Toolkit', '6DOF Locomotion', 'Physics Systems', 'Raycast Prediction', 'ScriptableObjects', 'Object Pooling', 'Enemy AI', 'Animation Logic', 'Mobile UI', 'Firebase', 'REST APIs', 'Unity Ads', 'Unity Profiler', 'NUnit Testing', 'Git / GitHub', 'Android & WebGL Pipelines', 'Blender 5.1', 'URP / HDRP', 'Jira'].map((skill) => (
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
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Cross-timezone Communication</li>
                </ul>
              </motion.section>

              <motion.section variants={itemVariants} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
                <h2 className="text-2xl font-bold tracking-tight mb-6">Availability</h2>
                <ul className="space-y-4 text-white/70 text-sm leading-relaxed">
                  <li><span className="text-white/90 font-medium">Immediate start</span> — open to remote full-time, contract or project work.</li>
                  <li><span className="text-white/90 font-medium">Time zone:</span> IST (UTC+5:30), established record working across US, UK and European client hours.</li>
                  <li><span className="text-white/90 font-medium">Languages:</span> English (professional), Hindi (native).</li>
                  <li><span className="text-white/90 font-medium">References:</span> available on request.</li>
                </ul>
              </motion.section>
            </div>

          </div>
        </motion.div>
      </div>
    </main>
  );
}
