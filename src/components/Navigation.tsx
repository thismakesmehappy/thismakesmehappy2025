import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar className="navbar custom-navbar" sticky="top">
      <Container fluid={true} className="custom-navbar-container">
        <Navbar.Brand as={Link} to="/" className="custom-brand p-0 m-0">
          Bernardo Margulis
        </Navbar.Brand>
        {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
        {/*<Navbar.Collapse id="basic-navbar-nav">*/}
          <Nav className="custom-nav">
            <Nav.Link as={Link} to="/about" className="link big">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio" className="link big">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="link big">
              Contact
            </Nav.Link>
          </Nav>
        {/*</Navbar.Collapse>*/}
      </Container>
    </Navbar>
  );
};

export default Navigation;