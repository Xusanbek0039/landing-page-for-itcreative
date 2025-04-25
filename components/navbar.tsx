"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"

// Navbar data structure
const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#about",
    dropdown: [
      {
        title: "Our Mission",
        href: "#about",
        description: "Learn about our teaching philosophy and goals",
      },
      {
        title: "Our Team",
        href: "#team",
        description: "Meet our expert instructors and mentors",
      },
      {
        title: "Our Story",
        href: "#story",
        description: "How bolt.new was founded and our journey",
      },
    ],
  },
  {
    title: "Courses",
    href: "#courses",
    dropdown: [
      {
        title: "Frontend Development",
        href: "#frontend",
        description: "Master HTML, CSS, JavaScript, and modern frameworks",
      },
      {
        title: "Backend Development",
        href: "#backend",
        description: "Learn server-side programming and databases",
      },
      {
        title: "Fullstack Development",
        href: "#fullstack",
        description: "Combine frontend and backend skills for complete applications",
      },
      {
        title: "View All Courses",
        href: "#courses",
        description: "Browse our complete catalog of programming courses",
      },
    ],
  },
  {
    title: "Resources",
    href: "#resources",
    dropdown: [
      {
        title: "Blog",
        href: "#blog",
        description: "Articles and tutorials on programming topics",
      },
      {
        title: "Documentation",
        href: "#docs",
        description: "Comprehensive guides and reference materials",
      },
      {
        title: "Community",
        href: "#community",
        description: "Join our community of learners and mentors",
      },
    ],
  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">bolt</span>
          <span className="text-2xl font-bold">.new</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className="group flex items-center text-sm font-medium transition-colors hover:text-primary"
              >
                {item.title}
                {item.dropdown && (
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === item.title ? "rotate-180" : ""
                    }`}
                  />
                )}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 ${
                    activeDropdown === item.title ? "w-full" : "group-hover:w-full"
                  }`}
                ></span>
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-64 rounded-lg border bg-card p-4 shadow-lg"
                    >
                      <div className="grid gap-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.title}
                            href={dropdownItem.href}
                            className="block rounded-md p-2 transition-colors hover:bg-muted"
                          >
                            <div className="font-medium">{dropdownItem.title}</div>
                            <div className="text-xs text-muted-foreground">{dropdownItem.description}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex">
            <Link href="#signup">Get Started</Link>
          </Button>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="container mx-auto overflow-hidden bg-background/95 backdrop-blur-sm md:hidden"
          >
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <div key={item.title} className="space-y-2">
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-2 border-l pl-4">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className="block text-xs text-muted-foreground transition-colors hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button asChild className="w-full">
                <Link href="#signup" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
