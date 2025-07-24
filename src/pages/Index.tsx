import { useEffect } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Resume } from "@/components/sections/Resume";
import { Work } from "@/components/sections/Work";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  useEffect(() => {
    // Apply dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      <Hero />
      <About />
      <Resume />
      <Work />
      <Contact />
    </div>
  );
};

export default Index;
