import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, MapPin, Clock } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";

type ContactForm = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [form, setForm] = useState<ContactForm>({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const contactSchema = z.object({
      name: z.string().trim().min(1, t.contact.errorName).max(100),
      company: z.string().trim().max(100).optional(),
      email: z.string().trim().email(t.contact.errorEmail).max(255),
      phone: z.string().trim().max(20).optional(),
      service: z.string().min(1, t.contact.errorService),
      message: z.string().trim().min(1, t.contact.errorMessage).max(2000),
    });
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
    toast({
      title: t.contact.toastTitle,
      description: t.contact.toastDesc,
    });
  };

  const inputClasses =
    "w-full bg-muted/30 border border-border/60 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all duration-300 text-sm";

  if (submitted) {
    return (
      <section id="contact" className="section-padding">
        <div className="container mx-auto max-w-lg text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="premium-card p-14"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="text-accent" size={30} />
            </div>
            <h3 className="font-display text-2xl font-extrabold mb-3">
              {t.contact.successTitle}
            </h3>
            <p className="text-muted-foreground">
              {t.contact.successDesc}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/20 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16 md:mb-20"
        >
          <span className="section-label">{t.contact.label}</span>
          <h2 className="section-title">
            {t.contact.titleStart}{" "}
            <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h2>
          <p className="section-desc">{t.contact.desc}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="premium-card p-7 space-y-7">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                  <Mail size={17} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground mb-0.5">{t.contact.email}</div>
                  <div className="text-sm text-muted-foreground">geralnexia@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                  <MapPin size={17} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground mb-0.5">{t.contact.location}</div>
                  <div className="text-sm text-muted-foreground">{t.contact.locationValue}</div>
                </div>
              </div>
            </div>

            <div className="premium-card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/8 flex items-center justify-center shrink-0">
                <Clock size={17} className="text-accent" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-accent font-semibold">{t.contact.responseTime}</span> — {t.contact.responseDesc}
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 premium-card p-5 sm:p-7 md:p-9 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  name="name"
                  placeholder={t.contact.namePlaceholder}
                  value={form.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
                {errors.name && (
                  <p className="text-destructive text-xs mt-1.5">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  name="company"
                  placeholder={t.contact.companyPlaceholder}
                  value={form.company}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
                {errors.email && (
                  <p className="text-destructive text-xs mt-1.5">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  name="phone"
                  placeholder={t.contact.phonePlaceholder}
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>
            <div>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">{t.contact.servicePlaceholder}</option>
                {t.contact.serviceOptions.map((s: string) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-destructive text-xs mt-1.5">{errors.service}</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                placeholder={t.contact.messagePlaceholder}
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={inputClasses + " resize-none"}
              />
              {errors.message && (
                <p className="text-destructive text-xs mt-1.5">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="gradient-bg w-full py-4 rounded-xl font-bold text-primary-foreground flex items-center justify-center gap-2.5 hover:opacity-90 transition-all duration-300 disabled:opacity-50 glow-primary text-base"
            >
              {loading ? (
                t.contact.sending
              ) : (
                <>
                  {t.contact.submit}
                  <Send size={17} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
