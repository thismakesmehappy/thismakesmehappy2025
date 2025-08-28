import {Col, Container, Image} from 'react-bootstrap';
import {useState} from 'react';
import CallToAction from 'src/components/helpers/CallToAction.tsx';
import {asset} from 'src/helpers/assetPath.ts';

const HomeHero = () => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <section className="contact-hero gradient-lime hero-section" id="home-hero-section">
            <Container>
                <div className={"d-block d-md-flex gx-6"}>
                    <div id={"headshot"}>
                        <Image
                            src={isHovering ? asset("about/bernardo_square_wink.png") : asset("about/bernardo_square.png")}
                            className={"img-fluid img rounded-circle me-3"}
                            id="headshot"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        />
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
                        src={asset('homepage/nickelodeon_splat.png')}
                        className="inline-image inline-image-height" /> Nickelodeon, worked with clients and agencies through my design practice, led the creative team for <Image
                        src={asset('homepage/logo_dragon_7548.png')}
                        className="inline-image inline-image-height" /> Drexel University Institutional Advancement, shipped production code for <Image
                        src={asset('homepage/amazon_smile.png')}
                        className="inline-image inline-image-width" /> Amazon, and provided creative leadership during the <Image
                        src={asset('homepage/seal_penn_med.png')}
                        className="inline-image inline-image-height" /> Penn Medicine Doylestown Health merger.
                    </p>
                    <CallToAction />
                </Col>
            </Container>
        </section>
    );
};

export default HomeHero;