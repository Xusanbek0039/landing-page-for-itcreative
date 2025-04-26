import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  duration = 2000,
  suffix = '', 
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!countRef.current) return;
    
    // Setup intersection observer
    observerRef.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        animateCount();
        hasAnimated.current = true;
      }
    }, { threshold: 0.1 });
    
    observerRef.current.observe(countRef.current);
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [end]);

  const animateCount = () => {
    const startTime = Date.now();
    const startValue = 0;
    
    const updateCount = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function (ease-out cubic)
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      // Calculate current count value
      const currentValue = Math.floor(startValue + easedProgress * (end - startValue));
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    updateCount();
  };

  return (
    <span ref={countRef} className={className}>
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;