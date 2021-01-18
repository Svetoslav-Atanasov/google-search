import React, { useState, useEffect } from "react";

import ApplicationBar from "./Components/ApplicationBar";
import ApplicationTabs from "./Components/ApplicationTabs";
import ApplicationAccordion from "./Components/ApplicationAccordion";
import ApplicationResult from "./Components/ApplicationResult";
import ApplicationPerformanceInfo from "./Components/ApplicationPerformanceInfo";

import { resultText } from "./constants";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchTime, setSearchtime] = useState(0);
  const [resultsNumber, setResultsNumber] = useState(4);
  const handleChange = (e) => {
    const t0 = performance.now();
    setSearchTerm(e.target.value);
    const t1 = performance.now();
    const performanceInSeconds = (((t1 - t0) % 60000) / 1000).toFixed(5);
    setSearchtime(performanceInSeconds);
  };
  useEffect(() => {
    const results = resultText.filter((text) =>
      text.title.toLowerCase().includes(searchTerm) ||
      text.description.toLowerCase().includes(searchTerm)
        ? text
        : ""
    );
    setSearchResults(results);
    setResultsNumber(results.length);
  }, [searchTerm]);

  return (
    <React.Fragment>
      <ApplicationBar handleChange={handleChange} searchTerm={searchTerm} />
      <ApplicationTabs />
      <ApplicationPerformanceInfo
        resultsNumber={resultsNumber}
        searchTime={searchTime}
      />

      {searchResults.map((item, index) => {
        return index === 0 ? (
          <>
            <ApplicationResult
              key={index}
              title={item.title}
              link={item.link}
              date={item.date}
              description={item.description}
            />
            <ApplicationAccordion key={`accordion`} />{" "}
          </>
        ) : (
          <ApplicationResult
            key={index}
            title={item.title}
            link={item.link}
            date={item.date}
            description={item.description}
          />
        );
      })}
    </React.Fragment>
  );
}

export default App;
