import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Avatar = ({ message }) => {
  const [isBlinking, setIsBlinking] = useState(false);

  const isTalking = message && message.length > 0;


  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="relative w-full h-52 flex items-start">
      <div className="relative">
        <div className="absolute left-[-94px] top-0 w-48 h-48">
          <svg viewBox="0 0 366.34 366.34">
            <defs>
              <linearGradient id="linear-gradient" x1="108.28" y1="122.42" x2="268.26" y2="122.42" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#16243f" />
                <stop offset="1" stopColor="#6878b1" />
              </linearGradient>
              <linearGradient id="linear-gradient-2" x1="219.28" y1="72.92" x2="269.19" y2="152.46" xlinkHref="#linear-gradient" />
            </defs>
            <path className="cls-1" d="M296.41,282a184.56,184.56,0,0,1-226.48-1l48.66-22.81a46.83,46.83,0,0,0,6.65-3.82c.64-.44,1.28-.9,1.89-1.38a46.35,46.35,0,0,0,12.78-15.09,44.69,44.69,0,0,0,4.64-14.48,67.91,67.91,0,0,0,.74-9.91c0-5.72-.31-11.44-.37-17.17q-.06-4.76-.1-9.51l2,1,5.2,2.69,2.41.41,27.88,4.74,31.12,5.3.94,32,.31,10.46.15,5.08v.33l12.1,4.92Z" fill="#de8276" />
            <path className="cls-2" d="M214.63,248.85a16,16,0,0,1-10.07-1.56l-59.67-48.78c-.07-2.26-.13.11-.16-2.15q-.06-4.76-.1-9.51l2,1,5.2,2.69,2.41.41,27.88,4.74,31.12,5.3.94,32,.31,10.46.15,5.08v.33Z" fill="#a76962" />
            <path className="cls-3" d="M245.43,159.9a35.93,35.93,0,0,1-5.09,4.41c-10.4,7.53-24.28,10-36.14,14.06-5,1.71-59.22,17.12-59.22,20.47,0-.73-5.31-6-12-12.4a79.91,79.91,0,0,1-19.56-85.74c10.91-28.67,45.69-48.43,74.82-53,13.87-2.17,30.33-3.38,43.14,3.27,6.55,3.41,12,8.38,17,13.89q2.34,2.61,4.54,5.33c.63.76,1.25,1.52,1.86,2.29C277.55,101.08,269.48,134.63,245.43,159.9Z" fill="url(#linear-gradient)" />
            <path className="cls-4" d="M245.43,159.9a35.93,35.93,0,0,1-5.09,4.41,22.42,22.42,0,0,1-1.15-2.3c-2.64-6-4-12.51-5-19A275.93,275.93,0,0,1,231,114.49c-.91-15.34-7.46-22.95,5.57-34.91a43,43,0,0,1,16.35-9.38c.63.76,1.25,1.52,1.86,2.29C277.55,101.08,269.48,134.63,245.43,159.9Z" fill="url(#linear-gradient-2)" />
            <path className="cls-1" d="M141.65,142.73c.83,10.86.8,24.12,1.09,28q1.13,14.59,2.24,29.17l66.44,38.81a19.76,19.76,0,0,0,24.68-9.85c9.56-19.58,24.9-50.5,22.88-62-3-17-11-23-11-23l3.33-19.94c3.37-20.27-3.58-39.46-27.26-41.68-5-.46-10.57.49-13.54,4.48-8,10.76-3.39,24-15.4,34C180.53,132.75,148,138,140.38,128.29,140.38,128.29,141.08,135.16,141.65,142.73Z" fill="#de8276" />
            <path className="cls-6" d="M191.51,185.15a29.78,29.78,0,0,0,18.54,9.69" fill="none" stroke="#00214e" strokeMiterlimit="10" />
            <path className="cls-6" d="M215.13,137.94c-.08.35,13.36,36.13,13.36,36.13l-17.94.87" fill="none" stroke="#00214e" strokeMiterlimit="10" />
            {/* Left Eye */}
            <motion.ellipse
              cx="190.67"
              cy="150.58"
              rx="8"
              ry={isBlinking ? "1" : "8"}
              fill="#00214e"
              animate={isBlinking ? { ry: [10, 1, 10] } : {}}
              transition={{ duration: 0.2 }}
            />
            {/* Right Eye */}
            <motion.ellipse
              cx="238"
              cy="148.13"
              rx="8"
              ry={isBlinking ? "1" : "8"}
              fill="#00214e"
              animate={isBlinking ? { ry: [10, 1, 10] } : {}}
              transition={{ duration: 0.2 }}
            />
            <path className="cls-6" d="M172.65,131a80.58,80.58,0,0,1,28.13-.8" fill="none" stroke="#00214e" strokeMiterlimit="10" />
            <path className="cls-6" d="M231.7,131.13a55,55,0,0,1,17.45-1.21" fill="none" stroke="#00214e" strokeMiterlimit="10" />
            <path className="cls-7" d="M296.41,282a184.56,184.56,0,0,1-226.48-1l48.66-22.81a46.83,46.83,0,0,0,6.65-3.82c.64-.44,1.28-.9,1.89-1.38a46.35,46.35,0,0,0,12.78-15.09,44.69,44.69,0,0,0,4.64-14.48,28.66,28.66,0,0,0,2.22,1.94,95.14,95.14,0,0,0,19.82,11.26,99,99,0,0,0,10.46,3.69,93.52,93.52,0,0,0,33,3.49c1.54-.12,3.09-.27,4.63-.38l.15,5.08v.33l12.1,4.92Z" fill="#00214e" />
          </svg>
        </div>

        {/* Updated Speech Bubble */}
        {message && (
          <div className="absolute left-20 top-20 bg-white p-4 rounded-2xl shadow-lg min-w-[16rem] max-w-[24rem] break-words">
            <p className="text-sm">{message}</p>
            {/* Bubble tail */}
            <div className="absolute top-4 -left-2 w-4 h-4 bg-white transform rotate-45" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;
