import React, { useState, useEffect, useRef } from 'react';

interface TerminalAnimationProps {
  commands: string[];
  typingSpeed?: number;
  waitTime?: number;
  prompt?: string;
  onComplete?: () => void;
}

const TerminalAnimation: React.FC<TerminalAnimationProps> = ({
  commands,
  typingSpeed = 50,
  waitTime = 1000,
  prompt = 'student@itcreativeuz:~$',
  onComplete
}) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [completedCommands, setCompletedCommands] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedText, completedCommands]);

  // Typing effect
  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      onComplete?.();
      return;
    }

    if (isTyping) {
      if (currentCharIndex < commands[currentCommandIndex].length) {
        const typingTimer = setTimeout(() => {
          setDisplayedText(prev => prev + commands[currentCommandIndex][currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        }, Math.random() * typingSpeed + 10);
        
        return () => clearTimeout(typingTimer);
      } else {
        setIsTyping(false);
        const waitTimer = setTimeout(() => {
          setCompletedCommands(prev => [...prev, commands[currentCommandIndex]]);
          setDisplayedText('');
          setCurrentCharIndex(0);
          setCurrentCommandIndex(prev => prev + 1);
          setIsTyping(true);
        }, waitTime);
        
        return () => clearTimeout(waitTimer);
      }
    }
  }, [
    commands, 
    currentCommandIndex, 
    currentCharIndex, 
    isTyping, 
    typingSpeed, 
    waitTime,
    onComplete
  ]);

  // Generate appropriate output based on command
  const getCommandOutput = (command: string) => {
    if (command.includes('npm install')) {
      return (
        <div className="text-green-400 mt-1 ml-2">
          <div>+ added 1283 packages in 2.5s</div>
          <div>231 packages are looking for funding</div>
          <div className="text-gray-400">  run `npm fund` for details</div>
        </div>
      );
    } else if (command.includes('python')) {
      return (
        <div className="text-cyan-400 mt-1 ml-2">
          <div>[INFO] Loading model...</div>
          <div>[INFO] Training started...</div>
          <div>[INFO] Epoch 1/10: loss=0.3241, accuracy=0.89</div>
          <div>[INFO] Epoch 2/10: loss=0.1823, accuracy=0.93</div>
          <div>[INFO] Training complete!</div>
        </div>
      );
    } else if (command.includes('git')) {
      return (
        <div className="text-purple-400 mt-1 ml-2">
          <div>Enumerating objects: 237, done.</div>
          <div>Counting objects: 100% (237/237), done.</div>
          <div>Delta compression using up to 8 threads</div>
          <div>Compressing objects: 100% (126/126), done.</div>
          <div className="text-green-400">Successfully pushed to origin/main</div>
        </div>
      );
    } else if (command.includes('ls')) {
      return (
        <div className="grid grid-cols-3 mt-1 ml-2">
          <span className="text-blue-400">courses/</span>
          <span className="text-blue-400">projects/</span>
          <span className="text-yellow-400">README.md</span>
          <span className="text-green-400">app.js</span>
          <span className="text-green-400">index.html</span>
          <span className="text-green-400">style.css</span>
        </div>
      );
    } else {
      return <div className="text-gray-400 mt-1 ml-2">Command executed successfully.</div>;
    }
  };

  const blinkingCursor = <span className="animate-pulse">▋</span>;

  return (
    <div 
      ref={terminalRef}
      className="bg-gray-900 border border-gray-700 rounded-md shadow-xl p-4 font-mono text-sm md:text-base max-h-96 overflow-y-auto leading-6 overflow-x-hidden"
    >
      {completedCommands.map((cmd, index) => (
        <div key={index} className="mb-4">
          <div className="flex">
            <span className="text-green-400 mr-2">{prompt}</span>
            <span className="text-white">{cmd}</span>
          </div>
          {getCommandOutput(cmd)}
        </div>
      ))}
      
      {currentCommandIndex < commands.length && (
        <div className="flex">
          <span className="text-green-400 mr-2">{prompt}</span>
          <span className="text-white">{displayedText}{blinkingCursor}</span>
        </div>
      )}
    </div>
  );
};

export default TerminalAnimation;