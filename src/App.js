import "./App.css";
import React from "react";
import MainCentral from "./components/MainCentral";
import SidebarVertical from "./components/SidebarVertical";
import NavBottom from "./components/NavBottom";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa lo stile di Bootstrap

function App() {
  return (
    <div className="App">
      <SidebarVertical />
      <MainCentral />
      <NavBottom />
    </div>
  );
}

export default App;
