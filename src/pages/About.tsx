import {Container, Row, Col, Button, Image} from 'react-bootstrap';
import HandleAssets from "../helpers/HandleAssets.ts";
import {Link} from "react-router-dom";
import ButtonWrapper from "../components/ButtonWrapper.tsx";
import {PortfolioGrid} from "../components/portfolioGrid/PortfolioGrid.tsx";

const About = () => {

    const gridSpacing = "g-lg-4 gy-lg-5 g-md-3 g-6";
    const gridColumnsLeft = {xs: 12, md: 4, lg: 4, xl: 4};
    const gridColumnsRight = {xs: 12, md: 8, lg: 8, xl: 8}
    const logosWhereColumns = {xs: 12, md: 12, lg: 12};
    const logosWhoColumns = {xs: 12, md: 6, lg: 6};

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
            <section className="about-details" id="about-details-section">
                <Container>
                    <Row className="py-5 gx-lg-8 gx-md-5 gx-1">
                        <Col xs={gridColumnsLeft.xs} md={gridColumnsLeft.md} lg={gridColumnsLeft.lg}
                             xl={gridColumnsLeft.xl}>
                            <h2 className={"mb-4"}>Where I've worked</h2>
                            <Row className={gridSpacing}>
                                <Col xs={logosWhereColumns.xs} md={logosWhereColumns.md} lg={logosWhereColumns.lg}
                                     className={"align-content-center img-fluid "}>
                                    <Image src={HandleAssets.getAsset("about/PennMedicine_color_rgb.png")}
                                           className={"img-fluid"} alt={"Penn Medicine"} />
                                </Col>
                                <Col xs={logosWhereColumns.xs} md={logosWhereColumns.md} lg={logosWhereColumns.lg}
                                     className={"align-content-center img-fluid "}>
                                    <Image src={HandleAssets.getAsset("about/amazon-logo-rgb.png")}
                                           className={"img-fluid"} alt={"Amazon"} />
                                </Col>
                                <Col xs={logosWhereColumns.xs} md={logosWhereColumns.md} lg={logosWhereColumns.lg}
                                     className={"align-content-center img-fluid "}>
                                    <Image src={HandleAssets.getAsset("about/Drexel_horiz_294.png")}
                                           className={"img-fluid"} alt={"Drexel University"} />
                                </Col>

                                {/*<Image src={HandleAssets.getAsset("about/logo_this_makes_me_happy.png")}
                                className={"img-fluid"} alt={"This Makes Me Happy"} />*/}
                                <Col xs={logosWhereColumns.xs} md={logosWhereColumns.md} lg={logosWhereColumns.lg}
                                     className={"align-content-center img-fluid "}>
                                    <Image src={HandleAssets.getAsset("about/logo_nickelodeon.png")}
                                           className={"img-fluid"} alt={"Nickelodeon"} />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={gridColumnsRight.xs} md={gridColumnsRight.md} lg={gridColumnsRight.lg}
                             xl={gridColumnsRight.xl}
                             className={"mt-6 mt-md-0"}>

                            <h2>Who I’ve created for</h2>
                            <p>A select list of organizations I've done work for, whether as direct clients, through freelance, or by volunteering</p>
                            <Row className={gridSpacing}>
                                <Col xs={logosWhoColumns.xs} md={logosWhoColumns.md} lg={logosWhoColumns.lg}
                                     className={"align-content-center img-fluid "}>
                                    <Image
                                        src={HandleAssets.getAsset("about/TempleAlumniAssociation_Formal_Red_Black.png")}
                                        className={"img-fluid"} alt={"Temple Alumni Association"} />
                                </Col>
                                <Col xs={logosWhoColumns.xs} md={logosWhoColumns.md} lg={logosWhoColumns.lg}
                                     className={"align-content-center img-fluid "}>
                                    <Image src={HandleAssets.getAsset("about/LWG_Logotype.png")}
                                           className={"img-fluid"} alt={"Longwood Gardens"} />
                                </Col>
                                <Col xs={logosWhoColumns.xs} md={logosWhoColumns.md} lg={logosWhoColumns.lg}
                                     className={"align-content-center img-fluid "}>
                                    <Image src={HandleAssets.getAsset("about/logo_aiga_philadelphia.png")}
                                           className={"img-fluid"} alt={"AIGA Philadelphia"} />
                                </Col>
                                <Col xs={logosWhoColumns.xs} md={logosWhoColumns.md} lg={logosWhoColumns.lg}
                                     className={"align-content-center img-fluid "}>
                                    <Image src={HandleAssets.getAsset("about/glam_global_RGB_logo-1_dark_lg.png")}
                                           className={"img-fluid"} alt={"Glamazon"} />
                                </Col>
                                <Col xs={logosWhoColumns.xs} md={logosWhoColumns.md} lg={logosWhoColumns.lg}
                                     className={"text-center align-content-center"}>
                                    <Image src={HandleAssets.getAsset("about/designphiladelphia.png")}
                                           className={"img-fluid w-50"} alt={"DesignPhiladelphia"} />
                                </Col>
                                <Col xs={logosWhoColumns.xs} md={logosWhoColumns.md} lg={logosWhoColumns.lg}
                                     className={"align-content-center img-fluid "}>
                                    <Image src={HandleAssets.getAsset("about/logo_museo_sefardi.jpg")}
                                           className={"img-fluid"} alt={"Museo Sefardí de Caracas"} />
                                </Col>
                            </Row>
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
            <PortfolioGrid />
        </div>
    );
};

export default About;