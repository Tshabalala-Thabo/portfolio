import React from "react";
import { Globe, Zap, Cpu, Palette, Server, Terminal, Database, Figma, PenTool } from 'lucide-react';

interface SkillData {
  icon: React.ComponentType;
  title: string;
  description: string;
}

export function ProfessionalSkills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { icon: Globe, title: "Next.js", description: "Proficient in using Next.js for building server-rendered applications and optimizing performance." },
        { icon: Zap, title: "React.js", description: "Experienced in React.js for developing dynamic and interactive user interfaces with a component-based architecture." },
        { icon: Cpu, title: "React Native", description: "Skilled in building cross-platform mobile applications using React Native." },
        { icon: Palette, title: "Tailwind CSS", description: "Proficient in using Tailwind CSS for creating modern, responsive, and utility-first designs efficiently." },
      ]
    },
    {
      title: "Backend and Database",
      skills: [
        { icon: Server, title: "Node.js", description: "Proficient in server-side JavaScript using Node.js for developing robust and efficient backend services." },
        { icon: Terminal, title: "PHP/Laravel", description: "Experienced in PHP/Laravel programming for web development." },
        { icon: Database, title: "MySQL", description: "Proficient in working with MySQL for relational database management." },
        { icon: Database, title: "MongoDB", description: "Experienced in using MongoDB for NoSQL database needs." },
      ]
    },
    {
      title: "Design and Database",
      skills: [
        { icon: Figma, title: "Figma", description: "Experienced in using Figma for creating and collaborating on UI designs and prototypes." },
        { icon: PenTool, title: "Illustrator", description: "Skilled in vector graphics creation and manipulation using Adobe Illustrator for logos and icons." },
      ]
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-100 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-3xl text-center uppercase mb-12">
          Professional Skills
        </h2>
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-source-code-pro font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-start space-y-2">
                    <div className="flex items-center space-x-2">
                      <skill.icon className="w-6 h-6 text-primary" />
                      <h4 className="text-2xl font-bold">{skill.title}</h4>
                    </div>
                    <p className="text-sm opacity-70">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}