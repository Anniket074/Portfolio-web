import { categories } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const data = categories[resolvedParams.category];

  if (!data) {
    notFound();
  }

  return (
    <main className="bg-[#121212] min-h-screen text-white relative font-sans p-8 md:p-16 lg:p-24 selection:bg-white/20">
      <div className="max-w-5xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={18} />
          <span>Back to Portfolio</span>
        </Link>
        
        <div className="mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">{data.title}</h1>
          <div className="h-1 w-24 bg-white/20 rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {data.items.map((project, idx) => (
            <div 
              key={idx}
              className="group relative rounded-3xl border border-white/5 bg-white-[0.02] overflow-hidden transition-all duration-500 hover:bg-white-[0.04] p-8 md:p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="w-full aspect-video bg-white/5 rounded-xl mb-8 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors overflow-hidden relative">
                {project.video ? (
                  project.video.match(/\.(mp4|webm|ogg)$/i) ? (
                    <video 
                      src={project.video} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-contain bg-black/20"
                    />
                  ) : (
                    <img 
                      src={project.video} 
                      alt={project.title}
                      className="w-full h-full object-contain bg-black/20"
                    />
                  )
                ) : (
                  <span className="text-white/20 text-sm tracking-widest uppercase">Project Preview</span>
                )}
              </div>

              <div className="flex flex-col h-full relative z-10">
                <span className="text-white/30 text-xs font-mono mb-3">0{idx + 1}</span>
                <h3 className="text-3xl font-semibold mb-4 text-white/90">
                  {project.title}
                </h3>
                <p className="text-white/50 leading-relaxed whitespace-pre-wrap">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
