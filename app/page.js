import Image from "next/image";
import { FactCheck } from "./components/fact-check";
import { Reel } from "./components/reel";
import { ReelText } from "./components/reel-text";

export default function Home() {
  return (
    <div className="grid grid-cols-3 my-10 text-center">
      <Reel />
      <ReelText />
      <FactCheck />
    </div>
  );
}
