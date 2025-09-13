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
    const startTyping = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      
      const typeWriter = () => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
          setTimeout(typeWriter, speed);
        } else {
          setIsTyping(false);
        }
      };
      
      typeWriter();
    }, delay);

    return () => clearTimeout(startTyping);
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