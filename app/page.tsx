"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ProjectData } from "@/types/project"
import { projects } from "@/data/projects"
import { Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Palette,
  Server,
  Database,
  Figma,
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  CheckCircle,
  Layers,
  Zap,
  Shield,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ProjectCard from "@/components/project-card"
import { ProjectImageModal } from "@/components/project-image-modal"
import { useState, useEffect, useRef } from "react"

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
    category: "Frontend Development",
    items: [
      { name: "Next.js", icon: Code2, description: "Full-stack React framework for production applications" },
      { name: "React.js", icon: Code2, description: "Component-based library for building user interfaces" },
      { name: "React Native", icon: Code2, description: "Cross-platform mobile app development" },
      { name: "Tailwind CSS", icon: Palette, description: "Utility-first CSS framework for rapid styling" },
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "Node.js", icon: Server, description: "JavaScript runtime for server-side development" },
      { name: "Laravel (PHP)", icon: Server, description: "Elegant PHP framework for web applications" },
      { name: "MySQL", icon: Database, description: "Relational database management system" },
      { name: "MongoDB", icon: Database, description: "NoSQL document-based database" },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Figma", icon: Figma, description: "Collaborative interface design and prototyping" },
      { name: "Adobe Illustrator", icon: Palette, description: "Vector graphics and illustration software" },
    ],
  },
]

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
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div className="space-y-8" initial="initial" animate="animate" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <p className="text-gray-400 text-lg mb-2 font-mono">HELLO, MY NAME IS</p>
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    <span className="text-[#04A118]">THABO</span>{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 [-webkit-text-stroke:1px_white]">
                      TSHABALALA
                    </span>
                  </h1>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <p className="text-xl text-gray-300 mb-6">
                    I am: <span className="text-white font-semibold font-mono">Software Developer</span>
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                    I have competitive skills and a strong passion for my career. Always excited to work on a project.
                  </p>
                </motion.div>

                <motion.div className="flex items-center gap-6" variants={fadeInUp}>
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

                <motion.div variants={fadeInUp}>
                  <a
                    href="/ThaboTshabalala_CV_10_2024.pdf"
                    download
                    className="inline-block"
                  >
                    <Button className="bg-[#04A118] hover:bg-[#04A118]/80 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Download CV
                    </Button>
                  </a>

                </motion.div>
              </motion.div>

              {/* Right Content - Avatar and Stats */}
              <motion.div
                className="relative flex justify-center lg:justify-end"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Green Circle Background */}
                <div className="relative">
                  <div className="w-96 h-96 bg-[#04A118] rounded-full flex items-center justify-end relative">
                    {/* Avatar */}
                    <div className="absolute bottom-0 w-full  h-auto">
                      <Image
                        src="/images/profile.png"
                        alt="Thabo Tshabalala Avatar"
                        width={384} // This should match w-96 (384px)
                        height={0} // Set to 0 for auto height
                        className="w-full h-auto rounded-b-full object-contain"
                        style={{ height: 'auto' }}
                      />
                    </div>
                  </div>

                  {/* Floating Stats */}
                  <motion.div
                    className="absolute bottom-24 -left-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Card className="bg-black/70 backdrop-blur-md border border-[#04A118]/30 p-4">
                      <CardContent className="p-0 flex items-center gap-3">
                        <div className="text-4xl font-bold text-white font-mono">1</div>
                        <div className="text-[#04A118] text-3xl font-bold">+</div>
                        <div>
                          <div className="text-white font-semibold text-base">YEARS OF</div>
                          <div className="text-[#04A118] font-semibold text-base">EXPERIENCE</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-4 -right-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <Card className="bg-black/70 backdrop-blur-md border border-[#04A118]/30 p-4">
                      <CardContent className="p-0 flex items-center gap-3">
                        <div className="text-4xl font-bold text-white font-mono">5</div>
                        <div className="text-[#04A118] text-3xl font-bold">+</div>
                        <div>
                          <div className="text-white font-semibold text-base">PERSONAL</div>
                          <div className="text-[#04A118] font-semibold text-base">PROJECTS</div>
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
                <h2 className="text-4xl font-bold mb-8 text-[#04A118]">What I Bring</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#04A118] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Best Coding Standards</h3>
                      <p className="text-gray-400">
                        Writing clean, maintainable, and scalable code following industry best practices.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Palette className="w-6 h-6 text-[#04A118] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Design Expertise</h3>
                      <p className="text-gray-400">
                        Skilled in <span className="font-mono text-[#04A118]">Figma</span> for creating intuitive and
                        visually appealing user interfaces.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Server className="w-6 h-6 text-[#04A118] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">RESTful API Development</h3>
                      <p className="text-gray-400">
                        Building and maintaining robust <span className="font-mono text-[#04A118]">APIs</span> for
                        seamless data communication.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-[#04A118] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Production Systems</h3>
                      <p className="text-gray-400">
                        Deploying and maintaining reliable production systems with confidence.
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
                        <p className="text-sm text-gray-400">Modern UI/UX</p>
                      </div>
                      <div className="text-center">
                        <Server className="w-12 h-12 text-[#04A118] mx-auto mb-4" />
                        <h4 className="font-semibold">Backend</h4>
                        <p className="text-sm text-gray-400">Robust APIs</p>
                      </div>
                      <div className="text-center">
                        <Database className="w-12 h-12 text-[#04A118] mx-auto mb-4" />
                        <h4 className="font-semibold">Database</h4>
                        <p className="text-sm text-gray-400">Data Management</p>
                      </div>
                      <div className="text-center">
                        <Zap className="w-12 h-12 text-[#04A118] mx-auto mb-4" />
                        <h4 className="font-semibold">Performance</h4>
                        <p className="text-sm text-gray-400">Optimized Solutions</p>
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
                      <h3 className="text-xl font-semibold">Software Developer</h3>
                      <Badge className="bg-[#04A118]/20 text-[#04A118] border-[#04A118]/30 w-fit font-mono">
                        May 2024 – Current
                      </Badge>
                    </div>
                    <p className="text-[#04A118] font-medium mb-3">Promilezi</p>
                    <p className="text-gray-400">
                      Frontend development with <span className="font-mono text-[#04A118]">Laravel</span>,{" "}
                      <span className="font-mono text-[#04A118]">Next.js</span>,{" "}
                      <span className="font-mono text-[#04A118]">Figma</span>,{" "}
                      <span className="font-mono text-[#04A118]">MySQL</span>,{" "}
                      <span className="font-mono text-[#04A118]">Tailwind</span>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold">Intern</h3>
                      <Badge className="bg-white/10 text-gray-300 border-white/20 w-fit font-mono">
                        2023 (10 months)
                      </Badge>
                    </div>
                    <p className="text-[#04A118] font-medium mb-3">Ground up Grinders</p>
                    <p className="text-gray-400">
                      Worked with <span className="font-mono text-[#04A118]">React Native</span>,{" "}
                      <span className="font-mono text-[#04A118]">Figma</span>,{" "}
                      <span className="font-mono text-[#04A118]">Firebase</span>
                    </p>
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
                        Sept 2019 – June 2023
                      </Badge>
                    </div>
                    <p className="text-[#04A118] font-medium mb-3">Tshwane University of Technology</p>
                    <p className="text-gray-400">
                      Focused on <span className="font-mono text-[#04A118]">C++</span>,{" "}
                      <span className="font-mono text-[#04A118]">OracleSQL</span>, and{" "}
                      <span className="font-mono text-[#04A118]">Algorithms</span>
                    </p>
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
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
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
                <ProjectCard key={project.id} project={project} onClick={() => openModal(project)}/>
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
                className="text-4xl font-bold text-center mb-16 text-[#04A118]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Let's Connect
              </motion.h2>

              <motion.div
                className="grid md:grid-cols-3 gap-8"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {/* Email Card */}
                <motion.div variants={fadeInUp}>
                  <Card className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 hover:border-[#04A118]/30 transition-all duration-300 h-full">
                    <CardContent className="p-0 text-center">
                      <Mail className="w-12 h-12 text-[#04A118] mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Email</h3>
                      <p className="text-gray-400 mb-4">Let's discuss your next project</p>
                      <a
                        href="mailto:47thabo@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#04A118] hover:text-[#04A118]/80 transition-colors font-mono"
                      >
                        47thabo@gmail.com
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* LinkedIn Card */}
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
                        Connect with me
                      </a>

                    </CardContent>
                  </Card>
                </motion.div>

                {/* Chess.com Card */}
                <motion.div variants={fadeInUp}>
                  <Card className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 hover:border-[#04A118]/30 transition-all duration-300 h-full">
                    <CardContent className="p-0 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 relative">
                        <Crown className="w-12 h-12 text-[#04A118]" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Chess Player?</h3>
                      <p className="text-gray-400 mb-4">Let's play some matches!</p>
                      <a
                        href="https://link.chess.com/friend/VS1Niq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#04A118] hover:bg-[#04A118]/80 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 font-mono text-sm"
                      >
                        <Crown className="w-4 h-4" />
                        Challenge Me
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
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
