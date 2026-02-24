import { CustomCursor } from "@/components/ui/CustomCursor";
import { Hero } from "@/components/sections/Hero";
import { SocialBar } from "@/components/sections/SocialBar";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 selection:text-purple-200">
      <CustomCursor />

      {/* Global animated background radial gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-cyan-700/10 blur-[120px] mix-blend-screen" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-700/10 blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 space-y-24 pb-32">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </div>

      <SocialBar />
    </main>
  );
}
