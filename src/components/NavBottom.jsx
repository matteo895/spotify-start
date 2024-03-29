import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NavBottom = () => {
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
          const { data } = await response.json();
          console.log("Risultati della ricerca:", data);
          // Qui puoi gestire i risultati della ricerca come preferisci
        } else {
          // Se la risposta non è OK, genera un errore
          throw new Error("Errore nella ricerca");
        }
      } catch (error) {
        console.error("Errore:", error);
      }
    }
  };

  // Renderizza il componente Nav
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

// Esporta il componente Nav
export default NavBottom;
