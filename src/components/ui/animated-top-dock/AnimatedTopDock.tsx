"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createTopDockController, type TopDockOptions } from "./topDockController";
import { 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Video, 
  Scale, 
  FileText, 
  ArrowUpRight,
  MessageCircle
} from "lucide-react";

export type AnimatedTopDockProps = {
  proximity?: number;
  spring?: number;
  damping?: number;
  widthGrowth?: number;
  heightGrowth?: number;
  drop?: number;
  className?: string;
  lang?: "en" | "id" | "ar";
  onLangChange?: (lang: "en" | "id" | "ar") => void;
};

export const ANIMATED_TOP_DOCK_DEFAULTS = {
  proximity: 122,
  spring: 0.19,
  damping: 0.7,
  widthGrowth: 17,
  heightGrowth: 16,
  drop: 3.5,
} as const;

type DockItem = { id: string; label: string; href: string; icon: ReactNode };

export function AnimatedTopDock({
  proximity = 122,
  spring = 0.19,
  damping = 0.7,
  widthGrowth = 17,
  heightGrowth = 16,
  drop = 3.5,
  className = "",
  lang = "en",
  onLangChange,
}: AnimatedTopDockProps) {
  const optionsRef = useRef<TopDockOptions>({
    proximity,
    spring,
    damping,
    widthGrowth,
    heightGrowth,
    drop,
    lockTrack: true,
  });

  optionsRef.current = {
    proximity,
    spring,
    damping,
    widthGrowth,
    heightGrowth,
    drop,
    lockTrack: true,
  };

  const navItems: readonly DockItem[] = [
    {
      id: "overview",
      label: lang === "en" ? "Overview" : lang === "id" ? "Ringkasan" : "نظرة عامة",
      href: "#hero",
      icon: <Sparkles className="w-3.5 h-3.5" />,
    },
    {
      id: "grades",
      label: lang === "en" ? "Grades" : lang === "id" ? "4 Grade" : "الدرجات",
      href: "#grades-section",
      icon: <Layers className="w-3.5 h-3.5" />,
    },
    {
      id: "specs",
      label: lang === "en" ? "Specs & Ledger" : lang === "id" ? "Ledger Uji" : "المواصفات",
      href: "#specs-section",
      icon: <ShieldCheck className="w-3.5 h-3.5" />,
    },
    {
      id: "vacuum",
      label: lang === "en" ? "Vacuum Proof" : lang === "id" ? "Uji Vakum" : "فيديو التغليف",
      href: "#vacuum-proof",
      icon: <Video className="w-3.5 h-3.5" />,
    },
    {
      id: "fcl",
      label: lang === "en" ? "FCL Modeler" : lang === "id" ? "Kalkulator FCL" : "حاسبة الشحن",
      href: "#fcl-calculator",
      icon: <Scale className="w-3.5 h-3.5" />,
    },
    {
      id: "docs",
      label: lang === "en" ? "Export Docs" : lang === "id" ? "Dokumen Ekspor" : "الوثائق",
      href: "#compliance-docs",
      icon: <FileText className="w-3.5 h-3.5" />,
    },
  ];

  const [active, setActive] = useState(navItems[0].id);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    return createTopDockController(root, () => optionsRef.current);
  }, []);

  return (
    <div className={`atd-modern-wrapper ${className}`}>
      <div className="atd-modern__aurora" aria-hidden="true" />
      <header className="atd-modern__bar">
        
        {/* Brand Identity */}
        <a 
          className="atd-modern__brand" 
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="atd-modern__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <rect width="24" height="24" rx="6" fill="#153e35" />
              <path d="M7 6h3.5v12H7z" fill="#f2f0eb" />
              <path d="M10.5 12l5.5-6h4.5l-6 6.5 6.5 5.5h-4.8l-5.7-6z" fill="#f2f0eb" />
            </svg>
          </span>
          <div className="flex flex-col">
            <span className="atd-modern__word font-display font-extrabold tracking-tight">KEMIRIKITA</span>
            <span className="text-[9px] font-sans text-stone-gray tracking-wide leading-none hidden sm:inline">
              CV PUJI JAYA PUTRA
            </span>
          </div>
        </a>

        {/* Center Spring Dock Navigation */}
        <nav 
          ref={rootRef} 
          className="atd-modern__dock" 
          aria-label="Primary Navigation" 
          data-dock-state="idle" 
          data-dock-max="0.00"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`atd-modern__item ${active === item.id ? "atd-modern__item--active" : ""}`}
              data-dock-item
              aria-pressed={active === item.id}
              onClick={(e) => {
                e.preventDefault();
                setActive(item.id);
                document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="atd-modern__icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="text-xs font-sans font-semibold tracking-tight">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Actions Right: Language Switcher & FOB WhatsApp Link */}
        <div className="atd-modern__actions">
          {/* Language Toggle Pills */}
          <div className="flex items-center bg-paper-white/80 border border-soft-mist rounded-full p-0.5 shadow-sm">
            {(["en", "id", "ar"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => onLangChange?.(l)}
                className={`px-2 py-0.5 rounded-full text-[11px] font-sans font-bold transition-all ${
                  lang === l
                    ? "bg-midnight-wine text-white shadow-xs"
                    : "text-stone-gray hover:text-ink-charcoal"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Quick WhatsApp / FOB CTA */}
          <a
            href="https://wa.me/6287782980769?text=Hello%20Kemirikita,%20I%20would%20like%20to%20request%20an%20official%20FOB%20Jakarta%20candlenut%20export%20quotation."
            target="_blank"
            rel="noreferrer"
            className="atd-modern__cta inline-flex items-center gap-2 bg-midnight-wine text-white rounded-full px-4 py-2 text-xs font-sans font-bold shadow-editorial hover:bg-[#592932] transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 text-lilac-mist" />
            <span className="hidden md:inline">
              {lang === "en" ? "FOB Quote" : lang === "id" ? "Penawaran FOB" : "طلب عرض أسعار"}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </header>
    </div>
  );
}
