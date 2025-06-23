export interface ProjectData {
    id: number
    title: string
    category: string
    images: string[]
    description: string
    links: {
      github?: string
      figma?: string
      live?: string
    }
  }
  