import { useContext } from "react"
import { ThemeContext } from "../../Contexts/ThemeContext";
import './ToggleTheme.css'

const ToggleTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <p className='text'>{theme === "dark" ? "Dark Mode" : "light Mode"}</p>
            <label className="theme-toggle">
                <input
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                />
                <span className="slider"></span>
            </label>
        </div>

    );
}



export default ToggleTheme