import {Col, Container, Row} from "react-bootstrap";

const Highlights = () => {

    return (
        <section className="about-details gradient-aqua hero-section" id="about-details-section">
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2>Highlights</h2>
                    </Col>
                    <Col xs={12} md={4}>
                        <h3>Design Leadership & Strategy</h3>
                        <ul>
                            <li>Creative direction and brand strategy in higher education, entertainment, and healthcare</li>
                            <li>Team leadership and process optimization</li>
                            <li>Ideation and design thinking</li>
                            <li>Strategic storytelling through accessible, user-centered design</li>
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

                    <Col xs={12}>
                        <h3>Extras</h3>
                        <ul>
                            <li>Masters in computer sciences and in graphic design</li>
                            <li>Certificates in Design Thinking from IBM and front-end development (in prograss) from Meta</li>
                            <li>My work has been published, exhibited, and awarded across the USA, Venezuela, England, and Australia.</li>
                            <li>Mentorship and teaching experience</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Highlights;