"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import type { ProjectData } from "@/types/project"
import { Github, Figma, ExternalLink, Images } from "lucide-react"



interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  github?: string
  website?: string
  figma?: string
}

type ProjectCardProps = {
  project: ProjectData;
  onClick?: (project: ProjectData) => void;
};
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      key={project.id}
      variants={fadeInUp}
      transition={{ type: "spring", stiffness: 300 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden h-full hover:border-[#04A118]/30 transition-all duration-300">
        <div className="relative h-48 overflow-hidden group">
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

          {/* Hover Button Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          >
            <Button
              onClick={() => onClick?.(project)}
              className="bg-[#04A118] hover:bg-[#04A118]/80 text-white font-mono gap-2 shadow-lg"
            >
              <Images className="w-4 h-4" />
              View Gallery ({project.images.length})
            </Button>
          </motion.div>
        </div>

        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-mono text-[#04A118]">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="flex gap-3">
            {project.links.github && (
              <Link
                href={project.links.github}
                className="inline-flex items-center gap-2 text-[#04A118] hover:text-[#04A118]/80 transition-colors font-mono text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </Link>
            )}
            {project.links.figma && (
              <Link
                href={project.links.figma}
                className="inline-flex items-center gap-2 text-[#04A118] hover:text-[#04A118]/80 transition-colors font-mono text-sm"
              >
                <Figma className="w-4 h-4" />
                Figma
              </Link>
            )}
            {project.links.live && (
              <Link
                href={project.links.live}
                className="inline-flex items-center gap-2 text-[#04A118] hover:text-[#04A118]/80 transition-colors font-mono text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

