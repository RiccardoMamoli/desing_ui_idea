import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Homepage from './components/Homepage';
import CustomNavbar from "./components/CustomNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Horizontal from "./components/Horizontal";
import { useState } from "react";
import CardIdeas from "./components/CardIdeas";
import Vertical from "./components/Vertical";

function App() {

  const [showCat, setShowCat] = useState(false);

  return (
    <>
      <main className="vh-100 d-flex flex-column">
        <BrowserRouter>
          <CustomNavbar showCat={showCat} setShowCat={setShowCat} />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/horizontal" element={<Horizontal />} />
            <Route path="/vertical" element={<Vertical />} />
            <Route path="/card" element={<CardIdeas />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}
export default App;
