import "../css/main.css";
import { createContext, useState } from "react";
import Form from "./form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export const ThemeContext = createContext(null);

function FormPage() {
  const [theme, setTheme] = useState("light");
  const [btnValue, setBtnValue] = useState(
    <FontAwesomeIcon icon={faMoon} size="lg" />
  );

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setBtnValue(<FontAwesomeIcon icon={faSun} size="lg" />);
    }
    if (theme === "dark") {
      setTheme("light");
      setBtnValue(<FontAwesomeIcon icon={faMoon} size="lg" />);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="FormPage" id={theme}>
        <Form />
        <button onClick={toggleTheme} className="change_theme_btn">
          {btnValue}
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

export default FormPage;
