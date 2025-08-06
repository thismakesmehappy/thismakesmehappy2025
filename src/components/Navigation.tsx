import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Bernardo Margulis
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="fw-medium">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="fw-medium">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio" className="fw-medium">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="fw-medium">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;