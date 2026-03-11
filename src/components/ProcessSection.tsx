import { motion } from "framer-motion";
import { Search, Map, Code2, Rocket } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const stepIcons = [Search, Map, Code2, Rocket];

const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: stepIcons[0], number: "01", title: t.process.step1Title, description: t.process.step1Desc },
    { icon: stepIcons[1], number: "02", title: t.process.step2Title, description: t.process.step2Desc },
    { icon: stepIcons[2], number: "03", title: t.process.step3Title, description: t.process.step3Desc },
    { icon: stepIcons[3], number: "04", title: t.process.step4Title, description: t.process.step4Desc },
  ];

  return (
    <section id="process" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16 md:mb-20"
        >
          <span className="section-label">{t.process.label}</span>
          <h2 className="section-title">
            {t.process.titleStart}{" "}
            <span className="gradient-text">{t.process.titleHighlight}</span>
          </h2>
          <p className="section-desc">{t.process.desc}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative premium-card p-5 sm:p-7 text-center group"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-px bg-gradient-to-r from-border to-transparent" />
              )}

              <span className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-muted/60 block mb-3 sm:mb-5 group-hover:text-primary/20 transition-colors duration-500">
                {step.number}
              </span>
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-all duration-500">
                <step.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2.5 text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
