// src/components/Contact.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback, useState } from "react";

const EMAIL_DOMAINS = [
  "gmail.com",
  "outlook.com",
  "hotmail.com",
  "yahoo.com",
  "icloud.com",
  "live.com",
  "protonmail.com",
];

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (!digits.length) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const inputClass =
  "block w-full bg-transparent border-b-2 border-white/15 py-3 text-branco text-base font-semibold focus:outline-none focus:border-vermelho-brilho transition-colors duration-300 placeholder-transparent";
const labelClass =
  "absolute left-0 -top-6 text-vermelho-brilho text-sm uppercase tracking-[5px] font-bold pointer-events-none";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [emailValue, setEmailValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handlePhoneInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.value = formatPhone(e.target.value);
    },
    [],
  );

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmailValue(val);
    const atIdx = val.indexOf("@");
    if (atIdx !== -1) {
      const after = val.slice(atIdx + 1);
      const filtered = EMAIL_DOMAINS.filter(
        (d) => d.startsWith(after) && d !== after,
      );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
    }
  };

  const applySuggestion = (domain: string) => {
    const atIdx = emailValue.indexOf("@");
    const base = atIdx !== -1 ? emailValue.slice(0, atIdx) : emailValue;
    setEmailValue(`${base}@${domain}`);
    setShowSuggestions(false);
  };

  const fieldWrap = "relative pt-8 pb-2";
  const underline =
    "absolute bottom-0 left-0 w-0 h-0.5 bg-vermelho-brilho peer-focus:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]";

  return (
    <section
      id="orcamento"
      className="relative py-36 px-6 md:px-16 overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(61,0,0,0.3),transparent)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-vermelho-brilho/40 to-transparent" />

      <div ref={ref} className="max-w-350 mx-auto">
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-vermelho-brilho text-[11px] uppercase tracking-[6px] font-bold block mb-6"
          >
            Próximo passo
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="font-nove text-5xl md:text-8xl text-branco uppercase tracking-tight leading-none"
            >
              Vamos{" "}
              <span className="text-transparent [-webkit-text-stroke:2px_#c0392b] italic">
                Criar?
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-cinza-claro text-base md:text-lg mt-8 max-w-xl leading-relaxed font-medium"
          >
            Preencha o formulário detalhando sua necessidade. Retornaremos em
            breve para agendar um diagnóstico focado no seu negócio.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="w-full border-t border-white/8 pt-16"
        >
          <form className="w-full">
            {/* Row 1: Nome + Tel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={fieldWrap}
              >
                <label htmlFor="nome" className={labelClass}>
                  Nome / Empresa
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  autoComplete="name"
                  className={`peer ${inputClass}`}
                  placeholder="Nome"
                />
                <div className={underline} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={fieldWrap}
              >
                <label htmlFor="telefone" className={labelClass}>
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  autoComplete="tel"
                  onChange={handlePhoneInput}
                  className={`peer ${inputClass}`}
                  placeholder="(XX) XXXXX-XXXX"
                />
                <div className={underline} />
              </motion.div>
            </div>

            {/* E-mail — label SEMPRE acima (não usa peer), sem sobreposição */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              className={`${fieldWrap} mb-12`}
            >
              <label htmlFor="email" className={labelClass}>
                E-mail Profissional
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                value={emailValue}
                onChange={handleEmailChange}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                className={`peer ${inputClass}`}
                placeholder="seu@email.com"
              />
              <div className={underline} />

              {/* Dropdown autocomplete */}
              {showSuggestions && (
                <div
                  className="absolute top-full left-0 right-0 md:w-80 border border-vermelho-brilho/30 z-20 shadow-[0_8px_32px_rgba(0,0,0,0.7)]"
                  style={{ backgroundColor: "#161616" }}
                >
                  {suggestions.map((domain) => {
                    const base = emailValue.slice(0, emailValue.indexOf("@"));
                    return (
                      <button
                        key={domain}
                        type="button"
                        onMouseDown={() => applySuggestion(domain)}
                        className="w-full text-left px-5 py-3 text-sm font-semibold flex items-center gap-1 hover:bg-vermelho-escuro transition-colors duration-200 group"
                      >
                        <span className="text-cinza-claro group-hover:text-branco">
                          {base}
                        </span>
                        <span className="text-vermelho-brilho font-bold">
                          @{domain}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </motion.div>

            {/* Descrição */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className={`${fieldWrap} mb-20`}
            >
              <label htmlFor="descricao" className={labelClass}>
                Fale sobre o projeto
              </label>
              <textarea
                id="descricao"
                name="descricao"
                required
                rows={5}
                className={`peer ${inputClass} resize-none`}
                placeholder="Descreva seu projeto..."
              />
              <div className={underline} />
            </motion.div>

            {/* Submit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-8"
            >
              <button
                type="submit"
                className="group relative overflow-hidden cursor-pointer px-16 py-5 font-bold text-sm uppercase tracking-[5px] border-2 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  color: "#f0ece6",
                  borderColor: "#c0392b",
                  boxShadow: "0 0 0 rgba(192,57,43,0)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 40px rgba(192,57,43,0.5)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "0 0 0 rgba(192,57,43,0)")
                }
              >
                <span className="absolute inset-0 bg-vermelho-brilho scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                <span className="relative z-10 flex items-center gap-3">
                  Solicitar Orçamento
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
              <span className="text-cinza-claro text-[11px] uppercase tracking-[4px] font-semibold">
                Resposta em até 48h úteis
              </span>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
