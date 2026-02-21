import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const highlights = [
  "🎓 SFSU — B.S. Computer Science",
  "🏅 GPA: 3.8 / 4.0",
  "🤖 Gen-Pinc Scholar",
  "🧬 gSTAR ML & Data Science Certificate",
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="01" title="About" />

        <div ref={ref} className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-8">
              I'm a Computer Science student at San Francisco State University (GPA 3.8, graduating Fall 2025) with hands-on experience shipping AI products, refining LLMs, and building full-stack applications used by thousands. I've worked at companies like Scale AI and Keplr AI, contributed to open-source, and led large-scale community events. I'm energized by problems at the intersection of AI and real human impact.
            </p>

            <div className="flex flex-wrap gap-3">
              {highlights.map((h, i) => (
                <motion.span
                  key={h}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-body rounded-lg border border-border"
                >
                  {h}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64">
              <div className="absolute inset-0 rounded-2xl bg-secondary border border-border" />
              <div className="absolute inset-0 rounded-2xl flex items-center justify-center">
                <span className="font-display font-800 text-6xl sm:text-7xl text-gradient">AM</span>
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -top-2 -right-2 w-full h-full rounded-2xl border border-primary/20 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
