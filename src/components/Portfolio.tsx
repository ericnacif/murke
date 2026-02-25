// src/components/Portfolio.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projetos = [
  {
    id: 1,
    cliente: "Obsidian Corp",
    categoria: "Identidade Visual",
    ano: "2024",
    desc: "Sistema completo de identidade para consultoria de investimentos",
    index: "001",
  },
  {
    id: 2,
    cliente: "Vantage Studio",
    categoria: "Rebranding",
    ano: "2024",
    desc: "Reestruturação visual para estúdio de arquitetura premium",
    index: "002",
  },
  {
    id: 3,
    cliente: "Nexus Group",
    categoria: "Branding",
    ano: "2023",
    desc: "Construção de marca do zero para holding empresarial",
    index: "003",
  },
  {
    id: 4,
    cliente: "Aurum Labs",
    categoria: "UI/UX & Logótipo",
    ano: "2023",
    desc: "Design de produto e identidade para startup de biotecnologia",
    index: "004",
  },
];

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="portfolio"
      className="relative py-36 px-5 md:px-10 bg-preto-fosco overflow-hidden"
    >
      {/* Decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-40 bg-linear-to-t from-vermelho-brilho/60 to-transparent" />

      <div className="max-w-350 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-28"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-vermelho-brilho text-[10px] uppercase tracking-[6px] font-bold block mb-6"
          >
            Trabalhos selecionados
          </motion.span>
          <h2 className="font-nove text-5xl md:text-7xl text-branco uppercase tracking-tight leading-none">
            Casos de{" "}
            <span className="text-transparent [-webkit-text-stroke:2px_#4a0000] italic">
              Sucesso
            </span>
          </h2>
        </motion.div>

        {/* Project list - editorial style */}
        <div ref={ref} className="border-t border-branco/10">
          {projetos.map((projeto, i) => (
            <motion.div
              key={projeto.id}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setHoveredId(projeto.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative border-b border-branco/10 cursor-pointer"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-vermelho-escuro/8 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />

              <div className="relative py-8 md:py-10 flex items-center justify-between gap-6 px-0 md:px-4">
                {/* Index */}
                <span className="text-branco/20 text-xs font-bold tabular-nums tracking-widest w-10 shrink-0 group-hover:text-vermelho-brilho/60 transition-colors duration-300">
                  {projeto.index}
                </span>

                {/* Title */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-nove text-2xl md:text-4xl font-bold text-branco uppercase tracking-wide group-hover:text-vermelho-brilho transition-colors duration-300 truncate">
                    {projeto.cliente}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm mt-1 font-medium truncate group-hover:text-gray-400 transition-colors duration-300">
                    {projeto.desc}
                  </p>
                </div>

                {/* Category & year */}
                <div className="hidden md:flex flex-col items-end shrink-0">
                  <span className="text-vermelho-brilho text-xs uppercase tracking-[4px] font-bold">
                    {projeto.categoria}
                  </span>
                  <span className="text-gray-600 text-xs tracking-widest mt-1">
                    {projeto.ano}
                  </span>
                </div>

                {/* Arrow */}
                <motion.div
                  animate={{
                    x: hoveredId === projeto.id ? 0 : 12,
                    opacity: hoveredId === projeto.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="shrink-0 text-vermelho-brilho text-lg font-bold"
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid view - bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {projetos.slice(0, 2).map((projeto, index) => (
            <motion.div
              key={`grid-${projeto.id}`}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative aspect-video bg-preto border border-branco/8 overflow-hidden cursor-pointer"
            >
              {/* Placeholder gradient bg */}
              <div className="absolute inset-0 bg-linear-to-br from-preto-secundario to-preto" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_center,rgba(46,0,0,0.6),transparent)]" />

              {/* Grid lines decoration */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[40px_40px] group-hover:opacity-5 transition-opacity duration-500" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-preto via-preto/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <span className="text-vermelho-brilho text-[10px] uppercase tracking-[5px] font-bold block mb-3">
                  {projeto.categoria}
                </span>
                <h3 className="font-nove text-2xl md:text-3xl font-bold text-branco uppercase tracking-widest">
                  {projeto.cliente}
                </h3>
              </div>

              {/* Index top right */}
              <span className="absolute top-6 right-6 text-branco/10 text-xs tracking-widest font-bold group-hover:text-vermelho-brilho/30 transition-colors duration-500">
                {projeto.index}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
