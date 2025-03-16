"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Figma, Info, ImageIcon } from "lucide-react"
import { motion } from "framer-motion"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { TechBadge } from "./tech-badge"
import { ImageGallery } from "./image-gallery"

// Update the Project interface to remove the image property
interface Project {
  id: number
  title: string
  category: string
  images: string[]
  description: string
  github?: string
  website?: string
  figma?: string
  techStack?: string[]
}

interface ProjectCardProps {
  project: Project
}

// Update the ProjectCard component to use the first image from the array
export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)

  // Get the main image (first in the array) and ensure the array exists
  const mainImage = project.images[0] || "/placeholder.svg?height=300&width=400"

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -10 }}
        className="h-full"
      >
        <Card
          className="overflow-hidden h-full flex flex-col border-2 hover:border-primary/50 transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={mainImage || "/placeholder.svg"}
                alt={project.title}
                fill
                className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
              />

              {/* View Gallery Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <Button
                  variant="secondary"
                  size="sm"
                  className="gap-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    setGalleryOpen(true)
                  }}
                >
                  <ImageIcon className="h-4 w-4" />
                  View Gallery
                </Button>
              </div>
            </AspectRatio>
            <div className="absolute top-2 right-2">
              <Badge variant="secondary" className="font-medium">
                {project.category}
              </Badge>
            </div>
          </div>

          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Info className="h-4 w-4" />
                          <span className="sr-only">Project details</span>
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <ScrollArea className="h-[200px] w-full rounded-md p-2">
                          <h4 className="font-semibold mb-2">{project.title}</h4>
                          <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                          {project.techStack && project.techStack.length > 0 && (
                            <>
                              <h5 className="text-sm font-medium mb-2">Technologies Used:</h5>
                              <div className="flex flex-wrap gap-1.5 mb-2">
                                {project.techStack.map((tech) => (
                                  <TechBadge key={tech} tech={tech} />
                                ))}
                              </div>
                            </>
                          )}
                        </ScrollArea>
                      </HoverCardContent>
                    </HoverCard>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View details</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardHeader>

          <CardContent className="pb-2">
            <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{project.description}</p>

            {project.techStack && project.techStack.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.techStack.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            )}
          </CardContent>

          <CardFooter className="flex flex-wrap gap-2 mt-auto pt-2">
            {project.github && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View source code</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            {project.website && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Live
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Visit live site</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            {project.figma && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.figma} target="_blank" rel="noopener noreferrer">
                        <Figma className="mr-1 h-4 w-4" />
                        Figma
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View design</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </CardFooter>
        </Card>
      </motion.div>

      {/* Image Gallery Dialog */}
      <ImageGallery images={project.images} title={project.title} open={galleryOpen} onOpenChange={setGalleryOpen} />
    </>
  )
}

