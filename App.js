import React from "react";
import DetailedItem from "./components/DetailedItem";
import TopBar from "./components/TopBar";
import "./tailwind.output.css";

function App() {
  return (
    <div className="App">
    <div className="text-light bg-dark ">
      <TopBar />
      <DetailedItem />
    </div>
    </div>
  );
}

export default App;
