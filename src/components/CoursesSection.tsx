import React from 'react';
import CourseCard from './CourseCard';
import { CourseType } from '../types';

const CoursesSection: React.FC = () => {
  const courses: CourseType[] = [
    {
      id: 'fullstack',
      title: 'Full Stack Development',
      description: 'Master front-end and back-end technologies to build complete web applications from scratch.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>',
      language: 'JavaScript',
      codeSnippet: `<span class="text-purple-400">import</span> <span class="text-cyan-400">express</span> <span class="text-purple-400">from</span> <span class="text-green-400">'express'</span>;
<span class="text-purple-400">import</span> <span class="text-cyan-400">React</span> <span class="text-purple-400">from</span> <span class="text-green-400">'react'</span>;

<span class="text-purple-400">const</span> <span class="text-cyan-400">app</span> = <span class="text-cyan-400">express</span>();
<span class="text-purple-400">const</span> <span class="text-cyan-400">port</span> = <span class="text-orange-400">3000</span>;

<span class="text-cyan-400">app</span>.<span class="text-yellow-400">get</span>(<span class="text-green-400">'/'</span>, (<span class="text-cyan-400">req</span>, <span class="text-cyan-400">res</span>) => {
  <span class="text-cyan-400">res</span>.<span class="text-yellow-400">send</span>(<span class="text-green-400">'Hello World!'</span>);
});

<span class="text-cyan-400">app</span>.<span class="text-yellow-400">listen</span>(<span class="text-cyan-400">port</span>, () => {
  <span class="text-cyan-400">console</span>.<span class="text-yellow-400">log</span>(<span class="text-green-400">&#96;Server running at http://localhost:$</span>{<span class="text-cyan-400">port</span>}<span class="text-green-400">&#96;</span>);
});</span>`
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Dive into the world of artificial intelligence and machine learning with hands-on projects.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m2 12 5-5m-5 5 5 5m10-5h-5m5 0-5-5m5 5-5 5m-5-5a2 2 0 1 0 4 0 2 2 0 1 0-4 0z"></path></svg>',
      language: 'Python',
      codeSnippet: `<span class="text-purple-400">import</span> <span class="text-cyan-400">numpy</span> <span class="text-purple-400">as</span> <span class="text-cyan-400">np</span>
<span class="text-purple-400">import</span> <span class="text-cyan-400">tensorflow</span> <span class="text-purple-400">as</span> <span class="text-cyan-400">tf</span>
<span class="text-purple-400">from</span> <span class="text-cyan-400">tensorflow.keras.models</span> <span class="text-purple-400">import</span> <span class="text-cyan-400">Sequential</span>
<span class="text-purple-400">from</span> <span class="text-cyan-400">tensorflow.keras.layers</span> <span class="text-purple-400">import</span> <span class="text-cyan-400">Dense</span>

<span class="text-green-400"># Create a simple neural network</span>
<span class="text-cyan-400">model</span> = <span class="text-cyan-400">Sequential</span>([
  <span class="text-cyan-400">Dense</span>(<span class="text-orange-400">128</span>, <span class="text-cyan-400">activation</span>=<span class="text-green-400">'relu'</span>, <span class="text-cyan-400">input_shape</span>=(<span class="text-orange-400">784</span>,)),
  <span class="text-cyan-400">Dense</span>(<span class="text-orange-400">64</span>, <span class="text-cyan-400">activation</span>=<span class="text-green-400">'relu'</span>),
  <span class="text-cyan-400">Dense</span>(<span class="text-orange-400">10</span>, <span class="text-cyan-400">activation</span>=<span class="text-green-400">'softmax'</span>)
])

<span class="text-cyan-400">model</span>.<span class="text-yellow-400">compile</span>(
  <span class="text-cyan-400">optimizer</span>=<span class="text-green-400">'adam'</span>,
  <span class="text-cyan-400">loss</span>=<span class="text-green-400">'sparse_categorical_crossentropy'</span>,
  <span class="text-cyan-400">metrics</span>=[<span class="text-green-400">'accuracy'</span>]
)</span>`
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Learn to protect systems, networks, and programs from digital attacks.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
      language: 'Bash',
      codeSnippet: `<span class="text-green-400">#!/bin/bash</span>

<span class="text-green-400"># Simple port scanning script</span>
<span class="text-purple-400">function</span> <span class="text-yellow-400">scan_port</span>() {
  <span class="text-cyan-400">host</span>=<span class="text-green-400">"$1"</span>
  <span class="text-cyan-400">port</span>=<span class="text-green-400">"$2"</span>
  
  <span class="text-cyan-400">timeout</span> 1 <span class="text-cyan-400">bash</span> -c "</span><span class="text-purple-400">echo</span> > /dev/tcp/<span class="text-green-400">$host</span>/<span class="text-green-400">$port</span>" &>/dev/null
  
  <span class="text-purple-400">if</span> [ <span class="text-green-400">$?</span> -eq 0 ]; <span class="text-purple-400">then</span>
    <span class="text-purple-400">echo</span> <span class="text-green-400">"Port $port is open on $host"</span>
  <span class="text-purple-400">else</span>
    <span class="text-purple-400">echo</span> <span class="text-green-400">"Port $port is closed on $host"</span>
  <span class="text-purple-400">fi</span>
}

<span class="text-purple-400">for</span> port <span class="text-purple-400">in</span> 22 80 443 3306; <span class="text-purple-400">do</span>
  <span class="text-yellow-400">scan_port</span> <span class="text-green-400">"localhost"</span> <span class="text-green-400">"$port"</span>
<span class="text-purple-400">done</span></span>`
    },
    {
      id: 'mobile-dev',
      title: 'Mobile App Development',
      description: 'Create native and cross-platform mobile applications for iOS and Android.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>',
      language: 'React Native',
      codeSnippet: `<span class="text-purple-400">import</span> <span class="text-cyan-400">React</span> <span class="text-purple-400">from</span> <span class="text-green-400">'react'</span>;
<span class="text-purple-400">import</span> { <span class="text-cyan-400">View</span>, <span class="text-cyan-400">Text</span>, <span class="text-cyan-400">StyleSheet</span>, <span class="text-cyan-400">TouchableOpacity</span> } <span class="text-purple-400">from</span> <span class="text-green-400">'react-native'</span>;

<span class="text-purple-400">export default function</span> <span class="text-yellow-400">App</span>() {
  <span class="text-purple-400">const</span> [<span class="text-cyan-400">count</span>, <span class="text-cyan-400">setCount</span>] = <span class="text-cyan-400">React</span>.<span class="text-yellow-400">useState</span>(0);

  <span class="text-purple-400">return</span> (
    <<span class="text-cyan-400">View</span> <span class="text-cyan-400">style</span>={<span class="text-cyan-400">styles</span>.<span class="text-cyan-400">container</span>}>
      <<span class="text-cyan-400">Text</span> <span class="text-cyan-400">style</span>={<span class="text-cyan-400">styles</span>.<span class="text-cyan-400">title</span>}>
        <span class="text-green-400">Mobile App Demo</span>
      </<span class="text-cyan-400">Text</span>>
      <<span class="text-cyan-400">Text</span> <span class="text-cyan-400">style</span>={<span class="text-cyan-400">styles</span>.<span class="text-cyan-400">counter</span>}>
        <span class="text-green-400">Count: </span>{<span class="text-cyan-400">count</span>}
      </<span class="text-cyan-400">Text</span>>
      <<span class="text-cyan-400">TouchableOpacity</span> 
        <span class="text-cyan-400">style</span>={<span class="text-cyan-400">styles</span>.<span class="text-cyan-400">button</span>}
        <span class="text-cyan-400">onPress</span>={() => <span class="text-cyan-400">setCount</span>(<span class="text-cyan-400">count</span> + 1)}
      >
        <<span class="text-cyan-400">Text</span> <span class="text-cyan-400">style</span>={<span class="text-cyan-400">styles</span>.<span class="text-cyan-400">buttonText</span>}>
          <span class="text-green-400">Increment</span>
        </<span class="text-cyan-400">Text</span>>
      </<span class="text-cyan-400">TouchableOpacity</span>>
    </<span class="text-cyan-400">View</span>>
  );
}</span>`
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="text-sm text-cyan-400 mb-2 flex items-center font-mono">
            <span className="block w-8 h-px bg-cyan-400 mr-2"></span>
            &lt;section id="courses"&gt;
            <span className="block w-8 h-px bg-cyan-400 ml-2"></span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Courses</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mb-8"></div>
          
          <p className="text-gray-300 max-w-3xl text-center mb-12">
            Explore our comprehensive curriculum designed to equip you with in-demand skills
            for today's tech industry. Each course includes hands-on projects and real-world applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-transparent text-cyan-400 border border-cyan-400 px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-cyan-400/10"
          >
            View All Courses
          </a>
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

export default CoursesSection;