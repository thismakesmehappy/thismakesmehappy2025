import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import HandleAssets from "../helpers/HandleAssets.ts";
import ButtonWrapper from "../components/ButtonWrapper.tsx";
import {Link} from "react-router-dom";
import handleAssets from "../helpers/HandleAssets.ts";

const About = () => {
    return (
        <div>
            <section className="about-hero gradient-aqua" id="home-hero-section">
                <Container>
                    <Row className="py-6">
                        <Col id={"hand"} md={4} xs={8} className="offset-2 offset-md-0 mb-3 mb-md-0">
                            <Image src={HandleAssets.getAsset("contact/hand.png")}
                                   className={"img-about-hand"} />
                        </Col>
                        <Col id={"about-hero"} md={8}>
                            <h1 className="hero mb-0 pb-0">
                                Let’s connect—I love teaming up with creatives, technologists, and curious minds</h1>
                        </Col>
                        <Col xs={12}>
                            <p className="hero-sub">
                                Available for remote, hybrid, or in-person in Philadelphia, New York City, and New Jersey
                            </p>
                            <ul>
                                <li>Email: <Link
                                    to={"mailto:bernardo+website@thismakesmehappy.co"}>bernardo@thismakesmehappy.co</Link>
                                </li>
                                <li>LinkedIn: <Link
                                    to={"linkedin.com/in/thissmakesmehappy"}>linkedin.com/in/thissmakesmehappy</Link>
                                </li>
                                <li><Link to={HandleAssets.getAsset("resume/resume")}>Download Resume</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about-details" id="about-details-section">
                <Container>
                    <Row className="py-5">
                        <Col xs={12} md={6} lg={4}>
                            <h2>Where I've worked</h2>
                            <div className="d-flex justify-content-center gap-3 flex-wrap">
                                <div className="bg-orange p-3 rounded-2 fw-bold">Penn Medicine</div>
                                <div className="bg-orange p-3 rounded-2 fw-bold">Amazon</div>
                                <div className="bg-orange p-3 rounded-2 fw-bold">Drexel University</div>
                                <div className="bg-orange p-3 rounded-2 fw-bold">This Makes Me Happy</div>
                                <div className="bg-orange p-3 rounded-2 fw-bold">Nickelodeon</div>
                            </div>

                        </Col>
                        <Col xs={12} md={6} lg={8}>

                            <h2>Who I’ve created for</h2>
                            <p>As clients, through freelance, or volunteering</p>
                            <div className="d-flex justify-content-center gap-3 flex-wrap">
                                <div className="bg-orange p-3 rounded-2 fw-bold">Temple Alumni</div>
                                <div className="bg-orange p-3 rounded-2 fw-bold">Longwood Gardens</div>
                                <div className="bg-orange p-3 rounded-2 fw-bold">Karma</div>
                                <div className="bg-orange p-3 rounded-2 fw-bold">AIGA Philadelphia</div>
                                <div className="bg-orange p-3 rounded-2 fw-bold">Glamazon</div>
                                <div className="bg-orange p-3 rounded-2 fw-bold">DesignPhiladelphia</div>
                                <div className="bg-orange p-3 rounded-2 fw-bold">JumpStart MD</div>
                                <div className="bg-orange p-3 rounded-2 fw-bold">University of the Arts</div>
                                <div className="bg-orange p-3 rounded-2 fw-bold">FMC</div>
                                <div className="bg-orange p-3 rounded-2 fw-bold">Johnson and Johnson</div>
                                <div className="bg-orange p-3 rounded-2 fw-bold">Museo Sefardí de Venezuela</div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Highlights</h2>
                            <p>My experience spans creative direction in higher education, entertainment, and healthcare; full-stack engineering with React, TypeScript, Java, and Python; and strategic storytelling through accessible, user-centered design systems. I hold degrees in Graphic Design (BS, MFA) and Computer Science (MSCS), along with certifications in Design Thinking (IBM) and Typeface Design (Cooper Union).</p>
                            <p>My work has been published, exhibited, and awarded across the USA, Venezuela, England, and Australia. I’m also a mentor, guest lecturer, and collaborator on self-directed creative projects.</p>
                            <p>I thrive in hybrid roles where design, engineering, and systems thinking come together to solve complex challenges. If your team values intentional process, craft, and curiosity—I’d love to talk.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <h2>Core competencies</h2>
                        </Col>
                        <Col xs={12} md={4}>
                            <h3>Design Leadership & Strategy</h3>
                            <ul>
                                <li>Creative direction and brand strategy</li>
                                <li>Team leadership and process optimization</li>
                                <li>Ideation and design thinking</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={4}>
                            <h3>Software Engineering</h3>
                            <ul>
                                <li>Full-stack development (Java, Python, React, TypeScript) for scalable, user-first solutions</li>
                                <li>RESTful API design and microservices architecture</li>
                                <li>User-centric digital product development</li>
                                <li>Agile product development and cross-platform delivery</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={4}>
                            <h3>Hybrid Value</h3>
                            <ul>
                                <li>Two-for-one: design and code</li>
                                <li>Technical communication and stakeholder alignment</li>
                                <li>Rapid prototyping and iterative development</li>
                                <li>Cross-functional collaboration</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default About;