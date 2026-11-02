import { useState, useEffect } from "react";

const navigation = [
  { name: "About", href: "#about", index: "01" },
  { name: "Resume", href: "#resume", index: "02" },
  { name: "Work", href: "#work", index: "03" },
  { name: "Contact", href: "#contact", index: "04" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("about");
  useEffect(() => {
    const handleScroll = () => {
      const current = navigation.find(({ href }) => {
        const el = document.getElementById(href.slice(1));
        return el && window.scrollY + 120 >= el.offsetTop && window.scrollY + 120 < el.offsetTop + el.offsetHeight;
      });
      if (current) setActiveSection(current.href.slice(1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <nav className="portfolio-nav fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
    <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-6">
      <a href="#intro" className="text-sm font-semibold tracking-tight text-text-primary">Pranav Pramod</a>
      <ul className="flex items-center gap-1 sm:gap-3">
        {navigation.map((item) => <li key={item.name}><a href={item.href} className={`nav-link inline-flex h-9 items-center gap-2 rounded-md px-2 text-sm transition-colors sm:px-3 ${activeSection === item.href.slice(1) ? "text-primary" : "text-text-secondary hover:text-text-primary"}`}><span className="nav-index font-mono text-[10px] opacity-60">{item.index}</span><span>{item.name}</span></a></li>)}
      </ul>
    </div>
    <style>{`@media(max-width:560px){.portfolio-nav>div{padding-left:16px;padding-right:16px}.portfolio-nav>div>a{display:none}.nav-link{gap:4px!important;padding-left:7px!important;padding-right:7px!important}.nav-index{display:none}}`}</style>
  </nav>;
};
