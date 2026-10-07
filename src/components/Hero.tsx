import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  TrendingUp,
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  Check,
  Clock,
} from 'lucide-react';

const APP_URL = 'https://app.bmoprojects.in/';

/* =========================================================
   FRAMER MOTION VARIANTS
========================================================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const INQUIRY_TYPES = [
  'Request Demo',
  'Pricing',
  'Custom Integration',
  'Support',
];

export const Hero: React.FC = () => {
  // Contact Us Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Request Demo',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    // Simulate real submission network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'Request Demo',
      message: '',
    });
    setIsSubmitted(false);
  };

  const scrollToAnalytics = () => {
    const lenis = (window as any).lenis;
    const el =
      document.getElementById('performance-analytics') ||
      document.getElementById('analytics-preview');

    if (lenis && el) {
      lenis.scrollTo(el, { offset: -90, duration: 1.2 });
    } else if (el) {
      const elementTop = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-white pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 lg:pt-36 lg:pb-14 text-slate-900"
    >
      {/* =====================================================
          BACKGROUND AMBIENT GLOWS
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-bright-grid opacity-[0.22]" />

        {/* Main Ambient Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute left-1/2 top-[-120px] h-[540px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-orange-400/20 via-amber-300/15 to-orange-500/5 blur-[130px]"
        />

        {/* Left Floating Glow */}
        <motion.div
          animate={{
            x: [0, 18, 0],
            y: [0, -12, 0],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-[5%] top-[25%] h-36 w-36 rounded-full bg-orange-400/10 blur-3xl"
        />

        {/* Right Floating Glow */}
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 14, 0],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-[5%] top-[35%] h-44 w-44 rounded-full bg-amber-400/10 blur-3xl"
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER (2-COLUMN GRID)
      ====================================================== */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ===================================================
              LEFT COLUMN: HEADLINE, FEATURE PILLS & CTAs
          ==================================================== */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            {/* STATUS BADGE */}
            <motion.div variants={fadeUpVariants}>
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/80 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-orange-600 shadow-xs backdrop-blur-sm sm:text-xs"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <Sparkles className="h-4 w-4 text-orange-500" />
                <span>Smart Task &amp; Performance Platform</span>
              </motion.div>
            </motion.div>

            {/* MAIN HEADLINE */}
            <motion.div variants={fadeUpVariants} className="relative max-w-2xl">
              <div className="pointer-events-none absolute -left-10 top-1/2 -z-10 h-48 w-80 -translate-y-1/2 rounded-full bg-orange-400/10 blur-3xl" />
              <h1 className="font-heading text-3xl font-black leading-[1.1] tracking-[-0.035em] text-slate-950 sm:text-5xl md:text-5xl lg:text-[3.5rem] xl:text-[3.85rem]">
                Assign Tasks.{' '}
                <span className="relative inline-block text-gradient-orange">
                  Calculate Points.
                </span>{' '}
                Elevate Performance.
              </h1>
            </motion.div>

            {/* SUBTITLE */}
            <motion.p
              variants={fadeUpVariants}
              className="mt-4 text-slate-600 text-base sm:text-lg font-medium leading-relaxed max-w-xl"
            >
              Streamline project workflows, automate daily performance scoring, track SLA issue resolutions, and motivate teams with live leaderboards.
            </motion.p>

            {/* FEATURE PILLS MATRIX GRID (6 PILLS) */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-7 grid w-full max-w-xl grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3"
            >
              <FeaturePill
                icon={<CheckCircle2 />}
                iconClass="text-orange-500"
                text="Assign Task"
              />
              <FeaturePill
                icon={<Zap />}
                iconClass="text-amber-500"
                text="Calculate Points"
              />
              <FeaturePill
                icon={<TrendingUp />}
                iconClass="text-emerald-500"
                text="Daily Average"
              />
              <FeaturePill
                icon={<ShieldCheck />}
                iconClass="text-blue-500"
                text="Issue SLA"
              />
              <FeaturePill
                icon={<Award />}
                iconClass="text-orange-500"
                text="Leaderboard"
              />
              <FeaturePill
                icon={<Award />}
                iconClass="text-purple-500"
                text="Level Evaluator"
              />
            </motion.div>

            {/* ACTION CTAs */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-8 flex w-full flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5"
            >
              {/* Primary CTA */}
              <motion.a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-orange-500/30 cursor-pointer"
              >
                <motion.span
                  initial={{ x: '-120%' }}
                  whileHover={{ x: '120%' }}
                  transition={{ duration: 0.65, ease: 'easeInOut' }}
                  className="absolute inset-y-0 w-1/3 skew-x-[-20deg] bg-white/20 blur-sm"
                />
                <Sparkles className="relative h-5 w-5 text-amber-100 transition-transform duration-300 group-hover:rotate-12" />
                <span className="relative">Go to App</span>
                <ExternalLink className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              {/* Secondary CTA */}
              <motion.button
                type="button"
                onClick={scrollToAnalytics}
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className="group inline-flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-base font-bold text-slate-800 shadow-xs transition-all duration-300 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md"
              >
                <span>View Analytics</span>
                <ArrowRight className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-orange-500" />
              </motion.button>
            </motion.div>

          
          </div>

          {/* ===================================================
              RIGHT COLUMN: CONTACT US FORM CARD (id="contact")
          ==================================================== */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div
              id="contact"
              className="relative rounded-3xl bg-white/95 p-6 sm:p-8 border border-orange-200/90 shadow-2xl shadow-orange-500/10 backdrop-blur-xl transition-all duration-300 hover:border-orange-300 scroll-mt-28 overflow-hidden"
            >
              {/* Subtle Ambient Glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br from-orange-400/20 to-amber-300/20 blur-2xl" />

              {/* CARD HEADER */}
              <div className="flex items-center gap-3.5 mb-6 relative">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-orange-600 shadow-xs">
                  <MessageSquare className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-black text-slate-900 tracking-tight">
                    Contact Us
                  </h3>
                  <p className="text-xs font-medium text-slate-500">
                    Get in touch with our team for demos &amp; support
                  </p>
                </div>
              </div>

              {/* SUCCESS SUBMISSION VIEW */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4 shadow-inner">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 font-heading mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm font-medium text-slate-600 mb-6 max-w-xs">
                    Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Our team will get back to you at <span className="font-bold text-orange-600">{formData.email}</span> within 2 hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                /* CONTACT FORM */
                <form onSubmit={handleSubmit} className="space-y-4 relative">
                  
                  {/* FULL NAME */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name <span className="text-orange-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="h-4 w-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* WORK EMAIL */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Work Email <span className="text-orange-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="h-4 w-4" />
                      </div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@company.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* PHONE / COMPANY */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone / Company <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="h-4 w-4" />
                      </div>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* INQUIRY TYPE SELECTOR */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Inquiry Type
                    </label>
                    <div className="grid grid-cols-2 gap-1.5">
                      {INQUIRY_TYPES.map((type) => {
                        const isSelected = formData.inquiryType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, inquiryType: type })}
                            className={`py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all text-center border cursor-pointer ${
                              isSelected
                                ? 'bg-orange-500 text-white border-orange-500 shadow-xs font-extrabold'
                                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your team size or project requirements..."
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 px-6 rounded-xl text-sm font-black text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}

              {/* CARD FOOTER INFO */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400">
                <span className="flex items-center gap-1 text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-orange-500" />
                  <span>⚡ 2-Hour Response</span>
                </span>
                <span className="flex items-center gap-1 text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>100% Confidential</span>
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

/* =========================================================
   FEATURE PILL HELPER COMPONENT
========================================================= */

interface FeaturePillProps {
  icon: React.ReactNode;
  iconClass: string;
  text: string;
}

const FeaturePill: React.FC<FeaturePillProps> = ({
  icon,
  iconClass,
  text,
}) => {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.025 }}
      className="group flex min-h-[54px] items-center justify-start gap-2.5 rounded-2xl border border-slate-200/90 bg-white/90 px-3 py-2.5 text-left text-xs font-extrabold text-slate-800 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-orange-300 hover:shadow-md"
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-slate-50 transition-all duration-300 group-hover:bg-orange-50 ${iconClass}`}
      >
        {React.cloneElement(
          icon as React.ReactElement<{ className?: string }>,
          { className: 'h-4 w-4' }
        )}
      </span>
      <span className="leading-tight text-[11px] sm:text-xs">{text}</span>
    </motion.div>
  );
};

export default Hero;
