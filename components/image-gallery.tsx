"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from "@/lib/utils"

interface ImageGalleryProps {
  images: string[]
  title: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ImageGallery({ images, title, open, onOpenChange }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrevious()
    } else if (e.key === "ArrowRight") {
      handleNext()
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-background" onKeyDown={handleKeyDown} tabIndex={0}>
        <div className="relative">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src={images[currentIndex] || "/placeholder.svg?height=600&width=800"}
              alt={`${title} - Image ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </AspectRatio>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>

          <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 ml-2 pointer-events-auto",
                images.length <= 1 && "opacity-50 cursor-not-allowed pointer-events-none",
              )}
              onClick={handlePrevious}
              disabled={images.length <= 1}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous image</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 mr-2 pointer-events-auto",
                images.length <= 1 && "opacity-50 cursor-not-allowed pointer-events-none",
              )}
              onClick={handleNext}
              disabled={images.length <= 1}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next image</span>
            </Button>
          </div>
        </div>

        <div className="p-4">
          <DialogTitle className="text-xl font-semibold mb-2">{title}</DialogTitle>

          <div className="flex justify-center mt-2">
            {images.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={cn("w-2 h-2 p-0 rounded-full mx-1", currentIndex === index ? "bg-primary" : "bg-muted")}
                onClick={() => setCurrentIndex(index)}
              >
                <span className="sr-only">Image {index + 1}</span>
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

