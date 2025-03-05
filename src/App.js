import React, { useState, useRef } from "react";
import "./styles/App.css";
import ChapterNavigation from "./components/Chapters/ChapterNavigation";

function App() {
  return (
    <div className="App">
      <ChapterNavigation />
    </div>
  );
}

export default App;
