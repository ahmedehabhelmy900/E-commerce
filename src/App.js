import "./App.css";
import NavBar from "./component/navbar";
import "./framework.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
