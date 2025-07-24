import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Resume", href: "#resume" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(item => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 md:top-6">
      <div className="bg-card/80 backdrop-blur-lg border border-border rounded-full px-3 py-2 shadow-soft md:px-6 md:py-3">
        <ul className="flex space-x-2 md:space-x-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 md:px-4 md:py-2 md:text-sm",
                  "hover:text-primary hover:bg-accent-soft",
                  activeSection === item.href.replace('#', '')
                    ? "text-primary bg-accent-soft shadow-glow"
                    : "text-text-secondary"
                )}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};