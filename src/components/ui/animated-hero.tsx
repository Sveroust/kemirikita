"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Scale, ShieldCheck, CheckCircle2 } from "lucide-react";

interface HeroProps {
  lang?: "en" | "id" | "ar";
}

const heroCopy = {
  en: {
    supertitle: "CANDLENUT",
    titleStart: "Direct Bulk Export Supply,",
    titleEnd: "From Source to Global Ports.",
    desc: (
      <>
        Export-grade Indonesian candlenut kernels (<em>Aleurites moluccanus</em>) cured to <strong>5.0% &ndash; 8.0% calibrated moisture</strong>. Vacuum-sealed in nitrogen-flushed multi-layer barrier pouches. Direct ocean shipment from <strong>Port of Tanjung Priok, Jakarta</strong> by <strong>CV Puji Jaya Putra</strong> (NIB 0220001810988).
      </>
    ),
    ctaQuote: "Request FOB / CIF Quotation",
    ctaCalc: "Container & Desiccant Calculator",
    sampleMetric: "1.0 KG FREE SAMPLE",
    sampleDesc: "Quality Evaluation",
    payMetric: "100% L/C AT SIGHT",
    payDesc: "Payment Protection",
    labMetric: "SUCOFINDO & SGS COA",
    labDesc: "Laboratory Verification",
  },
  id: {
    supertitle: "KEMIRI INDONESIA",
    titleStart: "Pasokan Ekspor Kemiri Pilihan,",
    titleEnd: "Langsung ke Pelabuhan Dunia.",
    desc: (
      <>
        Kemiri kupas berkualitas ekspor (<em>Aleurites moluccanus</em>) dengan kadar air terukur <strong>5,0% &ndash; 8,0%</strong>. Kemasan vakum nilon anti-apek dengan flushing nitrogen. Pengapalan resmi dari <strong>Pelabuhan Tanjung Priok, Jakarta</strong> oleh <strong>CV Puji Jaya Putra</strong> (NIB 0220001810988).
      </>
    ),
    ctaQuote: "Minta Penawaran FOB / CIF",
    ctaCalc: "Kalkulator Kontainer & Desikan",
    sampleMetric: "1.0 KG SAMPEL GRATIS",
    sampleDesc: "Evaluasi Sampel",
    payMetric: "100% L/C AT SIGHT",
    payDesc: "Keamanan Pembayaran",
    labMetric: "SUCOFINDO & SGS COA",
    labDesc: "Hasil Uji Laboratorium",
  },
  ar: {
    supertitle: "جوز الكاندل",
    titleStart: "إمدادات جوز الكاندل الإندونيسي الفاخر،",
    titleEnd: "مباشرة من جاكرتا إلى موانئ العالم.",
    desc: (
      <>
        حبات جوز الكاندل الإندونيسي الفاخرة (<em>Aleurites moluccanus</em>) بنسبة رطوبة مخبرية دقيقة <strong>5.0% &ndash; 8.0%</strong>. معبأة بأكياس نايلون عازلة ومفرغة من الهواء مع النيتروجين. شحن بحري مباشر من <strong>ميناء تانجونغ بريوك، جاكرتا</strong> بواسطة <strong>CV Puji Jaya Putra</strong> (ترخيص 0220001810988).
      </>
    ),
    ctaQuote: "طلب عرض أسعار فوب / سيف",
    ctaCalc: "حساب حمولة الحاوية وممتصات الرطوبة",
    sampleMetric: "1.0 كجم عينة مجانية",
    sampleDesc: "تقييم الجودة",
    payMetric: "اعتماد مستندي 100% للاطلاع",
    payDesc: "حماية الدفع التجاري",
    labMetric: "SUCOFINDO & SGS COA",
    labDesc: "شهادات الفحص المخبري",
  }
};

export function Hero({ lang = "en" }: HeroProps) {
  const t = heroCopy[lang] || heroCopy.en;
  const isAr = lang === "ar";

  return (
    <div className={`relative w-full overflow-hidden bg-warm-parchment pt-6 pb-12 ${isAr ? "font-sans" : ""}`} dir={isAr ? "rtl" : "ltr"}>
      
      {/* Main Container */}
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Brand Display Wordmark matching User Reference Image */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center pt-2 pb-1"
        >
          <span className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#153e35] uppercase select-none block">
            {t.supertitle}
          </span>
        </motion.div>

        {/* Clear, Authoritative Headline */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink-charcoal leading-[1.12] tracking-[-0.025em] mb-4">
            {t.titleStart} <span className="text-midnight-wine">{t.titleEnd}</span>
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-stone-gray max-w-2xl mx-auto font-normal leading-[1.6] mb-8">
            {t.desc}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
            <a
              href="#rfq-section"
              className="inline-flex items-center gap-2 bg-midnight-wine text-white px-6 py-3 rounded-full text-xs sm:text-sm font-sans font-bold hover:bg-[#592932] transition-all shadow-editorial hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.ctaQuote}</span>
              <ArrowUpRight className={`w-4 h-4 text-lilac-mist ${isAr ? "rotate-180" : ""}`} />
            </a>

            <a
              href="#fcl-calculator"
              className="inline-flex items-center gap-2 bg-paper-white text-ink-charcoal border border-soft-mist px-5 py-3 rounded-full text-xs sm:text-sm font-sans font-semibold hover:bg-white transition-all hover:-translate-y-0.5"
            >
              <Scale className="w-4 h-4 text-[#153e35]" />
              <span>{t.ctaCalc}</span>
            </a>
          </div>

          {/* 3-Pillar Institutional Trust Metric Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl mx-auto pt-5 border-t border-soft-mist text-left mb-10">
            <div className="bg-paper-white p-3.5 rounded-xl border border-soft-mist">
              <span className="block text-[11px] font-sans text-stone-gray uppercase tracking-wider mb-0.5">{t.sampleDesc}</span>
              <span className="block text-sm font-bold font-sans text-ink-charcoal">{t.sampleMetric}</span>
            </div>
            <div className="bg-paper-white p-3.5 rounded-xl border border-soft-mist">
              <span className="block text-[11px] font-sans text-stone-gray uppercase tracking-wider mb-0.5">{t.payDesc}</span>
              <span className="block text-sm font-bold font-sans text-midnight-wine">{t.payMetric}</span>
            </div>
            <div className="bg-paper-white p-3.5 rounded-xl border border-soft-mist">
              <span className="block text-[11px] font-sans text-stone-gray uppercase tracking-wider mb-0.5">{t.labDesc}</span>
              <span className="block text-sm font-bold font-sans text-[#153e35]">{t.labMetric}</span>
            </div>
          </div>
        </motion.div>

        {/* Clean, Majestic Hero Photograph (NO Floating Cards, NO Monospace Telemetry) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-soft-mist shadow-editorial bg-paper-white aspect-[16/9] sm:aspect-[21/10]"
        >
          <img 
            src="assets/candlenut-hero.jpg" 
            alt="Indonesian Candlenut Kernels (Aleurites moluccanus) Whole and In-Shell"
            className="w-full h-full object-cover brightness-[0.98] contrast-[1.02]"
          />
        </motion.div>

      </div>
    </div>
  );
}
