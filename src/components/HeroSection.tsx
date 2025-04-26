import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TerminalAnimation from './TerminalAnimation';
import CodeRain from './CodeRain';

const HeroSection: React.FC = () => {
  const [terminalCompleted, setTerminalCompleted] = useState(false);
  
  const terminalCommands = [
    'npm install @itcreative/learning-platform',
    'cd ./courses/fullstack-development',
    'python train_ai_model.py --epochs 10',
    'git push origin main',
    'ls -la'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <CodeRain />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="text-left max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.div 
                className="animate-gradient-text text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Master Tech Skills
                <br />
                Build Your Future
              </motion.div>
              
              <motion.p 
                className="text-gray-300 text-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                Join IT Creative UZ and transform your passion for technology into 
                professional expertise. Learn from industry professionals and build 
                real-world projects.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <motion.a 
                  href="#courses" 
                  className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-md font-medium text-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 animate-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Courses
                  <motion.span 
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="group bg-transparent text-cyan-400 border border-cyan-400 px-8 py-3 rounded-md font-medium text-center transition-all duration-300 hover:bg-cyan-400/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-xl opacity-20 rounded-lg -z-10"></div>
              <TerminalAnimation 
                commands={terminalCommands} 
                onComplete={() => setTerminalCompleted(true)}
              />
              
              {terminalCompleted && (
                <motion.div 
                  className="mt-4 text-center text-cyan-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-sm animate-pulse">Terminal session active. Type 'help' for assistance.</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a 
          href="#about" 
          className="text-cyan-400 flex flex-col items-center"
          aria-label="Scroll to About section"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </motion.svg>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;