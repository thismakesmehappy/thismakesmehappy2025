import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import {RandomMemoji} from "./RandomMemoji.tsx";
import {memojiPlacementFlag} from "../helpers/constants.ts";

const Navigation = () => {
    const navigate = useNavigate();

    const handleWorkClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate('/');
        // Small delay to ensure navigation completes before scrolling
        setTimeout(() => {
            const element = document.getElementById('home-portfolio-grid');
            if (element) {
                // Calculate position 3em above the element
                const elementTop = element.offsetTop;
                const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
                const offset = 3 * remSize; // 3em in pixels
                const scrollPosition = elementTop - offset;

                window.scrollTo({
                    top: Math.max(0, scrollPosition), // Ensure we don't scroll above the top
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    const handleScrollToTop = () => {
        // Scroll to top when navigating to other pages
        setTimeout(() => {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }, 100);
    };


    return (
        <Navbar className="navbar custom-navbar" sticky="top">
            <Container fluid={true} className="custom-navbar-container">
                {/* Small/XS: Vertical stack - memoji on top */}
                <div className="d-flex d-md-none flex-column align-items-center w-100">
                    {memojiPlacementFlag == "top" && <RandomMemoji id={"memoji-top"} className="mb-1" />}
                    <Navbar.Brand as={Link} to="/" onClick={handleScrollToTop} className="custom-brand p-0 m-0 mb-2">
                        Bernardo Margulis
                    </Navbar.Brand>
                    <Nav className="custom-nav d-flex flex-row gap-3">
                        <Nav.Link as={Link} to="/" onClick={handleWorkClick} className="link big">
                            Work
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" onClick={handleScrollToTop} className="link big">
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" onClick={handleScrollToTop} className="link big">
                            Contact
                        </Nav.Link>
                    </Nav>
                </div>

                {/* Medium: Horizontal brand with memoji, links on next row */}
                <div className="d-none d-md-flex d-lg-none flex-column align-items-center w-100">
                    <Navbar.Brand as={Link} to="/" onClick={handleScrollToTop}
                                  className="custom-brand p-0 m-0 d-flex align-items-center">
                        {memojiPlacementFlag == "top" &&
                            <RandomMemoji id={"memoji-top"} className="me-2" />}Bernardo Margulis
                    </Navbar.Brand>
                    <Nav className="custom-nav d-flex flex-row gap-3">
                        <Nav.Link as={Link} to="/" onClick={handleWorkClick} className="link big mt-0">
                            Work
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" onClick={handleScrollToTop} className="link big mt-0">
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" onClick={handleScrollToTop} className="link big mt-0">
                            Contact
                        </Nav.Link>
                    </Nav>
                </div>

                {/* Large/XL: Everything spans full width with space distributed */}
                <div className="d-none d-lg-flex flex-row align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center gap-3">
                        {memojiPlacementFlag == "top" && <RandomMemoji id={"memoji-top"} />}
                        <Navbar.Brand as={Link} to="/" onClick={handleScrollToTop} className="custom-brand p-0 m-0">
                            Bernardo Margulis
                        </Navbar.Brand>
                    </div>
                    <Nav className="custom-nav d-flex flex-row gap-3">
                        <Nav.Link as={Link} to="/" onClick={handleWorkClick} className="link big">
                            Work
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" onClick={handleScrollToTop} className="link big">
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" onClick={handleScrollToTop} className="link big">
                            Contact
                        </Nav.Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
};

export default Navigation;
