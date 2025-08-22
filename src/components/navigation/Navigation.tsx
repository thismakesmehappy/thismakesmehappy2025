import {Container, Navbar} from 'react-bootstrap';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import {RandomMemoji} from "../helpers/RandomMemoji.tsx";
import {includeNavMenu, memojiPlacementFlag} from "../../helpers/featureFlags.ts";
import NavMenu from "./NavMenu.tsx";

const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

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
                <div
                    className="d-flex flex-column flex-lg-row align-items-center w-100 gap-lg-3 justify-content-lg-between">
                    {memojiPlacementFlag == "top" && <RandomMemoji key={`${location.pathname}-mobile`} id={"memoji-top"} className="mb-1 d-md-none" />}
                    <Navbar.Brand as={Link} to="/" onClick={handleScrollToTop}
                                  className="custom-brand p-0 m-0 d-md-flex align-items-md-center">
                        {memojiPlacementFlag == "top" &&
                            <RandomMemoji key={`${location.pathname}-desktop`} id={"memoji-top"} className="mb-1 d-none d-md-inline" />}
                        <p className={"mb-0"}>Bernardo Margulis</p>
                    </Navbar.Brand>
                    {includeNavMenu && <NavMenu onClick={handleWorkClick} onClick1={handleScrollToTop} />}
                </div>
            </Container>
        </Navbar>
    );
};

export default Navigation;
