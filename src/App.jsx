import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Bedroom from "./Bedroom/bedroom";
import Kitchen from "./Kitchen/kitchen";
import Selhono from "./assets/SELHONO.svg";
import bcgImage from "../public/background.png";
import Service from "./Service/service";

function App() {
  return (
    <Router>
      <header>
        <div className="logo-container">
          <img src={Selhono} alt="selhono" className="logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/Service"}>Service</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="menu">
        <ul>
          <li>
            <NavLink to={"/"}>Bedroom</NavLink>
          </li>
          <li>
            <NavLink to={"/Kitchen"}>Kitchen</NavLink>
          </li>
        </ul>
      </div>
      <div className="background-image">
        <img src={bcgImage} alt="Background Image" />
      </div>
      <div className="routes-container">
        <Routes>
          <Route>
            <Route path="/" element={<Bedroom />} />
            <Route path="/Kitchen" element={<Kitchen />} />
            <Route path="/Service" element={<Service />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
