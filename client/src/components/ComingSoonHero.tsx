import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ComingSoonHero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-96 h-96 opacity-60"
          style={{
            background: "radial-gradient(circle at center, rgba(244, 163, 104, 0.15), transparent 60%)",
            filter: "blur(40px)",
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 opacity-60"
          style={{
            background: "radial-gradient(circle at center, rgba(188, 204, 173, 0.20), transparent 60%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <motion.div 
        className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            Event<span className="text-primary">.</span>OS
          </h1>
        </motion.div>

        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-accent-foreground text-sm font-medium mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Sparkles className="w-4 h-4" />
          <span className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">Launching Soon</span>
        </motion.div>

        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          A New Operating System for Modern Workflows
        </motion.h2>

        <motion.p 
          className="text-base sm:text-lg text-muted-foreground max-w-xl mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          A unified platform built to elevate how teams plan, collaborate, and execute.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <StatusCard />
        </motion.div>
      </motion.div>

    </div>
  );
}

function StatusCard() {
  return (
    <div className="relative p-6 sm:p-8 rounded-3xl bg-card border border-card-border max-w-md mx-auto"
      style={{
        boxShadow: "0 18px 45px rgba(29, 14, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.03)",
      }}
    >
      <div className="absolute -inset-3 rounded-3xl opacity-80 -z-10"
        style={{
          background: "radial-gradient(circle at 15% 15%, rgba(244, 163, 104, 0.12), transparent 50%), radial-gradient(circle at 85% 80%, rgba(188, 204, 173, 0.15), transparent 50%)",
          filter: "blur(15px)",
        }}
      />
      
      <p className="text-sm sm:text-base text-foreground text-center">
        A new foundation for event technology is coming soon.
      </p>
    </div>
  );
}
