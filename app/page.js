import Image from "next/image";
import { FactCheck } from "./components/fact-check";
import { Reel } from "./components/reel";
import { ReelText } from "./components/reel-text";
import { Input } from "./components/input";

export default function Home() {
  return (
    <div>
      <div className="w-">
        <input type="text" placeholder="Enter a YouTube video link..." class="input input-bordered w-full max-w-xs" />
      </div>
      <div className="grid grid-cols-3 my-10 text-center">
        <Reel />
        <ReelText />
        <FactCheck />
      </div>
    </div>
  );
}
