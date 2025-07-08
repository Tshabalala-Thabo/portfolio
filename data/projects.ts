import type { ProjectData } from "@/types/project"

export const projects: ProjectData[] = [
  {
    id: 1,
    title: "TM System",
    category: "WEB-APP",
    images: [
      "/images/projects/tmsystem/tmsystem.webp",
      "/images/projects/tmsystem/dashboard.webp",
      "/images/projects/tmsystem/tenants.webp",
      "/images/projects/tmsystem/invoice.webp",
      "/images/projects/tmsystem/sites.webp",
      "/images/projects/tmsystem/site.webp",
      "/images/projects/tmsystem/applications.webp",
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
    title: "Lobster Clan",
    category: "WEB-APP",
    images: [
      "/images/projects/lobsterclan/lc1.webp",
      "/images/projects/lobsterclan/lc2.webp",
      "/images/projects/lobsterclan/lc3.webp",
      "/images/projects/lobsterclan/lc4.webp",
      "/images/projects/lobsterclan/lc5.webp",
    ],
    description: "Web app for landlords to efficiently manage their properties and tenants.",
    links: {
      github: "https://github.com/Tshabalala-Thabo/lobster-clan-react",
      live:
        "https://lobsterclan.vercel.app/",
    },
  },
  {
    id: 3,
    title: "Nationality Predictor",
    category: "WEB-APP",
    images: [
      "/images/projects/nationality_predictor.webp",
    ],
    description:
      "A sleek web app that predicts nationalities based on names, featuring real-time probability scores and animated visualizations.",
    links: {
      github: "https://github.com/Tshabalala-Thabo/nationality-predictor",
      live: "https://nationality-predictor.vercel.app/",
    },
  },
  {
    id: 4,
    title: "Danny Niches",
    category: "WEBSITE",
    images: [
      "/images/projects/dannyniches/dn.webp",
      "/images/projects/dannyniches/dn2.webp",
      "/images/projects/dannyniches/dn3.webp",
      "/images/projects/dannyniches/dn4.webp",
      "/images/projects/dannyniches/dn5.webp",
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
    images: [
      "/images/projects/lagivavine/lv1.webp",
      "/images/projects/lagivavine/lv2.webp",
      "/images/projects/lagivavine/lv3.webp",
    ],
    description: "Crafted an elegant wine website for enthusiasts to explore wines.",
    links: {
      live: "https://lagivavinery.co.za",
    },
  },
  {
    id: 6,
    title: "Boii Teddy",
    category: "WEB-APP",
    images: [
      "/images/projects/boiiteddy.png",
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
