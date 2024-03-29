import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const MainCentral = () => {
  // Funzione per generare il markup HTML per una card di album
  const albumCard = (songInfo) => {
    return (
      <Col className="text-center" id={songInfo.id}>
        <img
          className="img-fluid"
          src={songInfo.album.cover_medium}
          alt="track"
        />
        <p>
          Track: "
          {songInfo.title.length < 16
            ? songInfo.title
            : `${songInfo.title.substring(0, 16)}..`}
          "<br />
          Artist: {songInfo.artist.name}
        </p>
      </Col>
    );
  };

  // Funzione per gestire la sezione dei brani
  const handleSection = async (artistName, querySelector) => {
    try {
      // Effettua una chiamata API per recuperare i brani dell'artista specificato
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`
      );
      // Verifica se la risposta è OK
      if (response.ok) {
        const { data } = await response.json();
        // Aggiunge le card degli album alla sezione musicale
        for (let i = 0; i < 4; i++) {
          querySelector.innerHTML += albumCard(data[i]);
        }
      } else {
        throw new Error("Errore nel recupero dei brani");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  // Usa l'hook useEffect per chiamare handleSection una volta che il componente è stato montato
  useEffect(() => {
    // Chiamata a handleSection per recuperare brani di diversi artisti e popolarne le sezioni
    handleSection("queen", document.querySelector("#rockSection"));
    handleSection("katyperry", document.querySelector("#popSection"));
    handleSection("eminem", document.querySelector("#hipHopSection"));
  }, []);

  // Renderizza il componente Main
  return (
    <Container fluid>
      <Row>
        <Col className="col-12 col-md-9 offset-md-3 mainPage">
          <Row>
            <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
              <a href="#">TRENDING</a>
              <a href="#">PODCAST</a>
              <a href="#">MOODS AND GENRES</a>
              <a href="#">NEW RELEASES</a>
              <a href="#">DISCOVER</a>
            </Col>
          </Row>
          <Row>
            <Col className="col-10">
              <div id="searchResults" style={{ display: "none" }}>
                <h2>Search Results</h2>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-10">
              <div id="rock">
                <h2>Rock Classics</h2>
                <Container>
                  <Row
                    className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="rockSection"
                  ></Row>
                </Container>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-10">
              <div id="pop">
                <h2>Pop Culture</h2>
                <Container>
                  <Row
                    className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="popSection"
                  ></Row>
                </Container>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-10">
              <div id="hiphop">
                <h2>#HipHop</h2>
                <Container>
                  <Row
                    className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="hipHopSection"
                  ></Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainCentral;
