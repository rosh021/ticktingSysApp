import "./App.css";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { RegisterPage } from "./pages/registerPage/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
