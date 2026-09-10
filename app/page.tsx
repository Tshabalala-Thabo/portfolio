"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ProjectData } from "@/types/project"
import { projects } from "@/data/projects"
import { Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Award,
  BriefcaseBusiness,
  Code2,
  Palette,
  Server,
  Database,
  ExternalLink,
  Figma,
  Github,
  Mail,
  Linkedin,
  CheckCircle,
  Layers,
  Zap,
  Shield,
  Cloud,
  Download,
  GraduationCap,
  Terminal,
  Workflow,
} from "lucide-react"
import Image from "next/image"
import Script from "next/script"
import ProjectCard from "@/components/project-card"
import { ProjectImageModal } from "@/components/project-image-modal"
import { useState, useRef } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const skills = [
  {
    category: "Core Stack",
    items: [
      { name: "Laravel", icon: Server, description: "Secure APIs, business workflows, and financial-system backends" },
      { name: "PHP", icon: Terminal, description: "Server-side application logic for Laravel-based systems" },
      { name: "Next.js", icon: Code2, description: "Production interfaces for dashboards, portals, and SaaS workflows" },
      { name: "React", icon: Code2, description: "Component-driven interfaces for responsive web applications" },
      { name: "TypeScript", icon: Code2, description: "Typed front-end logic for safer, more maintainable features" },
      { name: "MySQL", icon: Database, description: "Relational schemas, reporting queries, and data modelling" },
      { name: "REST APIs", icon: Workflow, description: "Structured API delivery for app workflows and integrations" },
    ],
  },
  {
    category: "Cloud & Delivery",
    items: [
      { name: "AWS", icon: Cloud, description: "AWS fundamentals, cloud architecture, compute, storage, databases, security and deployment concepts" },
      { name: "CI/CD", icon: Workflow, description: "Git-based release workflows and pipeline discipline" },
      { name: "Linux", icon: Terminal, description: "Command-line workflows for development and deployment environments" },
      { name: "Git/GitHub", icon: Github, description: "Version control, pull requests, branch workflows, and collaboration" },
      { name: "Playwright", icon: CheckCircle, description: "Browser testing for critical user journeys" },
    ],
  },
  {
    category: "Additional Experience",
    items: [
      { name: "Node.js", icon: Server, description: "JavaScript services and API integrations" },
      { name: "MongoDB", icon: Database, description: "Document data for flexible application features" },
      { name: "React Native", icon: Code2, description: "Cross-platform mobile app design and development" },
      { name: "Tailwind CSS", icon: Palette, description: "Responsive UI systems with precise utility-first styling" },
      { name: "Figma", icon: Figma, description: "Wireframes, prototypes, and clear handoff-ready UI decisions" },
      { name: "Jira", icon: BriefcaseBusiness, description: "Sprint planning, issue tracking, and delivery visibility" },
      { name: "Postman", icon: Server, description: "API testing, validation, and integration debugging" },
    ],
  },
]

const credlyBadgeUrl = "https://www.credly.com/badges/c78c0a93-b2f5-461a-a278-d147a53ea9be"

function CredlyBadge() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="min-h-[270px] w-[150px] overflow-hidden">
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="c78c0a93-b2f5-461a-a278-d147a53ea9be"
          data-share-badge-host="https://www.credly.com"
        />
      </div>
      <Script src="https://cdn.credly.com/assets/utilities/embed.js" strategy="lazyOnload" />
      <a
        href={credlyBadgeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-mono text-[#04A118] transition-colors hover:text-[#04A118]/80"
      >
        Verify on Credly
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  )
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  const width = useTransform(smoothProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none">
      <svg
        width="100%"
        height="4"
        className="absolute top-0 left-0"
        style={{ transform: 'translateZ(0)' }}
      >
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#04A118" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
            <stop offset="100%" stopColor="#04A118" stopOpacity="0.8" />
          </linearGradient>
          <filter id="progressGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background line */}
        <rect
          x="0"
          y="0"
          width="100%"
          height="4"
          fill="rgba(0,0,0,0.3)"
        />

        {/* Progress line */}
        <motion.rect
          x="0"
          y="0"
          width={width}
          height="4"
          fill="url(#progressGradient)"
          filter="url(#progressGlow)"
        />
      </svg>
    </div>
  )
}

