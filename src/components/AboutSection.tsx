import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="section-label">{t.about.label}</span>
          <h2 className="section-title">
            {t.about.titleStart}{" "}
            <span className="gradient-text">{t.about.titleHighlight}</span>
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px] max-w-3xl mx-auto">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
