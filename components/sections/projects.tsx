"use client"

import { useState } from "react"
import ProjectCard from "../project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { projects, categories } from "@/data/projects"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("ALL")

  const filteredProjects =
    activeCategory === "ALL" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl text-white md:text-4xl font-bold">My Projects</h2>
        {/* <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          Explore my portfolio of web applications and websites that showcase my skills in frontend and full-stack
          development.
        </p> */}
      </div>

      {/* <Separator className="my-8" /> */}

      {/* Category Tabs */}
      <Tabs defaultValue="ALL" value={activeCategory} onValueChange={setActiveCategory} className="w-full mb-10">
        <div className="flex justify-center">
          <TabsList className="mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="px-6">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

