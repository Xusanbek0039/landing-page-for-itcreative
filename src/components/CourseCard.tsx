import React, { useState } from 'react';
import { CourseType } from '../types';

interface CourseCardProps {
  course: CourseType;
  delay?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, delay = 0 }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className="h-[400px] perspective-1000"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div 
        className={`relative transition-all duration-500 card-flip-effect h-full w-full ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front side */}
        <div 
          className="absolute w-full h-full backface-hidden group cursor-pointer"
          onClick={() => setIsFlipped(true)}
        >
          <div className="bg-gray-800 h-full w-full rounded-lg border border-gray-700 p-6 flex flex-col transition-all duration-300 transform group-hover:translate-y-[-5px] group-hover:shadow-lg group-hover:shadow-cyan-500/20 group-hover:border-cyan-500/50">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
                <span className="text-white text-2xl" dangerouslySetInnerHTML={{ __html: course.icon }} />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 text-center">{course.title}</h3>
            
            <p className="text-gray-400 text-center mb-6 flex-grow">
              {course.description}
            </p>
            
            <div className="flex justify-center items-center mt-auto space-x-2 text-sm text-cyan-400">
              <span>View Code Sample</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="animate-pulse"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Back side */}
        <div 
          className="absolute w-full h-full backface-hidden rotate-y-180 cursor-pointer"
          onClick={() => setIsFlipped(false)}
        >
          <div className="bg-gray-800 h-full w-full rounded-lg border border-gray-700 p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-gray-400 text-sm">{course.language}</div>
            </div>
            
            <div className="flex-grow overflow-auto font-mono text-sm mb-4 code-syntax-highlight">
              <pre className="text-white"><code dangerouslySetInnerHTML={{ __html: course.codeSnippet }} /></pre>
            </div>
            
            <div className="flex justify-between items-center mt-auto">
              <button 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded text-sm">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;