import { motion } from "framer-motion";
import {
  Bot, Brain, BarChart3, Cog, FileSpreadsheet, Smartphone, Globe, Code,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Cog, FileSpreadsheet, BarChart3, Code, Smartphone, Bot, Globe, Brain];

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: icons[0], title: t.services.s1Title, description: t.services.s1Desc },
    { icon: icons[1], title: t.services.s2Title, description: t.services.s2Desc },
    { icon: icons[2], title: t.services.s3Title, description: t.services.s3Desc },
    { icon: icons[3], title: t.services.s4Title, description: t.services.s4Desc },
    { icon: icons[4], title: t.services.s5Title, description: t.services.s5Desc },
    { icon: icons[5], title: t.services.s6Title, description: t.services.s6Desc },
    { icon: icons[6], title: t.services.s7Title, description: t.services.s7Desc },
    { icon: icons[7], title: t.services.s8Title, description: t.services.s8Desc },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16 md:mb-20"
        >
          <span className="section-label">{t.services.label}</span>
          <h2 className="section-title">
            {t.services.titleStart}{" "}
            <span className="gradient-text">{t.services.titleHighlight}</span>
          </h2>
          <p className="section-desc">{t.services.desc}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="premium-card p-5 sm:p-7 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-all duration-500">
                <service.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2.5 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 premium-card border-primary/15 p-8 md:p-10 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            <span className="text-primary font-bold">{t.services.customLabel}</span> — {t.services.customDesc}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
