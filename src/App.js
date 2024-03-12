import "./App.css";
import Header from "./components/header";
import Content from "./components/content";
import { DarkModeProvider, useDarkMode } from "./components/context/useDarkMode";

function App() {
  const { darkMode } = useDarkMode();

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <Header />
      <Content />
    </div>
  );
}

function AppWithDarkMode() {
  return (
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  );
}

export default AppWithDarkMode;
