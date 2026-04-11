import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white relative font-sans">
      <div className="relative w-full">
        <Overlay />
        <ScrollyCanvas />
      </div>
      <Projects />
      <Contact />
    </main>
  );
}
