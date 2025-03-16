import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

interface Event {
  title: string;
  company?: string;
  date: string;
  description: string;
  skills: string[];
}

export function Resume() {
  const experienceEvents: Event[] = [
    {
      title: "Software developer",
      company: "Promilezi",
      date: (() => {
        const startDate = new Date('2024-05-01');
        const today = new Date();
        const months = (today.getFullYear() - startDate.getFullYear()) * 12 + 
                      (today.getMonth() - startDate.getMonth());
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        
        if (years > 0) {
          return `${years} year${years > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
        }
        return `2024 May(current) - ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
      })(),
      description: "Started as a junior developer, working on front-end development for web applications.",
      skills: ["Laravel", "NextJS", "Figma", "MySQL", "Tailwind"]
    },
    {
      title: "Software developer intern",
      company: "Ground up Grinders",
      date: "2023 - 10 months",
      description: "Completed a Bachelor's degree in Computer Science, laying the foundation for a career in software development.",
      skills: ["React Native", "Figma", "Firebase"]
    },
  ];

  const educationEvents: Event[] = [
    {
      title: "Dimploma: Software development",
      company: "Tshwane University of Technology",
      date: "Sept 2019 - June 2023",
      description: "Completed a Bachelor's degree in Computer Science, laying the foundation for a career in software development.",
      skills: ["C++", "OracleSQL", "Algorithms"]
    },
    {
      title: "National Senior Certificate",
      date: "Dec 2016",
      description: "Started as a junior developer, working on front-end development for web applications.",
      skills: []
    },
  ];

  return (
    <section className="py-16 px-4 section-alt">
      <h2 className="text-3xl text-white font-bold text-center mb-12">RESUME</h2>
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-4">
          <div>
            <div className="flex mb-4 items-center space-x-2">
              <Briefcase className="size-9 text-white opacity-70" />
              <h2 className="text-lg font-bold text-primary font-source-code-pro">Experience</h2>
            </div>
            <div className="relative">
              <div className="absolute left-[7px] opacity-70 top-9 bottom-0 w-0.5 bg-gray-200"></div>
              <div className="space-y-12">
                {experienceEvents.map((event, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-5 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="bg-primary-200 border rounded-lg border-white border-opacity-10 text-white">
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-semibold">{event.title}</h3>
                          <span className="text-sm font-source-code-pro text-primary">{event.date}</span>
                        </div>
                        <span className="text-sm font-source-code-pro text-primary">{event.company}</span>
                        <p className="text-sm text-white opacity-70 mt-2 mb-4">{event.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {event.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-white bg-opacity-70 px-2 text-primary-200">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex mb-4 items-center space-x-2">
              <GraduationCap className="size-10 text-white opacity-70" />
              <h2 className="text-lg font-bold text-primary font-source-code-pro">Education</h2>
            </div>
            <div className="relative">
              <div className="absolute left-[7px] opacity-70 top-9 bottom-0 w-0.5 bg-gray-200"></div>
              <div className="space-y-12">
                {educationEvents.map((event, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-5 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="bg-primary-200 border rounded-lg border-white border-opacity-10 text-white">
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-semibold">{event.title}</h3>
                          <span className="text-sm font-source-code-pro text-primary">{event.date}</span>
                        </div>
                        <span className="text-sm font-source-code-pro text-primary">{event.company}</span>
                        <p className="text-sm text-white opacity-70 mt-2 mb-4">{event.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {event.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-white bg-opacity-70 px-2 text-primary-200">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}