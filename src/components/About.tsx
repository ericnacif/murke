// src/components/About.tsx
"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { num: 7, suffix: "+", label: "Anos de experiência" },
  { num: 80, suffix: "+", label: "Projetos entregues" },
  { num: 100, suffix: "%", label: "Sob medida" },
];

const gabrielLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-freitas-88297b337/",
  },
  { label: "Instagram", href: "https://www.instagram.com/isntgabrielf/" },
  { label: "Behance", href: "https://www.behance.net/gabrielfreitasgf" },
];

function AnimatedCounter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, to, {
        duration: 4,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="sobre"
      className="relative py-32 px-5 md:px-10 bg-preto-fosco overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.025] bg-[repeating-linear-gradient(0deg,transparent,transparent_79px,rgba(255,255,255,1)_79px,rgba(255,255,255,1)_80px)] pointer-events-none" />

      <div ref={ref} className="max-w-350 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-vermelho-brilho text-[11px] uppercase tracking-[6px] font-bold block mb-6"
          >
            A essência
          </motion.span>
          <h2 className="font-nove text-5xl md:text-7xl text-branco uppercase tracking-tight leading-none">
            Por trás da{" "}
            <span className="text-transparent [-webkit-text-stroke:2px_#c0392b] italic">
              Marca
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-cinza-claro text-base md:text-lg font-normal leading-relaxed mb-10">
            <p>
              A Murke nasce da inconformidade com o padrão. Em um mercado
              saturado por soluções previsíveis, construímos marcas com
              intenção, identidade e profundidade.
            </p>
            <p>
              Design não é apenas estética — é linguagem. É percepção. É
              construção de valor. Cada projeto é pensado como um sistema visual
              com propósito, onde criatividade e estratégia caminham juntas.
            </p>
            <p>
              A arte está no centro de tudo, mas nunca desconectada do mercado.
              A Murke transforma expressão em direção, conceito em
              posicionamento e imagem em presença.
            </p>
          </div>

          <div className="border-t border-vermelho-brilho/30 pt-8">
            <p className="text-branco font-bold text-lg md:text-2xl border-l-2 border-vermelho-brilho pl-6 leading-snug">
              Toda identidade é um posicionamento.
              <br />
              <span className="text-vermelho-brilho">
                As fortes não pedem espaço — ocupam.
              </span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 border border-branco/8 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="flex flex-col items-center text-center py-10 px-4 border-r border-branco/8 last:border-r-0"
            >
              <span className="font-nove text-4xl md:text-5xl font-bold text-vermelho-brilho mb-2">
                <AnimatedCounter to={stat.num} suffix={stat.suffix} />
              </span>
              <span className="text-branco/70 text-[10px] uppercase tracking-[4px] font-bold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="relative bg-preto border border-branco/8"
        >
          <div className="absolute top-0 left-0 w-16 h-px bg-vermelho-brilho" />
          <div className="absolute top-0 left-0 w-px h-16 bg-vermelho-brilho" />
          <div className="absolute bottom-0 right-0 w-16 h-px bg-vermelho-brilho/40" />
          <div className="absolute bottom-0 right-0 w-px h-16 bg-vermelho-brilho/40" />

          <div className="p-8 md:p-14">
            <div className="flex items-center gap-6 mb-8">
              <div className="relative shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 border border-vermelho-escuro bg-preto-secundario flex items-center justify-center">
                  <span className="font-nove text-xl md:text-2xl font-black text-vermelho-brilho tracking-wider">
                    GF
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-vermelho-escuro border border-vermelho-brilho/40" />
              </div>
              <div>
                <h3 className="font-nove text-xl md:text-2xl uppercase tracking-widest text-branco mb-1 leading-tight">
                  Gabriel Freitas
                </h3>
                <span className="text-vermelho-brilho text-[9px] uppercase tracking-[3px] font-bold block">
                  Fundador & Direção Criativa
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-branco/8 mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-[1fr_160px] gap-8 md:gap-12">
              <div className="space-y-4 text-cinza-claro text-sm md:text-base font-normal leading-relaxed">
                <p>
                  Gabriel Freitas é o fundador e diretor criativo da Murke. Sua
                  visão parte da compreensão de que design não é apenas
                  expressão visual, mas uma ferramenta estratégica de
                  posicionamento.
                </p>
                <p>
                  Sua trajetória na arte começou ainda cedo, explorando
                  ilustrações no papel e evoluindo para o desenho digital. A
                  busca nunca foi apenas técnica, mas investigativa —
                  experimentar linguagens, testar novas formas de expressão e
                  expandir repertório sempre fizeram parte do processo.
                </p>
                <p>
                  Essa base artística moldou um olhar atento à composição,
                  forma, equilíbrio e significado. Com o tempo, a sensibilidade
                  criativa se consolidou ao lado de uma visão estratégica de
                  mercado, dando origem a uma abordagem que une arte e direção.
                </p>
                <p>
                  Para Gabriel, marcas não devem apenas existir, devem ocupar
                  espaço com clareza e intenção. À frente da Murke, conduz cada
                  projeto com olhar autoral e direcionamento estratégico.
                </p>
                <p className="text-branco font-semibold italic border-l-2 border-vermelho-brilho pl-4 text-base md:text-lg leading-snug">
                  Criar, para ele, não é apenas produzir imagens.
                  <br />É construir significado.
                </p>
              </div>

              <div className="flex md:flex-col flex-wrap gap-4 md:gap-5 pt-1 md:border-l md:border-branco/8 md:pl-8">
                <span className="text-[9px] uppercase tracking-[4px] text-vermelho-brilho font-bold hidden md:block mb-1">
                  Redes
                </span>
                {gabrielLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-cinza-claro text-[11px] font-bold uppercase tracking-[3px] hover:text-vermelho-brilho transition-colors duration-300 group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-vermelho-brilho group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
