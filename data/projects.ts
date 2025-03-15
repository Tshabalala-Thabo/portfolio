export interface ProjectData {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  github?: string;
  figma?: string;
  website?: string;
}

export const projects: ProjectData[] = [
  {
    id: 1,
    title: 'TM System',
    category: 'WEB-APP',
    image: '/images/projects/tmsystem.png',
    description: 'Web app for landlords to efficiently manage their properties and tenants.',
    github: 'https://github.com/Tshabalala-Thabo/TenantManagementSystem',
    figma: 'https://www.figma.com/proto/B61Ppmehgkogvp84zrOHkx/Tenant-Management-System?node-id=1-2&starting-point-node-id=1%3A2&t=oWnFpvzlhwP0GhV1-1',
  },
  {
    id: 2,
    title: 'Nationality Predictor',
    category: 'WEB-APP',
    image: '/images/projects/nationality-predictor.png',
    description: 'A sleek web app that predicts nationalities based on names, featuring real-time probability scores and animated visualizations.',
    github: 'https://github.com/Tshabalala-Thabo/nationality-predictor',
    website: 'https://nationality-predictor.vercel.app/',
  },
  {
    id: 3,
    title: 'Danny Niches',
    category: 'WEBSITE',
    image: '/images/projects/dn.png',
    description: 'Responsive corporate website with modern design, showcasing company services and portfolio.',
    github: 'https://github.com/Tshabalala-Thabo/danny-niches-react',
    website: 'https://dannyniches.co.za',
  },
  {
    id: 5,
    title: 'Lagiva Vine',
    category: 'WEBSITE',
    image: '/images/projects/lv.png',
    description: 'Crafted an elegant wine website for enthusiasts to explore wines.',
    website: 'https://mrn-b453f.vercel.app',
  },
  {
    id: 6,
    title: 'Boii Teddy',
    category: 'WEB-APP',
    image: '/images/projects/boiiteddy.png',
    description: 'A React-based music player web app for artist Boii Teddy, featuring track playback, social links, and smooth user experience.',
    github: 'https://github.com/Tshabalala-Thabo/boy-teddy-react.git',
    website: 'https://boiiteddy.vercel.app/',
  },
];

export const categories = ['ALL', 'WEB-APP', 'WEBSITE'];