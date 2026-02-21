import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const leadershipEntries = [
  {
    title: "Manara West Conference",
    role: "Conference Chair",
    date: "Jun 2024 – Feb 2025",
    description:
      "Led the 2025 Manara West Conference — the largest annual gathering for Muslim students on the West Coast. Managed 5+ committees, 50+ volunteers, 450+ attendees, 20+ universities.",
  },
  {
    title: "Association of Computing Machinery (ACM)",
    role: "Marketing Director",
    date: "Feb 2023 – Jan 2025",
    description:
      "Co-managed 3 social media platforms; grew followers by 50%, boosted engagement by 35%, increased post reach by 40%.",
  },
];

const Leadership = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="leadership" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="05" title="Leadership" />

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {leadershipEntries.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-glow transition-all duration-300"
            >
              <h3 className="text-lg font-display font-700 text-foreground mb-1">{entry.title}</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-primary font-body font-500">{entry.role}</span>
                <span className="text-xs text-muted-foreground font-mono">• {entry.date}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{entry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
