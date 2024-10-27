import React from 'react';
//import { Tab } from '@headlessui/react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Globe, Zap, Server, Database, Terminal, Cpu, Figma, PenTool, Github, Briefcase, GraduationCapIcon, Download, Mail, Linkedin } from 'lucide-react'

export function Component() {
  const cardData = [
    {
      title: "UI/UX Design",
      subtitle: "Enhancing User Interactions",
      content: "I design intuitive and visually appealing user interfaces. By focusing on user experience, I create designs that are not only aesthetically pleasing but also functional and easy to navigate."
    },
    {
      title: "Web Development",
      subtitle: "Crafting Digital Experiences",
      content: "I create responsive, user-friendly websites using modern technologies. From concept to deployment, I ensure seamless functionality and engaging interfaces that captivate users and drive business growth."
    },
    {
      title: "Mobile App Development",
      subtitle: "Building for the Small Screen",
      content: "I develop cross-platform mobile applications that work seamlessly on iOS and Android. Using React Native, I create efficient, feature-rich apps that provide a native-like experience to users."
    }
  ];

  return (
    <>
      {cardData.map((card, index) => (
        <div key={index} className="bg-glass border bg-opacity-70 border-white border-opacity-10 text-white rounded-lg shadow-md overflow-hidden">
          <div className="px-8 py-7">
            <h3 className="text-2xl text-white font-semibold mb-2">{card.title}</h3>
            <h1 className="text-lg font-source-code-pro font-bold text-primary mb-4">{card.subtitle}</h1>
            <p className="text-white text-opacity-70">{card.content}</p>
          </div>
        </div>
      ))}</>
  );
}

