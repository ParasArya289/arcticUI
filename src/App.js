import { Route, Routes } from "react-router";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Components } from "./Pages/Components/Components";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </div>
  );
}

export default App;
