import React, { useState, useEffect, useReducer } from 'react';
import Avatar from './Avatar';

// Warte-Funktion als Promise
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Reducer, um den aktuellen Status der Nachricht anzuzeigen
const messageReducer = (state, action) => {
  switch (action.type) {
    case 'START_TYPING':
      return { ...state, currentMessage: action.message.text || '', charIndex: 0, typing: true, finished: false };
    case 'TYPE_NEXT_CHAR':
      return { ...state, charIndex: state.charIndex + 1 };
    case 'FINISH_TYPING':
      return { ...state, typing: false, finished: true };
    default:
      return state;
  }
};

const MessageQueue = ({ initialMessages, newMessage }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [messageState, dispatch] = useReducer(messageReducer, { currentMessage: '', charIndex: 0, typing: false, finished: false });
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Neue Nachrichten zur Warteschlange hinzufügen
  useEffect(() => {
    if (newMessage) {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    }
  }, [newMessage]);

  // Nachricht anzeigen und auf das Ende warten
  const processMessage = async (message) => {
    dispatch({ type: 'START_TYPING', message });

    // Zeilenweise den Text anzeigen
    for (let charIndex = 0; charIndex < message.text.length; charIndex++) {
      await wait(50); // 50ms pro Zeichen
      dispatch({ type: 'TYPE_NEXT_CHAR' });
    }

    // Nach der Nachricht warten, bevor zur nächsten gewechselt wird
    await wait(500);
    dispatch({ type: 'FINISH_TYPING' });
  };

  useEffect(() => {
    const processMessages = async () => {
      for (let i = currentMessageIndex; i < messages.length; i++) {
        await processMessage(messages[i]);
        setCurrentMessageIndex(i + 1);
      }
    };

    if (!messageState.typing && currentMessageIndex < messages.length) {
      processMessages(); // Starte die Nachrichtenverarbeitung
    }
  }, [messages, messageState.typing, currentMessageIndex]);

  // Aktuell angezeigte Nachricht
  const displayedMessage = messageState.currentMessage.slice(0, messageState.charIndex);

  return (
    <div>
      <Avatar message={displayedMessage} />
    </div>
  );
};

export default MessageQueue;
