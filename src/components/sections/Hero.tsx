import { Github, Linkedin, Mail, ArrowDownRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => (
  <section id="intro" className="hero-section relative flex min-h-screen items-center overflow-hidden pt-24">
    <div className="container relative z-10 mx-auto px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="mb-5 font-mono text-sm text-primary">Portfolio / India</p>
          <h1 className="max-w-3xl text-5xl font-medium leading-[1.04] tracking-[-.04em] text-text-primary md:text-7xl">
            Pranav Pramod
            <span className="mt-3 block text-3xl font-normal leading-tight tracking-[-.02em] text-text-secondary md:text-4xl">Cybersecurity, networks<br className="hidden md:block" /> & applied data science</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-text-secondary">
            I study how systems work, where they break, and how to make them more dependable—from network security to practical machine learning.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a href="#work" className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover">Selected work <ArrowDownRight size={16} /></a>
            <a href="mailto:pranavpkx@gmail.com" className="inline-flex h-12 items-center rounded-md border border-border px-5 text-sm font-medium text-text-primary transition-colors hover:bg-secondary">Get in touch</a>
          </div>
          <div className="mt-7 flex items-center justify-center gap-5 lg:justify-start">
            <a aria-label="GitHub" href="https://github.com/pranavxp" className="text-text-secondary transition-colors hover:text-primary"><Github size={18} strokeWidth={1.6} /></a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/pranavxp/" className="text-text-secondary transition-colors hover:text-primary"><Linkedin size={18} strokeWidth={1.6} /></a>
            <a aria-label="Email" href="mailto:pranavpkx@gmail.com" className="text-text-secondary transition-colors hover:text-primary"><Mail size={18} strokeWidth={1.6} /></a>
          </div>
        </div>
        <div className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
          <div className="hero-photo-frame relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-secondary">
            <img src={profilePhoto} alt="Pranav Pramod" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/60 to-transparent p-6 pt-20 text-white">
              <span className="font-mono text-xs">01 / Pranav Pramod</span><span className="font-mono text-xs">Security · Networks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>{`.hero-section{background:hsl(var(--background))}.hero-photo-frame img{object-position:center 38%}@media(max-width:1023px){.hero-section{padding-top:120px;padding-bottom:56px}.hero-photo-frame{max-height:440px}}`}</style>
  </section>
);
