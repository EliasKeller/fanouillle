"use client"

import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import InputField from "./components/InputField";
import MessageQueue from "./components/MessageQueue";
import LanguageGame from "./components/LanguageGame";
import DragAndDropGame from "./components/DragAndDropGame";
import PDFDownloader from "./components/PdfDownload";
import ChessCheckmatePuzzle from "./components/ChessCheckmatePuzzle";

export default function Home() {

  const [riddleLevel, setRiddleLevel] = useState(1);
  const [newMessage, setNewMessage] = useState(null);
  const [riddleValue1, setRiddleValue1] = useState("");
  const [riddleValue2, setRiddleValue2] = useState("");

  let initialMessages = [];

  const handleSolvingRiddle1 = () => {
    const value = riddleValue1.toLowerCase();
    if (value === "eliuuus") {
      setNewMessage({ text: "Richtig!", isThinking: false, duration: 5000 });
      setRiddleLevel(2);
      setRiddleValue1("");
      setRiddleValue2("");
    } else if (value === "elias" || value === "elias keller" || value === "keller") {
      setNewMessage({ text: "Okey, schön du kennst meinen Namen. Denk noch etwas nach wie nennst du mich hinter meinem Rücken. Ich glaube mer als mir eigentlich bewusst ist.", isThinking: false, duration: 5000 });
    } else if (/^eliu{1,2}us$|^eliu{4,}us$/.test(value)) {
      setNewMessage({ text: "Uf ez bist du wirklich nahe. Versuch es mit der richtig anzahls von u's", isThinking: false, duration: 5000 });
    } else {
      setNewMessage({ text: "Falsch! Versuch es noch einmal!", isThinking: false, duration: 5000 });
    }
  };

  const handleSolvingRiddle3 = () => {
    const value = riddleValue2.toLowerCase();
    if (value === "fanouille") {
      setNewMessage({ text: "Richtig!", isThinking: false, duration: 5000 });
      setRiddleLevel(4);
    } else if (value === "fanette" || value === "fanette loviat" || value === "loviat") {
      setNewMessage({ text: "Okey, schön du kennst meinen Namen. Denk noch etwas nach wie nennst du mich hinter meinem Rücken. Ich glaube mer als mir eigentlich bewusst ist.", isThinking: false, duration: 5000 });
    } else if (/^eliu{1,2}us$|^eliu{4,}us$/.test(value)) {
      setNewMessage({ text: "Uf ez bist du wirklich nahe. Versuch es mit der richtig anzahls von u's", isThinking: false, duration: 5000 });
    } else {
      setNewMessage({ text: "Falsch! Versuch es noch einmal!", isThinking: false, duration: 5000 });
    }
  };

  const handleSolvingRiddle2 = () => {
    setNewMessage({ text: "Richtig!", isThinking: false, duration: 5000 });
    setRiddleLevel(3);
  }

  const handleSolvingRiddle4 = () => {
    setNewMessage({ text: "Richtig!", isThinking: false, duration: 5000 });
    setRiddleLevel(5);
  }

  const handleSolvingRiddle5 = () => {
    setNewMessage({ text: "Richtig!", isThinking: false, duration: 5000 });
    setRiddleLevel(6);
  }


  const getRiddle = (riddleLevel) => {
    switch (riddleLevel) {
      case 1:
        return (
          <Card header="Riddle 1">
            <div>
              <p>Was ist mein Name</p>
              <InputField id placeholder="Wer bin ich?" onChange={(e) => setRiddleValue1(e.target.value)} />
              <Button onClick={handleSolvingRiddle1}>Solve</Button>
            </div>
          </Card>
        );
      case 2:
        return (
          <Card header="Riddle 3">
            <div>
              <LanguageGame isGameComplete={handleSolvingRiddle2} />
            </div>
          </Card>
        );
      case 3:
        return (
          <Card header="Riddle 2">
            <div>
              <p>Was ist dein Name</p>
              <InputField placeholder="Wer bist du?" onChange={(e) => setRiddleValue2(e.target.value)} />
              <Button onClick={handleSolvingRiddle3}>Solve</Button>
            </div>
          </Card>
        );
      case 4:
        return (
          <Card header="Riddle 4">
            <DragAndDropGame isGameComplete={handleSolvingRiddle4} />
          </Card>
        );
      case 5:
        return (
          <Card header="Riddle 4">
            <ChessCheckmatePuzzle isGameComplete={handleSolvingRiddle5} />
          </Card>
        );
      case 6:
        return (
          <Card header="Victory">
            <PDFDownloader />
          </Card>
        );
      default:
        return <p>Invalid state</p>;
    }
  }

  return (
    <>
      <MessageQueue
        initialMessages={initialMessages}
        newMessage={newMessage}
      />
      {getRiddle(riddleLevel)}
    </>
  );
}
