import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  return (
    <section id="about" className="pt-24 md:pt-32 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                <img
                  src={profilePhoto}
                  alt="Professional Profile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-xl text-primary font-medium animate-slide-in">
                Hello, I'm Pranav Pramod
              </h2>
              <h1 className="text-5xl lg:text-6xl font-bold text-text-primary leading-tight animate-fade-in" style={{animationDelay: '0.2s'}}>
                Cyber Security &
                <span className="block text-transparent bg-gradient-primary bg-clip-text">
                  Networking
                </span>
                <span className="block text-transparent bg-gradient-primary bg-clip-text">
                  Enthusiast
                </span>
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl animate-fade-in" style={{animationDelay: '0.4s'}}>
                Passionate about cyber security and networking with expertise in AI and data science. 
                I focus on building secure systems, analyzing network vulnerabilities, 
                and creating innovative solutions for digital security challenges.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a
                href="/Pranav-CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary hover:bg-primary-hover shadow-glow group">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download CV
                </Button>
              </a>
            </div>
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in" style={{animationDelay: '0.8s'}}>
              <a
                href="https://github.com/pranavxp"
                className="w-12 h-12 bg-secondary hover:bg-secondary-hover rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
              >
                <Github className="w-5 h-5 text-text-secondary hover:text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/pranavxp/"
                className="w-12 h-12 bg-secondary hover:bg-secondary-hover rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5 text-text-secondary hover:text-primary" />
              </a>
              <a
                href="mailto:pranavpkx@gmail.com"
                className="w-12 h-12 bg-secondary hover:bg-secondary-hover rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
              >
                <Mail className="w-5 h-5 text-text-secondary hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
