import { motion, useSpring, useTransform } from 'framer-motion'
import { useScroll } from '@react-three/fiber'

export default function ScrollProgress() {
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
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/> 
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