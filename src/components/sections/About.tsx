import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, BarChart3, Target } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive and scalable web applications using modern technologies and frameworks.",
    technologies: ["TypeScript", "Node.js"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces with focus on user experience and accessibility.",
    technologies: ["Figma", "Design Systems", "Prototyping"]
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Analyzing complex datasets to derive actionable insights using statistical methods and visualization.",
    technologies: ["Python", "SQL", "Machine Learning"]
  },
  {
    icon: Target,
    title: "Strategy & Planning",
    description: "Developing strategic solutions to complex business problems with focus on scalability and growth.",
    technologies: ["Project Management", "Strategic Planning", "Leadership"]
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-text-primary mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              I'm Pranav, a passionate developer and data science expert based in India. 
              I specialize in creating exceptional digital experiences that combine technical excellence with beautiful design. 
              My expertise spans across multiple domains—from building intelligent systems and crafting user-centered solutions to exploring cybersecurity, 
              homelabbing, and network security as a dedicated security enthusiast.
            </p>
          </div>

          {/* Personal Story */}
          <div className="mb-16 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Card className="bg-card border-border hover:border-border-hover transition-colors duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-text-primary mb-4">What I Can Do?</h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  From crafting AI models to building elegant web experiences and self-hosting servers, 
                  I believe in the power of technology to solve real-world problems and I'm always eager to learn, experiment, 
                  and evolve with every project I work on. As a homelabbing and security enthusiast, I enjoy exploring infrastructure, 
                  tinkering with systems, and deepening my understanding of cybersecurity and network design in hands-on environments.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Whether it's building intelligent systems, crafting beautiful web applications, 
                  analyzing complex datasets, or exploring cybersecurity and homelab environments, 
                  I approach every challenge with curiosity and a meticulous attention to detail that drives exceptional results.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.title} 
                className="bg-card border-border hover:border-border-hover hover:shadow-card transition-all duration-300 group animate-scale-in"
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-soft rounded-full flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-text-primary mb-2">
                        {skill.title}
                      </h4>
                      <p className="text-text-secondary leading-relaxed mb-4">
                        {skill.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary"
                            className="bg-secondary hover:bg-secondary-hover text-text-secondary border-border"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};