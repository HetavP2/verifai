import React, { useEffect, useState } from "react";
// import { YoutubeTranscript } from "youtube-transcript";
const serverUrl = ""

const ReelText = ({ videoId }) => {
    const [data, setData] = useState();

    // uncomment this after you get transcript
    // useEffect(() => {
    //   async function getTranscript() {
    //     const res = await fetch(serverUrl + "/transcript");
    //     const json_data = await res.json();
    //     // const dataServer = await YoutubeTranscript.fetchTranscript(videoId);
    //     setData(json_data);
    //   }

    //   getTranscript();
    // }, []);


  const chunks = [
    {
      chunk: "abc",
      fact_or_not: "Not enough information",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "bcd",
      fact_or_not: "Fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
    {
      chunk: "efg",
      fact_or_not: "Not a fact",
      response_text: "CIA factbook said it is",
    },
   
    ];
    function handleHover(key) {

        
    }
  return (
    <div className="col-span-5 sm:col-span-3">
      <div className="grid sm:grid-cols-2 grid-cols-1">
        <div className="sm:col-span-1 col-span-2">
          {/* <div className="m-5 border rounded-lg bg-base-100">{videoId}</div> */}
          <h1 className="font-bold text-2xl">Transcript</h1>
          <div className="m-5 overflow-y-auto h-screen">
            {chunks.map((chunk, num) => (
              <div>
                <p
                  key={"chunk" + String(num)}
                        className="m-3 text-xl inline-block hover:text-red-500"
                        onMouseEnter={(e) => handleHover(e.target.key)}
                >
                  {chunk["chunk"]}
                </p>
                {/* <p
                  key={"response_text" + String(num)}
                  className="translate-x-10 inline-block"
                >
                  {chunk["fact_or_not"] + ": " + chunk["response_text"]}
                </p> */}
              </div>
            ))}
          </div>
        </div>
        <div className="sm:col-span-1 col-span-2">
          <p className="invisible">Facts</p>

          {chunks.map(function (chunk, num) {
            if (chunk["fact_or_not"] === "Fact") {
              return (
                <div className="m-5 absolute w-1/4" name={"chunk" + String(num)}>
                  <div className="p-5 rounded-2xl shadow-2xl bg-success">
                    <h1 className="font-bold text-center m-2 text-2xl">
                      {chunk["fact_or_not"]}
                    </h1>
                    <h2 className=" text-center m-2 text-lg">
                      {chunk["response_text"]}
                    </h2>
                    {/* <span>
                  {chunk["fact_or_not"] + ": " + chunk["response_text"]}
                </span> */}
                  </div>
                </div>
              );
            } else if (chunk["fact_or_not"] === "Not a fact") {
              return (
                <div
                  className="m-5 absolute w-1/4"
                  name={"chunk" + String(num)}
                >
                  <div className="p-5 rounded-2xl shadow-2xl bg-error">
                    <h1 className="font-bold text-center m-2 text-2xl">
                      {chunk["fact_or_not"]}
                    </h1>
                    <h2 className=" text-center m-2 text-lg">
                      {chunk["response_text"]}
                    </h2>
                    {/* <span>
                  {chunk["fact_or_not"] + ": " + chunk["response_text"]}
                </span> */}
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className="m-5 absolute w-1/4"
                      name={"chunk" + String(num)}
                      
                >
                  <div className="p-5 rounded-2xl shadow-2xl bg-base-300">
                    <h1 className="font-bold text-center m-2 text-2xl">
                      {chunk["fact_or_not"]}
                    </h1>
                    <h2 className=" text-center m-2 text-lg">
                      {chunk["response_text"]}
                    </h2>
                    {/* <span>
                  {chunk["fact_or_not"] + ": " + chunk["response_text"]}
                </span> */}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ReelText;
