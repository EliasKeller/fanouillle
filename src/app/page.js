"use client"

import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import InputField from "./components/InputField";
import MessageQueue from "./components/MessageQueue";

export default function Home() {

  const [newMessage, setNewMessage] = useState(null);
  const [riddleValue1, setRiddleValue1] = useState("");


  let initialMessages = [
    /*{ text: "Hallo Fanouille! Mir war langweilig und ich wollte einfach etwas programmieren.", isThinking: false, duration: 5000 },
    { text: "Also habe ich ein kleines rätsel für dich programmiert. Ich hatte die möglichkeit sachen zu implementieren, welche ich noch nie gemacht habe.", isThinking: false, duration: 2000 },
    { text: "Gewiesse sachen sind relativ einfach andere wiedurm etwas schwieriger denk nach... und entspann dich.", isThinking: false, duration: 4000 },
    { text: "Das soll dich aus dem altag reisen und ein gutes gefühl geben.", isThinking: false, duration: 2500 },
    { text: "Mir hat es dieses Gefühl beim programmieren gegeben.", isThinking: false, duration: 2500 }*/
  ];

  let riddleState = {
    level: 1,
  }


  const handleSolvingRiddle1 = () => {
    const value = riddleValue1.toLowerCase();
    if (value === "eliuuus") {
      setNewMessage({ text: "Richtig!", isThinking: false, duration: 5000 });
    } else if (value === "elias" || value === "elias keller" || value === "keller") {
      setNewMessage({ text: "Okey, schön du kennst meinen Namen. Denk noch etwas nach wie nennst du mich hinter meinem Rücken. Ich glaube mer als mir eigentlich bewusst ist.", isThinking: false, duration: 5000 });
    } else if (/^eliu{1,2}us$|^eliu{4,}us$/.test(value)) {
      setNewMessage({ text: "Uf ez bist du wirklich nahe. Versuch es mit der richtig anzahls von u's", isThinking: false, duration: 5000 });
    } else {
      setNewMessage({ text: "Falsch! Versuch es noch einmal!", isThinking: false, duration: 5000 });
    }

  };

  const getRiddle = (riddleLevel) => {
    switch (riddleLevel) {
      case 1:
        return (
          <Card header="Riddle 1">
            {riddleState.level === 1 && (
              <div>
                <p>Was ist mein name</p>
                <InputField placeholder="Who Am I?" onChange={(e) => setRiddleValue1(e.target.value)} />
                <Button onClick={handleSolvingRiddle1}>Solve</Button>
              </div>
            )}
          </Card>
        );

      case 2:
        return (
          <p>level 2</p>
        )
      default:
        return (
          <p>invalid state</p>
        )
    }
  }
  return (
    <>
      <MessageQueue
        initialMessages={initialMessages}
        newMessage={newMessage}
      />
      {getRiddle(riddleState.level)}
    </>
  );
}