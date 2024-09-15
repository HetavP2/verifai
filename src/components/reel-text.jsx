import React, { useState,useEffect } from "react";

const ReelText = ({ videoId }) => {
  const [visibleChunk, setVisibleChunk] = useState(null); // State to track visible chunk
  const [chunks,setChunks] = useState([]);
  const serverUrl = "http://localhost:5000"
  useEffect(() => {
    async function getTranscript() {
      try {
        console.log(videoId);
        const res = await fetch(serverUrl + "/transcript/" + videoId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch transcript");
        }
        const json_data = await res.json();
        console.log(json_data);
        setChunks(json_data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  
    if (videoId) {  // Ensure videoId is not null or undefined before fetching
      getTranscript();
    }
  }, [videoId]);  // Correctly adding videoId as a dependency
  
  


  // const chunks = [
  //   {
  //     chunk: "abc",
  //     fact_or_not: "Not enough information",
  //     response_text: "CIA factbook said it is",
  //   },
  //   {
  //     chunk: "bcd",
  //     fact_or_not: "Fact",
  //     response_text: "CIA factbook said it is",
  //   },
  //   {
  //     chunk: "efg",
  //     fact_or_not: "Not a fact",
  //     response_text: "CIA factbook said it is",
  //   },
  // ];

  const handleHover = (chunkNum) => {
    setVisibleChunk(chunkNum);
  };

  const handleMouseLeave = () => {
    setVisibleChunk(null);
  };

  return (
    <div className="col-span-5 sm:col-span-3">
      <div className="grid sm:grid-cols-2 grid-cols-1">
        <div className="sm:col-span-1 col-span-2">
          <h1 className="font-bold text-2xl text-secondary text-[#3F704B] hover:text-[#00A86B]">Transcript</h1>
          <div className="m-5 overflow-y-auto">
            {chunks.map((chunk, num) => (
              <div key={num}>
                <p
                  id={"chunk" + String(num)}
                  className="p-3 text-xl inline-block hover:text-[#2E8B57]"
                  onMouseEnter={() => handleHover(num)}
                  onMouseLeave={handleMouseLeave}
                >
                  {chunk["chunk"]}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="sm:col-span-1 col-span-2">
          <p className="invisible">Facts</p>

          {chunks.map((chunk, num) => {
            if (chunk["fact_or_not"] === "Fact") {
              return (
                <div
                  className={`m-5 absolute w-1/4 ${
                    visibleChunk === num ? "visible" : "invisible"
                  }`} // Control visibility
                  id={"chunk" + String(num) + "info"}
                  key={"chunkinfo" + String(num)}
                >
                  <div className="p-5 rounded-2xl shadow-2xl bg-success">
                    <h1 className="font-bold text-center m-2 text-2xl">
                      {chunk["fact_or_not"]}
                    </h1>
                    <h2 className="text-center m-2 text-lg">
                      {chunk["response_text"]}
                    </h2>
                  </div>
                </div>
              );
            } else if (chunk["fact_or_not"] === "Not a fact") {
              return (
                <div
                  className={`m-5 absolute w-1/4 ${
                    visibleChunk === num ? "visible" : "invisible"
                  }`} // Control visibility
                  id={"chunk" + String(num) + "info"}
                  key={"chunkinfo" + String(num)}
                >
                  <div className="p-5 rounded-2xl shadow-2xl bg-error">
                    <h1 className="font-bold text-center m-2 text-2xl">
                      {chunk["fact_or_not"]}
                    </h1>
                    <h2 className="text-center m-2 text-lg">
                      {chunk["response_text"]}
                    </h2>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className={`m-5 absolute w-1/4 ${
                    visibleChunk === num ? "visible" : "invisible"
                  }`} // Control visibility
                  id={"chunk" + String(num) + "info"}
                  key={"chunkinfo" + String(num)}
                >
                  <div className="p-5 rounded-2xl shadow-2xl bg-base-300">
                    <h1 className="font-bold text-center m-2 text-2xl">
                      {chunk["fact_or_not"]}
                    </h1>
                    <h2 className="text-center m-2 text-lg">
                      {chunk["response_text"]}
                    </h2>
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