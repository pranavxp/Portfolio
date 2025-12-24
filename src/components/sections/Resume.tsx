import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Technical Assistance Intern",
    company: "Manolo (2022-2023)",
    period: "2022 - 2023",
    location: "Hybrid",
    description: "Provided technical support for internal systems and infrastructure setup.",
    achievements: [
      "Supported system troubleshooting and ensured smooth day-to-day technical operations.",
      "Built and configured a NAS (Network-Attached Storage) system for internal data management.",
      "Assisted in setting up and maintaining office IT infrastructure."
    ],
    technologies: ["Computer Hardware","Network Setup","NAS"]
  }
];

const education = [
  {
    degree: "M.Tech in Cyber Forensics And Information Security",
    institution: "ER&DCI Institute of Technology, Trivandrum",
    period: "2025 - 2027",
    description: "Focused on cyber forensics and information security, covering digital evidence analysis, network security, and incident response",
    highlights: ["Cyber-Forensics", "Data Security"]
  },
  {
    degree: "B.Tech in Artificial Intelligence and Data Science",
    institution: "SJCET, Palai",
    period: "2021 - 2025",
    description: "Specializing in AI, data science with hands-on experience in Data Analytics.",
    highlights: ["Data Science", "Artificial Intelligence"]
  },
  {
    degree: "Higher Secondary Education",
    institution: "Sree Buddha Central School, Karunagappally",
    period: "2019 - 2021",
    description: "Completed higher secondary education with focus on Computer Science and Mathematics.",
    highlights: ["Computer Science Excellence", "Mathematics Proficiency", "Academic Achievement"]
  }
];

export const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-text-primary mb-4">
              My Resume
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Professional Profile
            </h3>
            <p className="text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed">
              From securing networks to tinkering with AI models, my journey blends cybersecurity expertise with data science innovation. 
              I hold a B.Tech in Artificial Intelligence and Data Science. Outside academics, I’ve pursued networking and 
              cybersecurity as a personal passion—exploring areas like network security, vulnerability assessment, and intelligent threat 
              detection through hands-on experimentation and self-driven learning.
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-text-primary mb-8 animate-fade-in">
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card 
                  key={index}
                  className="bg-card border-border hover:border-border-hover hover:shadow-card transition-all duration-300 animate-scale-in"
                  style={{animationDelay: `${0.1 * index}s`}}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="mb-4 md:mb-0">
                        <h4 className="text-2xl font-semibold text-text-primary mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-primary font-medium text-lg">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end space-y-2">
                        <div className="flex items-center text-text-secondary">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-text-secondary">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    <div className="mb-6">
                      <h5 className="text-lg font-medium text-text-primary mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-text-secondary">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="bg-accent-soft text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-3xl font-semibold text-text-primary mb-8 animate-fade-in">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="bg-card border-border hover:border-border-hover hover:shadow-card transition-all duration-300 animate-scale-in"
                  style={{animationDelay: `${0.2 * index}s`}}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="mb-4 md:mb-0">
                        <h4 className="text-2xl font-semibold text-text-primary mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-primary font-medium text-lg">{edu.institution}</p>
                      </div>
                      <div className="flex items-center text-text-secondary">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                    </div>
                    
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {edu.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <Badge 
                          key={highlight} 
                          variant="secondary"
                          className="bg-secondary text-text-secondary border-border"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
