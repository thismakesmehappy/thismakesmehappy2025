import {Container, Row, Col, Card, Form, Button, Image} from 'react-bootstrap';
import HandleAssets from "../helpers/HandleAssets.ts";
import {Link} from "react-router-dom";
import ButtonWrapper from "../components/ButtonWrapper.tsx";

const Contact = () => {
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
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">
                        <div className="text-center mb-5">
                            <h1 className="display-4 fw-bold mb-4">Get In Touch</h1>
                            <p className="lead text-muted">
                                Ready to start your next project? I'd love to hear from you.
                                Send me a message and let's discuss how we can work together.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={8} className="mx-auto">
                        <Card>
                            <Card.Body className="p-4">
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your first name"
                                                              required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your last name" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control type="text" placeholder="What's this about?" required />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={5}
                                            placeholder="Tell me about your project..."
                                            required
                                        />
                                    </Form.Group>

                                    <div className="d-grid">
                                        <Button type="submit" variant="primary" size="lg">
                                            Send Message
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col lg={4} className="text-center mb-4">
                        <Card className="h-100">
                            <Card.Body className="p-4">
                                <div className="mb-3">
                                    <i className="bi bi-envelope fs-2 text-primary"></i>
                                </div>
                                <h5>Email</h5>
                                <p className="text-muted mb-0">hello@example.com</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="text-center mb-4">
                        <Card className="h-100">
                            <Card.Body className="p-4">
                                <div className="mb-3">
                                    <i className="bi bi-linkedin fs-2 text-primary"></i>
                                </div>
                                <h5>LinkedIn</h5>
                                <p className="text-muted mb-0">linkedin.com/in/yourprofile</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="text-center mb-4">
                        <Card className="h-100">
                            <Card.Body className="p-4">
                                <div className="mb-3">
                                    <i className="bi bi-github fs-2 text-primary"></i>
                                </div>
                                <h5>GitHub</h5>
                                <p className="text-muted mb-0">github.com/yourusername</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;