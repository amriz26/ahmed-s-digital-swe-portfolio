import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  date: string;
  bullets: string[];
}

const experiences: ExperienceEntry[] = [
  {
    company: "Keplr AI",
    role: "Software Engineer Intern",
    location: "San Francisco, CA",
    date: "May 2025 – Sep 2025",
    bullets: [
      "Joined as the 2nd engineer, building AI-powered agents for enterprise supply chain teams",
      "Helped analyze supplier risk and optimize procurement strategies for strategic sourcing",
    ],
  },
  {
    company: "Scale AI",
    role: "Machine Learning Research Engineer",
    location: "San Francisco, CA",
    date: "May 2024 – May 2025",
    bullets: [
      "Refined LLMs by evaluating AI-generated code, implementing test cases, and optimizing algorithms — improving model performance by 20%",
      "Built AI-driven solutions for CVML and Vision Foundation Models using statistical methods, isolation forests, and deep learning — improving predictive accuracy by 25%",
      "Implemented state-of-the-art LiDAR semantic segmentation on autonomous vehicle data; contributed to LLM Automated Quality Control & Evaluation pipelines",
    ],
  },
  {
    company: "HeadStarter AI",
    role: "Software Engineer Fellow",
    location: "San Francisco, CA",
    date: "Jul 2024 – Sep 2024",
    bullets: [
      "Developed and deployed 5+ AI applications and APIs using Next.js, OpenAI, Pinecone, and Stripe, driving 500+ users in 3 months",
      "Led 4+ engineering fellows through end-to-end project execution using MVC patterns, Airtable, and Azure DevOps",
      "Mentored under engineers from Google, Apple, Meta, Bloomberg, and Two Sigma",
    ],
  },
  {
    company: "CTI CodeDay Labs",
    role: "Software Engineer Intern",
    location: "San Francisco, CA",
    date: "Jun 2024 – Aug 2024",
    bullets: [
      "Co-authored PR #1254 for the Open Energy Dashboard (10,000+ active users), implementing MetricTest and UnitTest for API data retrieval",
      "Improved data conversion accuracy (kWh to metric tons CO₂) by 15%",
      "Built baseline graphing functionality and admin features, improving data accuracy by 25%",
    ],
  },
  {
    company: "FRC System Overload Robotics",
    role: "Software & Manufacturing Lead",
    location: "Bay Area, CA",
    date: "Aug 2021 – Jun 2022",
    bullets: [
      "Led design, construction, and programming of robotic components for California competitions",
      "Improved operational precision by 15% during competition",
    ],
  },
];

const TimelineCard = ({ entry, index }: { entry: ExperienceEntry; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 sm:pl-12 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />
      {/* Timeline dot */}
      <div className="absolute left-[-4px] sm:left-[-4px] top-2 w-[9px] h-[9px] rounded-full bg-primary" />

      <div className="p-5 sm:p-6 rounded-xl bg-card border border-border hover:border-glow transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
          <div>
            <h3 className="text-lg font-display font-700 text-foreground">{entry.company}</h3>
            <p className="text-sm text-primary font-body font-500">{entry.role}</p>
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground font-mono">
            <span>{entry.date}</span>
            <span className="block sm:inline sm:ml-2 text-muted-foreground/60">{entry.location}</span>
          </div>
        </div>
        <ul className="space-y-2">
          {entry.bullets.map((bullet, i) => (
            <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
              <span className="text-primary mt-1.5 shrink-0">▹</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading number="02" title="Experience" />
        <div className="ml-2">
          {experiences.map((entry, i) => (
            <TimelineCard key={entry.company} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
