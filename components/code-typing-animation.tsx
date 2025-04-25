"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Info, Play, Pause, Clipboard, Check } from "lucide-react"

interface CodeSnippet {
  language: string
  code: string
  extension: string
  color: string
  tooltips: TooltipData[]
  icon: React.ReactNode
}

interface TooltipData {
  keyword: string
  explanation: string
  type: "function" | "keyword" | "concept" | "variable" | "method" | "component" | "library"
}

const codeSnippets: CodeSnippet[] = [
  {
    language: "JavaScript",
    extension: "js",
    color: "#f7df1e",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
    code: `// Simple counter component in React
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;`,
    tooltips: [
      {
        keyword: "import { useState }",
        explanation: "Imports the useState hook from React, which lets you add state to functional components.",
        type: "library",
      },
      {
        keyword: "useState(0)",
        explanation: "Creates a state variable 'count' initialized to 0, and a function 'setCount' to update it.",
        type: "function",
      },
      {
        keyword: "const [count, setCount]",
        explanation: "Uses array destructuring to assign the state value and setter function from useState.",
        type: "concept",
      },
      {
        keyword: "onClick={() =>",
        explanation: "Event handler that runs when the button is clicked, using an arrow function.",
        type: "method",
      },
      {
        keyword: "setCount(count + 1)",
        explanation: "Updates the count state by adding 1 to the current value, which triggers a re-render.",
        type: "method",
      },
      {
        keyword: "Counter",
        explanation: "A functional React component that manages its own state using hooks.",
        type: "component",
      },
    ],
  },
  {
    language: "Python",
    extension: "py",
    color: "#3776ab",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
      </svg>
    ),
    code: `# A simple machine learning model
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Generate sample data
X = np.random.rand(100, 1) * 10
y = 2 * X + 1 + np.random.randn(100, 1)

# Split the data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)`,
    tooltips: [
      {
        keyword: "import numpy as np",
        explanation: "Imports NumPy, a library for numerical computing in Python, with the alias 'np'.",
        type: "library",
      },
      {
        keyword: "from sklearn",
        explanation: "Imports from scikit-learn, a popular machine learning library in Python.",
        type: "library",
      },
      {
        keyword: "train_test_split",
        explanation: "Function that splits data into training and testing sets to evaluate model performance.",
        type: "function",
      },
      {
        keyword: "LinearRegression",
        explanation:
          "A machine learning algorithm that models the relationship between variables using a linear equation.",
        type: "component",
      },
      {
        keyword: "np.random.rand",
        explanation: "Generates random numbers from a uniform distribution between 0 and 1.",
        type: "function",
      },
      {
        keyword: "model.fit",
        explanation: "Trains the machine learning model on the training data to learn patterns.",
        type: "method",
      },
      {
        keyword: "model.predict",
        explanation: "Uses the trained model to make predictions on new, unseen data.",
        type: "method",
      },
    ],
  },
  {
    language: "HTML/CSS",
    extension: "html",
    color: "#e34c26",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
      </svg>
    ),
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Card</title>
  <style>
    .card {
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      padding: 24px;
      max-width: 400px;
      margin: 0 auto;
      background: linear-gradient(135deg, #4CAF50, #2E7D32);
      color: white;
    }
    .card h2 {
      margin-top: 0;
      font-size: 1.5rem;
    }
    @media (max-width: 600px) {
      .card {
        padding: 16px;
      }
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Learn to Code</h2>
    <p>Start your journey today!</p>
  </div>
</body>
</html>`,
    tooltips: [
      {
        keyword: "<!DOCTYPE html>",
        explanation: "Declares the document type and version of HTML being used (HTML5 in this case).",
        type: "keyword",
      },
      {
        keyword: '<meta name="viewport"',
        explanation: "Controls how the page is displayed on mobile devices, making it responsive.",
        type: "concept",
      },
      {
        keyword: "border-radius: 8px;",
        explanation: "Rounds the corners of an element (in this case, the card) by 8 pixels.",
        type: "keyword",
      },
      {
        keyword: "box-shadow:",
        explanation:
          "Adds a shadow effect to elements, creating depth. Format: x-offset, y-offset, blur, spread, color.",
        type: "keyword",
      },
      {
        keyword: "linear-gradient",
        explanation: "Creates a gradient background that transitions smoothly between two or more colors.",
        type: "function",
      },
      {
        keyword: "@media (max-width: 600px)",
        explanation:
          "Media query that applies styles only when the screen width is 600px or less, for responsive design.",
        type: "concept",
      },
    ],
  },
  {
    language: "TypeScript",
    extension: "ts",
    color: "#3178c6",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
    code: `// Type-safe API client
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'editor';
}

class ApiClient {
  private baseUrl: string;
  
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  
  async getUsers(): Promise<User[]> {
    const response = await fetch(\`\${this.baseUrl}/users\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    return response.json() as Promise<User[]>;
  }
  
  async getUserById(id: number): Promise<User> {
    const response = await fetch(\`\${this.baseUrl}/users/\${id}\`);
    
    if (!response.ok) {
      throw new Error(\`User with ID \${id} not found\`);
    }
    
    return response.json() as Promise<User>;
  }
}`,
    tooltips: [
      {
        keyword: "interface User",
        explanation:
          "Defines a TypeScript interface that specifies the shape of a User object with required properties and types.",
        type: "keyword",
      },
      {
        keyword: "role: 'admin' | 'user' | 'editor'",
        explanation: "A union type that restricts the role property to only these three specific string values.",
        type: "concept",
      },
      {
        keyword: "private baseUrl",
        explanation: "A class property that can only be accessed within the class, not from outside code.",
        type: "keyword",
      },
      {
        keyword: "async",
        explanation: "Marks a function as asynchronous, allowing the use of await inside it to handle Promises.",
        type: "keyword",
      },
      {
        keyword: "Promise<User[]>",
        explanation:
          "A TypeScript type annotation indicating this function returns a Promise that resolves to an array of User objects.",
        type: "concept",
      },
      {
        keyword: "await fetch",
        explanation: "Pauses execution until the fetch Promise resolves, making asynchronous code look synchronous.",
        type: "keyword",
      },
      {
        keyword: "as Promise<User>",
        explanation: "Type assertion that tells TypeScript to treat the expression as a specific type.",
        type: "concept",
      },
    ],
  },
]

export function CodeTypingAnimation() {
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0)
  const [displayedCode, setDisplayedCode] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [activeTooltip, setActiveTooltip] = useState<TooltipData | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [autoPlay, setAutoPlay] = useState(true)
  const typingSpeed = 30 // milliseconds per character
  const pauseBetweenSnippets = 2000 // milliseconds
  const currentSnippet = codeSnippets[currentSnippetIndex]
  const codeRef = useRef<HTMLPreElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle")

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  // Typing effect
  useEffect(() => {
    if (!autoPlay && displayedCode === "") {
      // If not in autoplay and code is empty, show full code immediately
      setDisplayedCode(currentSnippet.code)
      return
    }

    if (isTyping) {
      if (displayedCode.length < currentSnippet.code.length) {
        const timeout = setTimeout(() => {
          setDisplayedCode(currentSnippet.code.slice(0, displayedCode.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        setIsTyping(false)
        if (autoPlay) {
          const timeout = setTimeout(() => {
            setIsTyping(true)
            setDisplayedCode("")
            setCurrentSnippetIndex((prev) => (prev + 1) % codeSnippets.length)
          }, pauseBetweenSnippets)
          return () => clearTimeout(timeout)
        }
      }
    }
  }, [displayedCode, currentSnippet.code, isTyping, currentSnippetIndex, autoPlay])

  // Scroll to bottom as code is typed
  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.scrollTop = codeRef.current.scrollHeight
    }
  }, [displayedCode])

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setActiveTooltip(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Adjust tooltip position to stay in viewport
  useEffect(() => {
    if (tooltipRef.current && activeTooltip) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect()
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      let { x, y } = tooltipPosition

      // Adjust horizontal position if needed
      if (x + tooltipRect.width > viewportWidth - 20) {
        x = viewportWidth - tooltipRect.width - 20
      }

      // Adjust vertical position if needed
      if (y + tooltipRect.height > viewportHeight - 20) {
        y = viewportHeight - tooltipRect.height - 20
      }

      setTooltipPosition({ x, y })
    }
  }, [activeTooltip, tooltipPosition])

  // Handle tooltip hover
  const handleTooltipHover = (tooltip: TooltipData, event: React.MouseEvent) => {
    setActiveTooltip(tooltip)
    // Position tooltip near the cursor
    setTooltipPosition({
      x: event.clientX + 10,
      y: event.clientY + 10,
    })
  }

  // Get tooltip type color
  const getTooltipTypeColor = (type: TooltipData["type"]) => {
    switch (type) {
      case "function":
        return "bg-blue-500"
      case "keyword":
        return "bg-purple-500"
      case "concept":
        return "bg-amber-500"
      case "variable":
        return "bg-green-500"
      case "method":
        return "bg-pink-500"
      case "component":
        return "bg-red-500"
      case "library":
        return "bg-cyan-500"
      default:
        return "bg-gray-500"
    }
  }

  // Handle language selection
  const handleLanguageSelect = (index: number) => {
    if (currentSnippetIndex !== index) {
      setAutoPlay(false)
      setCurrentSnippetIndex(index)
      setIsTyping(true)
      setDisplayedCode("")
    }
  }

  // Toggle autoplay
  const toggleAutoPlay = () => {
    if (!autoPlay) {
      // When turning autoplay back on, move to the next language
      setAutoPlay(true)
      setIsTyping(true)
      setDisplayedCode("")
      setCurrentSnippetIndex((prev) => (prev + 1) % codeSnippets.length)
    } else {
      setAutoPlay(false)
    }
  }

  // Handle copying code to clipboard
  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(currentSnippet.code)
      setCopyStatus("copied")

      // Reset status after 2 seconds
      setTimeout(() => {
        setCopyStatus("idle")
      }, 2000)
    } catch (err) {
      setCopyStatus("error")

      // Reset status after 2 seconds
      setTimeout(() => {
        setCopyStatus("idle")
      }, 2000)
    }
  }

  // Syntax highlighting with tooltips
  const highlightSyntaxWithTooltips = (code: string) => {
    let highlightedCode = code

    // Apply basic syntax highlighting
    highlightedCode = highlightedCode
      // Highlight strings
      .replace(/(["'`])(.*?)\1/g, '<span class="text-amber-400">$&</span>')
      // Highlight comments
      .replace(/(\/\/.*|#.*)/g, '<span class="text-green-400">$&</span>')
      // Highlight keywords
      .replace(
        /\b(function|class|const|let|var|import|export|from|return|if|else|for|while|async|await|new|try|catch)\b/g,
        '<span class="text-purple-400">$&</span>',
      )
      // Highlight function calls
      .replace(/(\w+)(\()/g, '<span class="text-blue-400">$1</span>$2')
      // Highlight numbers
      .replace(/\b(\d+)\b/g, '<span class="text-orange-400">$&</span>')

    // Add tooltips to specific code segments
    currentSnippet.tooltips.forEach((tooltip) => {
      // Only add tooltips for code that has been typed
      if (code.includes(tooltip.keyword)) {
        const tooltipHtml = `<span class="relative tooltip-trigger cursor-help border-b border-dotted border-green-400" data-tooltip="${encodeURIComponent(
          JSON.stringify(tooltip),
        )}">${tooltip.keyword}<span class="absolute -top-1 -right-2 text-xs text-green-400"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></span></span>`
        highlightedCode = highlightedCode.replace(new RegExp(escapeRegExp(tooltip.keyword), "g"), tooltipHtml)
      }
    })

    return highlightedCode
  }

  // Helper function to escape special characters in regex
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  }

  // Add event listeners to tooltip triggers after rendering
  useEffect(() => {
    if (!codeRef.current) return

    const tooltipTriggers = codeRef.current.querySelectorAll(".tooltip-trigger")

    tooltipTriggers.forEach((trigger) => {
      trigger.addEventListener("mouseenter", (event) => {
        const tooltipData = (trigger as HTMLElement).dataset.tooltip
        if (tooltipData) {
          const tooltip = JSON.parse(decodeURIComponent(tooltipData)) as TooltipData
          handleTooltipHover(tooltip, event as unknown as React.MouseEvent)
        }
      })
    })

    return () => {
      tooltipTriggers.forEach((trigger) => {
        trigger.removeEventListener("mouseenter", () => {})
      })
    }
  }, [displayedCode])

  return (
    <div className="w-full max-w-2xl rounded-lg border bg-zinc-950 shadow-xl">
      {/* Language tabs */}
      <div className="flex border-b border-zinc-700 bg-zinc-800">
        {codeSnippets.map((snippet, index) => (
          <button
            key={snippet.language}
            className={`flex items-center space-x-2 px-4 py-2 text-xs font-medium transition-colors ${
              currentSnippetIndex === index
                ? "border-b-2 border-primary bg-zinc-900 text-primary"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
            }`}
            onClick={() => handleLanguageSelect(index)}
            aria-pressed={currentSnippetIndex === index}
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full"
              style={{ backgroundColor: snippet.color }}
            >
              {snippet.icon}
            </span>
            <span>{snippet.language}</span>
          </button>
        ))}
        <button
          className={`ml-auto flex items-center space-x-1 px-3 py-2 text-xs font-medium ${
            autoPlay ? "text-primary" : "text-zinc-400 hover:text-zinc-200"
          }`}
          onClick={toggleAutoPlay}
          aria-pressed={autoPlay}
          title={autoPlay ? "Pause auto-cycling" : "Resume auto-cycling"}
        >
          {autoPlay ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
          <span className="hidden sm:inline">{autoPlay ? "Auto" : "Manual"}</span>
        </button>
      </div>

      {/* Code editor header */}
      <div className="flex items-center justify-between border-b border-zinc-700 bg-zinc-800 px-4 py-2">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center">
          <span className="mr-2 h-3 w-3 rounded-full" style={{ backgroundColor: currentSnippet.color }}></span>
          <span className="text-xs font-medium text-zinc-300">
            {currentSnippet.language} • {currentSnippet.extension}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopyCode}
            className="group flex items-center space-x-1 rounded px-2 py-1 text-xs font-medium text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-zinc-800"
            aria-label={copyStatus === "copied" ? "Copied to clipboard" : "Copy code to clipboard"}
          >
            {copyStatus === "copied" ? (
              <>
                <Check className="h-3 w-3 text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Clipboard className="h-3 w-3 group-hover:hidden" />
                <Clipboard className="hidden h-3 w-3 fill-zinc-200 group-hover:block" />
                <span>Copy</span>
              </>
            )}
          </button>
          <div className="text-xs text-zinc-400">bolt.new</div>
        </div>
      </div>

      {/* Code content */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSnippetIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <pre
              ref={codeRef}
              className="max-h-[400px] overflow-auto p-4 pl-10 font-mono text-sm leading-relaxed text-zinc-300"
            >
              <code
                dangerouslySetInnerHTML={{
                  __html: highlightSyntaxWithTooltips(displayedCode),
                }}
              />
              <span
                className={`inline-block h-4 w-2 bg-green-400 ${cursorVisible ? "opacity-100" : "opacity-0"}`}
              ></span>
            </pre>
          </motion.div>
        </AnimatePresence>

        {/* Line numbers */}
        <div className="absolute left-0 top-0 h-full w-8 select-none border-r border-zinc-700 bg-zinc-900/50 p-4 text-right font-mono text-xs text-zinc-500">
          {Array.from({ length: displayedCode.split("\n").length }).map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      {activeTooltip && (
        <div
          ref={tooltipRef}
          className="fixed z-50 max-w-xs rounded-lg border border-zinc-700 bg-zinc-800 p-3 shadow-lg"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
          }}
        >
          <div className="mb-1 flex items-center justify-between">
            <div className="flex items-center">
              <span
                className={`mr-2 inline-block h-2 w-2 rounded-full ${getTooltipTypeColor(activeTooltip.type)}`}
              ></span>
              <span className="text-xs font-semibold uppercase text-zinc-400">{activeTooltip.type}</span>
            </div>
            <button
              onClick={() => setActiveTooltip(null)}
              className="text-zinc-400 hover:text-zinc-200"
              aria-label="Close tooltip"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="text-sm text-zinc-300">{activeTooltip.explanation}</div>
        </div>
      )}

      {/* Help text */}
      <div className="flex items-center justify-center border-t border-zinc-700 bg-zinc-800 px-4 py-2 text-xs text-zinc-400">
        <Info className="mr-1 h-3 w-3" /> Hover over highlighted code segments to see explanations
      </div>
    </div>
  )
}
