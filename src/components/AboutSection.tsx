import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import { StatType } from '../types';
import { Code, GraduationCap as Graduation, Users, Clock } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats: StatType[] = [
    { id: 'graduates', value: 500, label: 'Graduates', suffix: '+' },
    { id: 'courses', value: 30, label: 'Professional Courses', suffix: '+' },
    { id: 'instructors', value: 25, label: 'Expert Instructors', suffix: '+' },
    { id: 'years', value: 5, label: 'Years of Excellence', suffix: '' }
  ];

  const StatIcon: React.FC<{ id: string }> = ({ id }) => {
    switch (id) {
      case 'graduates':
        return <Graduation className="w-8 h-8 text-cyan-400" />;
      case 'courses':
        return <Code className="w-8 h-8 text-purple-500" />;
      case 'instructors':
        return <Users className="w-8 h-8 text-blue-400" />;
      case 'years':
        return <Clock className="w-8 h-8 text-green-400" />;
      default:
        return <Code className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="text-sm text-cyan-400 mb-2 flex items-center font-mono">
            <span className="block w-8 h-px bg-cyan-400 mr-2"></span>
            &lt;section id="about"&gt;
            <span className="block w-8 h-px bg-cyan-400 ml-2"></span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">IT Creative UZ</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mb-8"></div>
          
          <p className="text-gray-300 max-w-3xl text-center mb-12">
            IT Creative UZ is Uzbekistan's premier tech education academy, 
            committed to transforming students into industry-ready professionals 
            through practical, hands-on learning experiences led by expert instructors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div 
              key={stat.id}
              className="bg-gray-800 rounded-lg p-6 text-center transition-transform hover:scale-105 border border-gray-700 hover:border-cyan-500"
              data-aos="fade-up"
              data-aos-delay={stats.indexOf(stat) * 100}
            >
              <div className="flex justify-center mb-4">
                <StatIcon id={stat.id} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix} 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
                />
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="relative"
            data-aos="fade-right"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 blur-xl opacity-25 rounded-lg -z-10"></div>
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-gray-400 text-sm">mission.js</div>
              </div>
              
              <div className="font-mono text-sm text-gray-300">
                <p className="mb-2"><span className="text-purple-400">const</span> <span className="text-cyan-400">mission</span> <span className="text-white">=</span> <span className="text-orange-400">()</span> <span className="text-white">=&gt;</span> <span className="text-orange-400">&#123;</span></p>
                <p className="mb-2 ml-4"><span className="text-purple-400">return</span> <span className="text-green-400">"To empower individuals with cutting-edge technical skills and foster innovation in the IT industry."</span>;</p>
                <p className="mb-2"><span className="text-orange-400">&#125;</span>;</p>
                <p className="mb-2"><span className="text-purple-400">const</span> <span className="text-cyan-400">vision</span> <span className="text-white">=</span> <span className="text-orange-400">()</span> <span className="text-white">=&gt;</span> <span className="text-orange-400">&#123;</span></p>
                <p className="mb-2 ml-4"><span className="text-purple-400">return</span> <span className="text-green-400">"To be the leading tech education platform, creating the next generation of tech leaders and innovators."</span>;</p>
                <p><span className="text-orange-400">&#125;</span>;</p>
              </div>
            </div>
          </div>
          
          <div 
            className="space-y-6"
            data-aos="fade-left"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                <span className="text-cyan-400">$</span> Our Mission
              </h3>
              <p className="text-gray-300">
                We empower individuals with cutting-edge technical skills and practical knowledge, 
                fostering innovation and excellence in the IT industry through hands-on, 
                project-based learning experiences.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                <span className="text-cyan-400">$</span> Our Vision
              </h3>
              <p className="text-gray-300">
                To be the leading tech education platform in Central Asia, creating the next 
                generation of tech leaders and innovators who will drive digital transformation 
                and economic growth in the region.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                <span className="text-cyan-400">$</span> Our Approach
              </h3>
              <p className="text-gray-300">
                We believe in learning by doing. Our curriculum combines theoretical knowledge 
                with real-world projects, enabling students to build a professional portfolio 
                while mastering in-demand skills.
              </p>
            </div>
          </div>
        </div>

        <div className="text-sm text-cyan-400 mt-12 flex items-center justify-center font-mono">
          <span className="block w-8 h-px bg-cyan-400 mr-2"></span>
          &lt;/section&gt;
          <span className="block w-8 h-px bg-cyan-400 ml-2"></span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;