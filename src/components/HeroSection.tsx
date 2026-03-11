import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Award } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const trustBadges = [
    { icon: Shield, label: t.hero.badge1 },
    { icon: Zap, label: t.hero.badge2 },
    { icon: Award, label: t.hero.badge3 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center section-padding pt-28 sm:pt-32 md:pt-36 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      <div className="container mx-auto relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2.5 bg-primary/8 border border-primary/15 px-6 py-2.5 rounded-full mb-10">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-primary/90 uppercase tracking-wider">
              {t.hero.badge}
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] mb-6 sm:mb-8 tracking-tight"
        >
          {t.hero.titleStart}{" "}
          <span className="gradient-text">{t.hero.titleHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-20 px-4 sm:px-0"
        >
          <a
            href="#contact"
            className="gradient-bg px-8 sm:px-10 py-4 rounded-2xl font-bold text-primary-foreground inline-flex items-center justify-center gap-2.5 hover:opacity-90 transition-all glow-primary text-sm sm:text-base"
          >
            {t.hero.ctaPrimary}
            <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="border border-border/80 hover:border-primary/30 bg-card/40 hover:bg-card/60 px-8 sm:px-10 py-4 rounded-2xl font-bold text-foreground inline-flex items-center justify-center transition-all duration-500 text-sm sm:text-base"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-5 sm:gap-8 md:gap-12"
        >
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3 text-muted-foreground/80">
              <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center">
                <badge.icon size={15} className="text-primary/80" />
              </div>
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
