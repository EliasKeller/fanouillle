'use client'

import React, { useState, useEffect } from 'react';
import AnimatedAvatar from './AnimatedAvatar';

const AnimatedAvatarConversation = ({ messages }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    if (currentMessageIndex < messages.length) {
      const currentMessage = messages[currentMessageIndex];
      setIsThinking(currentMessage.isThinking);

      if (currentMessage.isThinking) {
        // For thinking messages, display immediately
        setDisplayedMessage(currentMessage.text);
        const timer = setTimeout(() => {
          setCurrentMessageIndex(prevIndex => prevIndex + 1);
        }, currentMessage.duration);
        return () => clearTimeout(timer);
      } else {
        // For speaking messages, type out the message
        let charIndex = 0;
        setDisplayedMessage('');
        const typingInterval = setInterval(() => {
          if (charIndex < currentMessage.text.length) {
            setDisplayedMessage(prev => prev + currentMessage.text[charIndex]);
            charIndex++;
          } else {
            clearInterval(typingInterval);
            const timer = setTimeout(() => {
              setCurrentMessageIndex(prevIndex => prevIndex + 1);
            }, 1000); // Wait a second after finishing typing before moving to next message
            return () => clearTimeout(timer);
          }
        }, 50); // Adjust typing speed here
        return () => clearInterval(typingInterval);
      }
    }
  }, [currentMessageIndex, messages]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatedAvatar message={displayedMessage} isThinking={false} />
    </div>
  );
};

export default AnimatedAvatarConversation;