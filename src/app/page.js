import Image from "next/image";
import AnimatedAvatar from "./components/AnimatedAvatar";

export default function Home() {
  return (
      <>
      <p>HELLO WOLRD</p>
      <AnimatedAvatar message={"test test test"} isThinking/>
      </>
  );
}
