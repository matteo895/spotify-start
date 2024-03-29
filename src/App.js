import React, { useState } from "react";
import MainCentral from "./components/MainCentral";
import SidebarVertical from "./components/SidebarVertical";
import NavBottom from "./components/NavBottom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchQuery) => {
    if (searchQuery.length > 2) {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`
        );
        if (response.ok) {
          const { data } = await response.json();
          setSearchResults(data);
        } else {
          throw new Error("Errore nella ricerca");
        }
      } catch (error) {
        console.error("Errore:", error);
      }
    }
  };

  return (
    <div className="App">
      <SidebarVertical onSearch={handleSearch} />
      <MainCentral searchResults={searchResults} />
      <NavBottom />
    </div>
  );
}

export default App;
