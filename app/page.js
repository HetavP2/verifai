import { MainPage } from "./components/main-page";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center text-primary m-10">Welcome to Fact Checker!</h1>
      <div className="">
        <MainPage />
      </div>
    </div>
  );
}
