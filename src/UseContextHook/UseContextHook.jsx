import React, { useState, useContext } from "react";
import FuntionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";

export const ThemeContext = React.createContext();

const UseContextHook = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FuntionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  );
};

export default UseContextHook;
