// src/components/Hero.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// Delay base — após a animação de entrada (ClawTransition ~2.4s)
const D = 2.5;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative h-screen w-full flex flex-col items-center justify-center bg-preto"
    >
      <div className="absolute inset-0 -z-20 bg-preto" />
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,rgba(61,0,0,0.6),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_50%,rgba(61,0,0,0.25),transparent)]" />
      </motion.div>

      <motion.div
        className="absolute left-8 top-0 h-full w-px bg-linear-to-b from-transparent via-vermelho-escuro/50 to-transparent hidden md:block pointer-events-none"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 1.5,
          delay: D,
          ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        }}
      />
      <motion.div
        className="absolute right-8 top-0 h-full w-px bg-linear-to-b from-transparent via-vermelho-escuro/50 to-transparent hidden md:block pointer-events-none"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 1.5,
          delay: D + 0.2,
          ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        }}
      />

      {[
        "top-8 left-8 border-t border-l",
        "top-8 right-8 border-t border-r",
        "bottom-8 left-8 border-b border-l",
        "bottom-8 right-8 border-b border-r",
      ].map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute w-8 h-8 border-vermelho-escuro/60 hidden md:block pointer-events-none ${cls}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: D + i * 0.08 }}
        />
      ))}

      <motion.div
        style={{ opacity }}
        className="relative flex flex-col items-center z-10 w-full px-5"
      >
        <motion.div
          initial={{ opacity: 0, y: 60, skewY: 2 }}
          animate={{ opacity: 1, y: 0, skewY: 0 }}
          transition={{
            duration: 0.9,
            delay: D,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="relative mb-10"
        >
          <Image
            src="/images/murke.png"
            alt="Murke Branding"
            width={680}
            height={280}
            className="drop-shadow-[0_0_80px_rgba(192,57,43,0.5)] object-contain w-auto h-auto max-w-[85vw] md:max-w-170"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
            delay: D + 0.4,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="w-full max-w-xs h-px bg-linear-to-r from-transparent via-vermelho-brilho to-transparent mb-8 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: D + 0.2,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="text-cinza-claro uppercase text-xs md:text-sm tracking-[8px] md:tracking-[12px] font-semibold text-center"
        >
          Arte com intenção. Identidade com direção.
        </motion.p>
      </motion.div>
    </section>
  );
}
