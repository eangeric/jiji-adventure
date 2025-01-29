import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./Home.jsx";
import PartOne from "./routes/PartOne.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/jiji-adventure" element={<Home />}></Route>
        <Route path="/jiji-adventure/1" element={<PartOne />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
