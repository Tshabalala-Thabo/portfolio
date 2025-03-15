import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Figma, Github } from 'lucide-react';
import AnimatedTextComponent from "@/components/animated-text";
import { projects, categories } from "@/data/projects";

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredProjects = activeTab === 'ALL'
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <section className="py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center uppercase mb-8">My Portfolio</h2>

        <Tab.Group>
          <Tab.List className="hidden flex justify-center space-x-1 mb-8">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `px-4 py-2 text-sm font-medium leading-5 transition-colors duration-200
                  ${selected
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                  }`
                }
                onClick={() => setActiveTab(category)}
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-glass relative border bg-opacity-70 border-white border-opacity-10 text-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div
                  className="absolute bottom-0 right-0 -mr-[0px] w-[200px] h-[200px] bg-no-repeat bg-right-bottom z-0 opacity-80"
                  style={{ backgroundImage: `url(/images/card-polygons.svg)` }}
                ></div>
                <img src={project.image} alt={project.title} className="w-full h-auto object-cover z-10" />
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <AnimatedTextComponent
                    text={project.category}
                    as="span"
                    className="inline-block bg-muted rounded-full font-source-code-pro text-primary py-1 text-sm font-semibold"
                  />
                  <p className="text-white opacity-70 text-sm mb-4 flex-grow">{project.description}</p>
                  <div className="flex space-x-2 text-primary items-center">
                    {project.website && (
                      <a href={project.website} target="_blank" rel="noopener noreferrer"
                        className="hover:text-primary transition-colors duration-200 transform hover:scale-125 hover:rotate-12 transition-transform duration-200">
                        <Globe className="size-6" />
                      </a>
                    )}
                    {project.figma && (
                      <a href={project.figma} target="_blank" rel="noopener noreferrer"
                        className="hover:text-primary transition-colors duration-200 transform hover:scale-125 hover:rotate-12 transition-transform duration-200">
                        <Figma className="size-6" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="hover:text-primary transition-colors duration-200 transform hover:scale-125 hover:rotate-12 transition-transform duration-200">
                        <Github className="size-6" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}