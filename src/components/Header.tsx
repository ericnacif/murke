"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Expertise", href: "#expertise" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Orçamento", href: "#orcamento" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 2.8,
          ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        }}
        style={{
          background: isScrolled ? "rgba(10,10,10,0.96)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(192,57,43,0.15)" : "none",
          paddingTop: isScrolled ? "0.4rem" : "0.8rem",
          paddingBottom: isScrolled ? "0.4rem" : "0.8rem",
          transition:
            "padding 0.4s cubic-bezier(0.16,1,0.3,1), background 0.4s, border 0.4s",
        }}
        className="fixed top-0 w-full z-50"
      >
        <div className="max-w-350 mx-auto px-8 flex justify-between items-center">
          <a
            href="#inicio"
            className="relative z-50 transition-opacity hover:opacity-70 duration-300"
          >
            <Image
              src="/images/murke-sem-garras.png"
              alt="Murke Design"
              width={isScrolled ? 100 : 120}
              height={isScrolled ? 34 : 40}
              className="object-contain"
              style={{ transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)" }}
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-10 lg:gap-14">
            {navItems.map((item, i) => {
              const isCta = item.label === "Orçamento";

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.9 + i * 0.08 }}
                  className={
                    isCta
                      ? "group relative overflow-hidden flex items-center justify-center px-6 py-2 text-branco font-nove text-sm md:text-base uppercase tracking-[4px] border border-vermelho-brilho/40 hover:border-vermelho-brilho transition-colors duration-300"
                      : "group relative text-branco/75 font-nove text-sm md:text-base uppercase tracking-[4px] hover:text-branco transition-colors duration-300"
                  }
                >
                  {isCta ? (
                    <>
                      <span className="absolute inset-0 bg-vermelho-brilho scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                      <span className="relative z-10">{item.label}</span>
                    </>
                  ) : (
                    <>
                      <span>{item.label}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-vermelho-brilho group-hover:w-full transition-all duration-300" />
                    </>
                  )}
                </motion.a>
              );
            })}
          </nav>

          <button
            className="md:hidden relative z-50 text-branco/80 hover:text-branco transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <X size={28} strokeWidth={1.5} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Menu size={28} strokeWidth={1.5} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            className="fixed inset-0 bg-preto z-40 flex flex-col items-center justify-center gap-2"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(61,0,0,0.3),transparent)] pointer-events-none" />
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="font-nove text-4xl text-branco uppercase tracking-[6px] py-5 hover:text-vermelho-brilho transition-colors duration-300"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 text-cinza-claro text-[11px] uppercase tracking-[4px] font-medium"
            >
              Murke Design & Branding
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
