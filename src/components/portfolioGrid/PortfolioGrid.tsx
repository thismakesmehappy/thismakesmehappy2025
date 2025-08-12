import portfolioGrid from "../../data/portfolioGrid.json";
import {type accentColors, listOfAccentColors} from "../../helpers/constants.ts";
import {PortfolioItemStandard} from "./PortfolioItemStandard.tsx";
import {Row} from "react-bootstrap";

export const PortfolioGrid = () => {
    const featuredProjects = portfolioGrid.projects.featured;
    const standardProjects = portfolioGrid.projects.standard;
    const allProjects = [...featuredProjects, ...standardProjects];
    const baseImageLocation = portfolioGrid.baseThumbnailDirectory;
    const numberOfColors = listOfAccentColors.length;
    return (
        <section className="portfolio-grid container pt-5">
            <Row className={"gx-6"}>
                {allProjects.map((project, index) => {
                    const color = listOfAccentColors[(index) % numberOfColors] as accentColors;
                    return <PortfolioItemStandard pre={project.short}
                                                  image={`${baseImageLocation}/${project.image}`} color={color}
                                                  key={`standard-project-${index}`}
                                                  rotateRight={(index) % 2 == 1}
                                                  xs={12} md={4} lg={3}
                                                  short={true}
                                                  link={project.linkTo}
                    />
                })}
            </Row>
        </section>
    );
};