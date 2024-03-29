import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MainCentral = ({ searchResults }) => {
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
              <div
                id="searchResults"
                style={{ display: searchResults.length > 0 ? "block" : "none" }}
              >
                <h2>Search Results</h2>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                  {searchResults.map((result) => (
                    <Col key={result.id} className="text-center">
                      <img
                        className="img-fluid"
                        src={result.album.cover_medium}
                        alt="track"
                      />
                      <p>
                        Track:{" "}
                        {result.title.length < 16
                          ? result.title
                          : `${result.title.substring(0, 16)}..`}
                        <br />
                        Artist: {result.artist.name}
                      </p>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
          {/* Resto del codice rimane invariato */}
        </Col>
      </Row>
    </Container>
  );
};

export default MainCentral;
