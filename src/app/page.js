"use client"

import AnimatedAvatarConversation from "./components/AnimatedAvatarConversation";

export default function Home() {


  const messages = [
   { text: "Hello! I'm an AI assistant. How can I help you today?", isThinking: false, duration: 3000 },
    { text: "Hmm, let me think about that for a moment...", isThinking: true, duration: 2000 },
    { text: "Based on my analysis, I would recommend the following steps...", isThinking: false, duration: 4000 },
    { text: "Now, I'm processing some additional information...", isThinking: true, duration: 2500 },
    { text: "Alright, I've compiled all the necessary data. Here's what you should do next...", isThinking: false, duration: 5000 }
  ];

  return (
      <>
        <AnimatedAvatarConversation messages={messages} />
      </>
  );
}
