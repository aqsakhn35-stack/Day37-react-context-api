import { useTheme } from "../context/ThemeContext";

function Card({ title, description }) {
  const { theme } = useTheme();

  return (
    <div className={`card ${theme}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;