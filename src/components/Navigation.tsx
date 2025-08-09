import {Navbar, Nav, Container, Image} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import HandleAssets from "../helpers/HandleAssets.ts";
import {listOfAccentColors, memojis} from "../helpers/constants.ts";
import {RandomMemoji} from "./RandomMemoji.tsx";

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
                <RandomMemoji id={"memoji-top"} className={'d-md-none'} />
                <Navbar.Brand as={Link} to="/" onClick={handleScrollToTop} className="custom-brand p-0 m-0">
                    <RandomMemoji id={"memoji-top"} className={'d-none d-md-inline-block'} /> Bernardo Margulis
                </Navbar.Brand>
                {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
                {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                <Nav className="custom-nav">
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
                {/*</Navbar.Collapse>*/}
            </Container>
        </Navbar>
    );
};

export default Navigation;
