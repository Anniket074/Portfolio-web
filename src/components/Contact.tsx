import { Mail, Phone, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative z-20 bg-[#121212] pb-32 pt-16 px-6 md:px-12 flex flex-col items-center border-t border-white/5">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Discuss Your Project
        </h2>
        <div className="h-1 w-24 bg-white/20 rounded-full mx-auto mb-10"></div>
        <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto">
          Whether you have a game idea, need an immersive VR enterprise solution, a custom 2D or 3D game, or just want to collaborate, I am always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Card */}
          <a href="mailto:anniket19121995@gmail.com" className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10 hover:bg-white/10 transition-all duration-300 text-center flex flex-col items-center justify-center hover:scale-[1.02]">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
              <Mail size={32} className="text-white/80 group-hover:text-blue-400 transition-colors" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Email</h3>
            <p className="text-white/60 tracking-wide">anniket19121995@gmail.com</p>
          </a>

          {/* Phone & WhatsApp Card */}
          <a href="https://wa.me/918003273794" target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10 hover:bg-white/10 transition-all duration-300 text-center flex flex-col items-center justify-center hover:scale-[1.02]">
            <div className="flex gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Phone size={32} className="text-white/80 group-hover:text-green-400 transition-colors" />
              </div>
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                <MessageSquare size={32} className="text-white/80 group-hover:text-white transition-colors" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Call & WhatsApp</h3>
            <p className="text-white/60 tracking-wide">+91 80032 73794</p>
          </a>
        </div>
      </div>
    </section>
  );
}
