import React, { useEffect, useRef } from 'react';

const CodeRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Make canvas full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Characters to use in the rain
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]!@#$%^&*()_+-=';
    
    // Columns setup
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Drops initial position, one per column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Drawing the characters
    const draw = () => {
      // Black with opacity for fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Text properties
      ctx.fillStyle = '#0ff'; // Cyan color
      ctx.font = `${fontSize}px monospace`;
      
      // Loop over each column
      for (let i = 0; i < drops.length; i++) {
        // Random character to print
        const text = characters[Math.floor(Math.random() * characters.length)];
        
        // x coordinate = i * font size, y coordinate = drops[i] * font size
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Add gradient effect - green to cyan
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Increment y position
        drops[i]++;

        // Change color for some characters
        if (Math.random() > 0.95) {
          ctx.fillStyle = '#0ff'; // Default cyan
        } else if (Math.random() > 0.90) {
          ctx.fillStyle = '#f0f'; // Purple
        } else if (Math.random() > 0.85) {
          ctx.fillStyle = '#ff0'; // Yellow
        } else {
          ctx.fillStyle = '#0fa'; // Light green
        }
      }
    };

    const interval = setInterval(draw, 33); // ~30 FPS

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0 opacity-20"
    />
  );
};

export default CodeRain;