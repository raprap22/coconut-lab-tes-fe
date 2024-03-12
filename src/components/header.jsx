import React from "react";
import { useDarkMode } from "./context/useDarkMode";
const Header = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`header ${darkMode ? "dark-mode" : ""}`}>
      <span className="intro">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam
      </span>
    </div>
  );
};

export default Header;
