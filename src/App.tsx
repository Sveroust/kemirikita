"use client";

import { useState } from "react";
import { Hero } from "@/components/ui/animated-hero";
import { AnimatedTopDock } from "@/components/ui/animated-top-dock/AnimatedTopDock";
import { 
  ArrowUpRight, 
  Scale, 
  ShieldCheck, 
  Anchor, 
  Droplets, 
  CheckCircle2, 
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Box,
  Building2,
  FileCheck
} from "lucide-react";

export default function App() {
  // Multilingual state (English, Indonesian, Arabic)
  const [lang, setLang] = useState<"en" | "id" | "ar">("en");

  // Media proof switcher state
  const [proofType, setProofType] = useState<"whole" | "split">("whole");

  // FCL Calculator state
  const [containerType, setContainerType] = useState<"20ft" | "40ft">("20ft");
  const [tonnage, setTonnage] = useState<number>(16.5);

  // Calculate cargo payload & desiccant
  const cartons = Math.round((tonnage * 1000) / 20); // 20kg master cartons (2 x 10kg vacuum)
  const grossWeightKg = Math.round(cartons * 21.2);
  const cbm = (tonnage * 1.72).toFixed(1);
  const desiccantPoles = containerType === "20ft" ? 6 : 12;

  const isAr = lang === "ar";

  return (
    <div className={`min-h-screen bg-warm-parchment text-ink-charcoal font-sans selection:bg-lilac-mist selection:text-midnight-wine ${isAr ? "font-sans" : ""}`} dir={isAr ? "rtl" : "ltr"}>
      
      {/* 1. ANIMATED TOP DOCK (COMMAND BAR MODERN VARIANT) */}
      <AnimatedTopDock lang={lang} onLangChange={setLang} />

      {/* 2. THE ANIMATED HERO SECTION (Pure Candlenut Focus, No Slop Badges, No Floating Clutter) */}
      <section id="hero">
        <Hero lang={lang} />
      </section>

      {/* 3. GROUNDED TECHNICAL SPECIFICATIONS & MARITIME LOGISTICS (NO SLOP, NO FLOATING MONOSPACE) */}
      <section id="specs-section" className="py-12 border-t border-soft-mist bg-warm-parchment">
        <div className="max-w-[1240px] mx-auto px-6">
          
          <div className="mb-8">
            <span className="text-xs font-sans font-bold tracking-wider text-[#153e35] uppercase block mb-1">
              {lang === "en" ? "Technical Audit & Supply Parameters" : lang === "id" ? "Parameter Mutu & Pengapalan Resmi" : "معايير الجودة والشحن الرسمي"}
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink-charcoal tracking-tight">
              {lang === "en" ? "Laboratory Verification & Maritime Supply Hub" : lang === "id" ? "Ledger Laboratorium & Hub Pelabuhan Tanjung Priok" : "سجل الفحص المخبري وميناء تانجونغ بريوك جاكرتا"}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Column 1: Moisture & Oil Quality Ledger */}
            <div className="bg-paper-white rounded-2xl p-6 sm:p-7 border border-soft-mist shadow-editorial flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-soft-mist">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#153e35]/10 text-[#153e35] flex items-center justify-center">
                      <Droplets className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-base text-ink-charcoal leading-none">
                        Moisture &amp; Oil Ledger
                      </h3>
                      <span className="text-xs text-stone-gray font-medium">Standard Nasional Indonesia</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#153e35] bg-[#153e35]/10 px-2.5 py-1 rounded-full">
                    SNI 01-1685
                  </span>
                </div>

                <div className="space-y-3 font-sans text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-soft-mist/70">
                    <span className="text-stone-gray font-medium">Calibrated Moisture:</span>
                    <span className="text-[#153e35] font-extrabold text-base">5.0% &ndash; 8.0%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-soft-mist/70">
                    <span className="text-stone-gray font-medium">Natural Oil Content:</span>
                    <span className="text-ink-charcoal font-extrabold text-base">62.0% &ndash; 66.0%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-soft-mist/70">
                    <span className="text-stone-gray font-medium">Free Fatty Acid (FFA as Oleic):</span>
                    <span className="text-ink-charcoal font-bold">&le; 0.95% (Rancid-Free)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-soft-mist/70">
                    <span className="text-stone-gray font-medium">Total Aflatoxin (B1+B2+G1+G2):</span>
                    <span className="text-[#153e35] font-extrabold">&lt; 4.0 ppb (EU &amp; GCC Standard)</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-stone-gray font-medium">Pre-Shipment Fumigation:</span>
                    <span className="text-ink-charcoal font-bold">Phosphine (PH3) &middot; AFAS Certified</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-soft-mist flex items-center justify-between text-xs text-stone-gray">
                <span>Testing Method: Oven 105&deg;C &amp; GC-MS</span>
                <span className="font-semibold text-ink-charcoal">Sucofindo / SGS Accredited</span>
              </div>
            </div>

            {/* Column 2: Maritime Supply Hub (Tanjung Priok, Jakarta) */}
            <div className="bg-paper-white rounded-2xl p-6 sm:p-7 border border-soft-mist shadow-editorial flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-soft-mist">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-midnight-wine/10 text-midnight-wine flex items-center justify-center">
                      <Anchor className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-base text-ink-charcoal leading-none">
                        Maritime Supply Hub
                      </h3>
                      <span className="text-xs text-stone-gray font-medium">Port of Tanjung Priok, Jakarta</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-midnight-wine bg-midnight-wine/10 px-2.5 py-1 rounded-full">
                    ID TPK &middot; JAKARTA
                  </span>
                </div>

                <div className="space-y-3 font-sans text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-soft-mist/70">
                    <span className="text-stone-gray font-medium">Ocean Port of Loading:</span>
                    <span className="text-ink-charcoal font-extrabold">Tanjung Priok, Jakarta</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-soft-mist/70">
                    <span className="text-stone-gray font-medium">Transit to Jebel Ali (UAE):</span>
                    <span className="text-[#153e35] font-bold">12 &ndash; 14 Days Direct</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-soft-mist/70">
                    <span className="text-stone-gray font-medium">Transit to Rotterdam (EU):</span>
                    <span className="text-ink-charcoal font-bold">26 &ndash; 28 Days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-soft-mist/70">
                    <span className="text-stone-gray font-medium">Export Packing Specification:</span>
                    <span className="text-midnight-wine font-bold">140&micro;m PA/PE Vacuum + N2</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-stone-gray font-medium">Registered Exporter Entity:</span>
                    <span className="text-ink-charcoal font-extrabold">CV Puji Jaya Putra (NIB 0220001810988)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-soft-mist flex items-center justify-between text-xs text-stone-gray">
                <span>HS Code: 0801.99.90 (Peeled) / 1207.99.90 (In-Shell)</span>
                <span className="font-semibold text-emerald-700 font-bold">Ready Stock FCL</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. 4 CANDLENUT PRODUCT GRADES */}
      <section id="grades-section" className="py-16 border-t border-soft-mist bg-warm-parchment">
        <div className="max-w-[1240px] mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-sans font-bold tracking-wider text-[#153e35] uppercase block mb-1">
                {lang === "en" ? "Export Grades & Calibrations" : lang === "id" ? "4 Varian Grade Ekspor" : "درجات التصدير المعتمدة"}
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-ink-charcoal tracking-tight">
                {lang === "en" ? "Commercial Candlenut Specifications" : lang === "id" ? "Pilihan Spesifikasi Kemiri Siap Ekspor" : "مواصفات حبات جوز الكاندل التجارية"}
              </h2>
            </div>
            <p className="text-stone-gray text-sm max-w-md font-sans leading-relaxed">
              Mechanically cracked, sorted under double-stage inspection, and dried to stable 5.0%–8.0% moisture for international food processors and cosmetic extractors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Grade 1: Whole Super */}
            <div className="bg-paper-white rounded-2xl p-5 border border-soft-mist shadow-editorial hover:shadow-floating transition-all flex flex-col justify-between group">
              <div>
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-soft-mist bg-warm-parchment">
                  <img src="assets/kemiri-whole-vacuum.jpg" alt="Kemiri Kupas Bulat Super" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-midnight-wine">GRADE A SUPER</span>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full">&ge; 90% Whole</span>
                </div>
                <h3 className="font-display font-extrabold text-base text-ink-charcoal mb-1.5">
                  Kemiri Kupas Bulat Super
                </h3>
                <p className="text-xs text-stone-gray leading-relaxed mb-4">
                  Intact spherical whole kernels with flawless ivory cream hue. Zero shell fragments, packed in 5-ply nylon vacuum bags.
                </p>
              </div>
              <div className="pt-3 border-t border-soft-mist space-y-1 text-xs text-stone-gray">
                <div className="flex justify-between"><span>Moisture:</span><span className="text-ink-charcoal font-bold">5.0% - 8.0%</span></div>
                <div className="flex justify-between"><span>Oil Content:</span><span className="text-ink-charcoal font-bold">62% - 66%</span></div>
                <div className="flex justify-between"><span>Packaging:</span><span className="text-[#153e35] font-bold">10kg x 2 Carton</span></div>
              </div>
            </div>

            {/* Grade 2: Split Halves */}
            <div className="bg-paper-white rounded-2xl p-5 border border-soft-mist shadow-editorial hover:shadow-floating transition-all flex flex-col justify-between group">
              <div>
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-soft-mist bg-warm-parchment">
                  <img src="assets/kemiri-split-vacuum.jpg" alt="Kemiri Kupas Belah Bersih" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#153e35]">GRADE B SPLIT</span>
                  <span className="text-[11px] font-bold text-[#153e35] bg-[#153e35]/10 px-2 py-0.5 rounded-full">Paste &amp; Sauce</span>
                </div>
                <h3 className="font-display font-extrabold text-base text-ink-charcoal mb-1.5">
                  Kemiri Kupas Belah Bersih
                </h3>
                <p className="text-xs text-stone-gray leading-relaxed mb-4">
                  Symmetrical clean split halves optimized for commercial spice grinding, instant curry pastes, and savory sauce production.
                </p>
              </div>
              <div className="pt-3 border-t border-soft-mist space-y-1 text-xs text-stone-gray">
                <div className="flex justify-between"><span>Moisture:</span><span className="text-ink-charcoal font-bold">5.0% - 8.0%</span></div>
                <div className="flex justify-between"><span>Cost Benefit:</span><span className="text-emerald-700 font-bold">8-14% Economy</span></div>
                <div className="flex justify-between"><span>Packaging:</span><span className="text-[#153e35] font-bold">25kg Vacuum</span></div>
              </div>
            </div>

            {/* Grade 3: In-Shell Raw */}
            <div className="bg-paper-white rounded-2xl p-5 border border-soft-mist shadow-editorial hover:shadow-floating transition-all flex flex-col justify-between group">
              <div>
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-soft-mist bg-warm-parchment">
                  <img src="assets/candlenut-hero.jpg" alt="Kemiri Gelondong Bertempurung" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-ink-charcoal">IN-SHELL RAW</span>
                  <span className="text-[11px] font-bold text-stone-gray bg-stone-gray/10 px-2 py-0.5 rounded-full">HS 1207.99.90</span>
                </div>
                <h3 className="font-display font-extrabold text-base text-ink-charcoal mb-1.5">
                  Kemiri Gelondong Bertempurung
                </h3>
                <p className="text-xs text-stone-gray leading-relaxed mb-4">
                  Intact hard natural shell providing up to 24-month natural shelf life. Ideal for overseas oil extraction facilities.
                </p>
              </div>
              <div className="pt-3 border-t border-soft-mist space-y-1 text-xs text-stone-gray">
                <div className="flex justify-between"><span>Kernel Yield:</span><span className="text-ink-charcoal font-bold">30% - 34% Net</span></div>
                <div className="flex justify-between"><span>Fumigation:</span><span className="text-ink-charcoal font-bold">Phosphine (PH3)</span></div>
                <div className="flex justify-between"><span>Packaging:</span><span className="text-[#153e35] font-bold">50kg Jute Bags</span></div>
              </div>
            </div>

            {/* Grade 4: Custom OEM Processing */}
            <div className="bg-paper-white rounded-2xl p-5 border border-soft-mist shadow-editorial hover:shadow-floating transition-all flex flex-col justify-between group">
              <div>
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-soft-mist bg-warm-parchment">
                  <img src="assets/candlenut-facility.jpg" alt="Fasilitas Produksi Kemiri Kustom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-midnight-wine">CUSTOM OEM</span>
                  <span className="text-[11px] font-bold text-midnight-wine bg-midnight-wine/10 px-2 py-0.5 rounded-full">Private Label</span>
                </div>
                <h3 className="font-display font-extrabold text-base text-ink-charcoal mb-1.5">
                  Spesifikasi Kustom &amp; Diced
                </h3>
                <p className="text-xs text-stone-gray leading-relaxed mb-4">
                  Calibrated sizing, mechanical dicing, buyer-branded master cartons, and custom moisture ranges for specific industrial machinery.
                </p>
              </div>
              <div className="pt-3 border-t border-soft-mist space-y-1 text-xs text-stone-gray">
                <div className="flex justify-between"><span>Granulation:</span><span className="text-ink-charcoal font-bold">Custom Mesh</span></div>
                <div className="flex justify-between"><span>Certification:</span><span className="text-ink-charcoal font-bold">Halal &amp; Phyto</span></div>
                <div className="flex justify-between"><span>Lead Time:</span><span className="text-[#153e35] font-bold">10-14 Days</span></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. AUTHENTIC PHYSICAL VACUUM PROOF (MEASURED, NOT CLAIMED) */}
      <section id="vacuum-proof" className="py-16 border-t border-soft-mist bg-warm-parchment">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-sans font-bold tracking-wider text-[#153e35] uppercase block mb-1">
              {lang === "en" ? "Physical Packaging Verification" : lang === "id" ? "Verifikasi Fisik Pengemasan" : "التحقق الميداني من التغليف"}
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink-charcoal tracking-tight mb-2">
              {lang === "en" ? "High-Barrier Vacuum Sealing & Ocean Protection" : lang === "id" ? "Pengemasan Vakum Nilon Tebal & Bebas Apek" : "تغليف بتفريغ الهواء لحماية الشحنات البحرية"}
            </h2>
            <p className="text-stone-gray text-sm leading-relaxed">
              Candlenuts contain 62%–66% natural oil. Unsealed packages exposed to humid equatorial ocean transit oxidize into rancid fatty acids. Watch authentic test media from our packaging floor:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Video Viewport Stage (7 Columns) */}
            <div className="lg:col-span-7 bg-paper-white rounded-2xl p-5 border border-soft-mist shadow-editorial">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-soft-mist">
                <span className="text-xs font-bold text-ink-charcoal">
                  {proofType === "whole" ? "Specimen: Whole Round Vacuum Pouch (10 kg)" : "Specimen: Split Halves Vacuum Pouch (25 kg)"}
                </span>
                
                {/* Media Switcher Buttons */}
                <div className="flex items-center gap-1.5 bg-warm-parchment p-1 rounded-lg border border-soft-mist">
                  <button 
                    onClick={() => setProofType("whole")}
                    className={`px-3 py-1 rounded text-xs font-bold transition-all ${proofType === "whole" ? "bg-midnight-wine text-white" : "text-stone-gray hover:text-ink-charcoal"}`}
                  >
                    Whole Vacuum
                  </button>
                  <button 
                    onClick={() => setProofType("split")}
                    className={`px-3 py-1 rounded text-xs font-bold transition-all ${proofType === "split" ? "bg-midnight-wine text-white" : "text-stone-gray hover:text-ink-charcoal"}`}
                  >
                    Split Vacuum
                  </button>
                </div>
              </div>

              {/* Embedded Video Player */}
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-black relative">
                <video 
                  key={proofType}
                  controls 
                  preload="metadata"
                  poster={proofType === "whole" ? "assets/kemiri-whole-vacuum.jpg" : "assets/kemiri-split-vacuum.jpg"}
                  className="w-full h-full object-cover"
                >
                  <source 
                    src={proofType === "whole" ? "assets/kemiri-vacuum-whole.mp4" : "assets/kemiri-vacuum-split.mp4"} 
                    type="video/mp4" 
                  />
                  Browser does not support HTML5 video.
                </video>
              </div>

              {/* Telemetry Readout Strip */}
              <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-soft-mist text-center">
                <div className="p-2 rounded-lg bg-warm-parchment/60">
                  <span className="block text-[10px] text-stone-gray uppercase">Vacuum Seal</span>
                  <span className="text-xs font-bold text-ink-charcoal">-0.092 MPa Lock</span>
                </div>
                <div className="p-2 rounded-lg bg-warm-parchment/60">
                  <span className="block text-[10px] text-stone-gray uppercase">Pouch Barrier</span>
                  <span className="text-xs font-bold text-[#153e35]">140µm PA/PE + N2</span>
                </div>
                <div className="p-2 rounded-lg bg-warm-parchment/60">
                  <span className="block text-[10px] text-stone-gray uppercase">Oven Moisture</span>
                  <span className="text-xs font-bold text-emerald-700">5.0% - 8.0% Passed</span>
                </div>
              </div>
            </div>

            {/* Right: Technical QA Ledger Table (5 Columns) */}
            <div className="lg:col-span-5 bg-paper-white rounded-2xl p-6 border border-soft-mist shadow-editorial space-y-4">
              <h3 className="font-display font-extrabold text-base text-ink-charcoal flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <span>Pre-Shipment Testing Protocol</span>
              </h3>
              
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-warm-parchment/50 border border-soft-mist flex justify-between items-center">
                  <div>
                    <span className="block text-stone-gray font-medium">Moisture (Metode Oven 105&deg;C):</span>
                    <span className="font-bold text-ink-charcoal text-sm">5.0% &ndash; 8.0%</span>
                  </div>
                  <span className="text-[11px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-bold">SNI 01-1685</span>
                </div>

                <div className="p-3.5 rounded-xl bg-warm-parchment/50 border border-soft-mist flex justify-between items-center">
                  <div>
                    <span className="block text-stone-gray font-medium">Free Fatty Acid (FFA as Oleic):</span>
                    <span className="font-bold text-ink-charcoal text-sm">&le; 0.95%</span>
                  </div>
                  <span className="text-[11px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-bold">Rancid-Free</span>
                </div>

                <div className="p-3.5 rounded-xl bg-warm-parchment/50 border border-soft-mist flex justify-between items-center">
                  <div>
                    <span className="block text-stone-gray font-medium">Total Aflatoxin (B1+B2+G1+G2):</span>
                    <span className="font-bold text-ink-charcoal text-sm">&lt; 4.0 ppb</span>
                  </div>
                  <span className="text-[11px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-bold">EU / GCC Pass</span>
                </div>

                <div className="p-3.5 rounded-xl bg-warm-parchment/50 border border-soft-mist flex justify-between items-center">
                  <div>
                    <span className="block text-stone-gray font-medium">Fumigation Clearance:</span>
                    <span className="font-bold text-ink-charcoal text-sm">PH3 (Phosphine)</span>
                  </div>
                  <span className="text-[11px] text-[#153e35] bg-[#153e35]/10 px-2 py-0.5 rounded font-bold">AFAS Certified</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-warm-parchment/40 border border-soft-mist text-xs text-stone-gray leading-relaxed">
                <p>
                  <strong>Inspeksi Independen:</strong> Pembeli dapat menunjuk surveyor pihak ketiga seperti <strong>SGS, Sucofindo, atau Intertek</strong> untuk pengambilan sampel acak sebelum kontainer disegel di Pelabuhan Tanjung Priok.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE FCL CONTAINER LOAD & CALCIUM CHLORIDE CALCULATOR */}
      <section id="fcl-calculator" className="py-16 border-t border-soft-mist bg-warm-parchment">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="bg-paper-white rounded-3xl p-7 sm:p-10 border border-soft-mist shadow-editorial">
            
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-sans font-bold tracking-wider text-[#153e35] uppercase block mb-1">
                {lang === "en" ? "Ocean Logistics & Cargo Modeler" : lang === "id" ? "Modeler Muatan & Desikan Kontainer" : "حاسبة حمولة الحاويات وممتصات الرطوبة"}
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink-charcoal tracking-tight mb-2">
                FCL Container Load &amp; Desiccant Modeler
              </h2>
              <p className="text-stone-gray text-sm leading-relaxed">
                Determine carton count, gross weight, volume (CBM), and required Calcium Chloride (CaCl2) desiccant poles to prevent container rain during ocean voyages from <strong>Port of Tanjung Priok, Jakarta</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Controls Column (6 Columns) */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <label className="block text-xs font-sans font-bold text-stone-gray uppercase tracking-wider mb-2">
                    1. Select Ocean Container Standard:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => { setContainerType("20ft"); setTonnage(16.5); }}
                      className={`p-3.5 rounded-xl border text-left transition-all ${containerType === "20ft" ? "bg-warm-parchment border-[#153e35] shadow-xs" : "bg-paper-white border-soft-mist hover:border-stone-gray"}`}
                    >
                      <span className="block font-display font-extrabold text-sm text-ink-charcoal">20ft Standard FCL</span>
                      <span className="text-xs text-stone-gray">15.0 &ndash; 18.0 Metric Tons</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => { setContainerType("40ft"); setTonnage(25.0); }}
                      className={`p-3.5 rounded-xl border text-left transition-all ${containerType === "40ft" ? "bg-warm-parchment border-[#153e35] shadow-xs" : "bg-paper-white border-soft-mist hover:border-stone-gray"}`}
                    >
                      <span className="block font-display font-extrabold text-sm text-ink-charcoal">40ft High Cube FCL</span>
                      <span className="text-xs text-stone-gray">24.0 &ndash; 27.0 Metric Tons</span>
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-sans font-bold text-stone-gray uppercase tracking-wider">
                      2. Calibrated Cargo Payload (Metric Tons):
                    </label>
                    <span className="text-sm font-extrabold font-sans text-midnight-wine">
                      {tonnage.toFixed(1)} MT ({Math.round(tonnage * 1000).toLocaleString()} kg)
                    </span>
                  </div>
                  <input
                    type="range"
                    min={containerType === "20ft" ? 14 : 22}
                    max={containerType === "20ft" ? 18.5 : 27.5}
                    step={0.5}
                    value={tonnage}
                    onChange={(e) => setTonnage(parseFloat(e.target.value))}
                    className="w-full accent-midnight-wine cursor-pointer h-2 bg-soft-mist rounded-lg"
                  />
                  <div className="flex justify-between text-xs text-stone-gray mt-1 font-medium">
                    <span>Min: {containerType === "20ft" ? "14.0 MT" : "22.0 MT"}</span>
                    <span>Max: {containerType === "20ft" ? "18.5 MT" : "27.5 MT"}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-warm-parchment/60 border border-soft-mist flex items-start gap-3 text-xs text-stone-gray">
                  <Anchor className="w-4 h-4 text-[#153e35] flex-shrink-0 mt-0.5" />
                  <span>
                    Packed in <strong>5-ply double-wall export master cartons</strong> (20kg net each, containing 2 &times; 10kg PA/PE vacuum pouches). Shipped via Tanjung Priok, Jakarta.
                  </span>
                </div>
              </div>

              {/* Real-Time Output Display (6 Columns) */}
              <div className="lg:col-span-6 bg-warm-parchment rounded-2xl p-6 border border-soft-mist space-y-3 font-sans">
                <div className="flex justify-between items-center py-2 border-b border-soft-mist">
                  <span className="text-xs text-stone-gray font-medium">Total Export Master Cartons:</span>
                  <span className="text-base font-extrabold text-ink-charcoal">{cartons.toLocaleString()} Cartons</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-soft-mist">
                  <span className="text-xs text-stone-gray font-medium">Net Cargo Weight:</span>
                  <span className="text-base font-extrabold text-midnight-wine">{tonnage.toFixed(1)} MT</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-soft-mist">
                  <span className="text-xs text-stone-gray font-medium">Gross Shipping Weight:</span>
                  <span className="text-base font-extrabold text-ink-charcoal">{grossWeightKg.toLocaleString()} kg</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-soft-mist">
                  <span className="text-xs text-stone-gray font-medium">Estimated Volume (CBM):</span>
                  <span className="text-base font-extrabold text-[#153e35]">{cbm} CBM</span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs text-emerald-800 font-bold">CaCl2 Desiccant Poles (2,000g):</span>
                  <span className="text-base font-extrabold text-emerald-700">{desiccantPoles} High-Capacity Poles</span>
                </div>
                <p className="text-xs text-stone-gray leading-tight pt-1">
                  *Provides active 300% absorption protection against container sweat throughout the voyage to Jebel Ali, Rotterdam, or Singapore.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. DARK FEATURE BAND (DEEP LAGOON #0c4243) — PRE-SHIPMENT LAB PROTOCOL */}
      <section id="compliance-docs" className="w-full bg-deep-lagoon text-white py-16 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest text-lilac-mist mb-2 block font-bold">
                {lang === "en" ? "Export Compliance · Badan Karantina & Kemendag RI" : lang === "id" ? "Legalitas Ekspor Resmi · Karantina & Kemendag RI" : "الامتثال الرسمي للتصدير"}
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-3">
                Full 8-Document Export Package with Zero Customs Ambiguity.
              </h2>
              <p className="text-white/80 text-sm leading-relaxed font-sans">
                Every shipment is issued under registered corporate entity <strong>CV Puji Jaya Putra (NIB: 0220001810988)</strong>, accompanied by original certified quarantine, analysis, and clean-on-board ocean documentation.
              </p>
            </div>

            <div className="lg:col-span-5 bg-black/25 backdrop-blur-xl border border-white/15 rounded-2xl p-5 text-xs space-y-2.5">
              <div className="flex justify-between items-center text-lilac-mist pb-2 border-b border-white/10">
                <span className="font-bold">SETTLEMENT METHOD:</span>
                <span className="font-extrabold text-white">100% L/C AT SIGHT</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10 text-white/80">
                <span>ALTERNATIVE:</span>
                <span className="font-bold">T/T (30% Deposit, 70% vs BL scan)</span>
              </div>
              <div className="flex justify-between items-center text-white/80">
                <span>INCOTERMS 2020:</span>
                <span className="font-bold">FOB Tanjung Priok (Jakarta), CIF</span>
              </div>
            </div>
          </div>

          {/* 8 Compliance Documents Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {[
              { code: "DOC 01", name: "Phytosanitary Certificate", iss: "Badan Karantina Indonesia" },
              { code: "DOC 02", name: "Certificate of Origin (COO)", iss: "Kementerian Perdagangan RI" },
              { code: "DOC 03", name: "Certificate of Analysis (COA)", iss: "Sucofindo / SGS Accredited" },
              { code: "DOC 04", name: "Fumigation Certificate", iss: "AFAS Quarantine Provider (PH3)" },
              { code: "DOC 05", name: "Bill of Lading (Clean B/L)", iss: "Maersk, MSC, CMA CGM, ONE" },
              { code: "DOC 06", name: "Commercial Invoice & Packing List", iss: "CV Puji Jaya Putra (Seal)" },
              { code: "DOC 07", name: "Marine Cargo Insurance", iss: "Institute Cargo Clauses A (All Risks)" },
              { code: "DOC 08", name: "Halal & Non-Radioactive Decl.", iss: "Quality Assurance Dept - CV PJP" },
            ].map((doc) => (
              <div key={doc.code} className="bg-white/8 backdrop-blur-md rounded-xl p-3.5 border border-white/12 hover:bg-white/12 transition-all">
                <span className="text-[10px] text-lilac-mist font-bold block mb-1">{doc.code}</span>
                <h4 className="font-display font-bold text-sm text-white mb-1">{doc.name}</h4>
                <p className="text-xs text-white/60">{doc.iss}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. RFQ & TRADE CONTRACT INQUIRY SECTION */}
      <section id="rfq-section" className="py-16 max-w-[1240px] mx-auto px-6">
        <div className="bg-paper-white rounded-3xl p-7 sm:p-10 border border-soft-mist shadow-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-sans font-bold text-[#153e35] uppercase tracking-wider block">
                DIRECT TRADE DESK // OFFICIAL EXPORT
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink-charcoal leading-tight">
                Initiate a Contract or Request 1.0 kg Sample.
              </h2>
              <p className="text-stone-gray text-sm leading-relaxed">
                Connect directly with our export desk. We respond within 6 business hours with full CIF proforma estimates, recent lab testing reports, and courier dispatch tracking.
              </p>

              <div className="space-y-3 pt-3 border-t border-soft-mist text-xs text-ink-charcoal font-sans">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-stone-gray text-[10px] uppercase font-medium">WhatsApp Commercial Desk:</span>
                    <a href="https://wa.me/6287782980769" className="font-bold text-[#153e35] hover:underline">+62 877-8298-0769</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#153e35]/10 text-[#153e35] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-stone-gray text-[10px] uppercase font-medium">Corporate Export Email:</span>
                    <a href="mailto:sales@pujijayaputra.com" className="font-bold text-[#153e35] hover:underline">sales@pujijayaputra.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-warm-parchment text-midnight-wine flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-stone-gray text-[10px] uppercase font-medium">Registered Office &amp; Warehouse:</span>
                    <span className="text-stone-gray">Kp. Telajung, Cikarang Barat, Bekasi, Jawa Barat (Hub: Tanjung Priok Jakarta)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Form */}
            <div className="lg:col-span-7 bg-warm-parchment/60 rounded-2xl p-5 sm:p-6 border border-soft-mist">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const target = e.currentTarget;
                  const name = (target.elements.namedItem("name") as HTMLInputElement)?.value;
                  const port = (target.elements.namedItem("port") as HTMLInputElement)?.value;
                  const grade = (target.elements.namedItem("grade") as HTMLSelectElement)?.value;
                  const msg = encodeURIComponent(`Halo Kemirikita (CV Puji Jaya Putra), saya ${name}. Ingin meminta penawaran resmi FOB Tanjung Priok / CIF untuk ${grade} tujuan ${port}.`);
                  window.open(`https://wa.me/6287782980769?text=${msg}`, "_blank");
                }}
                className="space-y-3.5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-stone-gray mb-1">Your Full Name &amp; Title</label>
                    <input 
                      name="name"
                      required
                      type="text" 
                      placeholder="e.g. Tariq Al-Mansoor"
                      className="w-full bg-paper-white border border-soft-mist rounded-lg px-3 py-2 text-xs text-ink-charcoal focus:outline-none focus:border-[#153e35]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-gray mb-1">Company &amp; Country</label>
                    <input 
                      name="company"
                      required
                      type="text" 
                      placeholder="e.g. Gulf Spice Trading LLC, Dubai"
                      className="w-full bg-paper-white border border-soft-mist rounded-lg px-3 py-2 text-xs text-ink-charcoal focus:outline-none focus:border-[#153e35]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-stone-gray mb-1">Destination Port (POD)</label>
                    <input 
                      name="port"
                      required
                      type="text" 
                      placeholder="e.g. Jebel Ali Port, UAE / Rotterdam"
                      className="w-full bg-paper-white border border-soft-mist rounded-lg px-3 py-2 text-xs text-ink-charcoal focus:outline-none focus:border-[#153e35]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-gray mb-1">Selected Product Grade</label>
                    <select 
                      name="grade"
                      className="w-full bg-paper-white border border-soft-mist rounded-lg px-3 py-2 text-xs text-ink-charcoal focus:outline-none focus:border-[#153e35]"
                    >
                      <option>Grade A Super Whole Round (&ge;90%)</option>
                      <option>Grade B Clean Split Halves</option>
                      <option>In-Shell Raw Candlenuts</option>
                      <option>Free 1.0 kg Laboratory Sample</option>
                      <option>Custom Industrial Sizing / Private Label</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-gray mb-1">Estimated Quantity &amp; Payment Preference</label>
                  <input 
                    name="quantity"
                    type="text" 
                    placeholder="e.g. 1 x 20ft FCL (16.5 MT) &middot; 100% L/C at Sight"
                    className="w-full bg-paper-white border border-soft-mist rounded-lg px-3 py-2 text-xs text-ink-charcoal focus:outline-none focus:border-[#153e35]"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-midnight-wine text-white rounded-xl py-3 text-xs font-sans font-bold tracking-wider uppercase hover:bg-[#5a2831] transition-all shadow-editorial mt-1"
                >
                  Send Official Trade Inquiry via WhatsApp &rarr;
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FULL-BLEED MAROON FOOTER (MIDNIGHT WINE #421d24) */}
      <footer className="w-full bg-midnight-wine text-white py-12 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-xs font-sans">
            
            <div>
              <h5 className="font-extrabold uppercase tracking-wider text-white mb-3">
                Corporate Entity
              </h5>
              <p className="text-white/70 leading-relaxed mb-2 font-medium">
                <strong>CV PUJI JAYA PUTRA</strong><br />
                NIB: 0220001810988<br />
                Eksportir Terdaftar Karantina &amp; Kemendag RI
              </p>
              <p className="text-white/60">
                Kp. Telajung, Cikarang Barat, Bekasi, Jawa Barat
              </p>
            </div>

            <div>
              <h5 className="font-extrabold uppercase tracking-wider text-white mb-3">
                Commodity Specifications
              </h5>
              <ul className="space-y-1.5 text-white/70 font-medium">
                <li>Aleurites moluccanus (Kemiri)</li>
                <li>Moisture: 5.0% &ndash; 8.0% Calibrated</li>
                <li>Natural Oil: 62.0% &ndash; 66.0%</li>
                <li>Total Aflatoxin: &lt; 4.0 ppb (EU/GCC)</li>
              </ul>
            </div>

            <div>
              <h5 className="font-extrabold uppercase tracking-wider text-white mb-3">
                Shipping &amp; Logistics
              </h5>
              <ul className="space-y-1.5 text-white/70 font-medium">
                <li>Primary Port: Tanjung Priok, Jakarta (ID TPK)</li>
                <li>140&micro;m PA/PE Vacuum + N2</li>
                <li>CaCl2 Ocean Desiccant Protected</li>
                <li>Direct Jebel Ali, Rotterdam, Singapore</li>
              </ul>
            </div>

            <div>
              <h5 className="font-extrabold uppercase tracking-wider text-white mb-3">
                Trade Desk Contact
              </h5>
              <p className="text-white/70 leading-relaxed mb-1 font-semibold">
                sales@pujijayaputra.com
              </p>
              <p className="text-white/70 leading-relaxed font-semibold">
                +62 877-8298-0769
              </p>
              <p className="text-[11px] text-lilac-mist mt-2 font-bold">
                100% Irrevocable L/C at Sight
              </p>
            </div>

          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50 font-sans">
            <span>&copy; 2026 Kemirikita &middot; CV Puji Jaya Putra (NIB: 0220001810988). All rights reserved.</span>
            <span>HS 0801.99.90 / 1207.99.90 &middot; Tanjung Priok, Jakarta</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
