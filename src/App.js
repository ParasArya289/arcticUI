import { Route, Routes } from "react-router";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Components } from "./Pages/Components/Components";
import { AlertDoc } from "./Pages/Docs/AlertDoc/AlertDoc";
import { AvatarDoc } from "./Pages/Docs/AvatarDoc/AvatarDoc";
import { BadgeDoc } from "./Pages/Docs/BadgeDoc/BadgeDoc";
import { ButtonDoc } from "./Pages/Docs/ButtonDoc/ButtonDoc";
import { Docs } from "./Pages/Docs/Docs";
import { FloatingActionButtonDoc } from "./Pages/Docs/FloatingActionButtonDoc/FloatingActionButtonDoc";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/docs/Alert" element={<AlertDoc />} />
        <Route path="/docs/Avatar" element={<AvatarDoc />} />
        <Route path="/docs/Badge" element={<BadgeDoc />} />
        <Route path="/docs/Button" element={<ButtonDoc />} />
        <Route
          path="/docs/Floating Action Button"
          element={<FloatingActionButtonDoc />}
        />
      </Routes>
    </div>
  );
}

export default App;
