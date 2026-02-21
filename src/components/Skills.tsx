import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "Swift", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    skills: ["React", "React Native", "Node.js", "Next.js", "Express.js", "Flutter", "PyTorch", "TensorFlow"],
  },
  {
    title: "Tools & Platforms",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "AWS", "Docker", "Git", "GitHub", "Postman", "Cursor", "V0", "RAG"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="04" title="Skills" />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.15 }}
            >
              <h3 className="text-sm font-mono text-primary mb-4 tracking-wide">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: gi * 0.15 + si * 0.04, duration: 0.3 }}
                    className="px-3 py-1.5 text-sm font-body text-foreground bg-secondary border border-border rounded-lg hover:border-primary/40 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
