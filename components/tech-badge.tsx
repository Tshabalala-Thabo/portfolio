import { Badge, type BadgeProps } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface TechBadgeProps extends BadgeProps {
  tech: string
}

// Map of technologies to their respective colors
const techColors: Record<string, string> = {
  React: "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300",
  "Next.js": "bg-black text-white hover:bg-gray-800 dark:bg-gray-800 dark:text-gray-200",
  TypeScript: "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300",
  JavaScript: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300",
  "Node.js": "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300",
  Express: "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800/30 dark:text-gray-300",
  MongoDB: "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300",
  "Tailwind CSS": "bg-cyan-100 text-cyan-800 hover:bg-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300",
  CSS3: "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300",
  HTML5: "bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300",
  "Framer Motion": "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300",
  "REST API": "bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300",
  "Responsive Design": "bg-pink-100 text-pink-800 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-300",
  Vercel: "bg-black text-white hover:bg-gray-800 dark:bg-gray-800 dark:text-gray-200",
  "HTML5 Audio API": "bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300",
}

export function TechBadge({ tech, className, ...props }: TechBadgeProps) {
  // Get the color for this tech, or use a default
  const colorClass =
    techColors[tech] || "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800/30 dark:text-gray-300"

  return (
    <Badge
      variant="outline"
      className={cn("px-2 py-1 text-xs font-medium rounded-md border-0", colorClass, className)}
      {...props}
    >
      {tech}
    </Badge>
  )
}

