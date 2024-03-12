import React from "react";
import { useDarkMode } from "./context/useDarkMode";

const Content = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`content ${darkMode ? "dark-mode" : ""}`}>
      <div className="intro-side">
        <div className="top">
          <span className="top-1">2m+</span>
          <span className="top-2">
            nisi ut aliquid
            <div className="hr-left" />
          </span>
        </div>
        <div className="top">
          <span className="top-1">100m+</span>
          <span className="top-2">autem quibusdam</span>
        </div>
      </div>
      <div className="intro-center">
        <span className="intro">
          Consectetur, <span className="red">adipisci</span> velit, sed{" "}
          <span className="red">quia non</span>
        </span>
        <span className="button" onClick={toggleDarkMode}>
          TOGGLE DARK MODE
        </span>
      </div>
      <div className="intro-side">
        <div className="top">
          <span className="top-1-right">1k+</span>
          <span className="top-2-right">
            rerum facilis
            <div className="hr-right" />
          </span>
        </div>
        <div className="top">
          <span className="top-1-right">120k</span>
          <span className="top-2-right">libero tempore</span>
        </div>
      </div>
    </div>
  );
};

export default Content;
