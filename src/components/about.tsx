// components/about.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, GraduationCap, Award } from "lucide-react";

export function About() {
  const personalSkills = [
    "Problem-Solving mindset",
    "Creative Ideas",
    "Time Management",
    "Quick Learner",
  ];

  const certifications = [
    {
      title: "MERN Stack Course",
      provider: "GeeksforGeeks",
      year: "2021",
    },
    {
      title: "Introduction to Cloud Computing (AWS)",
      provider: "Aspire Technologies Pvt Ltd",
      year: "2019",
    },
    {
      title: "Introduction to Information Security",
      provider: "Certification",
      year: "2017",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-slide-in-left">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m a passionate Front-End Developer with expertise in
                  building scalable, responsive web applications. My journey in
                  web development has equipped me with strong skills in
                  React.js, Next.js, and modern JavaScript frameworks.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in creating clean, efficient code and have
                  experience working on government tech projects, e-commerce
                  platforms, and custom web solutions. I&apos;m always eager to
                  learn new technologies and tackle challenging problems.
                </p>

                <div className="pt-4">
                  <h4 className="font-semibold mb-3">Personal Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {personalSkills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">
                      B.Tech in Computer Science
                    </h4>
                    <p className="text-primary">
                      Assam Down Town University, Guwahati
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Specialization: Cloud Technology & Information Security
                    </p>
                    <p className="text-sm text-muted-foreground">
                      2015 - 2019 | SGPA: 69.9%
                    </p>
                  </div>
                  <div className="border-l-4 border-muted pl-4">
                    <h4 className="font-semibold">Higher Secondary</h4>
                    <p className="text-muted-foreground">
                      Govt Higher Secondary School, Tezu
                    </p>
                    <p className="text-sm text-muted-foreground">
                      2014 | CGPA: 5.6
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <Award className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium">{cert.title}</h5>
                        <p className="text-sm text-muted-foreground">
                          {cert.provider} • {cert.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
