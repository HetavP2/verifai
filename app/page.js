import Image from "next/image";
import { FactCheck } from "./components/fact-check";
import { Reel } from "./components/reel";
import { ReelText } from "./components/reel-text";
import { Input } from "./components/input";

export default function Home() {
  return (
    <div>
      <Input />
      <div className="grid grid-cols-5 my-10 text-center mx-10">
        <Reel />
        <ReelText />
        <FactCheck />
      </div>
    </div>
  );
}
