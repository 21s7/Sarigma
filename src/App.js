import React, { useState, useRef } from "react";
import "./styles/App.css";
import ChapterNavigation from "./components/Chapters/ChapterNavigation";
import TermsAndConditionsModal from "./components/TermsAndConditionsModal";

function App() {
  return (
    <div className="App">
      <ChapterNavigation />
      <TermsAndConditionsModal />
    </div>
  );
}

export default App;
