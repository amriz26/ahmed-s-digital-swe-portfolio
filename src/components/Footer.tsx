import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground font-body">
          © 2025 Ahmed Mriziq
        </p>

        <p className="text-xs text-muted-foreground/50 font-body hidden sm:block">
          Designed & Built by Ahmed Mriziq
        </p>

        <div className="flex gap-4">
          {[
            { icon: Github, href: "https://github.com/amriz26", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/ahmed-m-156260237/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:moody.mri@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
