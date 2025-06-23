"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ProjectImageModalProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  projectTitle: string
}

export function ProjectImageModal({ isOpen, onClose, images, projectTitle }: ProjectImageModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full bg-black/95 border-white/10 text-white">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-[#04A118] font-mono">{projectTitle}</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:text-[#04A118] hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </Button>
        </DialogHeader>

        <div className="relative">
          {/* Main Image Display */}
          <div className="relative h-[60vh] w-full overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${projectTitle} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white hover:text-[#04A118] backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white hover:text-[#04A118] backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </>
            )}
          </div>

          {/* Thumbnail Navigation */}
          {images.length > 1 && (
            <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                    index === currentImageIndex
                      ? "border-[#04A118] ring-2 ring-[#04A118]/30"
                      : "border-white/20 hover:border-white/40"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-mono">
              {currentImageIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
