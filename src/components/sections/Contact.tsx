import { Card, CardContent } from "@/components/ui/card";
import { Value } from "@radix-ui/react-select";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Linkedin,
    label: "Message Me On",
    value:"LinkedIn",
    href: "https://www.linkedin.com/in/pranavxp/",
  },
  {
    icon: Mail,
    label: "Email",
    value: "pranavpkx@gmail.com",
    href: "mailto:pranavpkx@gmail.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "https://earth.google.com/web/search/india/@21.06793174,82.75221335,402.9037145a,4443206.96757356d,35y,0h,0t,0r/data=CnQaRhJACiUweDMwNjM1ZmYwNmI5MmI3OTE6MHhkNzhjNGZhMTg1NDIxM2E2GZEotKz7lzRAIT1-b9OfvVNAKgVpbmRpYRgCIAEiJgokCWXpAEnwrjZAEWLpAEnwrjbAGZxw-ZXBG0hAIdx60DkyeUzAQgIIAUICCABKDQj___________8BEAA"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/pranavxp",
    color: "hover:text-gray-400"
  }  
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-text-primary mb-4">
              My Contact
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Done reading? Let's connect
            </h3>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Thanks for stopping by! If you like what you see and want to hear from me, 
              if there's a project, a question, or just a good chat – feel free to reach out!
            </p>
          </div>

          {/* Contact Information */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 animate-slide-in">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-text-primary mb-6">
                  Get in Touch
                </h3>
                <p className="text-text-secondary leading-relaxed mb-8">
                  I'm always open to discussing cyber security projects, networking solutions, 
                  or collaborating on innovative AI security applications. 
                  Don't hesitate to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex flex-col items-center p-6 bg-card border border-border rounded-lg hover:border-border-hover hover:shadow-card transition-all duration-300 group text-center"
                  >
                    <div className="w-16 h-16 bg-accent-soft rounded-lg flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300 mb-4">
                      <info.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted font-medium mb-1">{info.label}</p>
                      <p className="text-text-primary font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-text-primary mb-6">
                  Follow Me
                </h4>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-16 h-16 bg-secondary hover:bg-secondary-hover rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-glow hover:-translate-y-1 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-text-secondary group-hover:text-primary transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};