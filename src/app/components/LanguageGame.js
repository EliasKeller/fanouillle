"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Original word pairs
const wordPairs = [
  { id: 2, english: "Güggel", german: "Hahn" },
  // Add more word pairs as necessary
];

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function LanguageGame({ isGameComplete }) {
  const [selectedWords, setSelectedWords] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [score, setScore] = useState(0);
  const [shuffledWords, setShuffledWords] = useState([]);

  // Shuffle the words when the component mounts
  useEffect(() => {
    // Flatten the word pairs into a single array containing both English and German words
    const flatWords = wordPairs.flatMap(pair => [
      { id: pair.id, word: pair.english, language: 'english' },
      { id: pair.id, word: pair.german, language: 'german' }
    ]);

    // Shuffle the flat array and set it to the state
    setShuffledWords(shuffleArray(flatWords));
  }, []);

  const handleWordClick = (wordObj) => {
    if (selectedWords.length === 2) return;

    const newSelectedWords = [...selectedWords, wordObj];
    setSelectedWords(newSelectedWords);

    if (newSelectedWords.length === 2) {
      checkMatch(newSelectedWords);
    }
  };

  const checkMatch = (words) => {
    const [word1, word2] = words;
    if (word1.id === word2.id && word1.language !== word2.language) {
      setMatchedPairs([...matchedPairs, word1.id]);
      setScore(score + 1);

      if (matchedPairs.length + 1 === wordPairs.length) {
        isGameComplete();  // Call the function passed as a prop when all pairs are matched
      }
    }
    setTimeout(() => setSelectedWords([]), 500);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto bg-gradient-to-b from-gray-700 to-gray-500 rounded-lg shadow-xl">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
        {shuffledWords.map((wordObj, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-lg shadow-md overflow-hidden 
            ${selectedWords.some(w => w.id === wordObj.id && w.language === wordObj.language) 
              ? 'border-2 border-[#f4a261]' 
              : 'border-2 border-transparent'}`}
          >
            <div
              className={`cursor-pointer rounded-lg w-42 flex justify-center items-center py-3 px-2 text-lg font-semibold transition-all duration-300
              ${matchedPairs.includes(wordObj.id) ? 'bg-[#f4a261] text-gray-900 border-none' : 'bg-gray-800 text-white'}
              ${selectedWords.some(w => w.id === wordObj.id && w.language === wordObj.language) ? 'border-[#f4a261]' : 'hover:border-gray-500'}`}
              onClick={() => handleWordClick(wordObj)}
            >
              {wordObj.word}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
