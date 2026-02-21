import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  impact: string[];
  stack: string[];
  github: string;
}

const projects: Project[] = [
  {
    title: "BudgetPal",
    subtitle: "Built at Cal Hacks HFI",
    description:
      "Full-stack budget tracking app with ML-powered predictive budgeting and anomaly detection.",
    impact: [
      "25% increase in user engagement",
      "30% improved financial forecast accuracy",
      "90% user satisfaction rate",
    ],
    stack: ["Python", "React", "Node.js", "Django", "PyTorch", "AWS"],
    github: "https://github.com/amriz26",
  },
  {
    title: "MindEase",
    subtitle: "Mental Wellness for Students",
    description:
      "Mental wellness app for college students with fine-tuned Claude 2.0 model for personalized stress management, guided meditations, and real-time support.",
    impact: [
      "40% increase in daily active users",
      "35% improved user retention",
      "NLP-driven wellness tracking",
    ],
    stack: ["Next.js", "React", "Node.js", "Express.js", "GCP Firestore", "Vercel"],
    github: "https://github.com/amriz26",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group p-6 rounded-xl bg-card border border-border hover:border-glow transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-display font-700 text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-primary/70 mt-0.5">{project.subtitle}</p>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub: ${project.title}`}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github size={20} />
        </a>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

      <ul className="space-y-1 mb-5">
        {project.impact.map((item) => (
          <li key={item} className="text-xs text-muted-foreground flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-mono text-primary/80 bg-primary/5 border border-primary/15 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="03" title="Projects" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/amriz26"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            More on GitHub <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
