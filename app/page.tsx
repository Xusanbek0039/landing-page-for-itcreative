import { ArrowRight } from "lucide-react"
import CourseCard from "@/components/course-card"
import CustomCursor from "@/components/custom-cursor"
import { Button } from "@/components/ui/button"
import { SignupForm } from "@/components/signup-form"
import { AnimatedSection } from "@/components/animated-section"
import { CodeShape } from "@/components/code-shape"
import { BinaryBackground } from "@/components/binary-background"
import { RotatingCodeShape } from "@/components/rotating-code-shape"
import { RobotCursor } from "@/components/robot-cursor"
import { CodeElements } from "@/components/code-elements"
import { CodeTypingAnimation } from "@/components/code-typing-animation"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <CustomCursor />
      <BinaryBackground />
      <RobotCursor />

      {/* Programming-related shapes */}
      <CodeElements position="top-left" className="hidden lg:block" />
      <CodeElements position="top-right" className="hidden lg:block" />
      <CodeElements position="bottom-left" className="hidden lg:block" />
      <CodeElements position="bottom-right" className="hidden lg:block" />
      <CodeElements position="center-left" className="hidden lg:block" />
      <CodeElements position="center-right" className="hidden lg:block" />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Code Your Future with <span className="text-primary">bolt.new</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
              Learn real-world programming skills through hands-on projects and expert mentorship. From beginner to
              professional developer in months, not years.
            </p>
            <div className="mt-10">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </AnimatedSection>

          {/* Code Typing Animation */}
          <div className="mt-12 w-full max-w-2xl">
            <CodeTypingAnimation />
          </div>
        </div>

        {/* Rotating code shape in the center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <RotatingCodeShape className="opacity-30" />
        </div>

        <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center">
          <div className="animate-bounce rounded-full bg-primary/20 p-2">
            <ArrowRight className="h-6 w-6 rotate-90 text-primary" />
          </div>
        </div>
        <CodeShape className="absolute -left-20 bottom-20 h-64 w-64 text-primary/10" />
        <CodeShape className="absolute -right-20 top-20 h-64 w-64 rotate-180 text-primary/10" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Mission</h2>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Practical Learning</h3>
                <p className="text-card-foreground/80">
                  We believe in learning by doing. Our curriculum is built around real-world projects that teach you the
                  skills employers are looking for.
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Expert Mentorship</h3>
                <p className="text-card-foreground/80">
                  Learn from industry professionals who have worked at top tech companies. Get personalized feedback and
                  guidance on your code.
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Community Support</h3>
                <p className="text-card-foreground/80">
                  Join a community of like-minded learners. Collaborate on projects, share resources, and build your
                  professional network.
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Job-Ready Skills</h3>
                <p className="text-card-foreground/80">
                  Our curriculum is designed to prepare you for the job market. Learn the tools and technologies that
                  employers are looking for.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Courses</h2>
            <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <CourseCard
                title="Frontend Development"
                description="Master HTML, CSS, JavaScript, and modern frameworks like React to build beautiful, interactive user interfaces."
                icon="Code"
                color="green"
              />
              <CourseCard
                title="Backend Development"
                description="Learn server-side programming with Node.js, databases, API design, and cloud deployment."
                icon="Database"
                color="green"
              />
              <CourseCard
                title="Fullstack Development"
                description="Combine frontend and backend skills to build complete web applications from scratch to deployment."
                icon="Layers"
                color="green"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl rounded-xl border bg-card p-8 shadow-lg">
              <h2 className="mb-6 text-center text-3xl font-bold tracking-tight sm:text-4xl">Join Our Community</h2>
              <p className="mb-8 text-center text-lg text-card-foreground/80">
                Take the first step towards your new career in tech. Sign up for updates and be the first to know when
                new courses are available.
              </p>
              <SignupForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
