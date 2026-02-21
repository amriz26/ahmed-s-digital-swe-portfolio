import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:moody.mri@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading number="06" title="Contact" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl sm:text-4xl font-display font-800 text-foreground mb-4">
            Let's Build Something.
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            I'm currently open to new opportunities, collaborations, and interesting conversations. Drop me a message.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-4 mb-12"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors font-body text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors font-body text-sm"
            />
          </div>
          <textarea
            placeholder="Message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors font-body text-sm resize-none"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-body font-600 rounded-lg hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6 text-sm"
        >
          {[
            { icon: Mail, label: "moody.mri@gmail.com", href: "mailto:moody.mri@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ahmed-m-156260237/" },
            { icon: Github, label: "GitHub", href: "https://github.com/amriz26" },
            { icon: Phone, label: "(925) 329-1264", href: "tel:+19253291264" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={16} />
              <span>{label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
