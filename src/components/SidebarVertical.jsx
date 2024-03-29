import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";

const SidebarVertical = () => {
  // Funzione per gestire la ricerca
  const search = async (event) => {
    event.preventDefault(); // Impedisce il comportamento predefinito del modulo di inviare il modulo
    const searchField = document.getElementById("searchField"); // Ottiene l'elemento input di ricerca dal DOM
    const searchQuery = searchField.value; // Ottiene il valore della query di ricerca dall'input

    // Verifica se la lunghezza della query di ricerca è maggiore di 2 caratteri
    if (searchQuery.length > 2) {
      try {
        // Effettua una chiamata API per recuperare i risultati della ricerca
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`
        );
        // Verifica se la risposta è OK
        if (response.ok) {
          // Estrae i dati dalla risposta
          const data = await response.json();
          console.log("Risultati della ricerca:", data);
          // Qui puoi gestire i risultati della ricerca come preferisci
        } else {
          // Se la risposta non è OK, genera un errore
          throw new Error("Errore nella ricerca");
        }
      } catch (error) {
        // Gestisce gli errori durante la chiamata API
        console.error("Errore:", error);
      }
    }
  };

  // Renderizza il componente Sidebar
  return (
    <Navbar fixed="left">
      <Navbar.Brand href="index.html">
        <img
          src="/assets/logo/logo.png"
          alt="Spotify Logo"
          width="131"
          height="40"
        />
      </Navbar.Brand>
      <Navbar.Collapse id="navbarNavAltMarkup">
        <Nav className="flex-column">
          {/* Link per la home e la libreria */}
          <Nav.Link href="#">
            <i className="bi bi-book-fill"></i>&nbsp; Home
          </Nav.Link>
          <Nav.Link href="#">
            <i className="bi bi-book-fill"></i>&nbsp; Your Library
          </Nav.Link>
          {/* Modulo di ricerca */}
          <Form className="input-group mt-3" onSubmit={search}>
            <Form.Control
              type="text"
              id="searchField"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div>
              <Button
                variant="outline-secondary"
                className="btn-sm h-100"
                type="submit"
              >
                GO
              </Button>
            </div>
          </Form>
        </Nav>
      </Navbar.Collapse>
      {/* Pulsanti di Sync App, Login e link per la Privacy */}
      <div id="nav-btn">
        <Button id="signup-btn" type="button">
          Sign Up
        </Button>
        <Button id="login-btn" type="button">
          Login
        </Button>
        <div>
          <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
        </div>
      </div>
    </Navbar>
  );
};

// Esporta il componente Sidebar
export default SidebarVertical;
