import {Container, Row, Col, Image} from 'react-bootstrap';
import HandleAssets from "../helpers/HandleAssets.ts";
import {Link} from "react-router-dom";

const Contact = () => {
    return (
        <div>
            <section className="about-hero gradient-aqua" id="contact-hero-section">
                <Container>
                    <Row className="py-6">
                        <Col id={"contact-image"} md={4} xs={8} className="offset-2 offset-md-0 mb-3 mb-md-0">
                            <Image src={HandleAssets.getAsset("contact/hand.png")}
                                   id="contact-image-hand" className={"img-fluid"} />
                        </Col>
                        <Col id={"about-hero"} md={8}>
                            <h1 className="hero mb-0 pb-0">
                                Let’s connect—I love teaming up with creatives, technologists, and curious minds</h1>
                        </Col>
                        <Col xs={12}>
                            <p className="hero-sub">
                                Available for remote, hybrid, or in-person in Philadelphia, New York City, and New Jersey
                            </p>
                            <ul className={"hero-sub"}>
                                <li>Email: <Link
                                    to={"mailto:bernardo+website@thismakesmehappy.co"}>bernardo@thismakesmehappy.co</Link>
                                </li>
                                <li>LinkedIn: <Link
                                    to={"https://www.linkedin.com/in/thismakesmehappy"}>linkedin.com/in/thissmakesmehappy</Link>
                                </li>
                                <li><a
                                    href={HandleAssets.getAsset("resume/resume_bernardo_margulis.pdf")}
                                    target="_blank"
                                    rel="noopener noreferrer">Download Resume</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Contact;
