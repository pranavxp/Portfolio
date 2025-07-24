import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";

const projects = [
  {
    title: "MarksCSV",
    description: "Marks2CSV is an innovative tool designed to automate the process of converting student marks from answer sheet tables into well-structured CSV files.",
    technologies: ["Machine Learning", "Data Analysis", "OCR", "CSV Processing"],
    features: [
      "Automated data processing and analysis",
      "OCR",
      "Real-time insights dashboard",
      "Export functionality for reports"
    ],
    status: "Completed",
    year: "2024",
    github: "https://github.com/pranavxp/marks2csv"
  },
  {
    title: "Drowsiness Detection System",
    description: "Real-time drowsiness detection system using facial landmarks and eye aspect ratio analysis to enhance driver safety.",
    technologies: ["Computer Vision", "OpenCV", "Python", "Machine Learning"],
    features: [
      "Real-time facial landmark detection",
      "Eye aspect ratio monitoring",
      "Alert system integration",
      "Performance analytics"
    ],
    status: "Completed",
    year: "2023",
    github: "https://github.com/pranavxp/Drowsiness"
  },
  {
    title: "Accident Anticipation System",
    description: "Predictive analytics system for accident prevention using sensor data and machine learning algorithms.",
    technologies: ["Predictive Analytics", "Python", "TensorFlow"],
    features: [
      "Multi-sensor data fusion",
      "Predictive modeling algorithms",
      "Real-time risk assessment",
      "Emergency response integration"
    ],
    status: "Completed",
    year: "2024",
    github: "https://github.com/MakersCircle/major-project-works"
  }
];

const publications = [
  {
    title: "Automated Mark Entry in Educational Institutions Using Multiple CNNs: A Case Study on Recognizing Handwritten Fractional Marks",
    description: "Published in: 2024 International Conference on Computational Intelligence and Network Systems (CINS). This study presents a methodology for the recognition of single-digit with fractional handwritten numbers utilizing multiple specialized Convolutional Neural Network (CNN) models.",
    journal: "IEEE Xplore Digital Library",
    year: "2024",
    doi: "10.1109/CINS63881.2024.10864430",
    status: "Published"
  }
];

export const Work = () => {
  return (
    <section id="work" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-text-primary mb-4">
              My Work
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              What I've Been Building
            </h3>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              A showcase of my projects and research contributions that demonstrate my expertise 
              in machine learning, computer vision, and data science applications.
            </p>
          </div>

          {/* Projects Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-text-primary mb-8 animate-fade-in">
              Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="bg-card border-border hover:border-border-hover hover:shadow-card transition-all duration-300 group animate-scale-in"
                  style={{animationDelay: `${0.1 * index}s`}}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-accent-soft rounded-lg flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                        <div className="w-6 h-6 bg-primary rounded-sm"></div>
                      </div>
                      <div className="flex items-center text-text-muted text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.year}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-text-primary mb-2">
                      {project.title}
                    </h4>
                    
                    <p className="text-text-secondary leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-text-primary mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span className="text-sm text-text-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="bg-secondary text-text-secondary text-xs border-border"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className={project.status === "Completed" 
                          ? "bg-success text-white" 
                          : "bg-warning text-black"
                        }
                      >
                        {project.status}
                      </Badge>
                      
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <Github className="w-4 h-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Publications Section */}
          <div>
            <h3 className="text-3xl font-semibold text-text-primary mb-8 animate-fade-in">
              Publications
            </h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <Card 
                  key={index}
                  className="bg-card border-border hover:border-border-hover hover:shadow-card transition-all duration-300 animate-scale-in"
                  style={{animationDelay: `${0.2 * index}s`}}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="mb-4 md:mb-0 flex-1">
                        <h4 className="text-2xl font-semibold text-text-primary mb-2">
                          {pub.title}
                        </h4>
                        <p className="text-primary font-medium">{pub.journal}</p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <Badge 
                          variant="default"
                          className="bg-success text-white"
                        >
                          {pub.status}
                        </Badge>
                        <div className="flex items-center text-text-secondary">
                          <Calendar className="w-4 h-4 mr-2" />
                          {pub.year}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {pub.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-muted">
                        DOI: {pub.doi}
                      </span>
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </a>
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