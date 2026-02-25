// src/components/Services.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const servicos = [
  {
    num: "01",
    titulo: "Design Gráfico",
    desc: "Peças visuais de alto impacto que comunicam autoridade: logotipos, papelaria corporativa, materiais institucionais e posts que traduzem a essência da sua marca em cada detalhe.",
    keyword: "Visual",
    acento: "Forma que fala",
  },
  {
    num: "02",
    titulo: "Branding",
    desc: "Construção completa de identidade: sistema visual, brandbook, paleta, tipografia e guidelines. Tudo o que sua marca precisa para existir com consistência em qualquer ponto de contato.",
    keyword: "Identidade",
    acento: "Marca que permanece",
  },
  {
    num: "03",
    titulo: "Posicionamento Visual",
    desc: "Estratégia para marcas que precisam ocupar espaço com intenção. Reestruturação visual e conceitual para modernizar, reposicionar e consolidar presença de mercado.",
    keyword: "Estratégia",
    acento: "Espaço que se conquista",
  },
  {
    num: "04",
    titulo: "Marketing Visual",
    desc: "Criativos para anúncios, thumbnails estratégicas e direção visual para conteúdo. Materiais de campanha que convertem — com identidade e intenção em cada pixel.",
    keyword: "Performance",
    acento: "Impacto que converte",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="expertise"
      className="relative py-36 px-5 md:px-10 bg-preto overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-linear-to-b from-vermelho-escuro/60 to-transparent" />

      <div className="max-w-350 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="mb-28 text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-vermelho-brilho text-[10px] uppercase tracking-[6px] font-bold block mb-6"
          >
            O que entregamos
          </motion.span>

          <h2 className="font-nove text-5xl md:text-7xl text-branco uppercase tracking-tight leading-none">
            Nossa{" "}
            <span className="text-transparent [-webkit-text-stroke:2px_#c0392b] italic">
              Expertise
            </span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            className="w-24 h-px bg-linear-to-r from-transparent via-vermelho-brilho to-transparent mt-8 mx-auto"
          />
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-branco/8"
        >
          {servicos.map((servico, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 60, skewY: 2 },
                visible: {
                  opacity: 1,
                  y: 0,
                  skewY: 0,
                  transition: {
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                  },
                },
              }}
              className={`group relative p-12 md:p-14 overflow-hidden cursor-default border-branco/8
                ${index % 2 === 0 ? "md:border-r" : ""}
                ${index < 2 ? "border-b" : ""}
              `}
            >
              <div className="absolute inset-0 bg-vermelho-escuro/8 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-vermelho-brilho transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />

              <span className="absolute -top-2 -right-2 font-nove text-[110px] font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.05)] group-hover:[-webkit-text-stroke:1px_rgba(107,0,0,0.25)] transition-all duration-500 leading-none select-none">
                {servico.num}
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-4 h-px bg-vermelho-brilho" />
                  <span className="text-vermelho-brilho text-xs uppercase tracking-[5px] font-bold">
                    {servico.keyword}
                  </span>
                </div>

                <h3 className="font-nove text-2xl md:text-3xl font-bold text-branco uppercase tracking-widest mb-3 group-hover:text-vermelho-brilho transition-colors duration-300 leading-tight">
                  {servico.titulo}
                </h3>

                <p className="text-vermelho-brilho/60 text-xs uppercase tracking-[4px] font-semibold mb-6 group-hover:text-vermelho-brilho/90 transition-colors duration-300">
                  {servico.acento}
                </p>

                <div className="w-8 h-px bg-vermelho-escuro mb-6 group-hover:w-16 transition-all duration-500" />

                <p className="text-cinza-claro text-sm md:text-[15px] leading-relaxed font-normal group-hover:text-branco/80 transition-colors duration-300">
                  {servico.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
