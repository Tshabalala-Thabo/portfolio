import type { ProjectData } from "@/types/project"

export const projects: ProjectData[] = [
  // {
  //   id: 1,
  //   title: "ProSuite",
  //   category: "WEB-APP",
  //   images: [
  //     "/images/projects/tmsystem/sites.webp",
  //     "/images/projects/tmsystem/dashboard.webp",
  //     "/images/projects/tmsystem/applications.webp",
  //   ],
  //   description:
  //     "Enterprise management system experience focused on financial workflows, tenant-based architecture, and secure operational tooling.",
  //   links: {
  //     live: "https://app.prosuite.co.za",
  //   },
  // },
  // {
  //   id: 2,
  //   title: "Multitenancy Scaffolding",
  //   category: "WEB-APP",
  //   images: [
  //     "/images/projects/sites.webp",
  //     "/images/projects/tmsystem/tenants.webp",
  //     "/images/projects/tmsystem/site.webp",
  //   ],
  //   description:
  //     "A multi-tenant skills showcase using Next.js, Laravel, MySQL, Spatie multitenancy, and roles and permissions.",
  //   links: {
  //     github: "https://github.com/Tshabalala-Thabo/multitenancy-scaffold-web-app",
  //   },
  // },
  {
    id: 3,
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
    description:
      "Property rental management system for landlords, tenants, invoices, sites, maintenance, and tenant applications.",
    links: {
      github: "https://github.com/Tshabalala-Thabo/tm-system-api",
      figma:
        "https://www.figma.com/proto/B61Ppmehgkogvp84zrOHkx/Tenant-Management-System?node-id=1-2&starting-point-node-id=1%3A2&t=oWnFpvzlhwP0GhV1-1",
    },
  },
  {
    id: 4,
    title: "Lobster Clan",
    category: "WEB-APP",
    images: [
      "/images/projects/lobsterclan/lc1.webp",
      "/images/projects/lobsterclan/lc2.webp",
      "/images/projects/lobsterclan/lc3.webp",
      "/images/projects/lobsterclan/lc4.webp",
      "/images/projects/lobsterclan/lc5.webp",
    ],
    description:
      "Restaurant website with reservations, menu browsing, and a polished customer experience built with React, Node.js, and MongoDB.",
    links: {
      github: "https://github.com/Tshabalala-Thabo/lobster-clan-react",
      live:
        "https://lobsterclan.vercel.app/",
    },
  },
  {
    id: 5,
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
    id: 6,
    title: "Lagiva Vine",
    category: "WEBSITE",
    images: [
      "/images/projects/lagivavine/lv1.webp",
      "/images/projects/lagivavine/lv2.webp",
      "/images/projects/lagivavine/lv3.webp",
    ],
    description: "Premium wine website with elegant motion, immersive product presentation, and responsive pages.",
    links: {
      live: "https://lagivavinery.co.za",
    },
  },
  {
    id: 7,
    title: "Portfolio",
    category: "WEBSITE",
    images: ["/images/screenshot.png"],
    description: "Personal portfolio built with Next.js, Framer Motion, Tailwind CSS, and a custom animated circuit aesthetic.",
    links: {
      github: "https://github.com/Tshabalala-Thabo/portfolio",
      live: "https://thabo-tshabalala.vercel.app",
    },
  },
]

export const categories = ["ALL", "WEB-APP", "WEBSITE"]
