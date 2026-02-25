// src/components/WhatsAppButton.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const PHONE = "5533846176477";
const MESSAGE =
  "Olá! Vim pelo site e gostaria de saber mais sobre os serviços da Murke.";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [pulsing, setPulsing] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2500);
    const p = setTimeout(() => setPulsing(false), 6000);
    return () => {
      clearTimeout(t);
      clearTimeout(p);
    };
  }, []);

  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
        >
          {/* Pulse rings */}
          {pulsing && (
            <>
              <span className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
              <span
                className="absolute inset-0 rounded-full bg-green-500/10 animate-ping"
                style={{ animationDelay: "0.3s" }}
              />
            </>
          )}

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco no WhatsApp"
            className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5c] shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.6)] transition-all duration-300 group"
          >
            {/* WhatsApp SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.534 5.857L.057 23.5a.5.5 0 0 0 .613.614l5.723-1.492A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.893 9.893 0 0 1-5.031-1.373l-.36-.214-3.733.973.998-3.645-.236-.374A9.857 9.857 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1c5.467 0 9.9 4.433 9.9 9.9 0 5.467-4.433 9.9-9.9 9.9z" />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
