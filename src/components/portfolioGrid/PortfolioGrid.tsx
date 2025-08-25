import portfolioGrid from "src/data/portfolioGrid.json";
import {type AccentColors, listOfAccentColors} from "src/helpers/constants.ts";
import {hideProjects, showAdditionalProjects} from "src/helpers/featureFlags.ts";
import PortfolioItemStandard from "./PortfolioItemStandard.tsx";
import {Container, Row} from "react-bootstrap";
import PortfolioItemFeatured from "./PortfolioItemFeatured.tsx";
import TogglePlusMinus from "src/components/helpers/TogglePlusMinus.tsx";
import {useState} from "react";
import ButtonWrapper from "src/components/ui/ButtonWrapper.tsx";

export const PortfolioGrid = () => {
    const featuredProjects = Object.values(portfolioGrid.projects.featured);
    const standardProjects = Object.entries(portfolioGrid.projects.standard);
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
                        if (hideProjects && project.show === false) {
                            return;
                        }
                        const color = project.accentColor ? project.accentColor as AccentColors : listOfAccentColors[index % numberOfColors] as AccentColors;
                        return (
                            <PortfolioItemFeatured name={project.title}
                                                   pre={project.pre}
                                                   md={4} xs={12}
                                                   image={`${baseImageLocation}/${project.image}`}
                                                   color={color}
                                                   rotateRight={(index) % 2 == 1}
                                                   key={`featured-project-${index}`}
                                                   reducedThumbnail={true}
                                                   link={project.linkTo}
                                                   tags={project.tags}
                            />
                        );
                    })}
                </Row>
                {showAdditionalProjects &&
                    <ButtonWrapper className="mb-4" onClick={toggleExpandAdditional}
                                   variant="link">{expandAdditional ? "Show" : "Hide"} Additional Projects <TogglePlusMinus
                        plus={expandAdditional}
                    />
                    </ButtonWrapper>}
                <Row className={`additional-projects ${expandAdditional ? 'closed' : 'opened'}`}>
                    {standardProjects.map(([_, project], index) => {
                        const color = listOfAccentColors[(index + numberOfFeaturedProjects) % numberOfColors] as AccentColors;
                        return <PortfolioItemStandard
                            pre={project.pre}
                            image={`${baseImageLocation}/${project.image}`}
                            color={color}
                            key={`standard-project-${index}`}
                            rotateRight={(numberOfFeaturedProjects + index) % 2 == 1}
                            xs={12} md={6} lg={4}
                            link={project.linkTo}
                            reducedThumbnail={false}
                            tags={project.tags}
                        />
                    })}
                </Row>
            </Container>
        </section>
    );
};