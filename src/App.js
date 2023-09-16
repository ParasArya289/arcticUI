import { Route, Routes } from "react-router";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Components } from "./Pages/Components/Components";
import { AlertDoc } from "./Pages/Docs/AlertDoc/AlertDoc";
import { AvatarDoc } from "./Pages/Docs/AvatarDoc/AvatarDoc";
import { BadgeDoc } from "./Pages/Docs/BadgeDoc/BadgeDoc";
import { ButtonDoc } from "./Pages/Docs/ButtonDoc/ButtonDoc";
import { CardDoc } from "./Pages/Docs/CardDoc/CardDoc";
import { FloatingActionButtonDoc } from "./Pages/Docs/FloatingActionButtonDoc/FloatingActionButtonDoc";
import { HeadingDoc } from "./Pages/Docs/HeadingDoc/HeadingDoc";
import { HorizontaCardDoc } from "./Pages/Docs/HorizontalCardDoc/HorizontalCardDoc";
import { ImageDoc } from "./Pages/Docs/ImageDoc/ImageDoc";
import { TextDoc } from "./Pages/Docs/TextDoc/TextDoc";
import { TextOverlayDoc } from "./Pages/Docs/TextOverlayDoc/TextOverlayDoc";
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
        <Route path="/docs/Card" element={<CardDoc />} />
        <Route path="/docs/Text Overlay" element={<TextOverlayDoc />} />
        <Route path="/docs/Horizontal Card" element={<HorizontaCardDoc />} />
        <Route path="/docs/Image" element={<ImageDoc />} />
        <Route path="/docs/Heading" element={<HeadingDoc />} />
        <Route path="/docs/Text" element={<TextDoc />} />
      </Routes>
    </div>
  );
}

export default App;
