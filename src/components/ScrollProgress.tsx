
import * as React from "react"
import { cn } from "@/lib/utils"

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0)

  React.useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      
      if (scrollHeight) {
        setScrollProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100)
      }
    }

    window.addEventListener("scroll", updateScrollProgress)
    
    return () => {
      window.removeEventListener("scroll", updateScrollProgress)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-foreground/10 z-50">
      <div
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{
          width: `${scrollProgress}%`,
        }}
      />
    </div>
  )
}
