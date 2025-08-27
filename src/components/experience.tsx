// components/experience.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Gratia Technology",
      position: "Front End Developer",
      duration: "July 2024 - Present",
      location: "Guwahati",
      achievements: [
        " Developed IPMS (Integrated Project Management System) with a role-based admin panel and individual dashboards for Admin and User",
        "Implemented multi-user authentication and authorization ensuring secure access control. Integrated Redux Toolkit & REST APIs to manage state and backend communication. Built a modern and responsive UI/UX using Shadcn UI with TypeScript for type safety and scalability.",
        "Focused on performance optimization, clean code, and reusable components.",
      ],
      technologies: [
        "Next.js",
        "Node.js",
        "Express.js",
        "Redux Toolkit",
        "Typescript",
        "MongoDB",
      ],
    },
    {
      company: "Kareng Technologies",
      position: "Front End Developer",
      duration: "May 2022 - June 2024",
      location: "Guwahati",
      achievements: [
        "Built and maintained web applications using Next.js, Node.js, and MySQL",
        "Implemented role-based dashboards for administrators, project managers, and auditors",
        "Managed proposal submissions and tenders for government tech projects",
        "Deployed 7+ responsive WordPress websites using Elementor",
      ],
      technologies: [
        "Next.js",
        "Node.js",
        "Express.js",
        "Redux Toolkit",
        "RTK Query",
        "MySQL",
      ],
    },
    {
      company: "Innovation Technologies",
      position: "React Developer",
      duration: "Jan 2020 - March 2021",
      location: "Guwahati",
      achievements: [
        "Developed E-commerce website using React.js",
        "Implemented features: Product Listings, Shopping Cart, Checkout, Admin Dashboard",
        "Integrated JWT authentication for secure user management",
        "Used modern React patterns and Redux for state management",
      ],
      technologies: ["React.js", "MongoDB", "Node.js", "Redux Toolkit", "JWT"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey and key achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <CardTitle className="text-xl text-primary mb-2">
                      {exp.position}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-lg font-semibold mb-2">
                      <Building className="h-4 w-4" />
                      {exp.company}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
