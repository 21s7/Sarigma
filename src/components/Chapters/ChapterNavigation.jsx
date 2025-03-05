import React, { useState } from "react";
import styles from "./ChapterNavigation.module.css";
import ChapterOne from "./ChapterOne";
import ChapterTwo from "./ChapterTwo";
import ChapterThree from "./ChapterThree";
import ChapterFour from "./ChapterFour";
import ChapterFive from "./ChapterFive";
import ChapterSix from "./ChapterSix";

const ChapterNavigation = () => {
  const chapters = [
    <ChapterOne />,
    <ChapterTwo />,
    <ChapterThree />,
    <ChapterFour />,
    <ChapterFive />,
    <ChapterSix />,
  ];

  const [currentChapter, setCurrentChapter] = useState(0);

  const nextChapter = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter((prevChapter) => prevChapter + 1);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50); // Задержка для обеспечения прокрутки
    }
  };

  const previousChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter((prevChapter) => prevChapter - 1);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50); // Задержка для обеспечения прокрутки
    }
  };

  return (
    <div className={styles.chapterNavigation}>
      <div>{chapters[currentChapter]}</div>
      <div>
        <button onClick={previousChapter} disabled={currentChapter === 0}>
          Предыдущая глава
        </button>
        <button
          onClick={nextChapter}
          disabled={currentChapter === chapters.length - 1}
        >
          Следующая глава
        </button>
      </div>
    </div>
  );
};

export default ChapterNavigation;
