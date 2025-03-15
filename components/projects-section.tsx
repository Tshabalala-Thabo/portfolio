"use client"

import { useState } from "react"
import ProjectCard from "./project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

// Project data
const projects = [
  {
    id: 1,
    title: "TM System",
    category: "WEB-APP",
    image: "/images/projects/tmsystem.png",
    description: "Web app for landlords to efficiently manage their properties and tenants.",
    github: "https://github.com/Tshabalala-Thabo/TenantManagementSystem",
    figma:
      "https://www.figma.com/proto/B61Ppmehgkogvp84zrOHkx/Tenant-Management-System?node-id=1-2&starting-point-node-id=1%3A2&t=oWnFpvzlhwP0GhV1-1",
  },
  {
    id: 2,
    title: "Nationality Predictor",
    category: "WEB-APP",
    image: "/images/projects/nationality-predictor.png",
    description:
      "A sleek web app that predicts nationalities based on names, featuring real-time probability scores and animated visualizations.",
    github: "https://github.com/Tshabalala-Thabo/nationality-predictor",
    website: "https://nationality-predictor.vercel.app/",
  },
  {
    id: 3,
    title: "Danny Niches",
    category: "WEBSITE",
    image: "/images/projects/dn.png",
    description: "Responsive corporate website with modern design, showcasing company services and portfolio.",
    github: "https://github.com/Tshabalala-Thabo/danny-niches-react",
    website: "https://dannyniches.co.za",
  },
  {
    id: 5,
    title: "Lagiva Vine",
    category: "WEBSITE",
    image: "/images/projects/lv.png",
    description: "Crafted an elegant wine website for enthusiasts to explore wines.",
    website: "https://mrn-b453f.vercel.app",
  },
  {
    id: 6,
    title: "Boii Teddy",
    category: "WEB-APP",
    image: "/images/projects/boiiteddy.png",
    description:
      "A React-based music player web app for artist Boii Teddy, featuring track playback, social links, and smooth user experience.",
    github: "https://github.com/Tshabalala-Thabo/boy-teddy-react.git",
    website: "https://boiiteddy.vercel.app/",
  },
]

// Get unique categories
const categories = ["ALL", ...new Set(projects.map((project) => project.category))]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("ALL")

  const filteredProjects =
    activeCategory === "ALL" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          Explore my portfolio of web applications and websites that showcase my skills in frontend and full-stack
          development.
        </p>
      </div>

      <Separator className="my-8" />

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

