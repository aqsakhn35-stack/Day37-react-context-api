import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./styles/theme.css";

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Navbar />
        <Card title="Northern Areas Trip" description="A 5-day trip plan" />
        {/* baaki pages/components yahan aayenge */}
      </div>
    </ThemeProvider>
  );
}

export default App;