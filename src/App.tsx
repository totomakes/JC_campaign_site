import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Activity,
  Target,
  ShieldCheck,
  Search,
  Zap,
  TrendingUp,
  CheckCircle2,
  XCircle,
  BarChart3,
  Layers,
  Lock,
  MousePointerClick,
  Cpu,
  X
} from 'lucide-react';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const PrimaryButton = ({ children, onClick, className = "", href }: { children: React.ReactNode, onClick?: () => void, className?: string, href?: string }) => {
  const ButtonContent = () => (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
    </>
  );

  const baseClasses = `relative group overflow-hidden rounded-full px-8 py-4 font-display font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 transition-all shadow-lg ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(79, 70, 229, 0.5)" }}
        whileTap={{ scale: 0.95 }}
        className={baseClasses}
      >
        <ButtonContent />
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(79, 70, 229, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={baseClasses}
    >
      <ButtonContent />
    </motion.button>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-slate-200/60 bg-white/30 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="font-display font-bold text-xl tracking-tighter text-slate-900">
        REVENUE<span className="text-indigo-600">LEAK</span>
      </div>
      <div className="flex flex-col items-center md:items-end gap-2">
        <p className="text-slate-500 font-medium">Have questions?</p>
        <a
          href="mailto:jc@markethunterz.com"
          className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors flex items-center gap-2"
        >
          jc@markethunterz.com
        </a>
      </div>
      <div className="text-slate-400 text-sm">
        © {new Date().getFullYear()} MarketHunterz. All rights reserved.
      </div>
    </div>
  </footer>
);

const DynamicBackground = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-50">
    {/* Light Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />

    {/* Floating Orbs */}
    <motion.div
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -100, 50, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[100px] mix-blend-multiply"
    />
    <motion.div
      animate={{
        x: [0, -100, 50, 0],
        y: [0, 100, -50, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[120px] mix-blend-multiply"
    />
    <motion.div
      animate={{
        x: [0, 50, -100, 0],
        y: [0, 50, 100, 0],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[-10%] left-[30%] w-[700px] h-[700px] bg-pink-400/20 rounded-full blur-[150px] mix-blend-multiply"
    />
  </div>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    brandChannel: '',
    offer: '',
    implementation: ''
  });

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isModalOpen]);

  return (
    <div className="min-h-screen selection:bg-indigo-200 selection:text-indigo-900 text-slate-900">
      <DynamicBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6 flex justify-between items-center backdrop-blur-md bg-white/30 border-b border-white/50">
        <div className="font-display font-bold text-xl tracking-tighter text-slate-900">
          REVENUE<span className="text-indigo-600">LEAK</span>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors px-4 py-2 rounded-full bg-white/50 hover:bg-white/80 border border-white/50 shadow-sm"
        >
          Apply Now
        </button>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">

        {/* HERO SECTION */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center relative">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 bg-indigo-50/50 text-indigo-700 text-sm font-medium mb-8 shadow-sm backdrop-blur-sm">
              <Activity className="w-4 h-4" />
              <span>Structural Analysis for Growth-Stage Businesses</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-6 text-slate-900">
              Your Website <br className="hidden md:block" />
              <span className="text-slate-400">Isn't Broken.</span><br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500">It's Leaking Revenue.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            If your business generates between $500K and $2M annually, your website should be compounding growth — not silently reducing it. We identify where your site is losing conversions, authority, and organic visibility… and show you exactly how to fix it.
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-col items-center gap-4">
            <PrimaryButton onClick={() => setIsModalOpen(true)} className="text-lg">
              Apply for the Revenue Leak Audit <ArrowRight className="w-5 h-5" />
            </PrimaryButton>
            <p className="text-sm text-slate-500 font-mono uppercase tracking-widest font-semibold mt-2">Limited audits accepted each month.</p>
          </FadeIn>
        </section>

        {/* SECTION 2 — THE PROBLEM */}
        <section className="py-32 relative">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">More Traffic Won't Fix a <span className="text-indigo-600">Leaking Foundation.</span></h2>
            <p className="text-xl text-slate-600 max-w-3xl mb-16">Most growth-stage websites look fine. But under the surface, they're bleeding performance. We consistently find:</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {[
              { icon: TrendingUp, text: "40–70% bounce rates" },
              { icon: Layers, text: "No dominant offer structure" },
              { icon: Target, text: "Generic messaging that blends in" },
              { icon: ShieldCheck, text: "Weak authority positioning" },
              { icon: Search, text: "Minimal SEO architecture" },
              { icon: Zap, text: "Friction-heavy conversion paths" }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl glass-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                    <item.icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <p className="text-xl font-semibold text-slate-800">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-16 p-10 rounded-3xl bg-gradient-to-br from-indigo-50 to-cyan-50 border border-indigo-100 text-center shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <p className="text-2xl md:text-3xl font-display font-medium relative z-10">
              You don't have a traffic problem.<br />
              <span className="text-indigo-600 font-bold">You have an infrastructure problem.</span><br />
              <span className="text-slate-500 text-xl mt-2 block">And infrastructure determines scale.</span>
            </p>
          </FadeIn>
        </section>

        {/* SECTION 3 — WHAT THIS IS (AND ISN'T) */}
        <section className="py-32 border-t border-slate-200/60">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">This Is a Revenue Diagnosis.<br /><span className="text-slate-400">Not a Design Review.</span></h2>
            <p className="text-xl text-slate-600 mb-16">This audit evaluates your website through a conversion and authority lens — not aesthetics.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn delay={0.1} className="space-y-6 p-8 rounded-3xl glass-card border-t-4 border-t-emerald-400">
              <h3 className="text-2xl font-bold text-emerald-600 flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7" /> What This Is:
              </h3>
              <ul className="space-y-5">
                {[
                  "Conversion architecture evaluation",
                  "Positioning and messaging clarity score",
                  "Authority and trust signal assessment",
                  "SEO structure and visibility review",
                  "Friction and funnel breakdown",
                  "Scalability analysis (including AI-readiness)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="space-y-6 p-8 rounded-3xl glass-card border-t-4 border-t-rose-400">
              <h3 className="text-2xl font-bold text-rose-500 flex items-center gap-3">
                <XCircle className="w-7 h-7" /> What This Isn't:
              </h3>
              <ul className="space-y-5">
                {[
                  "A “make it prettier” critique",
                  "A generic SEO checklist",
                  "A templated report",
                  "Surface-level advice"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-600 font-medium">
                    <div className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(251,113,133,0.6)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 4 — WHAT YOU RECEIVE */}
        <section className="py-32 relative">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Here's Exactly What You Get</h2>
          </FadeIn>

          <div className="space-y-6 max-w-4xl mx-auto relative z-10">
            {[
              { num: "1", title: "Website Performance Score (1–100)", desc: "Across conversion, clarity, authority, SEO, and scalability." },
              { num: "2", title: "Top 3 Revenue Leaks", desc: "The structural weaknesses likely costing you the most." },
              { num: "3", title: "Estimated Impact Analysis", desc: "What these leaks are likely costing in growth potential." },
              { num: "4", title: "Quick Wins", desc: "Immediate changes you can implement." },
              { num: "5", title: "Structural Fix Roadmap", desc: "What needs rebuilding to unlock scale." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 rounded-2xl glass-card hover:shadow-lg transition-all group border-l-4 border-l-transparent hover:border-l-indigo-500">
                  <div className="w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl font-bold font-display group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0 shadow-sm">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5} className="mt-16 text-center">
            <div className="inline-block p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-sm">
              <p className="text-xl text-indigo-700 font-semibold">Delivered via Loom walkthrough + written summary.</p>
              <p className="text-slate-500 mt-2 font-mono uppercase tracking-widest text-sm font-bold">Clear. Direct. Actionable.</p>
            </div>
          </FadeIn>
        </section>

        {/* SECTION 5 — THE FRAMEWORK */}
        <section className="py-32 border-t border-slate-200/60">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our 5-Layer Conversion Architecture</h2>
            <p className="text-xl text-slate-600 mb-16">We evaluate your site through five structural layers:</p>
          </FadeIn>

          <div className="grid gap-6">
            {[
              { icon: Target, title: "Positioning Clarity", desc: "Can a visitor understand who you serve and why you're different in 5 seconds?" },
              { icon: Layers, title: "Offer Hierarchy", desc: "Is there one dominant conversion pathway, or is everything competing for attention?" },
              { icon: ShieldCheck, title: "Trust Acceleration", desc: "Do you immediately communicate authority and proof?" },
              { icon: Zap, title: "Friction Reduction", desc: "Are you guiding action — or creating confusion?" },
              { icon: Cpu, title: "Scalable Infrastructure", desc: "Is your site built to support SEO expansion, AI systems, and performance optimization?" }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex gap-6 p-8 rounded-3xl glass-card hover:bg-white/80 transition-colors relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6} className="mt-16 text-center">
            <p className="text-2xl font-display font-medium text-slate-700">
              Most websites fail at 2–3 of these layers.<br />
              <span className="text-indigo-600 font-bold">That's where growth stalls.</span>
            </p>
          </FadeIn>
        </section>

        {/* SECTION 6 — WHO THIS IS FOR */}
        <section className="py-32">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn className="p-10 rounded-3xl bg-indigo-600 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-3xl font-bold mb-8 relative z-10">This Audit Is For Businesses That:</h3>
              <ul className="space-y-5 relative z-10">
                {[
                  "Generate $500K–$2M annually",
                  "Actively invest in growth",
                  "Care about authority and positioning",
                  "Want scalable digital infrastructure",
                  "Are ready to fix what's broken"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-medium">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="p-10 rounded-3xl glass-card border border-slate-200">
              <h3 className="text-3xl font-bold text-slate-800 mb-8">This Is Not For:</h3>
              <ul className="space-y-5">
                {[
                  "Hobby projects",
                  "Pre-revenue startups",
                  "“Just curious” reviews",
                  "Businesses unwilling to implement changes"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-600 font-medium">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      <XCircle className="w-4 h-4 text-slate-400" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="mt-16 text-center">
            <p className="text-2xl text-slate-800 font-bold font-display">If you're serious about scale, you're in the right place.</p>
          </FadeIn>
        </section>

        {/* SECTION 7 — THE BELIEF SHIFT */}
        <section className="py-32 relative text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight text-slate-900">
              Your Website Is Not a Branding Asset.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500">It's a Financial Instrument.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} className="max-w-3xl mx-auto space-y-6 text-xl text-slate-600">
            <p>If your site converts at 1% and you double traffic, you double inefficiency.</p>
            <p>If you improve conversion from 1% to 2%, you double revenue without doubling spend.</p>
            <div className="py-6">
              <span className="inline-block px-6 py-2 rounded-full bg-indigo-50 text-indigo-700 font-bold font-display text-2xl shadow-sm border border-indigo-100">
                That's leverage.
              </span>
            </div>
            <p className="pt-8 border-t border-slate-200/60 font-medium">
              The companies that scale in the next five years won't just advertise more. <br />
              <span className="text-indigo-600 font-bold">They'll build stronger infrastructure.</span>
            </p>
          </FadeIn>
        </section>

        {/* SECTION 8 — WHAT HAPPENS NEXT */}
        <section className="py-32 border-t border-slate-200/60">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">If We Identify Revenue Leaks:</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { num: "01", text: "You receive the full audit + roadmap" },
              { num: "02", text: "You can implement internally" },
              { num: "03", text: "Or we can architect and rebuild the structure" }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="text-center p-8 rounded-3xl glass-card relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 text-9xl font-display font-bold text-slate-100 group-hover:text-indigo-50 transition-colors z-0 select-none">
                  {item.num}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl mb-6 shadow-md">
                    {parseInt(item.num)}
                  </div>
                  <p className="text-xl font-semibold text-slate-800">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-16 text-center">
            <p className="text-xl text-slate-500 font-medium">No pressure. No gimmicks.</p>
            <p className="text-indigo-600 font-bold text-3xl mt-2 font-display">Audit first. Execution second.</p>
          </FadeIn>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-32 text-center relative">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-slate-900">
              If Your Website Isn't Compounding Revenue…<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500">It's Leaking It.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">Apply for a Website Revenue Leak Audit. We only accept a limited number each month to protect quality.</p>

            <PrimaryButton onClick={() => setIsModalOpen(true)} className="text-xl px-12 py-6">
              Apply for the Audit
            </PrimaryButton>

            <p className="mt-8 text-slate-500 font-mono text-sm uppercase tracking-widest font-bold">Takes 2 minutes. If approved, we'll send next steps.</p>
          </FadeIn>
        </section>

      </main>

      <Footer />

      {/* APPLICATION FORM MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-2xl relative my-8 shadow-2xl border border-slate-100"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 transition-colors bg-slate-100 hover:bg-slate-200 p-2 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-2 text-slate-900 font-display">Apply for a Revenue Leak Audit</h2>
                <p className="text-slate-500 mb-8">Fill out the details below to see if you qualify.</p>

                <form
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    setSubmitStatus('idle');
                    try {
                      const formDataToSend = new FormData();
                      formDataToSend.append("access_key", "c36aa52e-fad4-4bd2-861d-81dd491b1d0b"); // User needs to replace this
                      formDataToSend.append("subject", `New Revenue Leak Audit Application - ${formData.fullName} (${formData.company})`);
                      formDataToSend.append("from_name", "Markethunterz Audit Bot");

                      Object.entries(formData).forEach(([key, value]) => {
                        formDataToSend.append(key, value as string);
                      });

                      const response = await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        body: formDataToSend
                      });

                      const data = await response.json();

                      if (data.success) {
                        setSubmitStatus('success');
                        setTimeout(() => {
                          setIsModalOpen(false);
                          setSubmitStatus('idle');
                          setFormData({
                            fullName: '',
                            company: '',
                            email: '',
                            brandChannel: '',
                            offer: '',
                            implementation: ''
                          });
                        }, 2000);
                      } else {
                        setSubmitStatus('error');
                      }
                    } catch (error) {
                      setSubmitStatus('error');
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                >

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Main Brand Channel</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Website URL, Instagram, or LinkedIn link"
                      value={formData.brandChannel}
                      onChange={(e) => setFormData({ ...formData, brandChannel: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Primary Offer</label>
                    <input
                      type="text"
                      required
                      placeholder="What is your core product or service?"
                      value={formData.offer}
                      onChange={(e) => setFormData({ ...formData, offer: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Are you open to implementation if major leaks are found?</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="implementation"
                          value="yes"
                          required
                          checked={formData.implementation === 'yes'}
                          onChange={(e) => setFormData({ ...formData, implementation: e.target.value })}
                          className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-slate-300"
                        />
                        <span className="text-slate-700 font-medium group-hover:text-indigo-600 transition-colors">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="implementation"
                          value="no"
                          required
                          checked={formData.implementation === 'no'}
                          onChange={(e) => setFormData({ ...formData, implementation: e.target.value })}
                          className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-slate-300"
                        />
                        <span className="text-slate-700 font-medium group-hover:text-indigo-600 transition-colors">No</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full rounded-xl px-8 py-4 font-display font-bold text-white transition-all ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-cyan-500 hover:shadow-lg hover:-translate-y-0.5'
                        }`}
                    >
                      {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent!' : submitStatus === 'error' ? 'Failed - Try Again' : 'Request My Audit Review'}
                    </button>
                    {submitStatus === 'success' && (
                      <p className="text-emerald-600 text-center mt-4 font-medium">Application sent successfully!</p>
                    )}
                    {submitStatus === 'error' && (
                      <p className="text-rose-600 text-center mt-4 font-medium">Failed to send. Please try again or contact jc@markethunterz.com</p>
                    )}
                  </div>

                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
