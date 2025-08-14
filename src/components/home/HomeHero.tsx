import {Button, Col, Container, Image} from "react-bootstrap";
import ButtonWrapper from "../helpers/ButtonWrapper.tsx";

const HomeHero = () => {
    return (
        <section className="contact-hero gradient-lime hero-section" id="home-hero-section">
            <Container>
                <div className={"d-block d-md-flex gx-6"}>
                    <div id={"headshot"}>
                        <Image src="about/bernardo_square.png"
                               className={"img-fluid img rounded-circle me-3"}
                               id="headshot" />
                    </div>
                    <div id={"about-hero"}>
                        <h1 className="hero mb-0 pb-0">
                            Hi, I’m Bernardo</h1>
                        <p className="hero-sub text-secondary mt-0">Strategic creative leader and software engineer who thrives at the intersection of design, engineering, and systems thinking. </p>
                    </div>
                </div>
                <Col xs={12} className={'hero-body'}>
                    <p>I build visuals and digital products that drive measurable impact, and guide cross-functional teams to deliver user-centered solutions across disciplines.
                    </p>
                    <p>
                        I've designed brand and events at <Image
                        src='homepage/nickelodeon_splat.png'
                        className="inline-image inline-image-height" /> Nickelodeon, worked with clients and agencies through my design practice, led the creative team for <Image
                        src='homepage/logo_dragon_7548.png'
                        className="inline-image inline-image-height" /> Drexel University Institutional Advancement, shipped production code for <Image
                        src='homepage/amazon_smile.png'
                        className="inline-image inline-image-width" /> Amazon, and provided creative leadership during the <Image
                        src='homepage/seal_penn_med.png'
                        className="inline-image inline-image-height" /> Penn Medicine Doylestown Health merger.
                    </p>
                    <div className="d-block text-center d-md-flex justify-content-center gap-3">
                        <ButtonWrapper href="mailto:bernardo+portfolio@thismakesmehappy.co" variant="primary"
                                       className={"mb-3 mb-md-0"}>
                            <i className="bi bi-envelope"></i> email
                        </ButtonWrapper>
                        <ButtonWrapper href="https://www.linkedin.com/in/thismakesmehappy/" target="_blank"
                                       variant="primary" className={"mb-3 mb-md-0"}>
                            <i className="bi bi-linkedin"></i> LinkedIn
                        </ButtonWrapper>
                        <ButtonWrapper href="https://github.com/thismakesmehappy" target="_blank"
                                       variant="primary" className={"mb-3 mb-md-0"}>
                            <i className="bi bi-github"></i> Github
                        </ButtonWrapper>
                        <Button href="/public/resume/resume_bernardo_margulis.pdf" variant="primary">
                            <i className="bi bi-file-earmark-arrow-down"></i> Résumé (PDF ~100KB)
                        </Button>
                    </div>
                </Col>
            </Container>
        </section>
    );
};

export default HomeHero;