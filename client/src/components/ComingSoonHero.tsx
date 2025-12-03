import { motion } from "framer-motion";

export default function ComingSoonHero() {
  return (
    <div className="relative h-screen overflow-hidden flex flex-col items-center justify-center px-5 sm:px-6 md:px-8">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-20 -left-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 opacity-50 sm:opacity-60"
          style={{
            background: "radial-gradient(circle at center, rgba(244, 163, 104, 0.18), transparent 65%)",
            filter: "blur(30px)",
          }}
        />
        <div 
          className="absolute -bottom-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 opacity-50 sm:opacity-60"
          style={{
            background: "radial-gradient(circle at center, rgba(188, 204, 173, 0.22), transparent 65%)",
            filter: "blur(30px)",
          }}
        />
      </div>

      <motion.div 
        className="relative z-10 flex flex-col items-center text-center w-full max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div 
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Event<span className="text-primary">.</span>OS
          </h1>
        </motion.div>

        <motion.h2 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-3 sm:mb-4 tracking-tight leading-snug px-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          A New Operating System for Modern Workflows
        </motion.h2>

        <motion.p 
          className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-md sm:max-w-lg md:max-w-xl mb-8 sm:mb-10 px-2 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          A unified platform built to elevate how teams plan, collaborate, and execute.
        </motion.p>

        <motion.div
          className="w-full px-2"
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
    <div className="relative p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-card border border-card-border max-w-sm sm:max-w-md mx-auto"
      style={{
        boxShadow: "0 12px 35px rgba(29, 14, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.02)",
      }}
    >
      <div className="absolute -inset-2 sm:-inset-3 rounded-2xl sm:rounded-3xl opacity-70 sm:opacity-80 -z-10"
        style={{
          background: "radial-gradient(circle at 15% 15%, rgba(244, 163, 104, 0.10), transparent 50%), radial-gradient(circle at 85% 80%, rgba(188, 204, 173, 0.12), transparent 50%)",
          filter: "blur(12px)",
        }}
      />
      
      <p className="text-sm sm:text-base text-foreground text-center leading-relaxed">
        A new foundation for event technology is coming soon.
      </p>
    </div>
  );
}
