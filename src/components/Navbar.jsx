import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeTogle";

function Navbar() {
  const { theme } = useTheme();

  return (
    <nav className={`navbar ${theme}`}>
      <h2>WanderList</h2>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;