function CircuitNodes({ phase1, phase2, phase3, phase4 }: any) {
  return (
    <g className="circuit-nodes">
      {/* Phase 1 Nodes */}
      <motion.circle cx="300" cy="400" r="4" fill="#04A118" filter="url(#nodeGlow)" style={{ opacity: phase1 }} />
      <motion.circle cx="700" cy="300" r="4" fill="#04A118" filter="url(#nodeGlow)" style={{ opacity: phase1 }} />

      {/* Phase 2 Nodes */}
      <motion.circle cx="600" cy="200" r="4" fill="#059669" filter="url(#nodeGlow)" style={{ opacity: phase2 }} />
      <motion.circle cx="800" cy="300" r="4" fill="#059669" filter="url(#nodeGlow)" style={{ opacity: phase2 }} />

      {/* Phase 3 Nodes */}
      <motion.circle cx="800" cy="500" r="4" fill="#10b981" filter="url(#nodeGlow)" style={{ opacity: phase3 }} />
      <motion.circle cx="1000" cy="300" r="4" fill="#10b981" filter="url(#nodeGlow)" style={{ opacity: phase3 }} />

      {/* Phase 4 Nodes */}
      <motion.circle cx="200" cy="150" r="3" fill="#04A118" filter="url(#nodeGlow)" style={{ opacity: phase4 }} />
      <motion.circle cx="750" cy="550" r="3" fill="#04A118" filter="url(#nodeGlow)" style={{ opacity: phase4 }} />
    </g>
  )
}

