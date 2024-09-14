import Image from "next/image";
import { FactCheck } from "./components/fact-check";
import { Reel } from "./components/reel";
import { ReelText } from "./components/reel-text";

export default function Home() {
  return (
    <div>
      <Reel />
      <ReelText />
      <FactCheck />
    </div>
  );
}
