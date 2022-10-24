import { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router-dom";
import "./styles/index.css";

import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
