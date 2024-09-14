import Image from "next/image";
import { FactCheck } from "./components/fact-check";
import { Reel } from "./components/reel";
import { ReelText } from "./components/reel-text";

export default function Home({videoId}) {
  return (
    <div>
      <div className="grid grid-cols-5 my-10 text-center mx-10">
        <Reel videoId={videoId}/>
        <ReelText />
        <FactCheck />
      </div>
    </div>
  );
}
