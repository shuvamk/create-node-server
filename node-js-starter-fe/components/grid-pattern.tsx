"use client";

import { motion } from "framer-motion";

export function GridPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="grid grid-cols-12 gap-4 h-full w-full opacity-20">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                delay: Math.random() * 0.3,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: Math.random() * 5 + 5
              }}
              className="aspect-square bg-primary/20 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}