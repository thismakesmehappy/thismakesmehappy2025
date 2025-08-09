import {Container, Row, Col, Card, Form, Button, Image} from 'react-bootstrap';
import HandleAssets from "../helpers/HandleAssets.ts";
import {Link} from "react-router-dom";
import ButtonWrapper from "../components/ButtonWrapper.tsx";

const About = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted');
    };

    return (
        <div>
            <section className="contact-hero gradient-lime" id="home-hero-section">
                <Container>
                    <Row className="py-6">
                        <Col id={"headshot"} md={4} xs={8} className="offset-2 offset-md-0 mb-3 mb-md-0">
                            <Image src={HandleAssets.getAsset("about/bernardo_square.png")}
                                   className={"img-fluid img rounded-circle"} />
                        </Col>
                        <Col id={"about-hero"} md={8}>
                            <h1 className="hero mb-0 pb-0">
                                Hi, I’m Bernardo</h1>
                            <p className="hero-sub text-secondary mt-0">—a creative, technologist and strategic storyteller who thrives at the intersection of design, engineering, and systems thinking.
                            </p>
                        </Col>
                        <Col xs={12}>
                            <p className="hero-sub">
                                With a multidisciplinary background spanning visual design, software engineering, and creative leadership, I build visuals and digital products that drive measurable impact. I guide cross-functional teams to collaborate across disciplines and deliver user-centered solutions that scale.
                            </p>
                            <p className="hero-sub">
                                I’ve led <Link
                                to={''}>visual strategy during healthcare mergers</Link> (Penn Medicine Doylestown Health), engineered features and <Link
                                to={''}>APIs at scale</Link> (Amazon), and delivered branding solutions for organizations like <Link
                                to={''}>Drexel University</Link> and <Link to={''}>Nickelodeon</Link>.
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <ButtonWrapper href="mailto:bernardo+portfolio@thismakesmehappy.co" variant="primary">
                                    email me
                                </ButtonWrapper>
                                <Button href="/contact" variant="primary">
                                    Download my résumé
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*delete from here down*/}
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
                        <Col xs={12} md={6} lg={8} className={"mt-4 mt-md-0"}>

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