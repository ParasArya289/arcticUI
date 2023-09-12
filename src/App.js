import {Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <h1>This is component library</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
