import { ExternalLink, Code } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "3D Motion & Commercials",
      description: "Cinematic commercial teasers, 3D product animations, and procedural motion design with custom audio.",
      tags: ["3D Animation", "Blender", "Motion Design", "CGI"],
      href: "/projects/motion",
    },
    {
      title: "VR Development",
      description: "Immersive virtual reality experiences and interactive virtual worlds built for modern VR headsets.",
      tags: ["Unity", "VR", "C#"],
      href: "/projects/vr",
    },
    {
      title: "2D Game Development",
      description: "Engaging 2D games focusing on smooth mechanics, sprite animations, and compelling gameplay loops.",
      tags: ["2D", "Game Design", "Animation"],
      href: "/projects/2d",
    },
    {
      title: "3D Game Development & Modelling",
      description: "High-fidelity 3D modeling and full-scale 3D game development with advanced rendering and physics.",
      tags: ["3D Modeling", "Blender", "Unreal/Unity"],
      href: "/projects/3d",
    }
  ];

  return (
    <section className="relative z-20 bg-[#121212] pt-24 pb-16 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Selected Work
          </h2>
          <div className="h-1 w-24 bg-white/20 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Link 
              href={project.href}
              key={index}
              className="block group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-white mb-3 flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-3 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white/60 hover:text-white transition-colors">
                      <Code size={20} />
                    </span>
                    <span className="text-white/60 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </span>
                  </div>
                </h3>
                
                <p className="text-white/60 text-base md:text-lg mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium text-white/70 bg-white/5 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
