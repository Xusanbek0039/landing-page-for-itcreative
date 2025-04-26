import React from 'react';
import { FeatureType } from '../types';
import { Users, Award, Monitor, Clock, Briefcase, Book } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features: FeatureType[] = [
    {
      id: 'experts',
      title: 'Industry Experts',
      description: 'Learn from professionals with years of experience in leading tech companies.',
      icon: 'Users'
    },
    {
      id: 'certification',
      title: 'Recognized Certification',
      description: 'Earn certificates that are recognized and valued by employers in the industry.',
      icon: 'Award'
    },
    {
      id: 'practical',
      title: 'Practical Projects',
      description: 'Build real-world projects to apply your skills and expand your portfolio.',
      icon: 'Monitor'
    },
    {
      id: 'flexible',
      title: 'Flexible Learning',
      description: 'Study at your own pace with both online and in-person learning options.',
      icon: 'Clock'
    },
    {
      id: 'career',
      title: 'Career Support',
      description: 'Get guidance for job applications, interviews, and career advancement.',
      icon: 'Briefcase'
    },
    {
      id: 'updated',
      title: 'Up-to-date Curriculum',
      description: 'Course materials are regularly updated to reflect the latest industry trends.',
      icon: 'Book'
    }
  ];

  const FeatureIcon: React.FC<{ icon: string }> = ({ icon }) => {
    switch (icon) {
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'Award':
        return <Award className="w-6 h-6" />;
      case 'Monitor':
        return <Monitor className="w-6 h-6" />;
      case 'Clock':
        return <Clock className="w-6 h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      case 'Book':
        return <Book className="w-6 h-6" />;
      default:
        return <Monitor className="w-6 h-6" />;
    }
  };

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="text-sm text-cyan-400 mb-2 flex items-center font-mono">
            <span className="block w-8 h-px bg-cyan-400 mr-2"></span>
            &lt;section id="features"&gt;
            <span className="block w-8 h-px bg-cyan-400 ml-2"></span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">IT Creative UZ</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mb-8"></div>
          
          <p className="text-gray-300 max-w-3xl text-center mb-12">
            Join a community of passionate learners and dedicated instructors committed 
            to excellence in tech education. Here's what sets us apart:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center mr-4 text-cyan-400 group-hover:bg-cyan-400/10 transition-colors duration-300">
                  <FeatureIcon icon={feature.icon} />
                </div>
                
                <div>
                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <div className="pl-16 mt-4">
                <div className="h-px w-full bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
              </div>
            </div>
          ))}
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

export default FeaturesSection;