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
      "/images/projects/tm_system.webp",
      "/images/projects/tm_system2.webp",
      "/images/projects/tm_system3.webp",
      "/images/projects/tm_system4.webp",
      "/images/projects/tm_system5.webp",
    ],
    description: 'Web app for landlords to efficiently manage their properties and tenants.',
    github: 'https://github.com/Tshabalala-Thabo/TenantManagementSystem',
    figma: 'https://www.figma.com/proto/B61Ppmehgkogvp84zrOHkx/Tenant-Management-System?node-id=1-2&starting-point-node-id=1%3A2&t=oWnFpvzlhwP0GhV1-1',
    techStack: ["Laravel", "MySQL", "Blade", "Tailwind CSS"],
  },
  {
    id: 2,
    title: 'Nationality Predictor',
    category: 'WEB-APP',
    images: [
      '/images/projects/nationality_predictor.webp',
      '/images/projects/nationality_predictor2.webp',
      '/images/projects/nationality_predictor3.webp',
    ],
    description: 'A sleek web app that predicts nationalities based on names, featuring real-time probability scores and animated visualizations.',
    github: 'https://github.com/Tshabalala-Thabo/nationality-predictor',
    website: 'https://nationality-predictor.vercel.app/',
    techStack: ["NextJs", "Tailwind CSS"],
  },
  {
    id: 3,
    title: 'Danny Niches',
    category: 'WEBSITE',
    images: [
      '/images/projects/danny_niches.webp',
      '/images/projects/danny_niches2.webp',
      '/images/projects/danny_niches3.webp',
      '/images/projects/danny_niches4.webp',
    ],
    description: 'Responsive corporate website with modern design, showcasing company services and portfolio.',
    github: 'https://github.com/Tshabalala-Thabo/danny-niches-react',
    website: 'https://dannyniches.co.za',
    techStack: ["React", "Tailwind CSS"],
  },
  {
    id: 5,
    title: 'Lagiva Vine',
    category: 'WEBSITE',
    images: [
      '/images/projects/lagiva_vine.webp',
      '/images/projects/lagiva_vine2.webp',
      '/images/projects/lagiva_vine3.webp',
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
      '/images/projects/boiiteddy.webp',
      '/images/projects/boiiteddy2.webp',
    ],
    description: 'A React-based music player web app for artist Boii Teddy, featuring track playback, social links, and smooth user experience.',
    github: 'https://github.com/Tshabalala-Thabo/boy-teddy-react.git',
    website: 'https://boiiteddy.vercel.app/',
    techStack: ["React", "Tailwind CSS"],
  },
];

export const categories = ['ALL', 'WEB-APP', 'WEBSITE'];