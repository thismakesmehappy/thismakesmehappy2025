import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavMenu = (props: { onClick: (e: React.MouseEvent) => void, onClick1: () => void }) => {
    return <Nav className="custom-nav d-flex flex-row gap-4">
        <Nav.Link as={Link} to="/" onClick={props.onClick} className="link big mt-0 p-0">
            Work
        </Nav.Link>
        <Nav.Link as={Link} to="/about" onClick={props.onClick1} className="link big mt-0 p-0">
            About
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" onClick={props.onClick1} className="link big mt-0 p-0">
            Contact
        </Nav.Link>
    </Nav>;
}

export default NavMenu;