import React, { useState, useRef } from "react";
import "./styles/App.css";
import ChapterOne from "./components/Chapters/ChapterOne";
import ChapterTwo from "./components/Chapters/ChapterTwo";
import ChapterThree from "./components/Chapters/ChapterThree";
import ChapterFour from "./components/Chapters/ChapterFour";
import ChapterFive from "./components/Chapters/ChapterFive";
import ChapterSix from "./components/Chapters/ChapterSix";

function App() {
  return (
    <div className="App">
      <ChapterOne />
      <ChapterTwo />
      <ChapterThree />
      <ChapterFour />
      <ChapterFive />
      <ChapterSix />
    </div>
  );
}

export default App;
