import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { MAIN_INFO } from "../../data/content";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-[72px] font-sans font-extrabold tracking-tighter leading-[1.1] text-primary-black mb-6 max-w-[900px]"
        >
          {MAIN_INFO.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed mb-10"
        >
          {MAIN_INFO.subHeadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" onClick={() => document.getElementById('services-hub')?.scrollIntoView({ behavior: 'smooth' })}>
            Pilih Layanan
          </Button>
        </motion.div>

      </div>
      
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-50 blur-[120px] rounded-full -z-10 opacity-60 pointer-events-none" />
    </section>
  );
}
