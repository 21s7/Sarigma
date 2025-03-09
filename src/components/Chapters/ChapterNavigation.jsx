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
      }, 50);
    }
  };

  const previousChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter((prevChapter) => prevChapter - 1);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  };

  const changeChapter = (index) => {
    setCurrentChapter(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.chapterNavigation}>
      <div>{chapters[currentChapter]}</div>
      <div className={styles.navigationButtons}>
        <button onClick={previousChapter} disabled={currentChapter === 0}>
          &lt;
        </button>
        <div className={styles.pageNumbers}>
          {chapters.map((_, index) => (
            <button
              key={index}
              className={currentChapter === index ? styles.active : ""}
              onClick={() => changeChapter(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={nextChapter}
          disabled={currentChapter === chapters.length - 1}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ChapterNavigation;
