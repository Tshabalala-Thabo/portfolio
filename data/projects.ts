export interface ProjectData {
  id: number;
  title: string;
  category: string;
  images: string[];
  description: string;
  github?: string;
  figma?: string;
  website?: string;
  techStack?: string[]
}

export const projects: ProjectData[] = [
  {
    id: 1,
    title: 'TM System',
    category: 'WEB-APP',
    images: [
      "/images/projects/tmsystem.png",
      "/images/projects/tmsystem-dashboard.png",
      "/images/projects/tmsystem-tenants.png",
    ],
    description: 'Web app for landlords to efficiently manage their properties and tenants.',
    github: 'https://github.com/Tshabalala-Thabo/TenantManagementSystem',
    figma: 'https://www.figma.com/proto/B61Ppmehgkogvp84zrOHkx/Tenant-Management-System?node-id=1-2&starting-point-node-id=1%3A2&t=oWnFpvzlhwP0GhV1-1',
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 2,
    title: 'Nationality Predictor',
    category: 'WEB-APP',
    images: [
      '/images/projects/nationality-predictor.png',
      "/images/projects/tmsystem-dashboard.png",
      "/images/projects/tmsystem-tenants.png",
    ],
    description: 'A sleek web app that predicts nationalities based on names, featuring real-time probability scores and animated visualizations.',
    github: 'https://github.com/Tshabalala-Thabo/nationality-predictor',
    website: 'https://nationality-predictor.vercel.app/',
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 3,
    title: 'Danny Niches',
    category: 'WEBSITE',
    images: [
      '/images/projects/nationality-predictor.png',
      "/images/projects/tmsystem-dashboard.png",
      "/images/projects/tmsystem-tenants.png",
    ],
    description: 'Responsive corporate website with modern design, showcasing company services and portfolio.',
    github: 'https://github.com/Tshabalala-Thabo/danny-niches-react',
    website: 'https://dannyniches.co.za',
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 5,
    title: 'Lagiva Vine',
    category: 'WEBSITE',
    images: [
      '/images/projects/lv.png',
      "/images/projects/tmsystem-dashboard.png",
      "/images/projects/tmsystem-tenants.png",
    ],
    description: 'Crafted an elegant wine website for enthusiasts to explore wines.',
    website: 'https://mrn-b453f.vercel.app',
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 6,
    title: 'Boii Teddy',
    category: 'WEB-APP',
    images: [
      '/images/projects/boiiteddy.png',
      "/images/projects/tmsystem-dashboard.png",
      "/images/projects/tmsystem-tenants.png",
    ],
    description: 'A React-based music player web app for artist Boii Teddy, featuring track playback, social links, and smooth user experience.',
    github: 'https://github.com/Tshabalala-Thabo/boy-teddy-react.git',
    website: 'https://boiiteddy.vercel.app/',
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
];

export const categories = ['ALL', 'WEB-APP', 'WEBSITE'];