function TravelingDataPoints({ scrollProgress }: any) {
  const dataPoint1 = useTransform(scrollProgress, [0.1, 0.9], [0, 1])
  const dataPoint2 = useTransform(scrollProgress, [0.2, 1], [0, 1])
  const dataPoint3 = useTransform(scrollProgress, [0.3, 0.8], [0, 1])

  return (
    <g className="data-points">
      <motion.circle
        r="3"
        fill="#04A118"
        filter="url(#nodeGlow)"
      >
        <animateMotion dur="4s" repeatCount="indefinite" path="M 100 400 L 500 400 L 700 400 L 700 300" />
      </motion.circle>

      <motion.circle
        r="2"
        fill="#10b981"
        filter="url(#nodeGlow)"
      >
        <animateMotion dur="3s" repeatCount="indefinite" path="M 300 200 L 600 200 L 600 500" />
      </motion.circle>

      <motion.circle
        r="2.5"
        fill="#059669"
        filter="url(#nodeGlow)"
      >
        <animateMotion dur="5s" repeatCount="indefinite" path="M 800 100 L 800 300 L 1100 300" />
      </motion.circle>
    </g>
  )
}

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })
  const [modalState, setModalState] = useState<{
    isOpen: boolean
    project: ProjectData | null
  }>({
    isOpen: false,
    project: null,
  })

  // Transform scroll progress into animation phases
  const phase1Progress = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const phase2Progress = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
  const phase3Progress = useTransform(scrollYProgress, [0.5, 0.8], [0, 1])
  const phase4Progress = useTransform(scrollYProgress, [0.8, 1], [0, 1])

  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const phase1Spring = useSpring(phase1Progress, springConfig)
  const phase2Spring = useSpring(phase2Progress, springConfig)
  const phase3Spring = useSpring(phase3Progress, springConfig)
  const phase4Spring = useSpring(phase4Progress, springConfig)

  const openModal = (project: ProjectData) => {
    setModalState({ isOpen: true, project })
  }

  const closeModal = () => {
    setModalState({ isOpen: false, project: null })
  }


  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0B120B] text-white overflow-hidden">
      <ScrollProgress />

      {/* Fixed Circuit Background */}
      <div className="fixed inset-0 bg-[#0B120B] overflow-hidden">
        {/* Grid Pattern - Made more subtle */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-[#04A118]/30" />
          </svg>
        </div>

        {/* Circuit Board SVG - Made more muted */}
        <svg viewBox="0 0 1200 800" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Gradient for circuit lines - made more subtle */}
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#04A118" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#04A118" stopOpacity="0.4" />
            </linearGradient>

            {/* Glow filter - reduced intensity */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Node glow - reduced intensity */}
            <filter id="nodeGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Phase 1: Basic Lines */}
          <g className="phase-1">
            <motion.path
              d="M 100 400 L 500 400"
              stroke="url(#circuitGradient)"
              strokeWidth="1.5"
              fill="none"
              filter="url(#glow)"
              style={{ pathLength: phase1Spring }}
            />
            <motion.path
              d="M 300 200 L 300 600"
              stroke="url(#circuitGradient)"
              strokeWidth="1.5"
              fill="none"
              filter="url(#glow)"
              style={{ pathLength: phase1Spring }}
            />
            <motion.path
              d="M 700 300 L 1100 300"
              stroke="url(#circuitGradient)"
              strokeWidth="1.5"
              fill="none"
              filter="url(#glow)"
              style={{ pathLength: phase1Spring }}
            />
          </g>

          {/* Phase 2: Branching Connections */}
          <g className="phase-2">
            <motion.path
              d="M 500 400 L 700 400 L 700 300"
              stroke="url(#circuitGradient)"
              strokeWidth="1.5"
              fill="none"
              filter="url(#glow)"
              style={{ pathLength: phase2Spring }}
            />
            <motion.path
              d="M 300 200 L 600 200 L 600 500"
              stroke="url(#circuitGradient)"
              strokeWidth="1.5"
              fill="none"
              filter="url(#glow)"
              style={{ pathLength: phase2Spring }}
            />
            <motion.path
              d="M 800 100 L 800 300 L 900 300"
              stroke="url(#circuitGradient)"
              strokeWidth="1.5"
              fill="none"
              filter="url(#glow)"
              style={{ pathLength: phase2Spring }}
            />
          </g>

          {/* Phase 3: Complex Network */}
          <g className="phase-3">
            <motion.path
              d="M 600 500 L 800 500 L 800 600 L 1000 600"
              stroke="url(#circuitGradient)"
              strokeWidth="1.5"
              fill="none"
              filter="url(#glow)"
              style={{ pathLength: phase3Spring }}
            />
            <motion.path
              d="M 200 100 L 400 100 L 400 300 L 500 300"
              stroke="url(#circuitGradient)"
              strokeWidth="1.5"
              fill="none"
              filter="url(#glow)"
              style={{ pathLength: phase3Spring }}
            />
            <motion.path
              d="M 900 300 L 1000 300 L 1000 150 L 1100 150"
              stroke="url(#circuitGradient)"
              strokeWidth="1.5"
              fill="none"
              filter="url(#glow)"
              style={{ pathLength: phase3Spring }}
            />
            <motion.path
              d="M 100 600 L 300 600 L 300 700 L 600 700"
              stroke="url(#circuitGradient)"
              strokeWidth="1.5"
              fill="none"
              filter="url(#glow)"
              style={{ pathLength: phase3Spring }}
            />
          </g>

          {/* Phase 4: Intricate Web */}
          <g className="phase-4">
            <motion.path
              d="M 50 50 L 200 50 L 200 150 L 350 150 L 350 250"
              stroke="url(#circuitGradient)"
              strokeWidth="1.2"
              fill="none"
              filter="url(#glow)"
              style={{ pathLength: phase4Spring }}
            />
            <motion.path
              d="M 1000 600 L 1150 600 L 1150 450 L 950 450 L 950 350"
              stroke="url(#circuitGradient)"
              strokeWidth="1.2"
              fill="none"
              filter="url(#glow)"
              style={{ pathLength: phase4Spring }}
            />
            <motion.path
              d="M 600 700 L 750 700 L 750 550 L 850 550 L 850 400"
              stroke="url(#circuitGradient)"
              strokeWidth="1.2"
              fill="none"
              filter="url(#glow)"
              style={{ pathLength: phase4Spring }}
            />
            <motion.path
              d="M 400 100 L 550 100 L 550 50 L 700 50 L 700 150"
              stroke="url(#circuitGradient)"
              strokeWidth="1.2"
              fill="none"
              filter="url(#glow)"
              style={{ pathLength: phase4Spring }}
            />
          </g>

          {/* Connection Nodes */}
          <CircuitNodes phase1={phase1Spring} phase2={phase2Spring} phase3={phase3Spring} phase4={phase4Spring} />

          {/* Traveling Data Points */}
          <TravelingDataPoints scrollProgress={scrollYProgress} />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center mt-6 sm:mt-10 lg:mt-[0px] px-4 py-8 relative overflow-hidden">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <motion.div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1" initial="initial" animate="animate" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-2 font-mono">HELLO, MY NAME IS</p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    <span className="text-[#04A118]">THABO</span>{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 [-webkit-text-stroke:1px_white]">
                      TSHABALALA
                    </span>
                  </h1>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <p className="text-lg sm:text-xl text-gray-300 mb-4 lg:mb-6">
                    I am: <span className="text-white font-semibold font-mono">Junior Full-Stack Software Developer</span>
                  </p>
                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                    I build secure full-stack applications with Laravel, Next.js, TypeScript, MySQL and AWS fundamentals,
                    with professional experience in financial-sector systems, multi-tenancy, role-based access control
                    and business workflows.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 border border-[#04A118]/30 bg-[#04A118]/10 px-3 py-2 text-sm font-mono text-[#04A118]">
                    <Award className="h-4 w-4" />
                    AWS Certified Cloud Practitioner
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0">
                  {[
                    "Financial systems",
                    "Multi-tenant SaaS",
                    "Secure API delivery",
                  ].map((item) => (
                    <div key={item} className="border border-[#04A118]/25 bg-[#04A118]/10 px-3 py-2 text-sm text-gray-200">
                      {item}
                    </div>
                  ))}
                </motion.div>

                <motion.div className="flex items-center justify-center lg:justify-start gap-6" variants={fadeInUp}>
                  <a
                    href="https://github.com/Tshabalala-Thabo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#04A118] transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thabo-tshabalala/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#04A118] transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex flex-col justify-center items-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
                  <a
                    href="/Thabo_Tshabalala_CV_2026_SEPT.pdf"
                    download
                    className="inline-block"
                  >
                    <Button className="bg-[#04A118] hover:bg-[#04A118]/80 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2">
                      <Download className="w-full lg:w-5 h-5" />
                      Download CV
                    </Button>
                  </a>
                </motion.div>
              </motion.div>

              {/* Right Content - Avatar and Stats */}
              <motion.div
                className="relative flex justify-center order-1 lg:order-2 lg:justify-end"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Green Circle Background */}
                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 sm:mt-4 lg:w-96 lg:h-96 bg-[#04A118] rounded-full flex items-center justify-end relative">
                    {/* Avatar */}
                    <div className="absolute bottom-0 w-full h-auto">
                      <Image
                        src="/images/profile.webp"
                        alt="Thabo Tshabalala Avatar"
                        width={384} // This should match lg:w-96 (384px)
                        height={0} // Set to 0 for auto height
                        className="w-full h-auto rounded-b-full object-contain"
                        style={{ height: 'auto' }}
                      />
                    </div>
                  </div>

                  {/* Floating Stats */}
                  <motion.div
                    className="absolute bottom-16 sm:bottom-20 lg:bottom-24 -left-6 xs:left-8 sm:-left-12 lg:-left-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Card className="bg-black/70 backdrop-blur-md border border-[#04A118]/30 p-2 sm:p-3 lg:p-4">
                      <CardContent className="p-0 flex items-center gap-2 sm:gap-3">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-mono">
                          {(() => {
                            const from = new Date('2023-10-01');
                            const now = new Date();
                            let years = now.getFullYear() - from.getFullYear();
                            if (
                              now.getMonth() < from.getMonth() ||
                              (now.getMonth() === from.getMonth() && now.getDate() < from.getDate())
                            ) {
                              years--;
                            }
                            return years;
                          })()}
                        </div>
                        <div className="text-[#04A118] text-xl sm:text-2xl lg:text-3xl font-bold">+</div>
                        <div>
                          <div className="text-white font-semibold text-xs sm:text-sm lg:text-base">YEARS OF</div>
                          <div className="text-[#04A118] font-semibold text-xs sm:text-sm lg:text-base">EXPERIENCE</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-2 sm:bottom-3 lg:bottom-4 -right-4 sm:-right-6 lg:-right-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <Card className="bg-black/70 backdrop-blur-md border border-[#04A118]/30 p-2 sm:p-3 lg:p-4">
                      <CardContent className="p-0 flex items-center gap-2 sm:gap-3">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-mono">{projects.length}</div>
                        <div className="text-[#04A118] text-xl sm:text-2xl lg:text-3xl font-bold">+</div>
                        <div>
                          <div className="text-white font-semibold text-xs sm:text-sm lg:text-base">PERSONAL</div>
                          <div className="text-[#04A118] font-semibold text-xs sm:text-sm lg:text-base">PROJECTS</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-4xl font-bold mb-8 text-[#04A118]">What I Build</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#04A118] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Secure Business Logic</h3>
                      <p className="text-gray-400">
                        Designing role-based access, permissions, tenant boundaries, and guarded financial workflows.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Palette className="w-6 h-6 text-[#04A118] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Useful Product Interfaces</h3>
                      <p className="text-gray-400">
                        Turning complex data and custom forms into clear, responsive dashboards and app screens.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Server className="w-6 h-6 text-[#04A118] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Full-Stack Delivery</h3>
                      <p className="text-gray-400">
                        Shipping with <span className="font-mono text-[#04A118]">Next.js</span>,{" "}
                        <span className="font-mono text-[#04A118]">Laravel</span>,{" "}
                        <span className="font-mono text-[#04A118]">MySQL</span>, and production-ready APIs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-[#04A118] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Team-Ready Engineering</h3>
                      <p className="text-gray-400">
                        Working with Git, Jira, code reviews, sprint planning, and testing discipline.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="relative" variants={fadeInUp}>
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-8">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <Layers className="w-12 h-12 text-[#04A118] mx-auto mb-4" />
                        <h4 className="font-semibold">Frontend</h4>
                        <p className="text-sm text-gray-400">Next.js & React</p>
                      </div>
                      <div className="text-center">
                        <Server className="w-12 h-12 text-[#04A118] mx-auto mb-4" />
                        <h4 className="font-semibold">Backend</h4>
                        <p className="text-sm text-gray-400">Laravel APIs</p>
                      </div>
                      <div className="text-center">
                        <Database className="w-12 h-12 text-[#04A118] mx-auto mb-4" />
                        <h4 className="font-semibold">Database</h4>
                        <p className="text-sm text-gray-400">MySQL/SQL</p>
                      </div>
                      <div className="text-center">
                        <Zap className="w-12 h-12 text-[#04A118] mx-auto mb-4" />
                        <h4 className="font-semibold">Delivery</h4>
                        <p className="text-sm text-gray-400">CI/CD & Git</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 px-4 scroll-mt-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 text-sm font-mono uppercase tracking-[0.25em] text-gray-500">Verified cloud foundation</p>
              <h2 className="text-4xl font-bold text-[#04A118]">Certifications</h2>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card className="overflow-hidden bg-white/5 backdrop-blur-md border border-white/10">
                  <CardContent className="grid gap-8 p-6 sm:p-8 md:grid-cols-[220px_1fr] md:items-center">
                    <div className="flex justify-center md:justify-start">
                      <CredlyBadge />
                    </div>

                    <div>
                      <div className="mb-4 inline-flex items-center gap-2 border border-[#04A118]/25 bg-[#04A118]/10 px-3 py-2 text-sm font-mono text-[#04A118]">
                        <Cloud className="h-4 w-4" />
                        Amazon Web Services
                      </div>
                      <h3 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">AWS Certified Cloud Practitioner</h3>
                      <p className="mb-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
                        Validated foundational knowledge of AWS Cloud concepts, services, security, architecture,
                        pricing and support.
                      </p>
                      <div className="grid gap-3 text-sm text-gray-400 sm:grid-cols-2">
                        <div className="border border-white/10 bg-black/20 p-4">
                          <p className="mb-1 font-mono text-[#04A118]">Issuer</p>
                          <p>Amazon Web Services</p>
                        </div>
                        <div className="border border-white/10 bg-black/20 p-4">
                          <p className="mb-1 font-mono text-[#04A118]">Focus</p>
                          <p>Cloud concepts, security, architecture and AWS services</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-16 text-[#04A118]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Skills & Expertise
            </motion.h2>

            <motion.div
              className="space-y-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {skills.map((category, categoryIndex) => (
                <motion.div key={categoryIndex} variants={fadeInUp}>
                  <h3 className="text-2xl font-semibold mb-6 text-white">{category.category}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card className="bg-white/5 backdrop-blur-md border border-white/10 h-full hover:border-[#04A118]/30 transition-all duration-300">
                          <CardContent className="p-6">
                            <skill.icon className="w-8 h-8 text-[#04A118] mb-4" />
                            <h4 className="text-lg font-semibold mb-2 font-mono text-[#04A118]">{skill.name}</h4>
                            <p className="text-sm text-gray-400">{skill.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-16 text-[#04A118]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Experience
            </motion.h2>

            <motion.div
              className="space-y-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold">Junior Full-Stack Software Developer</h3>
                      <Badge className="bg-[#04A118]/20 text-[#04A118] border-[#04A118]/30 w-fit font-mono">
                        May 2024 - Present
                      </Badge>
                    </div>
                    <p className="text-[#04A118] font-medium mb-3">Promilezi | Sunninghill, Gauteng</p>
                    <ul className="space-y-3 text-gray-400">
                      <li>
                        Developed Laravel and MySQL features for financial-sector systems with tenant-based architecture,
                        configurable workflows, and secure tenant-separated data access.
                      </li>
                      <li>
                        Developed responsive interfaces with <span className="font-mono text-[#04A118]">Next.js</span>,{" "}
                        <span className="font-mono text-[#04A118]">TypeScript</span>,{" "}
                        <span className="font-mono text-[#04A118]">Blade</span>, and{" "}
                        <span className="font-mono text-[#04A118]">Tailwind CSS</span> for operational dashboards and
                        business workflow screens.
                      </li>
                      <li>
                        Supported role-based permissions, secure API behavior, payment-related workflows, and dynamic
                        form experiences across full-stack application features.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold">Software Developer Intern</h3>
                      <Badge className="bg-white/10 text-gray-300 border-white/20 w-fit font-mono">
                        Oct 2023 - Apr 2024
                      </Badge>
                    </div>
                    <p className="text-[#04A118] font-medium mb-3">Ground Up Grinders | Midrand, Gauteng</p>
                    <ul className="space-y-3 text-gray-400">
                      <li>Led an 11-person intern team by organizing tasks and guiding delivery progress.</li>
                      <li>Managed GitHub code reviews, branch merges, and version control practices.</li>
                      <li>
                        Designed mobile app wireframes and user flows in{" "}
                        <span className="font-mono text-[#04A118]">Figma</span>.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-16 text-[#04A118]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Education
            </motion.h2>

            <motion.div
              className="space-y-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold">Diploma in Software Development</h3>
                      <Badge className="bg-[#04A118]/20 text-[#04A118] border-[#04A118]/30 w-fit font-mono">
                        University
                      </Badge>
                    </div>
                    <p className="text-[#04A118] font-medium mb-3">Tshwane University of Technology</p>
                    <div className="grid sm:grid-cols-2 gap-3 text-gray-400">
                      {[
                        "Programming",
                        "Mobile development",
                        "Database development & administration",
                        "Business analysis and modelling",
                      ].map((course) => (
                        <div key={course} className="flex items-start gap-3">
                          <GraduationCap className="w-5 h-5 text-[#04A118] mt-0.5 flex-shrink-0" />
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold">National Senior Certificate</h3>
                      <Badge className="bg-white/10 text-gray-300 border-white/20 w-fit font-mono">2016</Badge>
                    </div>
                    <p className="text-[#04A118] font-medium">Kgadime-Matsepe Secondary School</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 scroll-mt-10">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-16 text-[#04A118]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Featured Projects
            </motion.h2>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={() => openModal(project)} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Image Modal */}
        {modalState.project && (
          <ProjectImageModal
            isOpen={modalState.isOpen}
            onClose={closeModal}
            images={modalState.project.images}
            projectTitle={modalState.project.title}
          />
        )}

        {/* Contact Section */}
        {/* Contact Section - Full Width Glass Background */}
        <section className="relative">
          {/* Full-width glass background */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-t border-white/10"></div>

          <div className="relative z-10 py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-center mb-4 text-[#04A118]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Let's Connect
              </motion.h2>
              <motion.p
                className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-gray-400 sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Available for Junior Full-Stack and Backend Software Developer opportunities in Gauteng or remote.
              </motion.p>

              <motion.div
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp}>
                  <Card className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 hover:border-[#04A118]/30 transition-all duration-300 h-full">
                    <CardContent className="p-0 text-center">
                      <Mail className="w-12 h-12 text-[#04A118] mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Email</h3>
                      <p className="text-gray-400 mb-4">Start a conversation</p>
                      <a
                        href="mailto:47thabo@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-[#04A118] hover:text-[#04A118]/80 transition-colors font-mono"
                      >
                        Email Me
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 hover:border-[#04A118]/30 transition-all duration-300 h-full">
                    <CardContent className="p-0 text-center">
                      <Linkedin className="w-12 h-12 text-[#04A118] mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                      <p className="text-gray-400 mb-4">Professional networking</p>
                      <a
                        href="https://www.linkedin.com/in/thabo-tshabalala/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#04A118] hover:text-[#04A118]/80 transition-colors"
                      >
                        LinkedIn
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 hover:border-[#04A118]/30 transition-all duration-300 h-full">
                    <CardContent className="p-0 text-center">
                      <Github className="w-12 h-12 text-[#04A118] mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                      <p className="text-gray-400 mb-4">Code and project history</p>
                      <a
                        href="https://github.com/Tshabalala-Thabo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#04A118] hover:text-[#04A118]/80 transition-colors"
                      >
                        GitHub
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 hover:border-[#04A118]/30 transition-all duration-300 h-full">
                    <CardContent className="p-0 text-center">
                      <Download className="w-12 h-12 text-[#04A118] mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">CV</h3>
                      <p className="text-gray-400 mb-4">Download my latest CV</p>
                      <a
                        href="/Thabo_Tshabalala_CV_05_2026.pdf"
                        download
                        className="inline-flex items-center justify-center gap-2 text-[#04A118] hover:text-[#04A118]/80 transition-colors font-mono"
                      >
                        Download CV
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div
                className="mt-10 flex flex-col items-center justify-between gap-4 border border-white/10 bg-black/20 p-5 text-center sm:flex-row sm:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <p className="font-mono text-sm uppercase tracking-[0.2em] text-gray-500">Outside of development</p>
                  <p className="mt-1 text-gray-300">Chess is my preferred strategy break.</p>
                </div>
                <a
                  href="https://www.chess.com/member/Take_my_pawn_XD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#04A118] hover:bg-[#04A118]/80 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 font-mono text-sm"
                >
                  <Crown className="w-4 h-4" />
                  Chess.com
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer - Full Width Glass Background */}
        <footer className="relative">
          {/* Full-width glass background */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-t border-white/10"></div>

          <div className="relative z-10 py-8 px-4">
            <div className="max-w-6xl mx-auto">

              {/* Bottom Copyright */}
              <div className="text-center">
                <p className="text-gray-400 font-mono">
                  © {new Date().getFullYear()} Thabo Tshabalala. All rights reserved. | Built with{" "}
                  <span className="text-[#04A118]">Next.js</span> & <span className="text-[#04A118]">Tailwind CSS</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
