import {Container, Badge} from 'react-bootstrap';
import {Outlet} from 'react-router-dom';
import {useProjectHeader} from "../hooks/useProjectHeader.ts";
import WallOfTerms from "../components/home/WallOfTerms.tsx";
import ButtonWrapper from "../components/ui/ButtonWrapper.tsx";
import {PortfolioGrid} from "../components/portfolioGrid/PortfolioGrid.tsx";
import {asset} from "../helpers/assetPath.ts";

const ProjectLayout = () => {
    const {headerData} = useProjectHeader();

    return (
        <div className="project-layout">
            {headerData &&
                <section className={`gradient-${headerData.color} hero-section`}
                         id="frequency-group-hero-section">
                    <Container>
                        <ButtonWrapper href={asset("/")} variant={"link"}><i className={"bi bi-arrow-left"}></i> Home
                        </ButtonWrapper>
                        {headerData.title && <h1 className={"hero mb-0 pb-0"}>{headerData.title}</h1>}
                        {headerData.subtitle &&
                            <p className={'hero-sub text-secondary mb-0 pb-0'}>{headerData.subtitle}</p>}
                        {headerData.wordCount &&
                            <Badge bg={headerData.color} className="me-2">~{headerData.wordCount} words</Badge>}
                        {headerData.readingTime &&
                            <Badge bg={headerData.color}>~{headerData.readingTime} minute read</Badge>}
                        {headerData.summary && <p className={"hero-body"}>{headerData.summary}</p>}
                        {(headerData.role || headerData.timeline || headerData.challenge) &&
                            <ul>
                                {headerData.role && <li><strong>Role:</strong> {headerData.role}</li>}
                                {headerData.timeline && <li><strong>Timeline:</strong> {headerData.timeline}</li>}
                                {headerData.challenge &&
                                    <li><strong>Challenge:</strong> {headerData.challenge}</li>}
                            </ul>
                        }
                    </Container>
                </section>
            }

            {/* Project content will be rendered here via Outlet */}
            <Outlet />

            {/* Shared Project Footer */}
            {headerData && headerData.wordCloud &&
                <WallOfTerms terms={headerData.wordCloud} />
            }
            <PortfolioGrid />
        </div>
    );
};

export default ProjectLayout;