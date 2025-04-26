import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProgrammingLanguage {
  name: string;
  description: string;
  logo: string;
  codeExample: string;
  popularity: string;
  useCases: string[];
}

const LanguagesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const languages: ProgrammingLanguage[] = [
    {
      name: "Python",
      description: "A versatile language known for its simplicity and readability, perfect for beginners and experts alike.",
      logo: "https://www.python.org/static/community_logos/python-logo-generic.svg",
      codeExample: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print([fibonacci(i) for i in range(10)])`,
      popularity: "#1 in TIOBE Index 2024",
      useCases: ["AI/ML", "Web Development", "Data Science", "Automation"]
    },
    {
      name: "JavaScript",
      description: "The language of the web, essential for creating interactive and dynamic websites.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      codeExample: `const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};`,
      popularity: "#2 in GitHub usage",
      useCases: ["Web Development", "Mobile Apps", "Server-side", "Browser Games"]
    },
    {
      name: "Java",
      description: "A robust, object-oriented language used in enterprise applications and Android development.",
      logo: "https://www.oracle.com/a/tech/img/cb88-java-logo-001.jpg",
      codeExample: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
      popularity: "#3 in TIOBE Index 2024",
      useCases: ["Enterprise Apps", "Android Development", "Big Data", "IoT"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="languages" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Top Programming <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Languages</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Master the most in-demand programming languages in the industry. Each language opens new opportunities in different domains of technology.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              variants={itemVariants}
              className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={lang.logo}
                  alt={`${lang.name} logo`}
                  className="h-12 w-12 object-contain mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{lang.name}</h3>
                  <p className="text-cyan-400 text-sm">{lang.popularity}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{lang.description}</p>

              <div className="bg-gray-800 p-4 rounded-md mb-4 overflow-x-auto">
                <pre className="text-sm">
                  <code className="text-cyan-400">{lang.codeExample}</code>
                </pre>
              </div>

              <div className="flex flex-wrap gap-2">
                {lang.useCases.map((useCase) => (
                  <span
                    key={useCase}
                    className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm"
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagesSection;