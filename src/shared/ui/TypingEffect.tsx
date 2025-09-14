import { useEffect, useState } from 'react';

interface TypingEffectProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export function TypingEffect({ 
  text, 
  delay = 0, 
  speed = 150, 
  className = '' 
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let startTimeout: number;
    let typeInterval: number;
    let i = 0;

    const startTyping = () => {
      setIsTyping(true);

      typeInterval = window.setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, speed);
    };

    startTimeout = window.setTimeout(startTyping, delay);

    return () => {
      clearTimeout(startTimeout);
      if (typeInterval) {
        clearInterval(typeInterval);
      }
    };
  }, [text, delay, speed]);

  return (
    <span className={className}>
      {displayText}
      {isTyping && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}