import { Code, Database, Layers } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { JSX } from "react"

interface CourseCardProps {
  title: string
  description: string
  icon: string
  color: string
}

export default function CourseCard({ title, description, icon, color }: CourseCardProps) {
  const getIcon = (): JSX.Element => {
    const iconProps = {
      className: `h-10 w-10 ${getColorClass()}`,
      strokeWidth: 1.5,
    }

    switch (icon) {
      case "Code":
        return <Code {...iconProps} />
      case "Database":
        return <Database {...iconProps} />
      case "Layers":
        return <Layers {...iconProps} />
      default:
        return <Code {...iconProps} />
    }
  }

  const getColorClass = (): string => {
    switch (color) {
      case "blue":
        return "text-blue-500"
      case "green":
        return "text-green-500 dark:text-green-400"
      case "purple":
        return "text-purple-500"
      default:
        return "text-primary"
    }
  }

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="mb-2">{getIcon()}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{description}</CardDescription>
        <div className="mt-4 flex items-center text-sm font-medium text-primary">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </CardContent>
    </Card>
  )
}
