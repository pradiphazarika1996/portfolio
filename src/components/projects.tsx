"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, CheckCircle } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Government Tech Project Dashboard",
      description:
        "Comprehensive role-based dashboard system for administrators, project managers, and auditors with advanced proposal management capabilities and real-time collaboration features.",
      image: "/api/placeholder/400/250",
      technologies: [
        "Next.js",
        "Redux Toolkit",
        "MySQL",
        "Node.js",
        "Express.js",
      ],
      features: [
        "Role-based access control",
        "Proposal management",
        "Real-time updates",
        "Responsive design",
        "Data visualization",
      ],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with comprehensive product management, secure shopping cart functionality, and integrated payment processing system.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "MongoDB", "Node.js", "Express.js", "JWT"],
      features: [
        "Product catalog",
        "Shopping cart",
        "User authentication",
        "Admin panel",
        "Order management",
      ],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "WordPress Portfolio Sites",
      description:
        "Collection of 7+ responsive WordPress websites deployed with custom styling, SEO optimization, and performance enhancements using Elementor.",
      image: "/api/placeholder/400/250",
      technologies: ["WordPress", "Elementor", "CSS", "JavaScript", "PHP"],
      features: [
        "Responsive design",
        "SEO optimized",
        "Custom styling",
        "Performance optimized",
        "Content management",
      ],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my recent work and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🚀</div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1 group/btn">
                    <ExternalLink className="mr-2 h-3 w-3 group-hover/btn:scale-110 transition-transform" />
                    Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn"
                  >
                    <Github className="mr-2 h-3 w-3 group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
