import portfolioGrid from "../../data/portfolioGrid.json";
import {type accentColors, listOfAccentColors} from "../../helpers/constants.ts";
import PortfolioItemStandard from "./PortfolioItemStandard.tsx";
import {Container, Row} from "react-bootstrap";
import PortfolioItemFeatured from "./PortfolioItemFeatured.tsx";
import TogglePlusMinus from "../helpers/TogglePlusMinus.tsx";
import {useState} from "react";

export const PortfolioGrid = () => {
    const featuredProjects = portfolioGrid.projects.featured;
    const standardProjects = portfolioGrid.projects.standard;
    const baseImageLocation = portfolioGrid.baseThumbnailDirectory;
    const numberOfColors = listOfAccentColors.length;
    const numberOfFeaturedProjects = featuredProjects.length;
    const [expandAdditional, setExpandAdditional] = useState(true);

    const toggleExpandAdditional = () => {
        const isExpandAdditional = expandAdditional;
        setExpandAdditional(!isExpandAdditional);
    }
    return (
        <section className="py-5" id="home-portfolio-grid">
            <Container>
                <h2 className="mb-4">Featured Work</h2>
                <Row>
                    {featuredProjects.map((project, index) => {
                        const color = listOfAccentColors[index % numberOfColors] as accentColors;
                        return (
                            <PortfolioItemFeatured name={project.title}
                                                   pre={project.pre}
                                                   md={4} xs={12}
                                                   image={`${baseImageLocation}/${project.image}`}
                                                   color={color}
                                                   rotateRight={(index) % 2 == 1}
                                                   key={`featured-project-${index}`}
                                                   reducedThumbnail={true}
                            />
                        );
                    })}
                </Row>
                <h2 className="mb-4" onClick={toggleExpandAdditional}>Additional Projects <TogglePlusMinus
                    plus={expandAdditional}
                    className={"text-primary"}
                />
                </h2>
                <Row className={`additional-projects ${expandAdditional ? 'closed' : 'opened'}`}>
                    {standardProjects.map((project, index) => {
                        const color = listOfAccentColors[(index + numberOfFeaturedProjects) % numberOfColors] as accentColors;
                        return <PortfolioItemStandard
                            pre={project.pre}
                            image={`${baseImageLocation}/${project.image}`}
                            color={color}
                            key={`standard-project-${index}`}
                            rotateRight={(numberOfFeaturedProjects + index) % 2 == 1}
                            xs={12} md={6} lg={4}
                            link={project.linkTo}
                            reducedThumbnail={false}
                        />
                    })}
                </Row>
            </Container>
        </section>
    );
};