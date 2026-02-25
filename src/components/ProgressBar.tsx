// src/components/ProgressBar.tsx
// Implementação via DOM direto — 100% funcional sem depender de Framer Motion ou z-index
"use client";

import { useEffect } from "react";

export default function ProgressBar() {
  useEffect(() => {
    // Cria o elemento via JS puro para garantir que aparece
    const bar = document.createElement("div");
    bar.id = "progress-bar";
    bar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      width: 0%;
      background: linear-gradient(90deg, #c0392b, #e74c3c);
      z-index: 99999;
      pointer-events: none;
      box-shadow: 0 0 10px rgba(192,57,43,0.9);
      transition: width 0.08s linear;
    `;
    document.body.appendChild(bar);

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${progress}%`;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", update);
      bar.remove();
    };
  }, []);

  return null;
}
