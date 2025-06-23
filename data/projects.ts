import type { ProjectData } from "@/types/project"

export const projects: ProjectData[] = [
  {
    id: 1,
    title: "TM System",
    category: "WEB-APP",
    images: [
      "/images/projects/tmsystem.png",
      "/images/projects/tmsystem-dashboard.png",
      "/images/projects/tmsystem-tenants.png",
      "/images/projects/tmsystem-properties.png",
    ],
    description: "Web app for landlords to efficiently manage their properties and tenants.",
    links: {
      github: "https://github.com/Tshabalala-Thabo/TenantManagementSystem",
      figma:
        "https://www.figma.com/proto/B61Ppmehgkogvp84zrOHkx/Tenant-Management-System?node-id=1-2&starting-point-node-id=1%3A2&t=oWnFpvzlhwP0GhV1-1",
    },
  },
  {
    id: 2,
    title: "Nationality Predictor",
    category: "WEB-APP",
    images: [
      "/images/projects/nationality-predictor.png",
      "/images/projects/nationality-predictor-results.png",
      "/images/projects/nationality-predictor-mobile.png",
    ],
    description:
      "A sleek web app that predicts nationalities based on names, featuring real-time probability scores and animated visualizations.",
    links: {
      github: "https://github.com/Tshabalala-Thabo/nationality-predictor",
      live: "https://nationality-predictor.vercel.app/",
    },
  },
  {
    id: 3,
    title: "Danny Niches",
    category: "WEBSITE",
    images: [
      "/images/projects/dn.png",
      "/images/projects/dn-services.png",
      "/images/projects/dn-portfolio.png",
      "/images/projects/dn-contact.png",
    ],
    description: "Responsive corporate website with modern design, showcasing company services and portfolio.",
    links: {
      github: "https://github.com/Tshabalala-Thabo/danny-niches-react",
      live: "https://dannyniches.co.za",
    },
  },
  {
    id: 5,
    title: "Lagiva Vine",
    category: "WEBSITE",
    images: ["/images/projects/lv.png", "/images/projects/lv-wines.png", "/images/projects/lv-about.png"],
    description: "Crafted an elegant wine website for enthusiasts to explore wines.",
    links: {
      live: "https://mrn-b453f.vercel.app",
    },
  },
  {
    id: 6,
    title: "Boii Teddy",
    category: "WEB-APP",
    images: [
      "/images/projects/boiiteddy.png",
      "/images/projects/boiiteddy-player.png",
      "/images/projects/boiiteddy-playlist.png",
    ],
    description:
      "A React-based music player web app for artist Boii Teddy, featuring track playback, social links, and smooth user experience.",
    links: {
      github: "https://github.com/Tshabalala-Thabo/boy-teddy-react.git",
      live: "https://boiiteddy.vercel.app/",
    },
  },
]

export const categories = ["ALL", "WEB-APP", "WEBSITE"]
