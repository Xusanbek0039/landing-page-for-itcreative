import React, { useState } from 'react';
import { Github, Linkedin, Facebook, Send, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };
  
  return (
    <footer id="contact" className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-xl font-bold mr-2">
                &lt;/&gt;
              </span>
              <h2 className="text-xl font-bold text-white">
                <span className="text-cyan-400">IT</span>
                <span className="text-white">Creative</span>
                <span className="text-purple-500">UZ</span>
              </h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Empowering the next generation of tech professionals with cutting-edge 
              education and practical skills for the modern digital economy.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 flex items-center">
              <span className="text-cyan-400 mr-2">$</span> Quick Links
            </h3>
            
            <ul className="space-y-3 font-mono">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2 text-cyan-400">→</span>
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#courses" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2 text-cyan-400">→</span>
                  Courses
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2 text-cyan-400">→</span>
                  Why Choose Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2 text-cyan-400">→</span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 flex items-center">
              <span className="text-cyan-400 mr-2">$</span> Contact Info
            </h3>
            
            <div className="space-y-4 font-mono">
              <p className="text-gray-400 flex items-start">
                <span className="text-cyan-400 mr-2 mt-1">→</span>
                123 Tech Street, Tashkent, Uzbekistan
              </p>
              <p className="text-gray-400 flex items-start">
                <span className="text-cyan-400 mr-2 mt-1">→</span>
                <a href="mailto:info@itcreativeuz.com" className="hover:text-cyan-400 transition-colors duration-300">
                  info@itcreativeuz.com
                </a>
              </p>
              <p className="text-gray-400 flex items-start">
                <span className="text-cyan-400 mr-2 mt-1">→</span>
                <a href="tel:+998123456789" className="hover:text-cyan-400 transition-colors duration-300">
                  +998 (12) 345-67-89
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 flex items-center">
              <span className="text-cyan-400 mr-2">$</span> Newsletter
            </h3>
            
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on new courses and tech events.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-gray-800 text-gray-200 px-4 py-2 rounded-l-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-cyan-400 flex-grow"
                  required
                />
                <button 
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-r-md transition-colors duration-300 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="animate-spin">↻</span>
                  ) : (
                    <Send size={18} />
                  )}
                </button>
              </div>
              
              {isSubmitted && (
                <p className="text-green-400 text-sm mt-2">
                  Thank you for subscribing!
                </p>
              )}
            </form>
            
            <div className="mt-6 bg-gray-800 p-4 rounded-lg border border-gray-700">
              <div className="flex items-center mb-2">
                <MessageSquare size={18} className="text-cyan-400 mr-2" />
                <h4 className="text-white font-medium">Live Chat Support</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Available weekdays, 9 AM - 6 PM (UZT)
              </p>
              <a 
                href="#" 
                className="mt-2 inline-block text-sm text-cyan-400 hover:underline"
              >
                Start Chat
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} IT Creative UZ. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;