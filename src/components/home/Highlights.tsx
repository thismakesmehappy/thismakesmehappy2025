import {Col, Container, Row} from 'react-bootstrap';
import CallToAction from 'src/components/helpers/CallToAction.tsx';
import KeyHighlights from 'src/components/helpers/KeyHighlights.tsx';
import KeyHighlight from 'src/components/helpers/KeyHighlight.tsx';
import KeyHighlightCallout from 'src/components/helpers/KeyHighlightCallout.tsx';

const Highlights = () => {
    return (
        <section className="about-details gradient-aqua hero-section" id="about-details-section">
            <Container>
                <Row>
                    <KeyHighlights subtitle={"Highlights"} color={"aqua"} className={"highlights-home"}>
                        <KeyHighlight>
                            <i className={'bi bi-broadcast text-aqua-dark'}></i>
                            <KeyHighlightCallout>
                                6%
                            </KeyHighlightCallout>
                            unique ad reach supported through API development at Amazon
                        </KeyHighlight>
                        <KeyHighlight>
                            <i className={'bi bi-people text-aqua-dark'}></i>
                            <KeyHighlightCallout>
                                +25%
                            </KeyHighlightCallout>
                            team productivity optimized at Drexel
                        </KeyHighlight>
                        <KeyHighlight>
                            <i className={'bi bi-calendar text-aqua-dark'}></i>
                            <KeyHighlightCallout>
                                12%
                            </KeyHighlightCallout>
                            increase in event registration at Drexel
                        </KeyHighlight>
                        <KeyHighlight>
                            <i className={'bi bi-currency-dollar text-aqua-dark'}></i>
                            <KeyHighlightCallout>
                                $100M
                            </KeyHighlightCallout>
                            annual fundraising supported by campaign creative at Drexel
                        </KeyHighlight>
                        <KeyHighlight>
                            <i className={'bi bi-cash-stack text-aqua-dark'}></i>
                            <KeyHighlightCallout>
                                $50K
                            </KeyHighlightCallout>
                            sponsorship revenue generated from $0 in two years at AIGA
                        </KeyHighlight>
                        <KeyHighlight>
                            <i className={'bi bi-megaphone text-aqua-dark'}></i>
                            <KeyHighlightCallout>
                                100%
                            </KeyHighlightCallout>
                            new business via referrals at This Makes Me Happy studio
                        </KeyHighlight>
                    </KeyHighlights>
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