import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SectionHeading = ({ number, title }: { number: string; title: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-12"
    >
      <span className="font-mono text-sm text-primary">{number}</span>
      <h2 className="text-2xl sm:text-3xl font-display font-700 text-foreground">{title}</h2>
      <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
    </motion.div>
  );
};

export default SectionHeading;
