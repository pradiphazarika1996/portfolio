// components/skills.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Settings } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: [
        "HTML",
        "CSS",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "Tailwind CSS",
      ],
      color: "text-blue-500",
    },
    {
      title: "Backend",
      icon: Code,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
      color: "text-green-500",
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL", "MongoDB"],
      color: "text-purple-500",
    },
    {
      title: "Tools & Others",
      icon: Settings,
      skills: [
        "Git/GitHub",
        "VS Code",
        "Postman",
        "NPM",
        "Vercel",
        "WordPress",
        "Elementor",
      ],
      color: "text-orange-500",
    },
  ];

  const skillLevels = [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "MongoDB", level: 78 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div
                  className={`mx-auto p-3 rounded-full bg-muted ${category.color}`}
                >
                  <category.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto animate-fade-in">
          <CardHeader>
            <CardTitle className="text-center">Skill Proficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {skillLevels.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
