import {Container, Row, Button, Image} from 'react-bootstrap';
import ButtonWrapper from "../components/ButtonWrapper.tsx";
import HandleAssets from "../helpers/HandleAssets.ts";
import {PortfolioItemFeatured} from "../components/portfolioGrid/PortfolioItemFeatured.tsx";
import portfolioGrid from "../data/portfolioGrid.json";
import {type accentColors, listOfAccentColors} from "../helpers/constants.ts";
import {PortfolioItemStandard} from "../components/portfolioGrid/PortfolioItemStandard.tsx";

const Home = () => {
    const featuredProjects = portfolioGrid.projects.featured;
    const standardProjects = portfolioGrid.projects.standard;
    const baseImageLocation = portfolioGrid.baseThumbnailDirectory;
    const numberOfColors = listOfAccentColors.length;
    const numberOfFeaturedProjects = featuredProjects.length;
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section gradient-purple" id="home-hero-section">
                <Container>
                    <Row className="py-6">
                        <h1 className="hero">
                            Strategic creative leader and software engineer
                        </h1>
                        <p className="hero-sub">
                            I've designed for <Image src={HandleAssets.getAsset('homepage/nickelodeon_splat.png')}
                                                     className="inline-image inline-image-height" /> Nickelodeon Brand and Events, worked with clients and agencies through my design practice, led the creative team for <Image
                            src={HandleAssets.getAsset('homepage/logo_dragon_7548.png')}
                            className="inline-image inline-image-height" /> Drexel University Institutional Advancement, and shipped production code for <Image
                            src={HandleAssets.getAsset('homepage/amazon_smile.png')}
                            className="inline-image inline-image-width" /> Amazon.</p>
                        <p className="hero-sub text-secondary">
                            I'm currently exploring new opportunities where my hybrid background creates impact.
                        </p>
                        <div className="d-flex justify-content-center gap-3">
                            <ButtonWrapper href="mailto:bernardo+portfolio@thismakesmehappy.co" variant="primary">
                                email me
                            </ButtonWrapper>
                            <Button href={HandleAssets.getAsset("resume/resume_bernardo_margulis.pdf")}
                                    variant="primary">
                                Download my résumé
                            </Button>
                        </div>
                    </Row>
                </Container>
            </section>

            {/* Featured Work */}
            <section className="py-5" id="home-portfolio-grid">
                <Container>
                    <Row>
                        {featuredProjects.map((project, index) => {
                            const color = listOfAccentColors[index % numberOfColors] as accentColors;
                            return (
                                <PortfolioItemFeatured name={project.title} pre={project.pre}
                                                       image={`${baseImageLocation}/${project.image}`}
                                                       reverse={index % 2 == 1}
                                                       color={color}
                                                       key={`featured-project-${index}`}
                                />
                            );
                        })}
                    </Row>
                    <Row>
                        {standardProjects.map((project, index) => {
                            const color = listOfAccentColors[(index + numberOfFeaturedProjects) % numberOfColors] as accentColors;
                            return <PortfolioItemStandard name={project.title} pre={project.pre}
                                                          image={`${baseImageLocation}/${project.image}`} color={color}
                                                          key={`standard-project-${index}`}
                                                          rotateRight={(numberOfFeaturedProjects + index) % 2 == 1}
                                                          xs={12} md={6}
                                                          link={project.linkTo}
                            />
                        })}
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;