// src/components/Footer.tsx
import Image from "next/image";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Expertise", href: "#expertise" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Orçamento", href: "#orcamento" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/murkecomp?igsh=MTZiOTlheGJtanlyMg==",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/murke-company/",
  },
  { label: "Behance", href: "https://www.behance.net/gabrielfreitasgf" },
];

const PHONE_DISPLAY = "(33) 8461-7647";
const PHONE_LINK = "5533846176477";
const EMAIL = "murkecompany@gmail.com";

export default function Footer() {
  return (
    <footer className="relative bg-preto pt-24 pb-10 px-6 md:px-16 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-vermelho-brilho/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(61,0,0,0.15),transparent)] pointer-events-none" />

      <div className="max-w-350 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-6">
            <Image
              src="/images/murke-sem-garras.png"
              alt="Murke Logo"
              width={150}
              height={50}
              className="opacity-60 hover:opacity-100 transition-opacity duration-500 object-contain"
            />
            <p className="text-cinza-claro text-sm font-medium leading-relaxed max-w-50">
              Design & Branding estratégico para marcas que dominam seus
              mercados.
            </p>
          </div>

          {/* Contato */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[4px] text-vermelho-brilho font-bold mb-2">
              Contato
            </span>
            <a
              href={`https://wa.me/${PHONE_LINK}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cinza-claro hover:text-branco text-sm font-medium transition-colors duration-300 flex items-center gap-2 group cursor-pointer"
            >
              <span className="w-1 h-1 rounded-full bg-vermelho-brilho/60 group-hover:bg-vermelho-brilho transition-colors" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-cinza-claro hover:text-branco text-sm font-medium transition-colors duration-300 flex items-center gap-2 group cursor-pointer"
            >
              <span className="w-1 h-1 rounded-full bg-vermelho-brilho/60 group-hover:bg-vermelho-brilho transition-colors" />
              {EMAIL}
            </a>
          </div>

          {/* Nav + Social */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-[4px] text-vermelho-brilho font-bold mb-2">
                Navegação
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-cinza-claro hover:text-branco text-sm uppercase tracking-[3px] font-semibold transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-[4px] text-vermelho-brilho font-bold mb-2">
                Social
              </span>
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cinza-claro hover:text-branco text-sm uppercase tracking-[3px] font-bold transition-colors duration-300 relative group cursor-pointer"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-vermelho-brilho group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-branco/6 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cinza-claro/60 text-[11px] uppercase tracking-[3px] font-medium">
            &copy; {new Date().getFullYear()} Murke Design & Branding
            <span className="text-vermelho-brilho/40 mx-3">—</span>
            Todos os direitos reservados
          </p>
          <a
            href="https://ericnacif.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-cinza-claro hover:text-branco transition-colors duration-300 cursor-pointer"
          >
            <span className="text-[11px] uppercase tracking-[3px] font-medium">
              Desenvolvido por
            </span>
            <span className="text-branco font-bold text-[12px] uppercase tracking-[3px] border-b border-vermelho-brilho/60 group-hover:border-vermelho-brilho pb-px transition-colors duration-300">
              Eric Nacif
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
