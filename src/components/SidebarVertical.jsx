import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";

const SidebarVertical = ({ onSearch }) => {
  const search = (event) => {
    event.preventDefault();
    const searchQuery = document.getElementById("searchField").value;
    onSearch(searchQuery); // Chiama la funzione di gestione della ricerca passata come props
  };

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
          <Nav.Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
            </svg>
            <span className="mx-2">Home</span>
          </Nav.Link>
          <Nav.Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-book-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
            </svg>
            <span className="mx-2">Your Library</span>
          </Nav.Link>
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

export default SidebarVertical;
