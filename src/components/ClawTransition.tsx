// src/components/ClawTransition.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function ClawTransition() {
  const [phase, setPhase] = useState<"intro" | "open" | "done">("intro");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("open"), 1600);
    const t2 = setTimeout(() => setPhase("done"), 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-9999 pointer-events-none"
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          {/* Painel esquerdo */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-[#050505] origin-left"
            animate={phase === "open" ? { x: "-100%" } : { x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
            }}
          />
          {/* Painel direito */}
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-[#050505] origin-right"
            animate={phase === "open" ? { x: "100%" } : { x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
            }}
          />

          {/* Centro fixo — logo geométrica animada */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-10">
            {/* SVG premium: círculo + grid + losango + ponto */}
            <motion.svg
              viewBox="0 0 160 160"
              className="w-28 h-28 md:w-40 md:h-40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Anel externo */}
              <motion.circle
                cx="80"
                cy="80"
                r="74"
                stroke="#c0392b"
                strokeWidth="0.75"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
              {/* Linhas de grade radiais */}
              {[0, 45, 90, 135].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 80 + 74 * Math.cos(rad);
                const y1 = 80 + 74 * Math.sin(rad);
                const x2 = 80 - 74 * Math.cos(rad);
                const y2 = 80 - 74 * Math.sin(rad);
                return (
                  <motion.line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#c0392b"
                    strokeWidth="0.5"
                    opacity="0.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.07 }}
                  />
                );
              })}
              {/* Círculo médio */}
              <motion.circle
                cx="80"
                cy="80"
                r="42"
                stroke="#c0392b"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              />
              {/* Losango interno */}
              <motion.path
                d="M80 38 L122 80 L80 122 L38 80 Z"
                stroke="#c0392b"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
              {/* Cruz fina */}
              <motion.line
                x1="80"
                y1="38"
                x2="80"
                y2="122"
                stroke="#c0392b"
                strokeWidth="0.5"
                opacity="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              />
              <motion.line
                x1="38"
                y1="80"
                x2="122"
                y2="80"
                stroke="#c0392b"
                strokeWidth="0.5"
                opacity="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              />
              {/* Ponto central */}
              <motion.circle
                cx="80"
                cy="80"
                r="5"
                fill="#c0392b"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35, delay: 1.15 }}
              />
              {/* Halo do ponto */}
              <motion.circle
                cx="80"
                cy="80"
                r="12"
                stroke="#c0392b"
                strokeWidth="0.75"
                opacity="0.5"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.5 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              />
            </motion.svg>

            {/* Wordmark */}
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <span className="font-nove text-branco text-2xl md:text-3xl uppercase tracking-[0.5em]">
                Murke
              </span>
              <motion.div
                className="h-px bg-vermelho-brilho"
                initial={{ width: 0 }}
                animate={{ width: "3rem" }}
                transition={{ duration: 0.5, delay: 0.9 }}
              />
              <motion.span
                className="text-vermelho-brilho text-[9px] uppercase tracking-[7px] font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.1 }}
              >
                Design & Branding
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
