// components/contact.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Send } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "pradiphazarika1996@gmail.com",
      href: "mailto:pradiphazarika1996@gmail.com",
      color: "text-blue-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9365030402",
      href: "tel:+919365030402",
      color: "text-green-500",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "pradiphazarika1996",
      href: "https://github.com/pradiphazarika1996",
      color: "text-purple-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Guwahati, Assam",
      href: "#",
      color: "text-orange-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let&apos;s discuss your next project or opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-6">L&apos;m Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I&apos;m always open to discussing new opportunities,
                interesting projects, or just having a friendly chat about
                technology and development. Feel free to reach out through any
                of the channels below.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex p-3 rounded-full bg-muted mb-4 ${info.color} group-hover:scale-110 transition-transform`}
                    >
                      <info.icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold mb-2">{info.title}</h4>
                    <a
                      href={info.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      {info.value}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="font-semibold mb-4">Languages</h4>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">English - Fluent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Hindi - Fluent</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-in-right">
            <CardHeader>
              <CardTitle>Send Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Subject
                </label>
                <Input placeholder="Project discussion" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Message
                </label>
                <Textarea
                  rows={5}
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <Button className="w-full group">
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
