// src/app/layout.tsx
import type { Metadata } from "next";
import { Barlow, Montserrat } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Murke | Design & Branding Estratégico",
  description:
    "Estúdio focado em construir identidades visuais com peso, narrativa e presença de mercado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" style={{ backgroundColor: "#0a0a0a" }}>
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/murke-garras.png?v=4"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/murke-garras.png?v=4"
        />
        <link rel="shortcut icon" href="/images/murke-garras.png?v=4" />
        <link rel="apple-touch-icon" href="/images/murke-garras.png?v=4" />
      </head>
      <body
        className={`${barlow.variable} ${montserrat.variable} antialiased`}
        style={{
          backgroundColor: "#0a0a0a",
          color: "#f0ece6",
          fontFamily: "var(--font-barlow), sans-serif",
          minHeight: "100vh",
        }}
      >
        <ScrollToTop />
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