export function ProfessionalSkills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { icon: Globe, title: "Next.js", description: "Proficient in using Next.js for building server-rendered applications and optimizing performance." },
        { icon: Zap, title: "React.js", description: "Experienced in React.js for developing dynamic and interactive user interfaces with a component-based architecture." },
        { icon: Cpu, title: "React Native", description: "Skilled in building cross-platform mobile applications using React Native." },
        { icon: Palette, title: "Tailwind CSS", description: "Proficient in using Tailwind CSS for creating modern, responsive, and utility-first designs efficiently." },
      ]
    },
    {
      title: "Backend and Database",
      skills: [
        { icon: Server, title: "Node.js", description: "Proficient in server-side JavaScript using Node.js for developing robust and efficient backend services." },
        { icon: Terminal, title: "PHP/Laravel", description: "Experienced in PHP/Laravel programming for web development." },
        { icon: Database, title: "MySQL", description: "Proficient in working with MySQL for relational database management." },
        { icon: Database, title: "MongoDB", description: "Experienced in using MongoDB for NoSQL database needs." },
      ]
    },
    {
      title: "Design and Database",
      skills: [
        { icon: Figma, title: "Figma", description: "Experienced in using Figma for creating and collaborating on UI designs and prototypes." },
        { icon: PenTool, title: "Illustrator", description: "Skilled in vector graphics creation and manipulation using Adobe Illustrator for logos and icons." },
      ]
    }
  ]

  return (
    <>
      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h3 className="text-xl font-source-code-pro font-semibold mb-6 text-primary">{category.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="flex flex-col items-start space-y-2">
                <div className="flex items-center space-x-2">
                  <skill.icon className="w-6 h-6 text-primary" />
                  <h4 className="text-2xl font-bold">{skill.title}</h4>
                </div>
                <p className="text-sm opacity-70 ">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}


// Sample project data with descriptions and links
const projects = [
  {
    id: 1,
    title: 'TM System',
    category: 'WEB-APP',
    image: '/images/projects/tmsystem.png',
    description: 'Web app for landlords to efficiently manage their properties and tenants.',
    github: 'https://github.com/Tshabalala-Thabo/TenantManagementSystem',
    figma: 'https://www.figma.com/proto/B61Ppmehgkogvp84zrOHkx/Tenant-Management-System?node-id=1-2&starting-point-node-id=1%3A2&t=oWnFpvzlhwP0GhV1-1',
  },
  // {
  //   id: 2,
  //   title: 'Block Firm Enterprise',
  //   category: 'WEBSITE',
  //   image: '/images/projects/bfe.png',
  //   description: 'Mobile app for tracking workouts, nutrition, and personal fitness goals with data visualization.',
  //   github: 'https://github.com/yourusername/tm-system',
  //   website: 'https://tmsystem.com',
  //   figma: 'https://figma.com/file/blockfirm',
  // },
  {
    id: 3,
    title: 'Danny Niches',
    category: 'WEBSITE',
    image: '/images/projects/dn.png',
    description: 'Responsive corporate website with modern design, showcasing company services and portfolio.',
    github: 'https://github.com/Tshabalala-Thabo/danny-niches-react',
    website: 'https://dannyniches.co.za',
  },
  // {
  //   id: 4,
  //   title: 'Lagiva Monate Pizza',
  //   category: 'WEBSITE',
  //   image: '/images/projects/lmp.png',
  //   description: 'Minimalist and memorable logo design for a cutting-edge tech startup in the AI industry.',
  //   github: 'https://github.com/yourusername/tm-system',
  //   website: 'https://tmsystem.com',
  //   figma: 'https://figma.com/file/blockfirm',
  // },
  {
    id: 5,
    title: 'Lagiva Vine',
    category: 'WEBSITE',
    image: '/images/projects/lv.png',
    description: 'Crafted an elegant wine website for enthusiasts to explore wines.',
    website: 'https://mrn-b453f.vercel.app',
  },
  // {
  //   id: 6,
  //   title: 'Restaurant Booking App',
  //   category: 'MOBILE-APP',
  //   image: '/images/projects/tmsystem.png',
  //   description: 'User-friendly mobile app for booking restaurant tables, viewing menus, and managing reservations.',
  //   github: 'https://github.com/yourusername/tm-system',
  //   website: 'https://tmsystem.com',
  //   figma: 'https://figma.com/file/blockfirm',
  // },
]

//const categories = ['ALL', 'WEB-APP', 'MOBILE-APP', 'WEBSITE', 'LOGO']

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('ALL')

  const filteredProjects = activeTab === 'ALL'
    ? projects
    : projects.filter(project => project.category === activeTab)

  return (
    <section className="py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center uppercase mb-8">My Portfolio</h2>

        {/* <Tab.Group>
          <Tab.List className="flex justify-center space-x-1 mb-8">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `px-4 py-2 text-sm font-medium leading-5 transition-colors duration-200
                  ${selected
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                  }`
                }
                onClick={() => setActiveTab(category)}
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group> */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-glass relative border bg-opacity-70 border-white border-opacity-10 text-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div
                  className="absolute bottom-0 right-0 -mr-[0px] w-[200px] h-[200px] bg-no-repeat bg-right-bottom z-0 opacity-80"
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/card-polygons.svg)` }}
                ></div>
                <img src={project.image} alt={project.title} className="w-full h-auto object-cover z-10" />
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <span className="inline-block bg-muted rounded-full font-source-code-pro text-primary py-1 text-sm font-semibold">
                    {project.category}
                  </span>
                  <p className="text-white opacity-70 text-sm mb-4 flex-grow">{project.description}</p>
                  <div className="flex space-x-2 text-primary items-center">
                    {project.website && (
                      <a href={project.website} target="_blank" rel="noopener noreferrer"
                        className="hover:text-primary transition-colors duration-200 transform hover:scale-125 hover:rotate-12 transition-transform duration-200">
                        <Globe className="size-6" />
                      </a>
                    )}
                    {project.figma && (
                      <a href={project.figma} target="_blank" rel="noopener noreferrer"
                        className="hover:text-primary transition-colors duration-200 transform hover:scale-125 hover:rotate-12 transition-transform duration-200">
                        <Figma className="size-6" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="hover:text-primary transition-colors duration-200 transform hover:scale-125 hover:rotate-12 transition-transform duration-200">
                        <Github className="size-6" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}


function Resume() {
  const experienceEvents = [
    {
      title: "Software developer",
      company: "Promilezi",
      date: "2024(current) - 6 months",
      description: "Started as a junior developer, working on front-end development for web applications.",
      skills: ["Laravel", "NextJS", "Figma", "MySQL", "Tailwind"]
    },
    {
      title: "Software developer intern",
      company: "Ground up Grinders",
      date: "2023 - 10 months",
      description: "Completed a Bachelor's degree in Computer Science, laying the foundation for a career in software development.",
      skills: ["React Native", "Figma", "Firebase",]
    },
  ]

  const educationEvents = [
    {
      title: "Dimploma: Software development",
      company: "Tshwane University of Technology",
      date: "Sept 2019 - June 2023",
      description: "Completed a Bachelor's degree in Computer Science, laying the foundation for a career in software development.",
      skills: ["C++", "OracleSQL", "Algorithms"]
    },
    {
      title: "National Senior Certificate",
      date: "Dec 2016",
      description: "Started as a junior developer, working on front-end development for web applications.",
      skills: []
    },
  ]

  return (
    <section className="py-16 px-4 bg-primary-100 ">
      <h2 className="text-3xl text-white font-bold text-center mb-12">RESUME</h2>
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-4">
          <div>
            <div className="flex mb-4 items-center space-x-2">
              <Briefcase className="size-9 text-white opacity-70" />
              <h2 className="text-lg font-bold text-primary font-source-code-pro">Experience</h2>
            </div>
            <div className="relative">
              <div className="absolute left-[7px] opacity-70 top-9 bottom-0 w-0.5 bg-gray-200"></div>
              <div className="space-y-12">
                {experienceEvents.map((event, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-5 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="bg-primary-200 border rounded-lg border-white border-opacity-10 text-white">
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-semibold">{event.title}</h3>
                          <span className="text-sm font-source-code-pro text-primary">{event.date}</span>
                        </div>
                        <span className="text-sm font-source-code-pro text-primary">{event.company}</span>
                        <p className="text-sm text-white opacity-70 mt-2 mb-4">{event.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {event.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-white bg-opacity-70 px-2 text-primary-200">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex mb-4 items-center space-x-2">
              <GraduationCapIcon className="size-10 text-white opacity-70" />
              <h2 className="text-lg font-bold text-primary font-source-code-pro">Education</h2>
            </div>
            <div className="relative">
              <div className="absolute left-[7px] opacity-70 top-9 bottom-0 w-0.5 bg-gray-200"></div>
              <div className="space-y-12">
                {educationEvents.map((event, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-5 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="bg-primary-200 border rounded-lg border-white border-opacity-10 text-white">
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-semibold">{event.title}</h3>
                          <span className="text-sm font-source-code-pro text-primary">{event.date}</span>
                        </div>
                        <span className="text-sm font-source-code-pro text-primary">{event.company}</span>
                        <p className="text-sm text-white opacity-70 mt-2 mb-4">{event.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {event.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-white bg-opacity-70 px-2 text-primary-200">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}


function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute top-0 right-0 -mt-[0px] -mr-[0px] w-[890px] h-[1673px] bg-no-repeat bg-right-top z-0 opacity-30 lg:opacity-100"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/polygons.svg)` }}
      ></div>
      {/* <BurgerMenu /> */}
      <main className="pt-16 relative z-10">
        <section className="py-8 px-4 sm:py-12 md:py-16 lg:py-20">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full flex flex-col items-center lg:items-start lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <p className="text-sm sm:text-base text-white font-bold mb-2">HELLO, <span className="text-primary">MY NAME IS</span></p>
              <h1 className='text-3xl sm:text-4xl md:text-5xl text-primary font-bold mb-4'>
                THABO <span className='text-primary-200 [text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]'>TSHABALALA</span>
              </h1>
              <p className="text-base lg:text-lg mb-4 font-bold text-white">I am: <span className="text-white text-xl sm:text-2xl font-normal ml-1 font-source-code-pro">Software Developer</span></p>
              <div className='hidden lg:block'>
                <p className="text-sm sm:text-base text-white opacity-70 mb-6">I have competitive skills and a strong passion for my career. Always excited to work on a project.</p>
                <div className="flex mb-6">
                  <a href="https://github.com/Tshabalala-Thabo" className="hover:opacity-100 opacity-70 transition-opacity duration-200 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .5C5.7.5 0 6.2 0 12.9c0 5.4 3.5 10 8.2 11.6.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.5-4-1.5-.5-1.2-1.2-1.5-1.2-1.5-.9-.6 0-.6 0-.6 1 0 1.5 1 1.5 1.5 1.2 2 3.2 1.4 4 1 .1-.9.5-1.4.9-1.7-2.8-.3-5.7-1.4-5.7-6.2 0-1.4.5-2.5 1.3-3.4-.1-.3-.6-1.5.1-3.1 0 0 1.1-.4 3.5 1.5 1-.3 2.1-.5 3.2-.5 1.1 0 2.2.2 3.2.5 2.4-1.9 3.5-1.5 3.5-1.5.7 1.6.2 2.8.1 3.1.8.9 1.3 2 1.3 3.4 0 4.8-3 5.9-5.8 6.2.5.4.9 1.2.9 2.4v3.6c0 .3.2.7.8.6C20.5 22.9 24 18.3 24 12.9 24 6.2 18.3.5 12 .5z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/thabo-tshabalala/" className="hover:opacity-100 opacity-70 transition-opacity duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.1 20.45H3.56V9h3.54v11.45zm-1.77-12.99c-1.13 0-2.05-.93-2.05-2.06 0-1.14.92-2.06 2.05-2.06 1.13 0 2.05.92 2.05 2.06 0 1.13-.92 2.06-2.05 2.06zm16.12 12.99h-3.54v-5.84c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.24 1.52-2.24 3.09v5.93h-3.54V9h3.4v1.56h.05c.48-.91 1.66-1.87 3.43-1.87 3.67 0 4.35 2.42 4.35 5.57v6.19z" /></svg>
                  </a>
                </div>
                <div className="flex items-center">
                  <a href="/ThaboTshabalala_CV_10_2024.pdf" download className="bg-primary mt-2 hover:bg-primary/50 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded transition duration-300 text-sm sm:text-base">
                    <Download className="inline-block mr-2" />
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            <div className="w-1/2 md:w-2/3 lg:w-5/12 relative">
              <img
                src="/images/right.svg"
                alt="Hero illustration"
                className="w-full h-auto"
              />
              <div className="absolute bottom-12  md:bottom-16 sm:bottom-24 md:bottom-32 -left-24 lg:-left-9 sm:-left-10 flex items-center border border-white border-opacity-70 text-white rounded-md p-2 bg-glass bg-opacity-70">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                  1 <span className="text-primary">+</span>
                </h1>
                <div className="text-xs sm:text-sm font-bold ml-2 sm:ml-4">
                  <p>YEARS OF</p>
                  <p className="text-primary">EXPERIENCE</p>
                </div>
              </div>
              <div className="absolute bottom-4 sm:bottom-8 md:bottom-16 -right-24 lg:right-0 flex items-center border border-white border-opacity-70 text-white rounded-md p-2 bg-glass bg-opacity-70">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                  3 <span className="text-primary">+</span>
                </h1>
                <div className="text-xs sm:text-sm font-bold ml-2 sm:ml-4">
                  <p>PERSONAL</p>
                  <p className="text-primary">PROJECTS</p>
                </div>
              </div>
            </div>
            <div className='block lg:hidden flex flex-col items-center' >
              <p className="text-sm lg:text-base text-white opacity-70 text-center mt-6 mb-6">From Pretoria, with competitive skills in software development and UI design. I have a strong passion for my career and am always excited to tackle new projects, ensuring both functionality and great user experiences.</p>
              <div className="flex mb-6">
                <a href="https://github.com/Tshabalala-Thabo" className="hover:opacity-100 opacity-70 transition-opacity duration-200 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .5C5.7.5 0 6.2 0 12.9c0 5.4 3.5 10 8.2 11.6.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.5-4-1.5-.5-1.2-1.2-1.5-1.2-1.5-.9-.6 0-.6 0-.6 1 0 1.5 1 1.5 1.5 1.2 2 3.2 1.4 4 1 .1-.9.5-1.4.9-1.7-2.8-.3-5.7-1.4-5.7-6.2 0-1.4.5-2.5 1.3-3.4-.1-.3-.6-1.5.1-3.1 0 0 1.1-.4 3.5 1.5 1-.3 2.1-.5 3.2-.5 1.1 0 2.2.2 3.2.5 2.4-1.9 3.5-1.5 3.5-1.5.7 1.6.2 2.8.1 3.1.8.9 1.3 2 1.3 3.4 0 4.8-3 5.9-5.8 6.2.5.4.9 1.2.9 2.4v3.6c0 .3.2.7.8.6C20.5 22.9 24 18.3 24 12.9 24 6.2 18.3.5 12 .5z" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/thabo-tshabalala/" className="hover:opacity-100 opacity-70 transition-opacity duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.1 20.45H3.56V9h3.54v11.45zm-1.77-12.99c-1.13 0-2.05-.93-2.05-2.06 0-1.14.92-2.06 2.05-2.06 1.13 0 2.05.92 2.05 2.06 0 1.13-.92 2.06-2.05 2.06zm16.12 12.99h-3.54v-5.84c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.24 1.52-2.24 3.09v5.93h-3.54V9h3.4v1.56h.05c.48-.91 1.66-1.87 3.43-1.87 3.67 0 4.35 2.42 4.35 5.57v6.19z" /></svg>
                </a>
              </div>
              <div className="flex items-center">
                <a href="/ThaboTshabalala_CV_10_2024.pdf" download className="bg-primary mt-2 hover:bg-primary/50 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded transition duration-300 text-sm sm:text-base">
                  <Download className="inline-block mr-2" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <h2 className="text-3xl text-white font-bold text-center mb-12">WHAT I DO</h2>
          <div className='container'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Component />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-100 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-3xl text-center uppercase mb-12">Professional Skills</h2>
            <div className="space-y-16">
              <ProfessionalSkills />
            </div>
          </div>
        </section>
        <PortfolioSection />
        <Resume />
        <section className="py-16 px-4 bg-primary-200">
          <div className='container'>
            <div className="w-full max-w-2xl mx-auto bg-glass p-4 rounded-md border bg-opacity-70 border-white border-opacity-10 text-white">
              <div>
                <div className="text-2xl font-bold text-white">Contact Me</div>
                <div className="text-white opacity-70">Feel free to reach out through any of these platforms</div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <a
                    variant="link"
                    className="p-0 h-auto font-normal text-base text-white hover:text-primary"
                    onClick={() => window.location.href = 'mailto:47thabo@gmail.com'}
                  >
                    47thabo@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className="h-6 w-6 text-primary" />
                  <a
                    href="https://github.com/Tshabalala-Thabo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary"
                  >
                    github.com/Tshabalala-Thabo
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="h-6 w-6 text-primary" />
                  <a
                    href="https://www.linkedin.com/in/thabo-tshabalala/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary"
                  >
                    linkedin.com/in/thabo-tshabalala
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
