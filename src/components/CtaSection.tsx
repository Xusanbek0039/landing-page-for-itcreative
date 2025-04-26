import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gray-800">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
        
        {/* Code Matrix Effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="relative h-full">
                <div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-cyan-400"
                  style={{ 
                    height: `${Math.random() * 100}%`, 
                    animationDuration: `${Math.random() * 5 + 3}s`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            data-aos="fade-up"
          >
            <span className="text-white">Ready to </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Transform Your Future
            </span>
            <span className="text-white">?</span>
          </h2>
          
          <div 
            className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-lg border border-gray-700 mb-8 inline-block"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="font-mono text-gray-300 text-sm md:text-base">
              <div className="mb-2"><span className="text-cyan-400">const</span> <span className="text-yellow-400">yourFuture</span> = <span className="text-cyan-400">async</span>() <span className="text-purple-400">=&gt;</span> {`{`}</div>
              <div className="ml-4 mb-2"><span className="text-cyan-400">await</span> <span className="text-yellow-400">ITCreativeUZ</span>.<span className="text-yellow-400">enroll</span>(<span className="text-green-400">'you'</span>);</div>
              <div className="ml-4 mb-2"><span className="text-purple-400">return</span> <span className="text-green-400">'A successful career in tech'</span>;</div>
              <div>{`}`};</div>
            </div>
          </div>
          
          <p 
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Join hundreds of successful graduates who've launched rewarding careers 
            in the tech industry. Enrollment is now open for our upcoming courses.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-md font-medium text-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 group"
            >
              <span className="group-hover:mr-2 transition-all duration-300">Start Learning Now</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a 
              href="#courses" 
              className="bg-transparent text-cyan-400 border border-cyan-400 px-8 py-4 rounded-md font-medium text-center transition-all duration-300 hover:bg-cyan-400/10"
            >
              Explore Curriculum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;