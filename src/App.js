import { Route, Routes } from "react-router";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Components } from "./Pages/Components/Components";
import { AlertDoc } from "./Pages/Docs/AlertDoc/AlertDoc";
import { Docs } from "./Pages/Docs/Docs";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/docs/Alert" element={<AlertDoc />} />
      </Routes>
    </div>
  );
}

export default App;
