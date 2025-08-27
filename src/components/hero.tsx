"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 dark:from-primary/10 dark:via-purple-500/10 dark:to-pink-500/10"></div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Pradip Hazarika</span>
          </h1>

          <div className="text-xl md:text-2xl lg:text-3xl mb-8 h-16">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Front End Developer",
                2000,

                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-muted-foreground"
              repeat={Infinity}
            />
          </div>

          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-muted-foreground leading-relaxed animate-slide-up">
            Building responsive, user-friendly web applications with 2+ years of
            experience in React.js, Next.js, and modern JavaScript. Passionate
            about creating efficient, maintainable code and delivering
            exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group"
            >
              View My Work
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              <Link
                href="/resume/Resume.pdf"
                download="Pradip_Hazarika_Resume.pdf"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Link>
            </Button>

            <Button variant="ghost" size="lg" className="group">
              <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              <Link
                href=" https://github.com/pradiphazarika1996"
                download="https://github.com/pradiphazarika1996"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollToSection("about")}>
          <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors" />
        </button>
      </div>
    </section>
  );
}
