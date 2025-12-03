import { motion } from "framer-motion";

export default function ComingSoonHero() {
  return (
    <div className="relative h-[100dvh] overflow-hidden flex flex-col items-center justify-center px-5 sm:px-6 md:px-8">
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
          className="mb-4 sm:mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Event<span className="text-primary">.</span>OS
          </h1>
        </motion.div>

        <motion.h2 
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-2 sm:mb-3 tracking-tight leading-snug px-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          An Operating System Built for Events
        </motion.h2>

        <motion.p 
          className="text-sm sm:text-base text-muted-foreground max-w-xs sm:max-w-md md:max-w-lg mb-6 sm:mb-8 px-2 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Where planning, logistics, data, and execution work as one.
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
    <div className="relative p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-card border border-card-border max-w-xs sm:max-w-sm mx-auto"
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
      
      <p className="text-xs sm:text-sm text-foreground text-center leading-relaxed">
        A new foundation for event technology is coming soon.
      </p>
    </div>
  );
}
