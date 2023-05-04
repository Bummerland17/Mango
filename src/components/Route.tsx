import { BrowserRouter, Routes, Route } from "react-router-dom";
import Color from "./GradientBackground.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Color />} />
      </Routes>
    </BrowserRouter>
  );
}
