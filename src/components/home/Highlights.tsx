import {Col, Container, Row} from "react-bootstrap";
import CallToAction from "../helpers/CallToAction.tsx";

const Highlights = () => {
    return (
        <section className="about-details gradient-aqua hero-section" id="about-details-section">
            <Container>
                <Row>
                    <h2>Highlights</h2>
                    <Col xs={12}>
                        <section id="quick-wins">
                            <div className="quick-wins-list d-flex flex-wrap gap-3">
                                <Row xs={1} md={3} lg={6}>
                                    <Col><strong>+6%</strong> unique ad reach supported through API development at Amazon</Col>
                                    <Col><strong>+25%</strong> team productivity optimized at Drexel
                                    </Col>
                                    <Col>
                                        <strong>12%%</strong> increase in event registration at Drexel
                                    </Col>
                                    <Col><strong>$100M</strong> annual fundraising supported by campaign creative at Drexel
                                    </Col>
                                    <Col><strong>$50K</strong> sponsorship revenue generated from $0 in two years at AIGA
                                    </Col>
                                    <Col><strong>100%</strong> new business via referrals at This Makes Me Happy studio
                                    </Col>
                                </Row>
                            </div>
                        </section>
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
                        <h3>Design Engineer</h3>
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
                            <li>Held leadership roles in organizations, including AIGA Philadelphia, DesignPhiladelphia, Glamazon (Amazon LGBTQ+ afinity group) design committee</li>
                            <li>Improved operations and incorporated DEIB practices for AIGA Philadelphia, Drexel Institutional Advancement marketing team, and Drexel Institutional Advancement talent management.</li>
                        </ul>
                    </Col>
                </Row>
                <CallToAction />
            </Container>
        </section>
    );
};

export default Highlights;